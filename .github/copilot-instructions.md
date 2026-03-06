# Footwell Podiatry - Copilot Instructions

## Project Purpose

Build and maintain a professional marketing site for **Footwell Podiatry** using Next.js.

## Technical Constraints

- The site is deployed as a **static export**.
- Deployment target is **GitHub Pages** via the existing GitHub Actions workflow.
- Prefer implementation choices compatible with static hosting:
  - Use Static Site Generation-friendly patterns.
  - Avoid server-only runtime features and APIs that require a Node server.
  - Keep routes, assets, and links compatible with GitHub Pages base path behavior.

## Design Direction

The overall feel should be:

- Professional and trustworthy
- Medical and clean
- Slightly warm and welcoming
- Soft pastel color palette (avoid harsh or overly saturated colors)

When generating UI:

- Favor excellent readability and clear information hierarchy.
- Use ample whitespace and clean layouts.
- Keep typography legible and accessible.
- Use gentle visual accents that support a healthcare brand tone.
- Avoid flashy, playful, or overly trendy styles.

## Content Tone

- Clear, calm, and reassuring.
- Patient-focused and informative.
- Plain language where possible; avoid unnecessary jargon.

## Code Quality Expectations

- Keep components simple, reusable, and well-structured.
- Preserve accessibility best practices (semantic HTML, alt text, keyboard support, color contrast).
- Use **Tailwind CSS** as the default styling approach for UI work.
- Prefer Tailwind utility classes over custom CSS files for layout, spacing, typography, and color.
- Keep custom global CSS minimal and only for framework-level requirements (for example Tailwind imports).
- Ensure changes do not break static export or GitHub Pages deployment.
