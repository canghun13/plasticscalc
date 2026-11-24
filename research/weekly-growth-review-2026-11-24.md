# Weekly Growth Review — 2026-11-24

## Decision

**FIX — technical defect corrected: Shot Size mixed modeled molded-shot mass with a planning allowance.** One existing workflow, no new page, tool or cluster. The default now leads with **192 g molded shot mass** (180 g cavity parts plus 12 g ejected cold feed). **211.2 g** is shown separately as planning mass including **19.2 g** allowance. The allowance is not ejected material or a setting for the physical screw cushion.

## Repository and inventory

- Canonical checkout, `main`, start clean. Start local HEAD, cached origin/main and actual GitHub main all `88015f7cb2b2565522ead0e4506dee6cbeab68f9`. Actual remote checked before fetch; 0 ahead/0 behind, no pull. No installation, destructive command or full generator.
- **102 public HTML / 101 indexable and sitemap URLs / 63 tools**, unchanged. Film Testing remains the latest implemented cluster; Runner Volume is still the latest search-led feature upgrade. Existing Type 4 no-site-defect determination retained for the prior diagnosed cohort; do not infer a new index status from cohort absence.

## Five current reports (read-only)

| Source | Content and period |
| --- | --- |
| GSC Performance ZIP | Web, last three months, seven CSVs; August 22–November 21 (92 dates). |
| GSC Coverage ZIP | Discovered–currently not indexed, three CSVs; August 28–November 16 (81 dates). |
| GA4 overview CSV | October 27–November 23; distinct first-user and session attribution. |
| Bing Page Traffic CSV | 80 rows, internal period unavailable. |
| Bing Keyword CSV | 780 rows, internal period unavailable. |

All five exact attachments accessible. Read data only; no folder search, old export reuse, upload or spreadsheet edits. Coverage chart also imported with the bundled spreadsheet API to check date/count and record length (82 rows including header). Independent PowerShell aggregation reproduced GSC overall and both seven-day click/impression counts. Device totals: desktop 107/6,165, mobile 56/3,217, tablet 0/50. Date of download is not the data-through date.

## GSC and comparable periods

**163 clicks / 9,432 impressions / 1.7282% CTR / approximately 20.95 weighted position** (impression-weighted, reconstructed from rounded daily positions).

| Window | Impressions | Clicks | CTR | Approx. position |
| --- | ---: | ---: | ---: | ---: |
| November 8–14 | 850 | 11 | 1.2941% | 22.51 |
| November 15–21 | 898 | 17 | 1.8931% | 18.85 |
| Change | +48 (+5.65%) | +6 (+54.55%) | +0.5990 pp | 3.67 positions better |

November 18 review had 152/8,807/1.7259%/21.84, but the three-month window moved six days. This is not a weekly causal comparison. Aggregate queries/pages are not a dated join and disclosed query counts exclude some searches.

| Page | Current clicks / impressions / position | Prior written snapshot |
| --- | --- | --- |
| Projected Area | 54 / 2,479 / 6.80 | 49 / 2,280 / 7.11 |
| Injection hub | 13 / 940 / 38.92 | 14 / 946 / 40.52 |
| Scrap Rate | 9 / 1,138 / 10.41 | 7 / 1,021 / 10.59 |
| Parts Per Hour | 5 / 1,042 / 7.42 | 4 / 919 / 7.21 |
| Shot Size | 8 / 298 / 26.92 | 7 / 276 / 25.17 |
| Runner Volume | 4 / 167 / 9.26 | 4 / 158 / 8.72 |

Top query `projected area` 6/460/8.05 vs 6/419/8.67. Formula 70 impressions vs 65, diameter 50 vs 47. Scrap formula/how-to/calculation 50/50/48 impressions vs 49/47/46, all with zero disclosed clicks. Exact `injection molding shot size calculator` 1/16/3.62 vs 1/14/4.00. Exclude unrelated business/metal/school intent. The most recent Runner/Scrap data is aggregate and does not isolate an upgrade effect.

## Coverage, GA4 and Bing

- **Eight** discovered URL rows through November 16 (previous nine through November 13). Wall Thickness Uniformity dropped out of this issue's table; six Film URLs, Fill Time and Rib Design remain. This does not establish that the removed URL is indexed. Crawl dates 1970-01-01 are sentinel values. Crawled–currently not indexed not provided, not zero; no count-driven sitemap or content churn.
- GA4 **23 active / 20 new / 226 events / 64.74 s** average engagement per active user. Google 7 first-user active users/9 sessions; Bing 4/4, Yahoo 1/1, ChatGPT 2/2, direct 7/9. cn.bing.com 1/1 referral and Twelve.tools 1/1 directory separate from organic. GA4 windows overlap; first-user users and session attribution are not interchangeable. QA/direct traffic is not demand.
- Bing page **1,579 impressions/99 clicks/6.2698%**, keyword **1,245/99/7.9518%**. Non-additive, undated; no WoW. Page samples Projected 177/8, Shot 94/1, Parts Per Hour 50/2 (impressions/clicks).

## Technical proof and scope

