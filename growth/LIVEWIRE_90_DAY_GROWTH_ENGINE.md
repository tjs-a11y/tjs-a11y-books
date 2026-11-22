# LiveWire Books — 90-Day Growth Engine

Last updated: 2026-11-21  
Owner: MONAD Books Growth  
Primary hub: https://tjs-a11y.github.io/tjs-a11y-books/

## Mission

Turn the existing publishing and social operation into a measurable audience-to-revenue system. The goal is verified reader demand and reported royalties, not more posts, pages, or vanity metrics.

This plan extends the existing [Books Revenue & Discovery Engine](BOOK_REVENUE_ENGINE.md). It does not replace that source of truth.

## Scope and brand boundaries

### Active book campaign

Only these three CEO-selected books are in the active book-growth rotation:

1. **Mastering Cryptocurrency Trading** — https://books2read.com/u/m26Ngr
2. **Mastering the Crypto Market** — https://books2read.com/u/3kDX8W
3. **Mediterranean Diet Recipes Book** — https://books2read.com/u/4jo1Xo

Use the matching overview page as the primary social destination:
- https://tjs-a11y.github.io/tjs-a11y-books/mastering-cryptocurrency-trading/
- https://tjs-a11y.github.io/tjs-a11y-books/mastering-the-crypto-market/
- https://tjs-a11y.github.io/tjs-a11y-books/mediterranean-diet-recipes-book/

Do not expand the active titles without CEO approval. Do not invent book contents, reviews, rankings, retailer formats, results, or outcomes.

### Separate fiction franchises

SIGNAL 309 and Ketterfield are separate entertainment tracks, not book-advertising filler. Keep their story canon, artwork, tone, playlists, and audience journeys distinct from the three nonfiction book campaigns. Existing YouTube operating times are Ketterfield at 9:00 PM Central and SIGNAL 309 at 9:30 PM Central. New Shorts must be at least 60 seconds and story-accurate before scheduling.

### Brand boundaries

- LiveWire Books remains its own publishing identity.
- Instagram account confirmed in Metricool: @livewirebooks.
- TikTok account returned by Metricool: @quickwellapp. It is a shared Quickwell/books distribution surface; label book content clearly as LiveWire Books and keep Quickwell product messaging distinct.
- YouTube channel ID returned by Metricool: UCJPmpm9EhjKgCWircUn357A.
- Metricool's current brand response did not list Pinterest in its connected network data. Treat Pinterest as unverified in this workspace until the connection is confirmed.
- Do not cross-link the Quickwell website and the books hub unless the CEO explicitly changes the brand rule.

## Verified starting position — 2026-11-21

Metricool brand: `8235623`; timezone: `America/Chicago`.

A scheduled-post check for 2026-11-21 through 2026-11-28 found:
- Instagram: book posts/Reels queued through 2026-11-28, covering all three active books.
- TikTok: book posts queued through 2026-11-28, covering the active books, alongside separate Quickwell posts.
- One Instagram cookbook post and one TikTok crypto-trading post showed as published in the retrieved schedule response.
- No YouTube posts appeared in that retrieved date range.
- Pinterest was not present in the brand's returned connected-network list.

The scheduled book posts already contain UTM-tagged links to the corresponding book overview pages. Keep using the overview pages as the destination rather than sending every social click directly to Books2Read.

The underlying measurement position is still an early baseline:
- `book_outbound_click_events`: 0 rows at the time of this check.
- `book_royalty_statements`: 0 rows at the time of this check.
- `book_search_performance_daily`: 9 imported rows; the last imported record was 2026-11-09.
- The existing book-click event table records book, source page path, CTA placement, destination and timestamp. It does not currently record social-platform UTM source/medium/campaign/content fields. Therefore UTM-tagged URLs alone must not be described as verified platform attribution.
- The existing tracker must receive a verified test/real click before end-to-end capture can be called operational.
- Books2Read outbound clicks are not orders. Draft2Digital statements remain the royalty source of truth.

These are snapshots, not a claim that there has been no activity outside the connected sources.

## The operating system

### 1. Content engine

Create content from approved source material and the actual book descriptions/text. Repurpose each useful idea into native platform formats rather than pasting identical copy everywhere.

**Mastering Cryptocurrency Trading**
- Trading mechanics and order types.
- Execution, liquidity, spreads and slippage.
- Risk controls and process discipline.
- Educational only; no trading recommendations, return promises or financial advice.

**Mastering the Crypto Market**
- Market structure and asset categories.
- Volatility, liquidity and market cycles.
- Blockchain and crypto-market concepts.
- Educational only; no buy/sell calls, price predictions or financial advice.

**Mediterranean Diet Recipes Book**
- Practical meal-building ideas and ingredient inspiration.
- Cooking techniques and recipe discovery.
- Everyday planning and ingredient combinations.
- General recipes, not dietary or medical advice; no disease-treatment or guaranteed health claims.

