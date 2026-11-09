# Books hub — live and verified for submission (2026-10-29)

The public GitHub Pages site is hosted at:

- Landing page: https://tjs-a11y.github.io/tjs-a11y-books/
- Crypto shelf: https://tjs-a11y.github.io/tjs-a11y-books/crypto/
- Recipe shelf: https://tjs-a11y.github.io/tjs-a11y-books/kitchen/
- Mastering Cryptocurrency Trading overview: https://tjs-a11y.github.io/tjs-a11y-books/mastering-cryptocurrency-trading/
- Mastering the Crypto Market overview: https://tjs-a11y.github.io/tjs-a11y-books/mastering-the-crypto-market/
- Mediterranean Diet Recipes Book overview: https://tjs-a11y.github.io/tjs-a11y-books/mediterranean-diet-recipes-book/

The hub uses canonical URLs, retailer-universal links, Book/ItemList structured data, sitemap.xml, robots.txt, and an IndexNow workflow. The three CEO-selected title overviews are linked from their relevant shelves and included in the sitemap and IndexNow URL list.

## Search handoff

- Google Search Console property verification was completed by the CEO on 2026-10-28.
- The sitemap submission was accepted by Google Search Console on 2026-10-28. Acceptance means Google read the sitemap; it does not mean every URL is indexed.
- The IndexNow workflow run after adding the new page succeeded on 2026-10-29 UTC, confirming URL submission (HTTP 200/202). Submission is not proof of indexing.
- Bing Webmaster Tools remains an open CEO task: add this property and submit sitemap.xml.
- Check Google Search Console's Pages report and Bing Webmaster after crawls; do not report indexing without evidence.

## Marketing scope

The only CEO-selected titles for active book marketing are:

1. **Mastering Cryptocurrency Trading** — https://books2read.com/u/m26Ngr
2. **Mastering the Crypto Market** — https://books2read.com/u/3kDX8W
3. **Mediterranean Diet Recipes Book** — https://books2read.com/u/4jo1Xo

Use the actual book/retailer description as the source of truth. Crypto content must say “Educational, not financial advice.” Cookbook content must say “General recipes, not dietary or medical advice.” Do not fabricate reviews, bestseller status, or outcome promises.

## Attribution and open items

- Books2Read links let readers choose a retailer. The hub currently has no click tracking or cookies; do not add tracking without a privacy review.
- Per-link book sales are not attributable through the universal links. Draft2Digital's sales/royalty dashboard remains the source of truth; a CEO export is needed to prioritize by observed sales.
- Paperback store links for the two crypto titles remain unconfirmed; Books2Read currently presents ebook options. Do not invent paperback links.
- Do not link the book hub from Quickwell; the hub remains a separate brand.

## Revenue and growth operations

- [Books Revenue & Discovery Engine](growth/BOOK_REVENUE_ENGINE.md) defines the content funnel, editorial gates, discovery, attribution limits, KPI definitions and operating cadence.
- `.github/workflows/books-hub-health.yml` checks sitemap URLs, HTTP 200 responses, canonical consistency and the three approved retailer destinations weekly and on relevant production changes.
- The Supabase `public.crypto_books_seo_matrix` is the search-intent planning registry, not a published-page or indexing ledger. On 2026-11-09 it contained 355 unique slugs; 108 new targets were added for the three active titles in batch `books-growth-2026-11-09-02`.
- Publish only distinct, useful guides. Do not turn every registry row into a thin page. Search submission is not indexing; retailer clicks are not purchases; distributor statements remain the royalty source of truth.
- Books2Read universal links do not currently provide per-link order attribution. No cookies or click tracking are enabled until a privacy-reviewed first-party measurement design is approved.
