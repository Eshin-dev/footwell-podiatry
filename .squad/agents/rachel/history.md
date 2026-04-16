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
