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

### 2026-04-16 — Google Reviews feature investigation

- Wrote feature spec for displaying Google Reviews on the homepage (`features/google-reviews.md`).
- Placement: between `#contact` CTA section and `<SiteFooter />` in `app/page.tsx`.
- Recommended **Option A: Google Places API build-time fetch** — fetches during `next build`, bakes into static HTML, zero client-side overhead, full Tailwind design control.
- Fallback: **Option C (manual curation)** if business cannot provide API key/Place ID.
- Key blockers: business must confirm Google Place ID and willingness to enable Places API billing.
- `GOOGLE_PLACES_API_KEY` must be a GitHub Actions Secret only — never a `NEXT_PUBLIC_` var.
- Places API returns max 5 reviews; this is acceptable for a small clinic homepage section.

### 2026-04-17 — Option C selected; Google Reviews spec updated

- Client confirmed preference for zero cost and zero external dependencies — Option C (manually curated static reviews) selected.
- `features/google-reviews.md` updated: status changed to Approved, Option C marked as SELECTED in the evaluation table, Recommended Approach and Implementation Plan sections replaced.
- 4 real reviews provided by the business seeded into the spec as a typed TypeScript data array (`app/data/reviews.ts`).
- Open Questions section updated — previous API/Place ID blockers removed; new questions filed for Chandler (heading/eyebrow/subheading copy) and Rachel (star display, avatars, card layout, overall rating badge, Google CTA, attribution).
- Q#9 (Google ToS attribution) flagged as blocking — Ross to decide approach with Rachel.
- Decision filed to `.squad/decisions/inbox/ross-reviews-option-c.md`.
