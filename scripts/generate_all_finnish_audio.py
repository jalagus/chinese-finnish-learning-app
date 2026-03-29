#!/usr/bin/env python3
"""Generate app-friendly audio for all Finnish text in src/data/seed.ts.

This script reads the app's seed content and synthesizes:
- lesson headwords
- lesson example sentences
- story titles
- story paragraphs

It also writes a structured manifest keyed by lesson ids and story ids so the
Expo app can look up audio files directly.

Example:
  python scripts/generate_all_finnish_audio.py --output-dir out/audio
"""

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List

from generate_finnish_tts import (
    DEFAULT_CACHE_DIR,
    DEFAULT_EXAGGERATION,
    DEFAULT_MODEL_REPO,
    DEFAULT_REPETITION_PENALTY,
    DEFAULT_TEMPERATURE,
    ensure_pretrained_models,
    ensure_repo_checkout,
    load_engine,
    resolve_reference_audio,
    synthesize_to_wav,
)


@dataclass
class AudioJob:
    category: str
    identifier: str
    text: str
    output_path: Path
    relative_path: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate WAV files for all Finnish text found in src/data/seed.ts."
    )
    parser.add_argument(
        "--seed-file",
        type=Path,
        default=Path("src/data/seed.ts"),
        help="Path to the TypeScript seed file. Default: src/data/seed.ts",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("out/audio"),
        help="Directory where generated WAV files are written.",
    )
    parser.add_argument(
        "--manifest-path",
        type=Path,
        default=None,
        help="Optional manifest path. Defaults to <output-dir>/manifest.json",
    )
    parser.add_argument(
        "--model-repo",
        default=DEFAULT_MODEL_REPO,
        help=f"Hugging Face repository id to use. Default: {DEFAULT_MODEL_REPO}",
    )
    parser.add_argument(
        "--cache-dir",
        type=Path,
        default=DEFAULT_CACHE_DIR,
        help=f"Local cache directory for the Chatterbox repo. Default: {DEFAULT_CACHE_DIR}",
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
        help=f"Generation temperature. Default: {DEFAULT_TEMPERATURE}",
    )
    parser.add_argument(
        "--repetition-penalty",
        type=float,
        default=DEFAULT_REPETITION_PENALTY,
        help=f"Repetition penalty. Default: {DEFAULT_REPETITION_PENALTY}",
    )
    parser.add_argument(
        "--exaggeration",
        type=float,
        default=DEFAULT_EXAGGERATION,
        help=f"Emotion/style exaggeration. Default: {DEFAULT_EXAGGERATION}",
    )
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Skip files that already exist.",
    )
    return parser.parse_args()


def read_section(source: str, start_marker: str) -> str:
    start = source.index(start_marker)
    tail = source[start:]
    end = tail.index("];")
    return tail[: end + 2]


