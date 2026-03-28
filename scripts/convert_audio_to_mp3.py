#!/usr/bin/env python3
"""Convert generated WAV audio plus manifest into MP3 app assets."""

from __future__ import annotations

import argparse
import json
import subprocess
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Convert generated WAV audio to MP3 and rewrite the manifest.")
    parser.add_argument(
        "--input-dir",
        type=Path,
        default=Path("out/audio"),
        help="Directory containing generated WAV audio and manifest.json",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("assets/audio"),
        help="Directory where converted MP3 assets and rewritten manifest are written",
    )
    parser.add_argument(
        "--bitrate",
        default="96k",
        help='Target MP3 bitrate passed to ffmpeg, for example "96k" or "128k". Default: 96k',
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing MP3 files even if they already exist.",
    )
    return parser.parse_args()


def convert_path_to_mp3(relative_path: str) -> str:
    return str(Path(relative_path).with_suffix(".mp3")).replace("\\", "/")


def convert_file(source: Path, target: Path, bitrate: str, force: bool) -> None:
    if target.exists() and not force:
        return

    target.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg",
        "-y" if force else "-n",
        "-i",
        str(source),
        "-codec:a",
        "libmp3lame",
        "-b:a",
        bitrate,
        str(target),
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def rewrite_manifest(data: dict) -> dict:
    rewritten = {
        "schemaVersion": data.get("schemaVersion", 1),
        "lessons": {},
        "stories": {},
    }

    for lesson_id, lesson in data.get("lessons", {}).items():
        lesson_entry: dict[str, dict[str, str]] = {}
        for key in ("word", "example"):
            if key in lesson:
                lesson_entry[key] = {
                    "text": lesson[key]["text"],
                    "path": convert_path_to_mp3(lesson[key]["path"]),
                }
        rewritten["lessons"][lesson_id] = lesson_entry

    for story_id, story in data.get("stories", {}).items():
        story_entry: dict[str, object] = {"paragraphs": []}
        if "title" in story:
            story_entry["title"] = {
                "text": story["title"]["text"],
                "path": convert_path_to_mp3(story["title"]["path"]),
            }
        story_entry["paragraphs"] = [
            {
                "index": paragraph["index"],
                "text": paragraph["text"],
                "path": convert_path_to_mp3(paragraph["path"]),
            }
            for paragraph in story.get("paragraphs", [])
        ]
        rewritten["stories"][story_id] = story_entry

    return rewritten


def iter_paths(data: dict) -> list[str]:
    paths: list[str] = []
    for lesson in data.get("lessons", {}).values():
        for key in ("word", "example"):
            if key in lesson:
                paths.append(lesson[key]["path"])
    for story in data.get("stories", {}).values():
        if "title" in story:
            paths.append(story["title"]["path"])
        for paragraph in story.get("paragraphs", []):
            paths.append(paragraph["path"])
    return paths


def main() -> None:
    args = parse_args()
    input_manifest = args.input_dir / "manifest.json"
    data = json.loads(input_manifest.read_text(encoding="utf-8"))
    rewritten_manifest = rewrite_manifest(data)

    for relative_wav_path in iter_paths(data):
        source = args.input_dir / relative_wav_path
        target = args.output_dir / convert_path_to_mp3(relative_wav_path)
        convert_file(source, target, args.bitrate, args.force)

    args.output_dir.mkdir(parents=True, exist_ok=True)
    (args.output_dir / "manifest.json").write_text(
        json.dumps(rewritten_manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Wrote converted audio and manifest to {args.output_dir}")


if __name__ == "__main__":
    main()