**Fiction**
- SIGNAL 309: concrete impossible premise, character stakes, story-accurate clues and episode progression.
- Ketterfield: its own mystery, setting, characters and narrative identity.
- Every Short must make sense to a first-time viewer, open with a concrete hook, and lead to the next relevant episode or full story.

### 2. Distribution engine

Use the existing Metricool connection and queue before creating more content volume.

- Instagram: continue the established mix of Reels, carousels and image posts.
- TikTok: continue native short-form video and image posts on @quickwellapp, with a clear LiveWire Books identity on book posts.
- YouTube: maintain the separate fiction-series schedule and verify each post's media, duration, title, audience setting and publication receipt.
- Pinterest: verify connection and board destinations before adding it to the automated publishing rotation.
- Do not duplicate a post that is already scheduled or published.
- Keep all publication authorization, platform permissions and content-specific approval requirements intact. No paid ads or paid media-generation spend.

### 3. Conversion engine

Every book campaign should follow:

Social content → matching book overview page → useful page content → book CTA → Books2Read retailer choice → retailer checkout → distributor-reported royalty.

Rules:
- Use the matching overview page as the social link destination.
- Keep UTM values consistent and unique by platform, campaign and creative.
- Preserve the universal Books2Read link.
- Verify the CTA destination and event payload before claiming a click was tracked.
- Do not claim retailer purchases from outbound click counts.
- Add a clear, privacy-reviewed email opt-in only after an email provider and consent/retention approach are selected. No email capture is currently assumed to exist.

### 4. Audience relationship

Build a direct reader relationship after the basic click path works:
- Offer a genuinely useful free sample, reading checklist or companion resource based on verified book content.
- Make the value exchange clear before asking for an email address.
- Use explicit consent, a privacy notice, unsubscribe support and a documented retention policy.
- Send only the messages the reader opted into.
- Do not create a paid membership or course before reader interest is demonstrated.

### 5. Product-extension experiments

Do not produce a large course or a new book merely to increase catalogue size.

After the first 30 days of measurable traffic and reader feedback, test one low-cost companion resource:
- A trading-process workbook/checklist based strictly on verified material in Mastering Cryptocurrency Trading; or
- A market-concepts study guide based strictly on verified material in Mastering the Crypto Market; or
- A meal-planning/recipe companion based strictly on verified material in Mediterranean Diet Recipes Book.

Choose one experiment only after the source text and reader demand support it. Start with a small free sample or a clearly priced pilot; do not promise outcomes.

## 90-day execution sequence

### Days 1–14 — Make measurement trustworthy

1. Run and record a controlled click test on each of the three book overview pages.
2. Verify each test creates exactly the expected first-party event and correct book/placement/destination values.
3. Confirm the UTM query parameters on social links are actually captured. If not, implement a privacy-minimal platform attribution extension only after reviewing the current Edge Function, table constraints, Supabase documentation and migration path.
4. Verify the live links, page canonicals, mobile usability, and retailer destinations.
5. Confirm Metricool connection state for Pinterest and the exact YouTube channel identity.
6. Preserve the existing scheduled queue; fill only verified gaps.

**Exit criteria:** a reproducible, documented social-to-overview-to-retailer-click test; known connected-channel state; no unsupported sales claims.

### Days 15–30 — Establish a clean baseline

1. Continue the three-book rotation with distinct platform-native creative.
2. Test one creative variable at a time: hook, format, cover/visual, or CTA.
3. Record platform, post URL, publish time, book, format, creative angle and destination.
4. Import fresh Search Console page/query aggregates.
5. Import available Draft2Digital royalty statements and reconcile by title and statement period.
6. Review the first 14–30 days of comparable post performance; do not rank posts with unequal observation windows.

**Exit criteria:** a usable baseline for reach, engagement, book-page activity, CTA intent and reported royalties, with unknowns clearly marked.

### Days 31–60 — Build reader capture and test one offer

1. Select an email provider only after owner approval and connection.
2. Create one consent-based reader signup offer with a genuinely useful sample.
3. Draft a short welcome sequence that delivers the promised resource and introduces relevant books without over-mailing.
4. Test one companion-resource concept using reader feedback and verified source material.
5. Keep the three existing books as the primary purchase offers.

**Exit criteria:** working opt-in, confirmation, delivery and unsubscribe path; one validated companion-resource concept.

### Days 61–90 — Scale evidence, not assumptions

1. Allocate more content production to the best-performing book/topic/format combinations.
2. Improve book pages with traffic but weak CTA activity.
3. Improve creative and destination alignment where posts generate attention but few qualified visits.
4. Reconcile distributor royalties and any companion-product orders.
5. Continue, revise or stop the companion offer based on actual purchases and contribution margin.
6. Prepare the next 90-day allocation based on verified performance.

**Exit criteria:** documented channel-to-page-to-click evidence, distributor-reported book revenue, and a clear keep/stop/scale decision for the companion offer.

## KPI definitions

