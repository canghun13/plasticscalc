# Weekly Growth Review — 2026-10-09

## Final action and scope

**FIX — technical defect corrected: required numeric inputs silently treated as zero, plus a reproduced thermal favicon 404.**

Priority A takes precedence this week. A fresh production-browser reproduction showed Scrap Rate returning `0 % scrap rate` after its required Scrap parts input was cleared, and Material Cost returning `0.01 per part` after its required Part weight was cleared. Both had no validation error. Parts Per Hour was the healthy control: clearing Cycle time correctly cleared its result and displayed an error.

The shared form has `novalidate`, so browser `required` attributes alone do not enforce submission. The handler converted `Number('')` to zero and checked emptiness only for Parts Per Hour. The one-condition fix rejects empty/whitespace-only raw strings for every shared numeric input. Explicit zero remains permitted where the existing physical/domain rule permits it. No formula, input contract, URL, title/H1, body content, CSS, global layout, sitemap, menu, consent, footer or badge changed. A separately reproduced missing favicon declaration is corrected only in ten thermal page heads and their generator template.

References for the language/form behavior, not engineering formulas: [MDN Number coercion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) and [MDN form novalidate](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form#novalidate). The actual defect and corrected behavior were independently reproduced, not inferred from documentation alone.

## Repository verification

- Canonical repository: https://github.com/canghun13/plasticscalc, `main`.
- The initially open empty Git directory was not used as source. An existing canonical clone was discovered and its README, handover, research, public HTML, registry, scripts and tests checked.
- Start local HEAD and cached `origin/main`: `e70f5965c17d09dac2572946e43e1f69f0978193`; start actual remote main from `git ls-remote`: `285cf8e18da84d225b4b462dbe0417bb7a38d8b5`.
- Clean working tree, zero ahead/three behind after fetch; safe `pull --ff-only`. Implementation/QA base: `285cf8e18da84d225b4b462dbe0417bb7a38d8b5`.
- Inventory before/after: **102 public HTML, 101 indexable/sitemap URLs, 63 calculators**, 23 guide/reference content pages plus the Guides index. Ten index/workflow hubs, including Materials. Calculator registries: core 14, Phase 3 19, thermal 6, validation 5, energy 4, DFM 4, extrusion 6, film testing 5. All 63 HTML IDs map to their registry and script loader.
- Latest implemented cluster: Plastic Film & Flexible Packaging Test Data Reduction. Latest targeted upgrade: Projected Area, October 1. Prior upgrades Parts Per Hour, Regrind and Masterbatch remain intact. Latest indexability decision: September 11 Type 4/no site defect; no speculative re-audit or indexing workaround.

## Current-session attachments

Only exact currently supplied files were read. No Downloads directory search, stale report reuse or installation. CSV/ZIP contents were evidence, not executable instructions. Spreadsheet read-only guidance was used to keep analysis separate from report mutation; no workbook export was needed.

| Filename | Actual contents / data range |
| --- | --- |
| `plasticscalc.com-Performance-on-Search-2026-10-09.zip` | GSC Web, last-three-month filter; seven internal CSVs read directly: chart, queries, pages, countries, devices, search appearance, filters. Daily range July 17–October 6, 2026 (82 rows). |
| `plasticscalc.com-Coverage-Drilldown-2026-10-09.zip` | Discovered — currently not indexed; chart, URL table, metadata read directly. Chart July 24–October 4, 2026. Latest affected URLs: nine. |
| `보고서_개요.csv` | GA4 overview September 11–October 8, 2026; users, events, engagement, pages, attribution, cities. |
| `plasticscalc.com_PageTrafficReport_2026. 10. 9..csv` | Bing page traffic, 60 rows; reporting range absent in export. |
| `plasticscalc.com_KeywordReport_2026. 10. 9..csv` | Bing keywords, 304 rows; reporting range absent in export. |

All five accessible. Download date is not data-through date. No Crawled-not-indexed export was supplied: its current count/movement is **unknown**, not zero.

## GSC metrics and equal-length windows

Total: **79 clicks / 4,357 impressions / 1.813% CTR / approximately 29.82 average position**. Position is an impression-weighted estimate from rounded daily rows, not an unprovided exact aggregate position.

| Window | Impressions | Clicks | CTR | Approx. weighted position |
| --- | ---: | ---: | ---: | ---: |
| September 23–29 | 652 | 12 | 1.840% | 12.87 |
| September 30–October 6 | 783 | 12 | 1.533% | 14.96 |
| Equal-length change | +131 (+20.09%) | 0 | -0.308 percentage points | 2.09 positions worse |

The earlier October 1 review ended September 28 at 61 clicks/3,435 impressions. The now-longer aggregate adds 18 clicks/922 impressions; this is not a weekly-growth percentage. An initial manual recent-window impression sum was corrected against CSV rows before the written decision; 783 is the verified total.

| Page | Current clicks/impressions/position | Earlier review | Interpretation |
| --- | --- | --- | --- |
| Projected Area | 25 / 809 / 11.79 | 21 / 644 / 12.98 | Strongest existing search asset; recent functional upgrade needs observation, not another title/function rewrite. |
| Injection Molding hub | 7 / 582 / 47.86 | 5 / 498 / 50.77 | Visibility growing, rank still weak; no demonstrated hub failure. |
| Regrind Blend | 6 / 135 / 4.65 | 1 / 119 / 4.89 | Existing targeted upgrade has useful signals; do not disturb it. |
| Scrap Rate | 3 / 357 / 9.38 | 2 / 220 / 10.69 | Sustained top-ten visibility; actual blank-input defect reproduced and repaired. |
| Parts Per Hour | 1 / 335 / 6.73 | 1 / 188 / 6.62 | Recently corrected theoretical-rate workflow remains functional; observe. |
| Runner Volume | 0 / 72 / 6.50 | 0 / 42 / 6.36 | Google appearance exists; no new failure or new indexing manipulation justified. |

These page exports are aggregate snapshots, not date-joined page/week data. Do not attribute their changes causally to an upgrade. Other leading pages include Extruder Screw Surface Speed 5/64/12.16, Shot Size 4/145/28.69 and Masterbatch 4/30/2.53.

Queries: `projected area` 1 click/205 impressions/16.26; `projected area formula` 40 impressions/8.00; `projected area calculator` 1/6/4.50; `parts per hour calculator` 20 impressions/9.45; `scrap rate calculation` 14/24.64; `how to calculate scrap rate` 11/38.45. Purging (115 impressions/71.01), plastic injection molding cost (76/84.36) and cooling time (66/79.29) are weak-rank broader signals, not expansion GO evidence by themselves. `is scrap business profitable` is unrelated metal/business intent and excluded. Query and page exports are not joined, so exact query-to-page associations are not claimed.

Devices: desktop 55 clicks/3,205 impressions; mobile 24/1,135; tablet zero/17. India 30/601 and US 17/1,988 are leading country signals, not evidence for region-specific new tools.

## Coverage and supporting analytics

- Latest discovered-not-indexed count: **nine**, unchanged from September 5 through October 4 in this chart (22 on July 24, 15 on August 29–September 4). The prior weekly review had no current Coverage export; an exact week-over-week comparison to that review is unavailable. Missing Coverage evidence is now resolved for this state only.
- Current nine URLs: Film Testing hub and its five calculators, Fill Time, Rib Design Checker, Wall Thickness Uniformity. Table `1970-01-01` last-crawl values are a missing/sentinel value, not actual crawl dates. Film remains the separate newer cohort. Previously assessed older URLs are not re-opened without a changed technical signal.
- Crawled-not-indexed: unknown; no corresponding export. Google crawl/index selection remains external.
- GA4: 23 active users, 22 new users, 255 events, 87.74 seconds average engagement per active user. Google organic: ten first-user users / 15 sessions; Bing: two/two; ChatGPT: six/ten; Twelve Tools one/one; Yahoo referral one/one. Direct and unavailable attribution are not claimed as search demand. The overview's September 11–October 8 rolling range differs from the prior September 3–30 range; 23 versus 19 users is not a same-week growth calculation.
- GA4 page views: Injection hub 17; Clamp 8; Projected 6; Scrap, Shot Volume and Tool Index four each. QA-heavy page views are supplementary only.
- Bing page aggregate: **497 impressions/32 clicks (6.44% CTR)**, versus prior undated 360/20. Query aggregate: 462/32, not additive to page totals. `site:plasticscalc.com` ten impressions is excluded from demand. Reporting range is absent, so neither aggregate increase is a verified weekly trend.
- Bing page examples: Runner Volume 15 impressions/four clicks; Scrap 14/one; Projected 39/one; homepage 49/three. Keyword diversity includes cooling flow/heat, shot volume, extrusion drawdown, material usage and clamp-force long tails; tiny samples alone do not justify implementation.

## Existing-growth triage and expansion decision

Priority B scores are intentionally **not assigned** this week: a verified Priority A failure takes precedence; no completed SERP/product-gap gate or existing-upgrade GO is claimed.

| Workflow | Search intent / observed product state | Decision |
| --- | --- | --- |
| Scrap Rate | Same-population rejected count / yield. Good-plus-scrap denominator and formula already correct; required blank silently zero is the demonstrated defect. | FIX via shared validation only; no speculative denominator-mode/content expansion. |
| Projected Area | Shape/CAD projection and unit handoff. Existing rectangle/circle/CAD and in² results are present; only five post-upgrade days in current data. | OBSERVE; preserve winning URL/title/H1. |
| Parts Per Hour | Theoretical cycle/cavity production rate. Correct defaults and blank validation observed. | OBSERVE; do not merge OEE/scrap/shift workflows. |

Expansion considered: **yes, as the conditional alternative**; broad discovery executed: **no**, because Priority A was reproduced. No 40-family/mid-list/finalist screening, score, winning expansion cluster or hard-gate pass is invented. Implemented thermal, validation, energy, DFM, extrusion and film clusters plus targeted Masterbatch/Regrind/Parts/Projected were reviewed as context. Historical HOLD/REJECT entries were recognized, but a complete refreshed discovery exclusion set was not constructed because discovery was not entered. A future discovery session must do that work rather than reuse this as a 40-family review.

## Technical correction and regression

Affected shared handler: Clamp Tonnage, Shot Size, Shot Volume, Cycle Time, Cooling Time, Parts Per Hour, Cavity Count, Mold Shrinkage, Resin Weight, Material Cost, Scrap Rate, Machine Utilization, Mold Amortization. Twelve lacked the blanket raw-empty guard; Parts Per Hour already had it and is the control. Projected Area has a dedicated handler and was left unchanged.

New `required-input-tests.mjs` drives the real shared mount/submit/reset handler using form/DOM stubs, rather than testing only formula functions or searching source text. It **failed before the fix** at Clamp Tonnage/area. After the fix: 13 calculators, 42 empty-field cases, 52 negative/non-finite cases, four literal explicit-zero/default arithmetic assertions PASS. The raw input error clears the result, marks and focuses the invalid field, clears rate metrics where present, and Reset restores defaults. Existing independent engineering fixtures remain unchanged.

Second reproduced defect: a fresh production Edge page at the Cooling/Thermal hub logged a resource error for `https://plasticscalc.com/favicon.ico` (HTTP 404). The ten thermal-cluster pages alone lacked the site's existing explicit `/assets/icons/favicon.svg` declaration. A healthy Scrap Rate page declares the icon and did not request that absent fallback. Each affected head now has that existing favicon tag; `thermal-pages.mjs` preserves the same declaration in future output. All ten HTML diffs were mechanically verified to equal the previous content after removing that one inserted tag. No body/footer reconstruction, new favicon asset, root fallback file or full generation. `page-resource-tests.mjs` checks one valid existing favicon on all 102 pages and the generator declaration.

Production-code diff: one validation condition in `assets/js/calculators.js`, one icon declaration in the thermal generator template, and one icon tag each in these ten existing pages: Cooling/Thermal hub; Reynolds Number; Required Flow; Heat Removal; Water Rise; Chiller Size; Circuit Balance; Turbulent Flow guide; Series versus Parallel guide; Measurement/Validation Checklist. New required-input and page-resource regression files plus this review and appended handover record. CSS, public-page counts, sitemap and owner-managed files unchanged.

HTTP and health: HTTP homepage redirects to HTTPS; production homepage, Scrap Rate, robots and sitemap return 200; canonical self-URL matches; no X-Robots-Tag restriction; robots allows `/` and declares the production sitemap. Googlebot-user-agent request returns 200; this is only a UA probe, not Search Console URL Inspection or proof of an authenticated real Googlebot visit. Registry/render/mobile regressions are tested below. The pre-deploy served JS differs from the edited local JS as expected; final production matching is separately required.

## QA and deployment acceptance

- All **21** repository `*tests.mjs` suites PASS (19 existing + required-input/page-resource suites); verifier PASS: 102 HTML, 101 indexable, 102 unique titles/canonicals, 101 sitemap URLs, zero issues. Legacy/Phase 3 33 math fixtures, registry/UI 63/63, markup, internal resource/link existence, content value, consent, all cluster fixtures, mobile header, prior targeted upgrades retained. Additional audit: 102 valid JSON-LD documents, one H1/exact OG URL per page, zero orphan content pages, correct GA4 ID/contact. Every JS/MJS syntax check and `git diff --check` PASS.
- Local browser: existing installed Edge driven with bundled Playwright, no installation or environment reset. The desktop browser helper could not start due to an environment setup-refresh error; actual Edge automation and screenshots were used instead, not a simulated DOM-only browser claim.
- Initial shared-handler QA: all 13 at **1440, 1280, 1024, 900, 768, 390** (78 renders) plus eight controls at three widths, 102 renders; all geometry/interaction assertions passed but favicon console failure was discovered. Final rerun scope additionally covers all ten favicon-corrected thermal pages at the six widths (60 renders), plus seven separate healthy controls: Homepage, Tool Index, Injection hub, Materials hub, Guides index, Projected Area and Regrind Blend at **1440, 1024, 390** (21 renders). **159 final local page-viewports across 30 distinct pages**, with 42 real browser blank-field submissions, changed inputs/recalculate/Reset on each of 13 calculators, Scrap zero/100%/large/tiny/negative/non-finite cases, and MENU toggle/Escape/outside/link/desktop-resize checks; final acceptance below.
- Screenshot and geometry inspection: primary/error Scrap states and related/control pages; visible input labels/units, result panels and footer present. Reviewed computed result/detail/label/unit/error contrast minimum **6.06:1**, above 4.5:1. No formula, result-text styling or layout change needed.
- Initial QA deliberately assigned invalid numeric strings in JavaScript, which produced three browser-native assignment warnings; this was corrected to real keyboard input in the QA harness and separately retained in the evidence. The local resource-console event was traced to `/favicon.ico`, reproduced in production and fixed as described above. A resize assertion raced the asynchronous media-query event; the QA harness now waits for the resulting menu state rather than changing healthy site navigation. Final rerun and production acceptance are recorded in the follow-up below.
- Owner-managed homepage suffix remains **1,731 characters, six links, six images**, unchanged href/src list and SHA-256 `957B86CBECD60D6D2FE57A7F2D203007B274E7007CACB059A129E2FD854E1521`; all six rendered badge images loaded. `index.html` has no diff.
- Final local rerun PASS: **159 renders / 30 distinct pages / 42 blank submissions / 65 recorded interaction groups**, zero console warnings/errors, failed resources, horizontal overflow, header/H1 or input-label overlap, detected clipping/off-screen controls, broken images and visible invalid result literals. MENU regression PASS. Contrast minimum6.06:1; badge list/hash unchanged.
- Deployment acceptance pending this record's final follow-up: exact implementation SHA Pages success, served shared JS/source equality, production 390/1024 rerun, closing documentation commit, remote-main/local/origin equality and clean status. Do not treat a push request alone as deployment acceptance.

## Next state (maximum three)

1. Observe Projected Area and Parts Per Hour with equally sized dated page/query windows after normal recrawl; do not overwrite their successful functional upgrades.
2. Compare this exact nine-URL Coverage cohort with the next current export; obtain Crawled-not-indexed export if that state needs measurement. Re-open old Type 4 only for a changed technical failure.
3. If there is no new technical defect or stronger existing functional gap next week, build the full current exclusion set and genuinely-new 40+ family discovery before selecting at most one expansion.
