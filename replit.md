# Sinolingua Guide

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## What Was Built

**Sinolingua Guide** — a mobile application (Expo/React Native) for Chinese language students.

### Features
- **成语 Chengyu** — 20 classical four-character idioms with pinyin, translations, meanings, and example sentences. Filterable by difficulty (easy/medium/hard).
- **网络用语 Slang & Abbreviations** — 20 modern internet expressions (YYDS, 躺平, 内卷, etc.) with origins, usage examples, and type filters.
- **流行文化 Pop Culture** — 16 viral phrases from Chinese media, memes, dramas, and variety shows with cultural context.
- **发音 Pronunciation** — Complete tone guide (4 tones + neutral), tone minimal pairs, and tricky sounds (retroflex consonants, ü vowel, tone sandhi).
- **对话练习 Dialogues** — 5 interactive conversation scenarios (first meeting, restaurant, directions, job interview, online friends) with multiple-choice branching and scoring.
- **文化指南 Culture Guide** — 12 cultural entries covering miànzi (face), gift giving, Spring Festival, dining etiquette, lucky numbers, guanxi, tea culture, WeChat etiquette, and more.

### Data Sources
Data is based on open linguistic sources (ChID, PETCI, Tencent NLP, LIVAC) embedded directly in the app as TypeScript datasets.

### Search & Navigation
- Full-text search across all sections (characters, pinyin, meanings, tags)
- Filter chips per section (difficulty, type, source type, category)
- Tab navigation with 7 tabs

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Mobile framework**: Expo / React Native (expo-router)
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- `artifacts/sinolingua-guide` — Expo mobile app (previewPath: `/`)
- `artifacts/api-server` — Express API server (previewPath: `/api`)
- `artifacts/mockup-sandbox` — UI mockup sandbox (previewPath: `/__mockup`)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