| Funnel stage | Required measure | Source | Interpretation |
|---|---|---|---|
| Discovery | Impressions, reach, views | Native platform / Metricool | Exposure, not demand |
| Attention | Watch time, completion, saves, shares, comments | Native platform / Metricool | Content response |
| Return | Returning viewers, repeat engagement, email opt-ins | Platform / email provider | Relationship, not a purchase |
| Site interest | Sessions by landing page and source | Privacy-reviewed first-party analytics | Qualified visits where session quality is known |
| Purchase intent | Book CTA clicks by title, page, placement and source | First-party book-click events | Outbound intent, not a sale |
| Sales | Units, net royalties and statement period | Draft2Digital statements | Reported book sales |
| Profit | Net receipts less direct production/distribution costs | Reconciled financial records | Commercial performance |

Always report **zero** only when the source was checked and returned zero. Report **unknown** when access or attribution is unavailable. Never turn missing data into a zero.

## Weekly operating cadence

- **Monday:** check the next two weeks of scheduled posts; identify gaps and avoid duplicate scheduling; prepare the next small creative batch.
- **Wednesday:** review the previous comparable post windows, link health, CTA events and content experiments; adjust upcoming creative only where evidence supports it.
- **Friday:** check search visibility and site health; import any new royalty statements; reconcile the funnel and record unknowns.
- **Monthly:** make one keep/stop/scale decision per active title and review whether the companion-product experiment is justified.

## Release and reporting guardrails

- No ad spend, paid subscriptions, paid media-generation credits or pricing changes without explicit approval.
- No new account or email platform is assumed connected.
- No automatic community posting, DMs, bulk unsolicited email or harvesting of personal data.
- No fabricated reviews, bestseller claims, sales, indexing, retailer availability or reader feedback.
- Keep book campaigns and Quickwell promotions clearly separated.
- Keep SIGNAL 309 and Ketterfield canon-accurate and visually distinct.
- Report scheduled, published, failed and pending states separately.
- Every report must include the date window, source, verified counts, unknowns, exact work completed and the next concrete action.

## Current blockers to clear

1. End-to-end book CTA event capture has not yet been verified; the event table was empty at the last check.
2. Social-platform attribution is not represented in the current book-click event schema.
3. Draft2Digital royalty statements have not yet been imported.
4. Search Console baseline is sparse and stale relative to this plan.
5. Pinterest connection is not confirmed in the current Metricool brand response.
6. No email provider or consent-based signup flow is confirmed.
7. The current Metricool queue had no YouTube posts in the checked 2026-11-21 to 2026-11-28 range; confirm the separate fiction-series publishing workflow before filling any gap.

**Governing rule:** content earns attention; a relevant destination earns intent; only a verified transaction or distributor statement proves revenue.


## Instrumentation work started — 2026-11-21

- Saved and executed the [LiveWire Books Growth Scoreboard](https://supabase.com/dashboard/project/dejplqevodwfeaemrska/explorer/notebook/4fd1181f-d875-4b1a-bab9-dedbb9e316f6). Its read-only queries currently return 0 book CTA events, 0 royalty statement rows and 9 search-performance rows.
- Saved and executed the [LiveWire Social Attribution](https://supabase.com/dashboard/project/dejplqevodwfeaemrska/explorer/notebook/7b669787-bac8-43c9-9e3d-1bbf96f395c3). Its UTM breakdown queries are valid and currently return no rows.
- Deployed the existing `book-click` Edge Function as version 5. It now accepts optional, allowlisted-format UTM values and writes them into the existing `monad_attribution_events` source, medium, campaign, content and term columns. No database schema change was required.
- The matching browser-side change is proposed in [PR #11](https://github.com/tjs-a11y/tjs-a11y-books/pull/11). It reads UTM values from the social landing URL and includes them when a reader clicks a Books2Read CTA. The script passed `node --check`.
- Until PR #11 is merged and a real UTM-tagged browser click is recorded, platform attribution remains **not yet verified**. No synthetic click was inserted into production data.


## Bio-link routing — required setup

Metricool returned no SmartLink rows for the checked 2026-11-19 through 2026-11-21 period, so a measurable link-in-bio destination is not confirmed. The existing books hub already presents the three active titles and can serve as the landing page; no new site or domain is required.

Use these platform-specific profile URLs once the browser tracker PR is merged:

- Instagram bio: https://tjs-a11y.github.io/tjs-a11y-books/?utm_source=instagram&utm_medium=organic_social&utm_campaign=livewire_books_bio
- TikTok bio: https://tjs-a11y.github.io/tjs-a11y-books/?utm_source=tiktok&utm_medium=organic_social&utm_campaign=livewire_books_bio

The existing scheduled captions often say “link in bio.” UTM parameters embedded in a caption are not proof that a visitor clicked that URL. The profile bio destination itself must carry the platform UTM values. Updating profile bio links is not available through the current Metricool actions, so the owner must paste these URLs into the two profile website fields. This will provide platform-level attribution; post-level attribution requires a post-specific link destination or a platform-supported clickable link.
