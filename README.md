# Footwell Podiatry Website

Marketing website for Footwell Podiatry, built with Next.js App Router and deployed as a static export to GitHub Pages.

## Project Goals

- Present services, pricing, and clinic information clearly for patients.
- Support local SEO with technical metadata and structured data.
- Keep the site compatible with static hosting and GitHub Pages base path behavior.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Routes

- `/` Home page
- `/services` Service list and pricing
- `/what-is-biomechanics` Educational service page
- `/robots.txt` metadata route
- `/sitemap.xml` metadata route

## Local Development

Install dependencies:

```bash
npm ci
```

Run the dev server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`
  - Canonical site origin used for SEO URLs.
  - Example: `https://footwell-podiatry.co.uk`
  - Defaults to `https://footwell-podiatry.co.uk` when unset.

- `GITHUB_PAGES`
  - Used in CI to enable GitHub Pages base path behavior.
  - Set automatically in the deployment workflow for build steps.

## Static Export Constraints

This project uses `output: "export"` in `next.config.ts`.

To keep builds compatible with static export:

- Avoid server-only runtime features.
- Keep `next/image` in unoptimized mode (already configured).
- Ensure metadata routes are explicitly static.

For App Router metadata routes like `app/sitemap.ts` and `app/robots.ts`, export one of:

- `export const dynamic = "force-static"`
- `export const revalidate = <number>`

If omitted, build can fail with errors such as:
`Failed to collect page data for /sitemap.xml`.

## Deployment (GitHub Pages)

Deployment is handled by `.github/workflows/deploy.yml`.

On pushes to `main` (or manual workflow dispatch), CI will:

1. Install dependencies with `npm ci`
2. Run `npm run lint`
3. Run `npm run build` with `GITHUB_PAGES=true`
4. Upload static output from `./out`
5. Deploy via GitHub Pages actions

## SEO and Content Operations

Technical SEO is implemented in code (`app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and page metadata).

Operational SEO tasks that require non-code action are tracked in:

- `SEO-NON-CODE-ACTIONS.md`

## Repository Structure

```text
app/
	layout.tsx
	page.tsx
	services/page.tsx
	what-is-biomechanics/page.tsx
	robots.ts
	sitemap.ts
	seo.ts
public/
.github/workflows/deploy.yml
next.config.ts
SEO-NON-CODE-ACTIONS.md
```
