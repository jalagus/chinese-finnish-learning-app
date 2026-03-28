#!/usr/bin/env python3
"""Build a static TypeScript audio manifest from generated audio assets."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate src/data/audioManifest.ts from assets/audio/manifest.json")
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("assets/audio/manifest.json"),
        help="Structured JSON manifest produced by generate_all_finnish_audio.py",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("src/data/audioManifest.ts"),
        help="Output TypeScript manifest file",
    )
    return parser.parse_args()


def ts_require(path: str) -> str:
    return f"require('../../assets/audio/{path}')"


def build_source(data: dict) -> str:
    lines: list[str] = []
    lines.append("export type AudioAssetEntry = {")
    lines.append("  text: string;")
    lines.append("  source: number;")
    lines.append("};")
    lines.append("")
    lines.append("export type StoryAudioParagraph = AudioAssetEntry & {")
    lines.append("  index: number;")
    lines.append("};")
    lines.append("")
    lines.append("export const audioManifest = {")
    lines.append("  lessons: {")

    for lesson_id, lesson in data["lessons"].items():
        lines.append(f"    {json.dumps(lesson_id)}: {{")
        if "word" in lesson:
            lines.append("      word: {")
            lines.append(f"        text: {json.dumps(lesson['word']['text'], ensure_ascii=False)},")
            lines.append(f"        source: {ts_require(lesson['word']['path'])},")
            lines.append("      },")
        if "example" in lesson:
            lines.append("      example: {")
            lines.append(f"        text: {json.dumps(lesson['example']['text'], ensure_ascii=False)},")
            lines.append(f"        source: {ts_require(lesson['example']['path'])},")
            lines.append("      },")
        lines.append("    },")

    lines.append("  },")
    lines.append("  stories: {")

    for story_id, story in data["stories"].items():
        lines.append(f"    {json.dumps(story_id)}: {{")
        if "title" in story:
            lines.append("      title: {")
            lines.append(f"        text: {json.dumps(story['title']['text'], ensure_ascii=False)},")
            lines.append(f"        source: {ts_require(story['title']['path'])},")
            lines.append("      },")
        lines.append("      paragraphs: [")
        for paragraph in story.get("paragraphs", []):
            lines.append("        {")
            lines.append(f"          index: {paragraph['index']},")
            lines.append(f"          text: {json.dumps(paragraph['text'], ensure_ascii=False)},")
            lines.append(f"          source: {ts_require(paragraph['path'])},")
            lines.append("        },")
        lines.append("      ],")
        lines.append("    },")

    lines.append("  },")
    lines.append("} as const;")
    lines.append("")
    lines.append("export type AudioManifest = typeof audioManifest;")
    lines.append("")
    lines.append("export function getLessonAudio(lessonId: string) {")
    lines.append("  return audioManifest.lessons[lessonId as keyof typeof audioManifest.lessons] ?? null;")
    lines.append("}")
    lines.append("")
    lines.append("export function getStoryAudio(storyId: string) {")
    lines.append("  return audioManifest.stories[storyId as keyof typeof audioManifest.stories] ?? null;")
    lines.append("}")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    args = parse_args()
    data = json.loads(args.input.read_text(encoding="utf-8"))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(build_source(data), encoding="utf-8")
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
