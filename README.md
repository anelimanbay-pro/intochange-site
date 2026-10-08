# Into Change

Website for Into Change (https://intochange.net). Vite + React + TypeScript + Tailwind + shadcn/ui, with a Supabase database for enquiries and newsletter sign-ups.

## Develop

```sh
npm install
cp .env.example .env   # fill in the Supabase URL and publishable key
npm run dev
```

## Deploy

Hosted on GitHub Pages; `.github/workflows/deploy.yml` builds and deploys on every push to `main`.


## Database

SQL migrations are in `drizzle/migrations/`. Apply them in the Supabase SQL editor.
