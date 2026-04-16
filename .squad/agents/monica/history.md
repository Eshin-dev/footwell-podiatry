# Project Context

- **Owner:** sddev12
- **Project:** Footwell Podiatry — professional podiatry marketing site
- **Stack:** Next.js 16 (static export), React 19, TypeScript, Tailwind CSS v4, GitHub Pages via GitHub Actions
- **Created:** 2026-04-16

## Key Facts

- Static export constraint: no dynamic server features, all routes must export to HTML
- GitHub Pages deployment — routes and assets must be compatible with base path behavior
- Accessibility baseline: semantic HTML required, ARIA where needed, keyboard navigation, colour contrast
- Images must have `alt` text; interactive elements must be keyboard-accessible
- `app/robots.ts` and `app/sitemap.ts` are present — both should be verified after page additions
- `BookingModalProvider` wraps the app for external booking — verify it doesn't break SSG
- Testing scope: layout correctness, nav links, mobile responsiveness, accessibility audit per page

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
