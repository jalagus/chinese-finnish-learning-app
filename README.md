# Suomi Start

An Expo-based mobile app prototype for helping Chinese speakers learn Finnish. It uses React Native and Expo Router.

## Current MVP Features

- Chinese-localized onboarding flow for learners
- Daily study goal selection
- Expanded beginner Finnish vocabulary library
- Built-in dictionary search across Finnish, Chinese, pronunciation hints, and example sentences
- Short bilingual Finnish reading stories
- Chinese pronunciation hints and example sentences
- SM-2 style spaced repetition review flow
- Progress dashboard with due cards, introduced cards, and learning status

## Developer Note

Repository documentation is in English, but the in-app learning experience is still intentionally written for Chinese-speaking users.

## App Store Copy

### Short Description

Learn Finnish with Chinese-friendly explanations, pronunciation help, and smart spaced repetition.

### Full Description

Suomi Start is a Finnish learning app designed for Chinese speakers who want a clearer and less intimidating way to begin.

Instead of forcing learners to think through English first, the app presents Finnish vocabulary with Chinese meanings, Chinese pronunciation hints, and practical example sentences. This makes it easier for beginners to build confidence from day one.

Core features:

- Chinese-first learning experience tailored to native Chinese speakers
- Beginner-friendly Finnish vocabulary with examples and memory tips
- In-app dictionary search for Finnish words, Chinese meanings, and example phrases
- Short bilingual stories for contextual reading practice
- Daily study goals for light, steady, or intensive learning
- SM-2 spaced repetition to schedule reviews based on how well each card is remembered
- Progress tracking for due cards, active learning cards, and mastered material
- Fast mobile study sessions designed for everyday practice

Suomi Start is ideal for learners preparing for travel, relocation, study, or everyday life in Finland, and for anyone who wants a focused Finnish starter app built around Chinese learner needs.

## Getting Started

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npm start
```

You can also run a specific platform:

```bash
npm run ios
npm run android
npm run android:emu
npm run web
```

The dev server uses port `8083` to avoid colliding with other Expo apps.

## Android Emulator Workflow

This project is set up to use an Expo development build on Android, not Expo Go.

Use this flow:

```bash
npm install
npm run android
```

That command builds and installs a proper native app in the Android emulator with `expo run:android`.

After the first native install, start Metro in dev-client mode with:

```bash
npm start
```

Notes:

- `npm start` runs `expo start --dev-client --port 8083`
- `npm run android` and `npm run android:emu` both use `expo run:android --port 8083`
- if native folders do not exist yet, Expo will prebuild them during the Android run
- this workflow avoids the limitations and incompatibilities of Expo Go for native modules and dev-client features

## Project Structure

- `app/`: Expo Router routes
- `src/data/seed.ts`: vocabulary and story seed content
- `src/providers/AppProvider.tsx`: app state container
- `src/screens/`: screen UI components
- `src/features/review/reviewEngine.ts`: SM-2 review scheduling and study stats logic

## Good Next Steps

- Add `expo-sqlite` for offline persistence
- Organize lessons into themed course packs
- Add audio playback and native speaker pronunciation
- Save spaced repetition progress across app restarts
- Add Chinese grammar notes and short situational dialogues

## Finnish TTS Utility

This repo also includes a standalone Python script for generating Finnish speech audio with Hugging Face TTS models:

- Script: `scripts/generate_finnish_tts.py`
- Default model repo: `Finnish-NLP/Chatterbox-Finnish`

Use `uv` for the Python tooling:

```bash
uv venv
source .venv/bin/activate
uv sync
```

Generate one WAV file from a single Finnish string:

```bash
uv run python scripts/generate_finnish_tts.py \
  --text "Moi! Minä opiskelen suomea." \
  --output out/moi.wav
```

Generate one WAV per non-empty line in a text file:

```bash
uv run python scripts/generate_finnish_tts.py \
  --input-file texts/finnish_sentences.txt \
  --output-dir out/audio
```

Optional:

- Use `--reference-audio path/to/reference.wav` to choose a different Finnish voice prompt
- Use `--device cuda` or `--device mps` if you want hardware acceleration
- Use `--temperature`, `--repetition-penalty`, and `--exaggeration` to tune Chatterbox generation

Generate audio for all Finnish lesson and story text in `src/data/seed.ts`:

```bash
uv run python scripts/generate_all_finnish_audio.py --output-dir out/audio
```

Convert the generated WAV files into bundled MP3 assets and regenerate the static TypeScript manifest:

```bash
npm run audio:bundle
```

That bulk script creates organized WAV files for:

- lesson headwords
- lesson example sentences
- story titles
- story paragraphs

It also writes a manifest at `out/audio/manifest.json`.

The bulk exporter now uses app-friendly paths and a structured manifest:

- `out/audio/lessons/<lesson-id>/word.wav`
- `out/audio/lessons/<lesson-id>/example.wav`
- `out/audio/stories/<story-id>/title.wav`
- `out/audio/stories/<story-id>/paragraphs/01.wav`

After conversion, the bundled app assets are stored as MP3:

- `assets/audio/lessons/<lesson-id>/word.mp3`
- `assets/audio/lessons/<lesson-id>/example.mp3`
- `assets/audio/stories/<story-id>/title.mp3`
- `assets/audio/stories/<story-id>/paragraphs/01.mp3`

Example manifest shape:

```json
{
  "schemaVersion": 1,
  "lessons": {
    "moi": {
      "word": { "text": "Moi", "path": "lessons/moi/word.mp3" },
      "example": { "text": "Moi! Mitä kuuluu?", "path": "lessons/moi/example.mp3" }
    }
  },
  "stories": {
    "morning-hello": {
      "title": { "text": "Aamun tervehdys", "path": "stories/morning-hello/title.mp3" },
      "paragraphs": [
        { "index": 1, "text": "Liisa näkee ystävänsä...", "path": "stories/morning-hello/paragraphs/01.mp3" }
      ]
    }
  }
}
```

That format is consumed directly by the Expo app after the TypeScript manifest is rebuilt.

If you prefer not to use `uv`, the older fallback is still available:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements-tts.txt
```

Notes:

- The script automatically downloads the Finnish Chatterbox repository and caches it under `.cache/chatterbox-finnish/`
- If the required Chatterbox base weights are missing, the script automatically runs the model repo's `setup.py`
- Chatterbox-Finnish is voice-conditioned, so synthesis quality depends in part on the reference audio used
