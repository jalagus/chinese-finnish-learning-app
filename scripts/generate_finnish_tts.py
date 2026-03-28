#!/usr/bin/env python3
"""Generate Finnish speech audio with Chatterbox-Finnish.

Examples:
  uv run python scripts/generate_finnish_tts.py \
    --text "Moi! Minä opiskelen suomea." \
    --output out/moi.wav

  uv run python scripts/generate_finnish_tts.py \
    --input-file texts/finnish_sentences.txt \
    --output-dir out/audio
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Iterable, List

import soundfile as sf
import torch
from huggingface_hub import snapshot_download
from safetensors.torch import load_file

DEFAULT_MODEL_REPO = "Finnish-NLP/Chatterbox-Finnish"
DEFAULT_CACHE_DIR = Path(".cache/chatterbox-finnish")
DEFAULT_TEMPERATURE = 0.8
DEFAULT_REPETITION_PENALTY = 1.5
DEFAULT_EXAGGERATION = 0.5


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate Finnish speech audio using Finnish-NLP/Chatterbox-Finnish."
    )
    parser.add_argument(
        "--model-repo",
        default=DEFAULT_MODEL_REPO,
        help=f"Hugging Face repository id. Default: {DEFAULT_MODEL_REPO}",
    )
    parser.add_argument(
        "--cache-dir",
        type=Path,
        default=DEFAULT_CACHE_DIR,
        help=f"Local cache directory for the Chatterbox repo. Default: {DEFAULT_CACHE_DIR}",
    )
    parser.add_argument(
        "--text",
        help="Single Finnish text string to synthesize.",
    )
    parser.add_argument(
        "--input-file",
        type=Path,
        help="Path to a UTF-8 text file. Each non-empty line becomes its own audio file.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        help="Output WAV path for --text mode.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        help="Output directory for --input-file mode.",
    )
    parser.add_argument(
        "--reference-audio",
        type=Path,
        default=None,
        help="Reference WAV used for zero-shot voice conditioning. Defaults to the sample included in the model repo.",
    )
    parser.add_argument(
        "--device",
        default="cpu",
        help='Torch device, for example "cpu", "cuda", or "mps". Default: cpu',
    )
    parser.add_argument(
        "--temperature",
        type=float,
        default=DEFAULT_TEMPERATURE,
        help="Generation temperature. Default: 0.8",
    )
    parser.add_argument(
        "--repetition-penalty",
        type=float,
        default=DEFAULT_REPETITION_PENALTY,
        help="Repetition penalty. Default: 1.5",
    )
    parser.add_argument(
        "--exaggeration",
        type=float,
        default=DEFAULT_EXAGGERATION,
        help="Emotion/style exaggeration. Default: 0.5",
    )
    return parser.parse_args()


def validate_args(args: argparse.Namespace) -> None:
    if bool(args.text) == bool(args.input_file):
        raise SystemExit("Use exactly one of --text or --input-file.")

    if args.text and not args.output:
        raise SystemExit("--output is required when using --text.")

    if args.input_file and not args.output_dir:
        raise SystemExit("--output-dir is required when using --input-file.")


def load_lines(path: Path) -> List[str]:
    return [line.strip() for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def slugify(text: str, max_length: int = 48) -> str:
    normalized = re.sub(r"[^a-zA-Z0-9]+", "-", text.strip().lower()).strip("-")
    if not normalized:
        return "clip"
    return normalized[:max_length].strip("-") or "clip"


def build_jobs(args: argparse.Namespace) -> Iterable[tuple[str, Path]]:
    if args.text:
        assert args.output is not None
        yield args.text, args.output
        return

    assert args.input_file is not None
    assert args.output_dir is not None

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for index, line in enumerate(load_lines(args.input_file), start=1):
        filename = f"{index:03d}-{slugify(line)}.wav"
        yield line, args.output_dir / filename


def ensure_repo_checkout(repo_id: str, cache_dir: Path) -> Path:
    cache_dir.mkdir(parents=True, exist_ok=True)
    local_dir = cache_dir / "repo"
    snapshot_path = snapshot_download(repo_id=repo_id, local_dir=str(local_dir), local_dir_use_symlinks=False)
    return Path(snapshot_path)


def ensure_pretrained_models(repo_dir: Path) -> None:
    pretrained_dir = repo_dir / "pretrained_models"
    if pretrained_dir.exists():
        return

    setup_script = repo_dir / "setup.py"
    if not setup_script.exists():
        raise FileNotFoundError(f"Could not find setup.py in {repo_dir}")

    subprocess.run([sys.executable, str(setup_script)], cwd=repo_dir, check=True)


def resolve_reference_audio(repo_dir: Path, provided: Path | None) -> Path:
    if provided is not None:
        return provided

    sample_path = repo_dir / "samples" / "reference_finnish.wav"
    if not sample_path.exists():
        raise FileNotFoundError(
            "No reference audio was provided and the default sample reference_finnish.wav was not found."
        )
    return sample_path


def import_chatterbox_tts(repo_dir: Path):
    repo_str = str(repo_dir)
    if repo_str not in sys.path:
        sys.path.insert(0, repo_str)

    from src.chatterbox_.tts import ChatterboxTTS  # type: ignore
    from src.chatterbox_.models.t3.modules.t3_config import T3Config  # type: ignore

    return ChatterboxTTS, T3Config


def resolve_finetuned_weights(repo_dir: Path) -> Path:
    models_dir = repo_dir / "models"
    candidates = sorted(models_dir.glob("*.safetensors"))
    if not candidates:
        raise FileNotFoundError(f"No .safetensors weights found in {models_dir}")
    return candidates[0]


def load_engine(repo_dir: Path, device: str):
    ChatterboxTTS, T3Config = import_chatterbox_tts(repo_dir)

    # Disable the multilingual alignment analyzer. The Finnish fine-tune still
    # synthesizes correctly, but the analyzer currently crashes on some short
    # sequences due to empty reductions in its repetition check.
    T3Config.is_multilingual = property(lambda self: False)

    engine = ChatterboxTTS.from_local(str(repo_dir / "pretrained_models"), device=device)

    finetuned_weights = resolve_finetuned_weights(repo_dir)
    checkpoint_state = load_file(str(finetuned_weights))
    t3_state_dict = {k[3:] if k.startswith("t3.") else k: v for k, v in checkpoint_state.items()}
    engine.t3.load_state_dict(t3_state_dict, strict=False)

    # Transformers blocks `output_attentions=True` when the attention backend is
    # configured as SDPA. The Finnish Chatterbox repo enables attentions during
    # multilingual alignment analysis, so we force eager attention here.
    if hasattr(engine.t3, "tfmr") and hasattr(engine.t3.tfmr, "config"):
        engine.t3.tfmr.config._attn_implementation = "eager"
        engine.t3.tfmr.config._output_attentions = False

    if hasattr(engine.t3, "cfg"):
        engine.t3.cfg._attn_implementation = "eager"

    return engine


def synthesize_to_wav(
    engine,
    text: str,
    output_path: Path,
    reference_audio: Path,
    temperature: float,
    repetition_penalty: float,
    exaggeration: float,
) -> None:
    wav_tensor = engine.generate(
        text=text,
        audio_prompt_path=str(reference_audio),
        temperature=temperature,
        repetition_penalty=repetition_penalty,
        exaggeration=exaggeration,
    )

    waveform = wav_tensor.squeeze().cpu().numpy()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    sf.write(output_path, waveform, engine.sr)


def main() -> None:
    args = parse_args()
    validate_args(args)

    if args.device == "cuda" and not torch.cuda.is_available():
        raise SystemExit("CUDA was requested but is not available.")
    if args.device == "mps" and not torch.backends.mps.is_available():
        raise SystemExit("MPS was requested but is not available.")

    print(f"Downloading/loading model repo: {args.model_repo}")
    repo_dir = ensure_repo_checkout(args.model_repo, args.cache_dir)
    ensure_pretrained_models(repo_dir)
    reference_audio = resolve_reference_audio(repo_dir, args.reference_audio)

    print(f"Using device: {args.device}")
    engine = load_engine(repo_dir, args.device)

    for text, output_path in build_jobs(args):
        print(f"Generating: {output_path}")
        synthesize_to_wav(
            engine=engine,
            text=text,
            output_path=output_path,
            reference_audio=reference_audio,
            temperature=args.temperature,
            repetition_penalty=args.repetition_penalty,
            exaggeration=args.exaggeration,
        )

    print("Done.")


if __name__ == "__main__":
    main()
