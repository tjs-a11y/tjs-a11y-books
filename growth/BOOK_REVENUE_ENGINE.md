# Books Revenue & Discovery Engine

Last updated: 2026-11-09  
Owner: MONAD Books Growth  
Production site: https://tjs-a11y.github.io/tjs-a11y-books/

## Mission

Turn relevant search intent into useful reading experiences, then turn qualified readers into book buyers. The operating objective is **verified royalties**, not a large count of URLs, impressions, or outbound clicks.

The active campaign is deliberately limited to three CEO-selected titles:

| Book | Reader problem / intent | Retailer destination |
|---|---|---|
| Mastering Cryptocurrency Trading | Understand trading mechanics, execution, risk controls and repeatable process | https://books2read.com/u/m26Ngr |
| Mastering the Crypto Market | Understand crypto assets, market structure, cycles, blockchain economics and risk | https://books2read.com/u/3kDX8W |
| Mediterranean Diet Recipes Book | Find practical Mediterranean food ideas, ingredients and cooking context | https://books2read.com/u/4jo1Xo |

Do not automatically promote every title in the wider catalogue. Expand the active rotation only after the owner confirms the title, its live retailer link, its description and its commercial priority.

## System architecture

### 1. Source-of-truth catalogue

- Maintain one approved record per promoted book: exact title, author/publisher attribution, cover asset, Books2Read universal link, overview URL, formats actually offered, approved description and disclaimers.
- Treat Books2Read as the retailer-choice destination, not a sales attribution API.
- Treat Draft2Digital sales/royalty statements as the source of truth for units and royalties.
- Never invent retailer availability, reviews, rankings, sales, ISBNs or author credentials.

### 2. Search-intent registry

Supabase table: `public.crypto_books_seo_matrix`.

Current snapshot on 2026-11-09: 355 rows, 355 unique slugs and 10 distinct book links represented. The active three-book campaign has 36 new targets per title in batch `books-growth-2026-11-09-02` (108 new rows). The table is a planning and editorial queue; it is **not** proof that each target is a published page.

Each target should carry:
- one distinct search intent and a non-duplicative slug;
- target reader and the problem being solved;
- a concise useful-content angle;
- the correct book link and contextual CTA;
- source/evidence requirements and the relevant disclaimer;
- lifecycle status: proposed, approved, drafted, QA, published, submitted, indexed, retired;
- performance fields or linked analytics identifiers when available.

### 3. Content production

Publish a page only when it can satisfy the query substantially better than the existing page. Combine near-duplicate keywords into one authoritative guide. Do not create thin doorway pages, spun recipe variants, generic crypto keyword pages, or pages whose only purpose is a retailer button.

Every guide must have:
- a direct answer near the top;
- original explanation, examples, checklist, comparison or practical steps;
- a clear boundary between facts, interpretation and opinion;
- credible primary sources for factual claims;
- one relevant book CTA after the useful answer, plus a link to the full book overview;
- links to 2–4 genuinely related guides;
- canonical URL, unique title/description, Open Graph metadata and suitable Article/Breadcrumb structured data;
- a visible update date when the material is maintained;
- an editorial and mobile/accessibility check.

Editorial guardrails:
- Crypto pages: “Educational, not financial advice.” No return promises, buy/sell calls, guaranteed strategies or implied certainty about future prices.
- Cookbook pages: “General recipes, not dietary or medical advice.” No disease-treatment, weight-loss or guaranteed health claims. Attribute nutrition statements to credible health sources.
- Use the publisher/retailer description as the source of truth for what a book actually contains. Do not claim a guide is a chapter or recipe from the book unless verified.

### 4. Conversion path

Discovery query → useful guide → related guide / book overview → Books2Read retailer choice → retailer checkout → reported sale/royalty.

Conversion principles:
- Put the book recommendation where it naturally answers the reader's next question.
- Use specific CTA language such as “Explore the book” or “Choose a retailer”; avoid fake urgency and exaggerated claims.
- Keep the universal retailer link intact. Do not add affiliate parameters or claim retailer-level attribution unless the provider confirms support.
- Use the overview page as the stable product-detail page; guides should support it, not compete with it.
- Keep the Books brand separate from Quickwell; do not cross-link the brands without an explicit brand decision.

### 5. Discovery and distribution

