# Feature Spec: Google Reviews Section

**Author:** Ross (Tech Lead)  
**Date:** 2026-04-16  
**Status:** Ready for implementation — all blockers resolvlved  

---

## Feature Summary

Display a selection of real Google Reviews on the Footwell Podiatry homepage to build trust with prospective patients. The section will be positioned between the "Ready to feel comfortable on your feet again?" contact/CTA section (`#contact`) and the site footer.

---

## Placement in `app/page.tsx`

Current bottom-of-page order:

1. `#contact` — "Ready to feel comfortable on your feet again?" CTA section
2. `<SiteFooter />` — rendered via `app/layout.tsx`

**New order:**

1. `#contact` — CTA section (unchanged)
2. **`#reviews`** — Google Reviews section ← new
3. `<SiteFooter />` — unchanged

The new section is homepage-only. It will be implemented as a section element inside `app/page.tsx`, not in the shared layout.

---

## Technical Constraint Summary

| Constraint | Detail |
|---|---|
| Export mode | `output: 'export'` — produces fully static HTML |
| Hosting | GitHub Pages — no Node.js server at runtime |
| No API routes | `app/api/*` routes are not available in static export |
| No serverless | No Vercel Edge Functions, no AWS Lambda |
| No runtime fetch | Any `fetch()` to external APIs must happen at **build time** only |
| Images | `next/image` optimisation disabled (`unoptimized: true`) — external images must be `<img>` or handled carefully |
| Styling | Tailwind CSS v4 — all UI via utility classes |
| basePath | Dynamic via `NEXT_PUBLIC_BASE_PATH` env var for GitHub Pages sub-path |

Any solution must either:
- **A) Fetch data at build time** (during `next build`) and bake into static HTML, or
- **B) Be a fully client-side embed** (JavaScript that loads in the browser after page render)

---

## Options Evaluated

### Option A — Google Places API: Build-Time Fetch

During `next build`, call the Google Places API (Places Details endpoint) to fetch reviews. Results are serialised into the component as static props/data and baked into the HTML output.

