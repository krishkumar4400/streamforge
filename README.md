# StreamForge

> AI-powered video sharing platform with automatic transcription, summarization, and semantic search — built with Next.js, Cloudinary, Prisma, and NeonDB.

## Overview

StreamForge is a full-stack SaaS application for uploading, processing, and discovering video content. Every upload is automatically transcribed, summarized into timestamped chapters, and indexed for semantic search — so users can search videos by what's actually said in them, not just by title or tags.

This is both a production-style portfolio piece and a deep dive into combining a modern web stack (Next.js App Router, Prisma, NeonDB/Postgres) with an end-to-end AI pipeline (speech-to-text, LLM summarization, vector embeddings).

## Features

- Direct-to-Cloudinary video uploads via signed URLs — no server bottleneck on large files
- Automatic transcoding, adaptive streaming, and thumbnail generation
- AI-generated transcripts, summaries, and timestamped chapters
- Semantic search across video content using vector embeddings (pgvector on NeonDB)
- Auth.js v5 authentication with secure session management
- Responsive UI built with DaisyUI + Tailwind CSS

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Database | NeonDB (Postgres) + pgvector |
| ORM | Prisma |
| Media | Cloudinary |
| Auth | Auth.js v5 |
| UI | DaisyUI + Tailwind CSS |
| AI | Whisper (transcription), LLM (summarization), embeddings (semantic search) |

## Architecture

```
Browser
   |
   v
Next.js App (Frontend + API routes)
   |
   |--> Auth.js           session & user auth
   |--> Prisma + NeonDB   relational + vector data
   |--> Cloudinary        video storage, transcoding, CDN
              |
              v
        AI processing pipeline
   (transcription -> summarization -> embeddings)
              |
              v
        writes results back to NeonDB
```

## Getting started

### Prerequisites

- Node.js 18+
- A [NeonDB](https://neon.tech) account and connection string
- A [Cloudinary](https://cloudinary.com) account (cloud name, API key, API secret)
- An OpenAI (or equivalent) API key for transcription and embeddings

### Installation

```bash
git clone https://github.com/<your-username>/streamforge.git
cd streamforge
npm install
```

### Environment variables

Create a `.env` file in the project root:

```bash
# Database
DATABASE_URL=

# Auth.js
AUTH_SECRET=
AUTH_URL=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# AI
OPENAI_API_KEY=
```

### Database setup

```bash
npx prisma generate
npx prisma migrate dev
```

### Run locally

```bash
npm run dev
```

App runs at `http://localhost:3000`.

## Project structure

```
streamforge/
├── app/             # Next.js App Router pages & API routes
├── components/      # Reusable UI components
├── lib/             # Auth, Cloudinary, and AI client utilities
├── prisma/          # Prisma schema & migrations
├── public/          # Static assets
└── types/           # Shared TypeScript types
```

## Roadmap

- [x] Project architecture & tech stack
- [ ] Auth.js setup with role-based access
- [ ] Signed direct uploads to Cloudinary
- [ ] Webhook-based processing pipeline
- [ ] Transcription & AI chapter generation
- [ ] Semantic search (pgvector)
- [ ] Auto-tagging & content moderation
- [ ] Personalized recommendations

## Contributing

This is currently a solo build-in-public project. Issues and suggestions are welcome — feel free to open an issue or pull request.

## License

MIT

## Author

Built by [Your Name] — follow the build-in-public journey on [LinkedIn / Twitter / X].
