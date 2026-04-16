# Project Context

- **Owner:** sddev12
- **Project:** Footwell Podiatry — professional podiatry marketing site
- **Stack:** Next.js 16 (static export), React 19, TypeScript, Tailwind CSS v4, GitHub Pages via GitHub Actions
- **Created:** 2026-04-16

## Key Facts

- Deployment: GitHub Pages via GitHub Actions — static export (`output: 'export'`)
- The `next export` output goes into `out/` directory by default in Next.js 16
- `next.config.ts` controls: `output`, `basePath`, `trailingSlash`, `images.unoptimized`
- GitHub Pages serves from `gh-pages` branch or configured source — verify workflow targets the right branch
- Environment: `NEXT_PUBLIC_BASE_PATH` must be set as a GitHub Secret/var for production builds
- No Node.js server at runtime — pure static HTML/CSS/JS served from GitHub Pages CDN
- Build command: `next build` — produces static output; no `next start` in production

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### 2026-04-16 — Issue #1: ESLint linting workflow YAML files

- `eslint.config.mjs` used `globalIgnores()` to set ignored paths but only listed Next.js build artifacts (`.next/`, `out/`, etc.)
- ESLint was picking up `.github/workflows/*.yml` and `.squad/**` files, causing the lint CI step to fail
- Fix: added `".github/**"` and `".squad/**"` to the `globalIgnores()` array
- Rule: ESLint scope in this project is Next.js application code only — non-app directories must be explicitly ignored