- **API endpoint:** `https://maps.googleapis.com/maps/api/place/details/json?place_id=<PLACE_ID>&fields=reviews,rating,user_ratings_total&key=<API_KEY>`
- **Data returned:** Up to 5 reviews (most relevant/recent per Google's algorithm), overall star rating, total review count
- **Refresh cadence:** Reviews update on each `next build` / GitHub Actions deploy — not real-time
- **Requires:** Google Place ID for the clinic, Google Places API key with billing enabled, API key stored as a GitHub Actions Secret

### Option B — Third-Party Review Widget

Embed a client-side JavaScript widget from a third-party provider (e.g. Elfsight, EmbedSocial, ReviewsWidget.io). The widget loads after page render and fetches reviews from Google via the provider's backend.

- **Implementation:** Add a `<script>` tag and a placeholder `<div>` to the page
- **Data freshness:** Real-time (always current)
- **Requires:** Account with provider, typically free tier with their branding; paid plan (~£10–30/month) to remove branding
- **No API key management** on our side

### Option C — Manually Curated Static Reviews

Hardcode 3–5 selected reviews as a TypeScript array in the component. Content managed by Chandler; Rachel selects the reviews from her Google Business profile.

- **Implementation:** Simple data array in the component file
- **Data freshness:** Static — only updates when the file is manually edited and redeployed
- **Requires:** Nothing — no external dependencies, no API keys, no third-party scripts

### Option D — Google My Business Embed / Badge

Embed Google's native review summary badge or a Place iframe showing the review panel.

- **Implementation:** Embed an `<iframe>` pointing to Google Maps' place embed URL
- **Data freshness:** Real-time (iframe pulls live from Google)
- **Requires:** Google Place ID only (no API key for embed)
- **Customisation:** Very limited — the embed renders in Google's own UI

---

## Pros/Cons Comparison

| | Option A (Build-time Places API) | Option B (Third-party widget) | **Option C (Manual curation) ← SELECTED** | Option D (Google embed/badge) |
|---|---|---|---|---|
| **Static export compatible** | ✅ Yes (build-time fetch) | ✅ Yes (client-side) | ✅ Yes | ✅ Yes (iframe) |
| **Data freshness** | ⚠️ Per-deploy | ✅ Real-time | ❌ Manual | ✅ Real-time |
| **Design control** | ✅ Full Tailwind control | ⚠️ Limited (widget shell) | ✅ Full Tailwind control | ❌ None |
| **Brand aesthetic fit** | ✅ Excellent | ⚠️ Moderate (widget chrome) | ✅ Excellent | ❌ Poor |
| **Performance** | ✅ Zero client JS | ⚠️ External script (CLS risk) | ✅ Zero overhead | ⚠️ iframe overhead |
| **GDPR / privacy** | ✅ No third-party tracking | ❌ Third-party cookies/tracking | ✅ None | ⚠️ Google iframe tracking |
| **Maintenance burden** | ⚠️ Low (automatic on deploy) | ⚠️ Low (provider dependency) | ❌ Manual updates | ⚠️ Google embed stability |
| **Cost** | ⚠️ Google API billing (small) | ❌ Free tier has branding; ~£10–30/mo to remove | ✅ Free | ✅ Free |
| **Setup complexity** | ⚠️ Moderate (API key, secret) | ✅ Low | ✅ Minimal | ✅ Very low |
| **Review count** | ⚠️ Max 5 (API limit) | ✅ Configurable | ✅ Choose any count | ⚠️ Google-controlled |
| **Requires API key** | ✅ Yes (Google) | ❌ No | ❌ No | ❌ No |

---

## Recommended Approach

### ✅ Selected: Option C — Manually Curated Static Reviews

**Rationale:**

Client preference for zero cost and zero external dependencies. The business has provided 4 real reviews to seed the component with; content will be updated manually by editing the data array and redeploying as needed.

1. **Zero cost.** No Google API billing, no third-party SaaS subscription.
2. **Zero external dependencies.** No API keys, no build-time network calls, no secrets management, no third-party scripts.
3. **Full design control.** Our own Tailwind-styled component — consistent with the clinic's brand aesthetic.
4. **Static export compatible.** A plain TypeScript data array; no server features required.
5. **Simplest path to implementation.** Rachel can build and ship the component immediately without waiting on any external setup.

**Note on other options:** Option A (Google Places API) remains a viable upgrade path in future if the business decides to automate review freshness. Option B and Option D are not recommended — see evaluation table above.

---

## Review Data

Seed data provided by the business (4 real reviews). This array is ready to paste into `app/data/reviews.ts` or inline in the component.

```typescript
interface Review {
  author: string;
  rating: 5; // all are 5 stars
  text: string;
  relativeDate: string;
  isLocalGuide?: boolean;
}

const reviews: Review[] = [
  {
    author: "Lynne Williams",
    rating: 5,
    text: "Just been for first treatment.. Extremely satisfied..so far so good ..Will give further feedback after a few more sessions.. Lynne.",
    relativeDate: "2 months ago",
    isLocalGuide: true,
  },
  {
    author: "James Fox",
    rating: 5,
    text: "Simply excellent. Friendly, supportive with firm guidance about correct care. Highly recommend.",
    relativeDate: "2 months ago",
  },
  {
    author: "Emma Robinson",
    rating: 5,
    text: "Easy to get an appointment with parking right outside. Rachel was very welcoming, friendly and knowledgeable. The treatment was quick, painless and, with the wax treatment, a little treat! Highly recommended",
    relativeDate: "1 day ago",
  },
  {
    author: "Emma Taylor",
    rating: 5,
    text: "Rachel put me at ease with my concerns immediately. She diagnosed my issues confidently & I felt reassured when leaving the appt. She is lovely & friendly & the issue is clearing up nicely :)",
    relativeDate: "1 day ago",
  },
];
```

---

## Implementation Plan (Option C — Manual Curation)

### New / modified files

| File | Purpose |
|---|---|
| `app/data/reviews.ts` | `Review` type + `reviews` array (seed data above) |
| `app/components/review-card.tsx` | `ReviewCard` component — renders a single review |
| `app/components/google-reviews-section.tsx` | `GoogleReviewsSection` — renders the full section with all cards |
| `app/page.tsx` | Add `<GoogleReviewsSection />` between `#contact` and `<SiteFooter />` |

### Placement in `app/page.tsx`

```tsx
// After the #contact section, before <SiteFooter />
<GoogleReviewsSection />
```

### Component overview

**`ReviewCard`** (Rachel builds)
- Accepts a single `Review` prop
- Renders: star rating, reviewer name, Local Guide badge (if `isLocalGuide` is true), review text, relative date
- Uses `line-clamp-4` to keep card heights uniform
- Accessible star rating: `aria-label="5 out of 5 stars"`

**`GoogleReviewsSection`**
- Imports `reviews` from `app/data/reviews.ts`
- Renders a section header (copy from Chandler — see open questions)
- Maps `reviews` to `<ReviewCard />` in a responsive grid
- No `async` / `await`. No API calls. No environment variables.

### No additional infrastructure required

- No API keys
- No build scripts
- No GitHub Actions Secrets changes
- No environment variables
- Joey has no action items for this feature

---

## UI / Design Notes for Rachel

> Rachel owns visual styling decisions. These are suggestions only — adjust as needed within the brand palette.

- **Layout:** Three-column card grid on desktop (`md:grid-cols-3`), single column on mobile. 3 or 5 reviews maximum — odd numbers work better in grid layouts.
- **Card design:** White background (`bg-white`), teal border (`border border-[#c6dedb]`), subtle box shadow (`shadow-[0_7px_18px_rgba(21,74,77,0.05)]`). Consistent with the Services and "What to Expect" cards on the current page.
- **Star rating display:** Render ★ glyphs (Unicode U+2605) or an SVG star row. Use `text-[#2f7b79]` or a warm amber (e.g. `#e8a44a`) — confirm which feels right for the brand. Do not use a third-party icon library just for stars.
- **Reviewer name:** `font-semibold text-[#12363a]`, prominent. Reviewer profile photos from the Google API can be unreliable/low quality — consider omitting them and using an avatar placeholder (initials circle) instead.
- **Review text:** Truncate long reviews at ~3–4 lines with a CSS line-clamp (`line-clamp-4`) to keep cards uniform height.
- **Relative time:** e.g. "2 weeks ago" — subdued colour `text-[#39585c]`, small text `text-sm`.
- **Overall rating badge:** Display above or below the heading — e.g. "★★★★★ 4.9 · 47 reviews on Google". This gives social proof at a glance.
- **Section background:** Consider a very light teal wash (`bg-[#f2f9f8]`) to visually separate this section from the white CTA above, or keep `bg-transparent` with the page's radial gradient showing through — Rachel's call.
- **Accessibility:** Star ratings must have an accessible text equivalent — e.g. `aria-label="5 out of 5 stars"` on the star element.

---

## Content / Copy Notes for Chandler

> Chandler owns all page copy and SEO metadata.

- **Section eyebrow label:** None.
- **Section heading (h2):** `"Hear from our patients"` ✅ confirmed
- **Section subheading:** None.
- **CTA:** `"Read all reviews on Google →"` linking to: `https://www.google.com/search?q=Footwell+Podiatry,+Broughton+Reviews` ✅ confirmed
- **Attribution:** Reviews must be clearly attributed to Google (Google's Terms of Service requirement). Include a text attribution `"Reviews from Google"` or Google logo

---

## Open Questions

These must be resolved before implementation can begin. Owners noted.

| # | Question | Status | Owner |
|---|---|---|---|
| 1 | **Section heading (h2) copy** | ✅ Resolved — `"Hear from our patients"` | Chandler |
| 2 | **Section eyebrow label** | ✅ Resolved — none | Chandler |
| 3 | **Section subheading copy** | ✅ Resolved — none | Chandler |
| 4 | **Star rating display** | Open — default to Unicode ★ | Rachel |
| 5 | **Reviewer avatars** | Open — default to initials circle | Rachel |
| 6 | **Card layout** | Open — default to CSS grid | Rachel |
| 7 | **Overall rating summary badge** | Open — Rachel's call | Rachel |
| 8 | **"See all reviews on Google" CTA URL** | ✅ Resolved — `https://www.google.com/search?q=Footwell+Podiatry,+Broughton+Reviews` | sddev12 |
| 9 | **Google attribution format** | Open — plain text `"Reviews from Google"` acceptable | Ross / Rachel |
| 10 | **Local Guide badge for Lynne Williams** | Open — Rachel's call

---

## Out of Scope

- **Review response / moderation** — this is a display-only feature
- **Review filtering by rating** — show what Google returns; no filtering logic
- **Structured data / rich snippets** (`AggregateRating` schema) — separate SEO task for Chandler; can be added later once the reviews component exists
- **Other review platforms** (Trustpilot, Facebook) — not in scope for this ticket
- **Real-time review updates without a rebuild** — not possible on static export without a client-side widget (Option B), which is not recommended
- **Review submission / feedback forms** — separate feature
- **CI/CD changes** — adding the secret to GitHub Actions is Joey's domain

---

## Summary

| Item | Value |
|---|---|
| Selected option | **Option C — Manually curated static reviews** |
| Seed data | 4 real reviews provided by the business |
| New section placement | After `#contact`, before `<SiteFooter />` in `app/page.tsx` |
| New components | `app/components/google-reviews-section.tsx`, `app/components/review-card.tsx` |
| New data file | `app/data/reviews.ts` |
| External dependencies | None |
| Design owner | Rachel |
| Copy owner | Chandler |
| Implementation owner | Rachel (component build) |
| Key blockers | See Open Questions #1–3 (copy from Chandler) |
