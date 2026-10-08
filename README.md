# Into Change

Website for Into Change (https://intochange.net). Vite + React + TypeScript + Tailwind + shadcn/ui, with a Supabase database for enquiries and newsletter sign-ups.

## Develop

```sh
npm install
cp .env.example .env   # fill in the Supabase URL and publishable key
npm run dev
```

## Deploy

Hosted on GitHub Pages from the `gh-pages` branch. Deploy with `./scripts/deploy.sh` (builds, then force-pushes `dist` to `gh-pages`).


## Database

SQL migrations are in `drizzle/migrations/`. Apply them in the Supabase SQL editor.