- Live 390/1024 before: 45 g × 4 + 12 g and the 10% input produced `211.2 g per shot`, described as required shot including cushion; guide equated shot mass to the allowance-inflated value. Runner/sprue=0 and allowance=0 produced a correctly computed `180 g per shot` but on-page guidance contradicted it by claiming the shot must exceed all part mass. Shot Volume independently returned 189.47 cm³; computation outside Shot Size is not the defect. Last week's Masterbatch inactive fields remained hidden.
- The arithmetic for a percentage planning allowance was not itself wrong. The failure was combining the two meanings in the primary result and handoff. [Mold-Masters glossary](https://www.moldmasters.com/sites/default/files/2021-11/ENG%20TP%20UM.pdf) defines machine cushion as residual material in the barrel; [YIZUMI selection guidance](https://sg.yizumi.com/en/news/product/IMM/how-to-choose-screw-diameter-and-shot-size-for-an-injection-molding-machine) separately illustrates a planning multiplier. Do not adopt its generic sizing threshold, suggest a cushion setting, or claim this is machine approval.
- Changed only the Shot Size calculation/display path and the two directly conflicting handoffs (existing shot guide and Injection Molding hub text). Same four fields and defaults, relabel percentage as planning allowance; existing registry planning value is retained for compatibility. Distinguish parts, ejected cold feed, molded shot, and allowance. No hot-runner mass/setting assumptions or new material database. Positive whole cavity validation and existing Reset/error paths retained.
- Only the calculator gets the versioned shared-JS URL. The target-only finalizer is in the normal chain before the unchanged last Scrap finalizer; direct execution is byte-idempotent and only touches the intended three HTML files. All existing titles, H1s, canonicals, URLs, headers and footer suffixes retained. No CSS, robots or sitemap change.
- Owner post-footer suffix unchanged, six links/six images, canonical-CRLF SHA256 `957B86CBECD60D6D2FE57A7F2D203007B274E7007CACB059A129E2FD854E1521`. Fifteen live resources before matched original source, including all used shared core JS URLs; HTTP/www to HTTPS apex; Googlebot UA 200/self-canonical (not Search Console URL Inspection).

## Growth and expansion

Priority A wins. Parts Per Hour and Scrap Rate have substantial impressions, but theoretical rate and weighted batch/reject flows already exist; no new feature justified in this fix. Projected Area's existing rectangle/circle/CAD handoff remains. Competitor spot checks found existing free interactive tools (MachineCalcs and Tederic Benelux); no claim of a unique free SERP gap. No Priority B scoring or Priority C discovery. Historic implemented/HOLD/NO-GO boundaries are retained; a full refresh and 40 new families are required if expansion is pursued in a later week.

## QA and production

- All 29 regression suites and 61 JS/MJS syntax checks passed; verifier 102/101/zero issues. Six independent shot arithmetic/basis fixtures, page/guide/hub contract, existing positive-whole cavity cases preserved. No test removed or weakened. No temporary files committed.
- Local Edge **101 indexable pages / 341 viewport-state renders / 40 interaction groups**. Shot/guide six widths; remaining pages 390/1024/1440. Before/after 390 rendered workstation visually inspected. Default192/211.2, zero cold feed/allowance, changing allowance without changing physical mass, invalid/overflow rejection, Reset, tiny/large values and related/previous controls passed. Sampled target contrast **4.6776:1**; zero monitored console/resource/overflow/offscreen/target field overlap-clipping issues; six loaded badges; fresh Decline/no analytics. This matrix preceded the two hub copy-only edits; final hub included in production sweep.
- Runtime commit `985aa6158cce46c0af646e42a779b9890d65cce3` pushed to main; exact-SHA [Pages run 45300583385](https://github.com/canghun13/plasticscalc/actions/runs/45300583385) completed successfully. **16 actual resources** returned 200/HTTPS apex and matched source, including all five core JS URL forms, target/guide/hub, homepage, robots and unchanged sitemap. Waited for success and actual source match, not CI alone.
- Actual production Edge **101 indexable pages / 242 viewport-state renders / 40 interaction groups PASS**. Six widths on calculator/guide, 390/1024 on all 99 controls including the updated hub. The 390 and 1024 target screenshots were visually inspected. Confirmed the separate 192/211.2 results, zero runner/zero allowance, invalid/overflow/stale-result clearing, tiny/large values, Reset, MENU and measured target contrast **4.6776:1**. No monitored warnings/errors, resource failures, overflow, offscreen or target-field overlap/clipping. Shot Volume/Runner/Cycle/Masterbatch/Parts controls passed, owner badges 6/6 loaded, fresh Decline/no analytics. QA browsers and owned local server closed.
- Operationally ready. Closing documentation-only commit records production acceptance; final exact-SHA Pages and clean local/origin/actual equality are verified in the completion report.

## Next state

1. Preserve separate physical-shot and planning-mass basis; verify the handoff to Shot Volume and machine documentation rather than applying a universal cushion percentage.
2. Compare dated Runner/Scrap/Projected evidence where available; do not infer effect from overlapping exports.
3. Follow the actual eight-URL discovered cohort. Confirm Wall Thickness Uniformity separately only with dated URL Inspection or another state export.
