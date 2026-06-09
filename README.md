# The Lost Arts — Vite/React Landing Page

A clean standalone migration from the Replit export. This version is intended for validating demand and collecting emails, not for building a full production web app yet.

## Requirements

- Node.js 20.19+ recommended
- Windows, macOS or Linux

## Run locally on Windows

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```txt
http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Waitlist collection

By default, submissions are saved in the browser's `localStorage` under:

```txt
lost-arts-waitlist
```

For real lead collection, create a `.env` file:

```bash
VITE_WAITLIST_ENDPOINT=https://your-endpoint.example.com/waitlist
```

The app will POST JSON to that endpoint:

```json
{
  "name": "Optional name",
  "email": "person@example.com",
  "source": "the-lost-arts-landing-page",
  "submittedAt": "ISO timestamp"
}
```

Good simple endpoint options: Formspree, Tally webhook, ConvertKit, Beehiiv, Supabase Edge Function, Netlify Function or Vercel Serverless Function.

## What was removed from the Replit version

- Replit Vite plugins
- `PORT` and `BASE_PATH` runtime requirements
- workspace/catalog dependencies
- unused generated mockup sandbox
- unused API server artifact
- Wouter routing
- React Query provider
- shadcn UI folder that was not needed for the single landing page
- react-hook-form/zod dependency for this simple email form

## Project structure

```txt
public/                 Static images and metadata assets
src/components/         Landing page sections
src/App.tsx             Single-page composition
src/index.css           Tailwind v4 theme and custom styles
src/main.tsx            React entrypoint
vite.config.ts          Clean Vite config with @ alias
```
