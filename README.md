# Into Change

Website for Into Change (https://intochange.net). Vite + React + TypeScript + Tailwind + shadcn/ui, with a Supabase database for enquiries and newsletter sign-ups.

## Develop

```sh
npm install
cp .env.example .env   # fill in the Supabase URL and publishable key
npm run dev
```

## Deploy

Hosted on Cloudflare Pages, built from `main`:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`

## Database

SQL migrations are in `drizzle/migrations/`. Apply them in the Supabase SQL editor.
