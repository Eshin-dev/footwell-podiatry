# Project Context

- **Owner:** sddev12
- **Project:** Footwell Podiatry — professional podiatry marketing site
- **Stack:** Next.js 16 (static export), React 19, TypeScript, Tailwind CSS v4, GitHub Pages via GitHub Actions
- **Created:** 2026-04-16

## Key Facts

- Tailwind CSS v4 is in use — config is in `postcss.config.mjs`, no `tailwind.config.js` file
- Color scheme: teal/green primary (`#12363a`, `#2f7b79`, `#39585c`), warm pastels for backgrounds
- Brand direction: professional, warm, medical-clean. Ample whitespace, soft accents, no flashy effects.
- `basePath` used for GitHub Pages — asset paths must use `process.env.NEXT_PUBLIC_BASE_PATH ?? ""`
- Images: `next/image` with explicit `width`/`height` and `sizes` for responsive delivery
- Layout file: `app/layout.tsx` — shared nav header and footer across all pages
- `BookAppointmentButton` component — triggers the external booking modal
- Design tokens are inline Tailwind classes, no separate design system file

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### 2026-04-17 — Google Reviews section (PR #3)

**Components created:**
- `app/data/reviews.ts` — `Review` interface + `reviews` array (4 seeded real reviews)
- `app/components/review-card.tsx` — `ReviewCard` component
- `app/components/google-reviews-section.tsx` — `GoogleReviewsSection` section

**Design decisions:**
- **No rounded corners** — matched existing card style (`border border-[#c6dedb] bg-white shadow-[0_7px_18px_rgba(21,74,77,0.05)]`). Site-wide convention is `rounded-none`.
- **Stars:** 5 × `★` Unicode glyphs, `text-amber-400`, with `aria-label="5 out of 5 stars"` on the container and `aria-hidden="true"` on the glyphs.
- **Initials avatar:** Fixed `h-8 w-8` square (no `rounded-full`), `bg-[#e6f2f0] text-[#2f7b79]`, extracted from author name. Kept square to match the no-rounded-corners convention.
- **Grid:** 1 col mobile → 2 col md → 4 col lg, matching exactly the 4 reviews count.
- **Section heading:** `text-3xl font-semibold leading-tight md:text-5xl` — no eyebrow label, matching sections that don't use the eyebrow pattern.
- **CTA link:** Ghost button style (`rounded-none border border-[#c6dedb] bg-[#f4faf9]`), matching the secondary "View services" button in the hero.
- **Section background:** transparent (inherits page gradient), `py-16 md:py-20` matching other sections.
- **Static export compatible** — no `use client`, no `async/await`, no external imports.

### 2026-04-17 — Fix review card text cutoff (Issue #4, PR #5)

**Problem:** `line-clamp-5` on the review text paragraph was truncating longer reviews.

**Fix applied:**
- `app/components/review-card.tsx`: removed `line-clamp-5` from the `<p>`, added `h-full` to the outer `<article>` (already had `flex flex-col`; `grow` was already on `<p>`).
- `app/components/google-reviews-section.tsx`: added `items-stretch` to the grid `<div>` so all cards in a row reach equal height.

**Result:** All review text is fully visible; equal-height cards are maintained via CSS grid stretch + flex column layout.
