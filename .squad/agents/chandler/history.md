# Project Context

- **Owner:** sddev12
- **Project:** Footwell Podiatry — professional podiatry marketing site
- **Stack:** Next.js 16 (static export), React 19, TypeScript, Tailwind CSS v4, GitHub Pages via GitHub Actions
- **Created:** 2026-04-16

## Key Facts

- Business: Footwell Podiatry, located in Broughton, Preston
- Services offered: routine podiatry, biomechanics assessment, verruca treatment, diabetic foot care, home visits, luxury wax therapy
- SEO anchor: "Broughton, Preston" is the geographic location for all local SEO
- Content tone: clear, calm, reassuring. Patient-focused. Plain language. No jargon without explanation.
- `app/seo.ts` contains: `SITE_NAME`, `BUSINESS_ADDRESS`, `BUSINESS_EMAIL`, `BUSINESS_PHONE_DISPLAY`, `BUSINESS_PHONE_E164`, `BUSINESS_OPENING_HOURS`
- `app/sitemap.ts` and `app/robots.ts` exist — update sitemap when new pages are added
- Metadata pattern: every page has a unique `title`, `description`, `canonical`, and OpenGraph tags
- Do NOT invent clinic facts — only use what is already in the codebase or provided by the user

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
