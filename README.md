# PixelToCloud

React (running on Preact via `preact/compat`) + Vite marketing site and client portal for [PixelToCloud](https://pixeltocloud.com/).

## Scripts

```bash
npm install
npm run dev       # copies index.dev.html -> index.html, starts Vite
npm run build     # Vite build + static route pages, sitemap, and public/ sync to the repo root
npm run preview
npm run lint      # oxlint
```

## How deployment works

The site is served by **GitHub Pages from the repository root** (custom domain in `CNAME`).

- `index.dev.html` is the source HTML template. `scripts/prebuild.mjs` copies it to `index.html` before Vite runs.
- `scripts/build-static-routes.mjs` runs after `vite build` and:
  - copies `dist/index.html` to the root `index.html` and `404.html` (SPA fallback),
  - replaces root `assets/` with the fresh hashed bundles,
  - copies everything else from `dist/` (i.e. `public/`) to the root, so images, `/connect`, logos and QR codes never go stale,
  - writes a real `index.html` for every marketing route (HTTP 200 + per-page title, description, canonical, OG tags),
  - regenerates `sitemap.xml` from the same route list.
- Commit the root output after `npm run build`. `dist/` itself is git-ignored.

Add new static files to `public/`, not the root — the root copy is generated.

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` for sign-in.
Optional: `VITE_ANALYTICS_ENDPOINT` for the built-in page-view beacon. See `AUTH_SETUP.md`.

## Highlights

- Light/dark theme (follows the system, with a toggle)
- Contact form via FormSubmit with a honeypot field
- SEO meta, JSON-LD, generated sitemap, robots
- Supabase auth (Google / phone OTP) and a client dashboard
- `vercel.json` is kept for an optional Vercel deploy; GitHub Pages ignores it
