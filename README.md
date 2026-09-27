# PixelToCloud

React (Preact-compatible) + Vite marketing site for [PixelToCloud](https://pixeltocloud.com/).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lighthouse
```

## Highlights

- Light theme by default with dark toggle
- Routes: `/`, `/services`, `/work/:slug`, `/about`, `/contact`, `/labs`, `/privacy`, `/terms`
- FormSubmit contact form with honeypot
- SEO meta, JSON-LD, sitemap, robots
- SPA hosting configs for Vercel / Netlify
- Motion: scroll reveals, hover interactions, FAQ accordion (respects reduced motion)

## Deploy

Static `dist/` output. Use `vercel.json` or `public/_redirects` for SPA fallbacks.
