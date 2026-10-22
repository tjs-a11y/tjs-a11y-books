# Books hub — deploy-ready (private draft, 2026-10-22)

The books hub is **built and ready to deploy**. Three drafts, now tied together by a front-door landing page:
- `launchpad/books-hub/index.html` — the **landing** (front door; links the shelves).
- `launchpad/livewire-money/index.html` — the **7 crypto titles** (real covers, store-verified descriptions).
- `launchpad/bookshelf/index.html` — the **2 cookbooks + Mindset Mastery** (real covers, store-verified; paperback links for the cookbooks).

All three: separate brand (never link from Quickwell, never name the holding company), honesty lines baked in, responsive + dark/light, no cookies/tracking.

## One-tap deploy (CEO: ~5 min)
1. **Create a public repo** — e.g. `tjs-a11y/books` — and turn on **Settings → Pages → Deploy from branch → `main` / root**. (Optionally add a custom domain.)
2. Ping staff. We push these files in this layout:
   ```
   /index.html                 ← books-hub/index.html (landing)
   /crypto/index.html          ← livewire-money/index.html
   /kitchen/index.html         ← bookshelf/index.html   (cookbooks + Mindset Mastery)
   /sitemap.xml  /robots.txt   ← generated at deploy (template below)
   ```
3. Staff then set `<link rel="canonical">` + `og:url` on every page to the real address, add `og:image`, submit the sitemap (and IndexNow), and either keep the covers hotlinked from books2read S3 or copy them into the repo.

## sitemap.xml (fill DOMAIN at deploy)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://DOMAIN/</loc></url>
  <url><loc>https://DOMAIN/crypto/</loc></url>
  <url><loc>https://DOMAIN/kitchen/</loc></url>
</urlset>
```
`robots.txt`: `User-agent: *` / `Allow: /` / `Sitemap: https://DOMAIN/sitemap.xml`

## Off-site complement
The **Book Promo Kit** (`marketing/promo-assets/book-promo-kit.html` + `books.md`) is the social/newsletter copy that points at this hub once it's live. Per SO22, the nightly Marketing shift keeps both current and optimizes a title each night.

## Still CEO's call
- The repo + Pages (above) — the only thing blocking a live, SEO-discoverable owned book channel.
- Paperback store links for *Mastering Cryptocurrency Trading* and *Mastering the Crypto Market* (D2D Print; books2read shows only ebook) — CEO to supply; an HTML comment marks the spot on the crypto page.
