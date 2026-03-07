# SEO Non-Code Actions

This document covers SEO tasks that cannot be fully completed in the site code and require platform, marketing, or business operations work.

## 1. Search Engine Setup

- Verify ownership in Google Search Console.
- Verify ownership in Bing Webmaster Tools.
- Submit sitemap URL in both tools:
  - `https://footwell-podiatry.co.uk/sitemap.xml`
- Monitor indexing and coverage errors weekly for the first month after deployment.

## 2. Analytics and Conversion Tracking

- Set up Google Analytics 4 property and data stream for the live domain.
- Define conversion events:
  - Click to call
  - Email click
  - Booking button click
  - Successful booking confirmation (if available via Cliniko redirect/event)
- Connect GA4 to Search Console for query and landing-page analysis.

## 3. Domain and Canonical Configuration

- Confirm the production canonical domain (for example, `https://footwell-podiatry.co.uk`).
- Set `NEXT_PUBLIC_SITE_URL` in the deployment environment so canonical and Open Graph URLs always match production.
- If multiple hostnames exist (for example, GitHub Pages URL and custom domain), enforce one preferred host.

## 4. Local SEO Operations

- Fully optimize Google Business Profile:
  - Primary and secondary categories
  - Accurate services
  - Opening hours updates (including holiday hours)
  - Photos and treatment-room imagery
- Keep NAP consistency across key directories:
  - Google Business Profile
  - Bing Places
  - Apple Business Connect
  - Yell, Yelp, Thomson Local, and relevant healthcare directories

## 5. Review Strategy

- Create an ethical review request flow after appointments.
- Build a process for responding to all reviews (positive and negative) within a defined SLA.
- Track review volume and average rating monthly.

## 6. Content and Topical Authority

- Publish ongoing local intent content:
  - Condition-specific pages (for example, plantar fasciitis, verruca treatment)
  - Service-area pages if genuinely distinct
  - Educational posts answering common patient questions
- Create an editorial cadence (for example, 2 useful pages/posts per month).

## 7. Off-Page SEO

- Build high-quality local and niche citations/backlinks:
  - Local partnerships
  - Community groups
  - Healthcare associations and directories
- Avoid low-quality bulk link-building.

## 8. Performance and UX Monitoring

- Monitor Core Web Vitals in Search Console and PageSpeed Insights after release.
- Track key UX metrics on mobile where most local queries originate.

## 9. Compliance and Trust Signals

- Add legally required policies with complete content:
  - Privacy Policy
  - Terms & Conditions
  - Cookies policy if applicable
- Ensure business credentials and regulatory details are clearly displayed where appropriate.

## 10. Ongoing Reporting

- Monthly SEO report should include:
  - Organic sessions and conversions
  - Top landing pages
  - Query impressions/clicks/CTR
  - Rankings for priority local keywords
  - Indexing and technical issues