def to_posix_relative(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def parse_lessons(section: str, output_dir: Path) -> List[AudioJob]:
    lesson_pattern = re.compile(
        r"lesson\(\s*"
        r"'(?P<id>[^']+)'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'(?P<finnish>[^']+)'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'(?P<example>[^']+)'",
        re.S,
    )

    jobs: List[AudioJob] = []
    for match in lesson_pattern.finditer(section):
        lesson_id = match.group("id")

        word_path = output_dir / "lessons" / lesson_id / "word.wav"
        jobs.append(
            AudioJob(
                category="lesson_word",
                identifier=lesson_id,
                text=match.group("finnish"),
                output_path=word_path,
                relative_path=to_posix_relative(word_path, output_dir),
            )
        )

        example_path = output_dir / "lessons" / lesson_id / "example.wav"
        jobs.append(
            AudioJob(
                category="lesson_example",
                identifier=lesson_id,
                text=match.group("example"),
                output_path=example_path,
                relative_path=to_posix_relative(example_path, output_dir),
            )
        )
    return jobs


def parse_stories(section: str, output_dir: Path) -> List[AudioJob]:
    story_pattern = re.compile(
        r"story\(\s*"
        r"'(?P<id>[^']+)'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'(?P<title>[^']+)'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"\d+\s*,\s*"
        r"'[^']*'\s*,\s*"
        r"\[(?P<focus_words>.*?)\]\s*,\s*"
        r"\[(?P<paragraphs>.*?)\]\s*"
        r"\)",
        re.S,
    )
    paragraph_pattern = re.compile(r"finnish:\s*'([^']+)'")

    jobs: List[AudioJob] = []
    for story_match in story_pattern.finditer(section):
        story_id = story_match.group("id")

        title_path = output_dir / "stories" / story_id / "title.wav"
        jobs.append(
            AudioJob(
                category="story_title",
                identifier=story_id,
                text=story_match.group("title"),
                output_path=title_path,
                relative_path=to_posix_relative(title_path, output_dir),
            )
        )

        for index, paragraph_text in enumerate(paragraph_pattern.findall(story_match.group("paragraphs")), start=1):
            paragraph_path = output_dir / "stories" / story_id / "paragraphs" / f"{index:02d}.wav"
            jobs.append(
                AudioJob(
                    category="story_paragraph",
                    identifier=f"{story_id}:{index}",
                    text=paragraph_text,
                    output_path=paragraph_path,
                    relative_path=to_posix_relative(paragraph_path, output_dir),
                )
            )
    return jobs


def build_jobs(seed_path: Path, output_dir: Path) -> List[AudioJob]:
    source = seed_path.read_text(encoding="utf-8")
    lessons_section = read_section(source, "export const lessonCatalog")
    stories_section = read_section(source, "export const storyCatalog")
    return [
        *parse_lessons(lessons_section, output_dir),
        *parse_stories(stories_section, output_dir),
    ]


def build_manifest(jobs: List[AudioJob]) -> Dict[str, object]:
    lessons: Dict[str, Dict[str, object]] = {}
    stories: Dict[str, Dict[str, object]] = {}

    for job in jobs:
        if job.category == "lesson_word":
            lesson_entry = lessons.setdefault(job.identifier, {})
            lesson_entry["word"] = {
                "text": job.text,
                "path": job.relative_path,
            }
        elif job.category == "lesson_example":
            lesson_entry = lessons.setdefault(job.identifier, {})
            lesson_entry["example"] = {
                "text": job.text,
                "path": job.relative_path,
            }
        elif job.category == "story_title":
            story_entry = stories.setdefault(job.identifier, {"paragraphs": []})
            story_entry["title"] = {
                "text": job.text,
                "path": job.relative_path,
            }
        elif job.category == "story_paragraph":
            story_id, paragraph_index = job.identifier.split(":")
            story_entry = stories.setdefault(story_id, {"paragraphs": []})
            story_entry["paragraphs"].append(
                {
                    "index": int(paragraph_index),
                    "text": job.text,
                    "path": job.relative_path,
                }
            )

    for story_entry in stories.values():
        story_entry["paragraphs"] = sorted(story_entry["paragraphs"], key=lambda item: item["index"])

    return {
        "schemaVersion": 1,
        "lessons": lessons,
        "stories": stories,
    }


def write_manifest(jobs: List[AudioJob], manifest_path: Path) -> None:
    payload = build_manifest(jobs)
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    args = parse_args()

    jobs = build_jobs(args.seed_file, args.output_dir)
    if not jobs:
        raise SystemExit("No Finnish audio jobs found in the seed file.")

    manifest_path = args.manifest_path or (args.output_dir / "manifest.json")

    print(f"Found {len(jobs)} audio jobs in {args.seed_file}")
    print(f"Downloading/loading model repo: {args.model_repo}")
    repo_dir = ensure_repo_checkout(args.model_repo, args.cache_dir)
    ensure_pretrained_models(repo_dir)
    reference_audio = resolve_reference_audio(repo_dir, args.reference_audio)

    print(f"Using device: {args.device}")
    engine = load_engine(repo_dir, args.device)

    generated = 0
    skipped = 0
    for job in jobs:
        if args.skip_existing and job.output_path.exists():
            skipped += 1
            continue

        print(f"Generating [{job.category}] {job.output_path}")
        synthesize_to_wav(
            engine=engine,
            text=job.text,
            output_path=job.output_path,
            reference_audio=reference_audio,
            temperature=args.temperature,
            repetition_penalty=args.repetition_penalty,
            exaggeration=args.exaggeration,
        )
        generated += 1

    write_manifest(jobs, manifest_path)
    print(f"Done. Generated {generated} files, skipped {skipped}.")
    print(f"Manifest written to {manifest_path}")


if __name__ == "__main__":
    main()