- Maintain the sitemap and robots.txt; validate every sitemap URL after each production deployment.
- IndexNow submits eligible URLs to participating search engines; submission is not indexing.
- Keep Google Search Console sitemap and Pages reports as the Google discovery/indexing evidence.
- Add Bing Webmaster Tools property and sitemap submission; record acceptance and later crawl/indexing status separately.
- Use internal links from shelves, reading-guide hubs, book overviews and related articles.
- Distribute only useful excerpts and topic-specific links through relevant social/video descriptions and communities. Do not mass-post identical promotional copy.
- Hummingbird is a separate audience channel. Link to a book only when the video subject genuinely matches that book; do not force unrelated book promotions into every video.

### 6. Measurement and attribution

Measure the funnel as separate events:

1. Organic impressions and clicks by query/page (Search Console).
2. Landing sessions and engaged reading (privacy-reviewed site analytics).
3. Book CTA clicks by book, source page and placement (first-party event tracking).
4. Books2Read outbound visits (clicks only; not purchases).
5. Retailer orders, units and net royalties (Draft2Digital statements/exports).
6. Refunds/adjustments where the distributor reports them.

Never label a Books2Read click as an order or sale. Universal links can route readers to different retailers, so this hub cannot infer which store completed a purchase. Reconcile sales using distributor statements and the reporting granularity actually supplied.

Recommended weekly dashboard:
- Search impressions, clicks, CTR and average position by book cluster.
- Published/indexed pages and sitemap health.
- Landing sessions and engaged sessions by guide.
- CTA clicks / qualified landing sessions.
- Retailer clicks by title and referring page.
- Reported units and net royalties by title and statement period.
- Revenue per 100 qualified sessions only when both the session and royalty periods are comparable.
- Pages with traffic but no CTA clicks; pages with CTA clicks but no attributable sales; pages with no discovery.

Privacy requirements:
- Do not collect names, email addresses, precise location, raw IP addresses or sensitive reader data for book-click analytics.
- Do not introduce cookies, fingerprinting or third-party analytics without a documented privacy review and owner approval.
- Prefer aggregate, first-party, event-only measurement with a clear retention policy.
- Keep raw click counts separate from deduplicated sessions and sales.

### 7. Automated quality and operations

A scheduled GitHub Actions health check should:
- parse the production sitemap;
- reject duplicate URLs, malformed URLs and off-domain URLs;
- request each sitemap URL and fail on non-200 responses;
- verify each page's canonical URL matches its sitemap URL;
- verify the three active book overview pages and retailer destination links remain present;
- emit a concise summary and fail visibly when production health regresses.

The existing IndexNow workflow remains a submission mechanism. Health checks and Search Console/Bing reports provide separate evidence. A green workflow is not proof of search indexing or sales.

## Editorial release gates

A target can move to published only after:
1. intent uniqueness checked against existing pages;
2. source and claims reviewed;
3. content adds real value beyond the book description;
4. CTA and book destination verified;
5. canonical, metadata, structured data and internal links checked;
6. sitemap updated;
7. deployment health verified.

A target can move to indexed only after Search Console or the relevant search engine reports that state. Do not infer indexing from sitemap inclusion or IndexNow acceptance.

## First 30-day execution priorities

1. Verify the three existing overview pages, shelves, reading-guide hub and sitemap in production.
2. Audit the 108 new targets against existing guides and consolidate overlaps before drafting.
3. Publish a small, high-quality first batch: start with 3–5 guides per book, not 36 pages at once.
4. Add internal links from each guide to its book overview and related guides.
5. Deploy and validate the sitemap; submit the updated sitemap and IndexNow URLs.
6. Implement privacy-reviewed first-party CTA click measurement only after the collection and retention design is approved.
7. Reconcile first available distributor sales statements against campaign periods; do not promise per-link attribution that Books2Read does not expose.
8. Refresh content based on actual search demand, reader engagement and royalty evidence.

## KPI definitions

- **Qualified landing session:** a real session landing on a book guide or book overview from an identifiable source, excluding bots where the analytics provider supports that filter.
- **Book CTA click:** a click on an approved retailer link. This is outbound intent, not a purchase.
- **Retailer conversion rate:** orders divided by retailer visits only when the retailer supplies both figures for the same cohort and period. Otherwise mark unavailable.
- **Reported royalties:** actual distributor-reported royalties for a statement period, net of adjustments as reported.
- **Indexed page:** a URL explicitly reported as indexed by the relevant search engine, not merely submitted.

## Operating cadence

- Twice weekly: review the search-intent registry, deduplicate topics, approve the next small content batch.
- Weekly: review Search Console, site health, CTA clicks and any new royalty statements.
- Monthly: retire weak/overlapping pages, improve pages with demonstrated demand, and reallocate effort toward books with verified commercial traction.

The governing rule: **useful content earns discovery; a clear recommendation earns the click; only a distributor statement verifies the royalty.**
