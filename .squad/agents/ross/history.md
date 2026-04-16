# Project Context

- **Owner:** sddev12
- **Project:** Footwell Podiatry — professional podiatry marketing site
- **Stack:** Next.js 16 (static export), React 19, TypeScript, Tailwind CSS v4, GitHub Pages via GitHub Actions
- **Created:** 2026-04-16

## Key Facts

- Site is a static export — `output: 'export'` in next.config.ts. No server-side features.
- Deployment target: GitHub Pages. Uses `basePath` via `NEXT_PUBLIC_BASE_PATH` env var.
- Pages: `/` (home), `/services`, `/what-is-biomechanics`
- Booking is handled via an external third-party modal (`BookingModalProvider`)
- Logo and images: `footwell_logo.webp`, `main-background-foot.webp` in `/public`
- SEO helpers in `app/seo.ts` — `SITE_NAME`, `SITE_URL_WITH_BASE_PATH`, `absoluteUrl()`
- Business: podiatry clinic in Broughton, Preston. Contact details in `app/seo.ts`.
- Font: Geist Sans + Geist Mono (from `next/font/google`)
- Color palette: teal/green tones (`#12363a`, `#2f7b79`, `#39585c`) on soft pastel backgrounds

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
