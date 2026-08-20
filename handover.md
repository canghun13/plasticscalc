# PlasticsCalc — Project Handover

> This file is the operational source of truth for continuing development.
> Any developer or AI coding agent must read this file before starting work and update it before ending a work session.

---

## 1. Project Identity

- Project name: **PlasticsCalc**
- Domain: `https://plasticscalc.com`
- Repository name: `plasticscalc`
- Primary site language: English
- Initial niche: **Plastic Injection Molding Tools**
- Long-term niche: **Plastics Processing Tools**
- Hosting target: GitHub Pages
- DNS / domain layer: Cloudflare
- Architecture: Static HTML / CSS / JavaScript
- Database: None
- User accounts: None
- Paid service / checkout: None

---

## 2. Core Strategy

PlasticsCalc will start as a focused injection-molding calculator site and later expand into broader plastics-processing categories.

Initial positioning:

> Practical, fast, free calculators and engineering references for injection molding and plastics processing.

The site should not become a generic calculator directory.

The priority is to build topical authority in a specialized manufacturing niche using:

- Practical calculators
- Engineering formulas
- Worked examples
- Material-specific references
- Process guides
- Strong internal linking
- Long-tail SEO pages

---

## 3. Initial Topic Priority

### Phase 1 — Injection Molding

Focus approximately 80% of early content and tools on injection molding.

Priority calculator groups:

#### Machine Sizing
- Clamp Tonnage Calculator
- Shot Size Calculator
- Shot Weight Calculator
- Shot Volume Calculator
- Injection Capacity Calculator
- Screw Volume Calculator
- Screw Stroke Calculator
- Projected Area Calculator
- Machine Utilization Calculator
- Injection Pressure Conversion Calculator

#### Process
- Injection Molding Cycle Time Calculator
- Cooling Time Calculator
- Fill Time Calculator
- Injection Time Calculator
- Holding Time Calculator
- Screw Recovery Time Calculator
- Residence Time Calculator
- Production Rate Calculator
- Parts Per Hour Calculator
- Parts Per Shift Calculator

#### Mold
- Cavity Count Calculator
- Runner Weight Calculator
- Runner Volume Calculator
- Sprue Volume Calculator
- Mold Shrinkage Calculator
- Draft Angle Calculator
- Cooling Channel Flow Calculator
- Cooling Water Requirement Calculator
- Mold Opening Stroke Calculator

#### Materials
- Resin Weight Calculator
- Volume-to-Weight Calculator
- Density Conversion Calculator
- Material Consumption Calculator
- Masterbatch Ratio Calculator
- Regrind Percentage Calculator
- Scrap Material Calculator
- Material Cost Calculator

#### Production
- OEE Calculator
- Yield Calculator
- Scrap Rate Calculator
- Downtime Calculator
- Machine Utilization Calculator
- Shift Production Calculator
- Annual Production Capacity Calculator
- Cycle Time Savings Calculator

#### Costing
- Injection Molding Part Cost Calculator
- Material Cost Per Part Calculator
- Machine Cost Per Part Calculator
- Labor Cost Calculator
- Energy Cost Per Part Calculator
- Mold Amortization Calculator
- Tooling Cost Per Part Calculator
- Break-even Quantity Calculator
- Scrap Cost Calculator

Do not create duplicate tools merely to inflate page count.

---

## 4. Long-Term Expansion

After injection molding has sufficient depth, expand in this order unless later research changes the priority:

1. Injection Molding
2. Plastic Materials
3. Extrusion
4. Blow Molding
5. Thermoforming
6. Production / Quality / Costing

The brand and URL structure should remain broad enough to support all of these categories.

---

## 5. Recommended Site Structure

```text
/
├─ index.html
├─ tools/
│  ├─ injection-molding/
│  ├─ extrusion/
│  ├─ blow-molding/
│  ├─ thermoforming/
│  ├─ materials/
│  └─ production/
├─ blog/
├─ assets/
│  ├─ css/
│  ├─ js/
│  └─ icons/
├─ partials/
│  ├─ header.html
│  └─ footer.html
├─ privacy.html
├─ robots.txt
├─ sitemap.xml
├─ llms.txt
├─ README.md
└─ handover.md
```

The exact structure may be adjusted during implementation, but URLs should remain simple, stable, and SEO-friendly.

---

## 6. Page Template Requirements

Every calculator page should ideally include:

1. Unique SEO title
2. Unique meta description
3. One clear H1
4. Short practical introduction
5. Calculator UI
6. Formula / calculation method
7. Input definitions and unit notes
8. Worked example
9. Result interpretation
10. Assumptions / limitations
11. FAQ
12. Related calculators
13. Relevant internal links
14. Disclaimer where appropriate

Calculator pages must provide useful content beyond the calculator UI itself.

---

## 7. Engineering Accuracy Rules

Accuracy is a critical project requirement.

Before publishing any calculator:

- Verify the formula using reputable engineering or manufacturer references.
- Confirm all unit conversions.
- Test normal, minimum, maximum, zero, and invalid inputs.
- Clearly state assumptions.
- Avoid pretending that simplified formulas replace machine-maker data, moldflow simulation, process validation, or professional engineering judgment.

Where appropriate, include wording similar to:

> Results are provided for estimating and educational purposes. Actual machine, mold, material, and process requirements may vary. Verify critical decisions using manufacturer data, validated process information, and qualified engineering review.

Do not copy proprietary tables or copyrighted reference content.

---

## 8. SEO Rules

### Required

- Static, crawlable HTML pages
- Unique titles and descriptions
- Clean canonical URLs
- Valid sitemap.xml
- Valid robots.txt
- llms.txt
- Internal links between related tools and articles
- Breadcrumbs where useful
- FAQ content only when genuinely useful
- Consistent headings
- Fast loading
- Mobile-friendly layout

### Avoid

- Mass-producing near-duplicate calculator pages
- Keyword stuffing
- Thin programmatic pages with only swapped material names
- Canonical changes without careful review
- JavaScript-only critical SEO content
- Broken internal links
- Orphan pages

Before making large SEO-wide changes, especially canonical or URL changes, record the reason in this file first.

---

## 9. Design Direction

The site should feel:

- Technical
- Clean
- Fast
- Professional
- Practical
- Trustworthy

Avoid unnecessary stock images.

Prefer:

- Simple icons
- Tables
- Formula blocks
- Input cards
- Result cards
- Technical diagrams only when they materially improve understanding

The project should remain usable without relying on image-heavy content.

---

## 10. Monetization Direction

Primary:

- Google AdSense after traffic and content quality are sufficient

Possible future secondary monetization:

- Relevant affiliate programs
- B2B software referrals
- Plastics-processing equipment / supplier partnerships
- Direct sponsorships

Do not compromise tool usefulness or trust for monetization.

Do not add intrusive ad placements during early development.

---

## 11. Development Workflow

At the start of every work session:

1. Read this entire `handover.md`.
2. Inspect repository status.
3. Review recent commits.
4. Confirm the current production/development state.
5. Continue from `NEXT ACTIONS`.

During work:

- Make logical, reviewable changes.
- Avoid unrelated refactors.
- Test changed calculators.
- Validate links and paths.
- Keep SEO metadata consistent.

At the end of every work session:

1. Update `CURRENT STATUS`.
2. Update `COMPLETED WORK`.
3. Update `OPEN ISSUES`.
4. Update `NEXT ACTIONS`.
5. Record important decisions.
6. Commit and push all intended changes.
7. Confirm the repository is left in a clear state.

---

## 12. CURRENT STATUS

### Project Status

- Domain selected: `plasticscalc.com`
- Project concept approved
- Repository planned: `plasticscalc`
- README prepared
- Handover document prepared
- Development has not yet been initialized in this handover baseline

### Initial Focus

Start with Plastic Injection Molding.

Do not immediately attempt hundreds of pages.

First establish:

- Core layout
- Reusable calculator architecture
- Navigation
- SEO page template
- 10–20 high-priority calculators
- Internal-link structure
- Accuracy-validation process

Then scale.

---

## 13. COMPLETED WORK

- [x] Niche research completed
- [x] Plastic Injection Molding / Plastics Processing selected
- [x] Domain selected: `plasticscalc.com`
- [x] Long-term expansion direction defined
- [x] Initial calculator categories defined
- [x] Repository name defined: `plasticscalc`
- [x] README.md baseline prepared
- [x] handover.md baseline prepared

---

## 14. NEXT ACTIONS

Recommended next sequence:

1. Create GitHub repository `plasticscalc`.
2. Initialize Git and project structure.
3. Add `README.md` and `handover.md`.
4. Create base HTML/CSS/JS architecture.
5. Create reusable header/footer partials.
6. Build homepage structure.
7. Define calculator-page reusable template.
8. Research and prioritize the first 20 calculators.
9. Verify formulas and trusted reference sources.
10. Implement the first 5 calculators.
11. Test desktop/mobile behavior.
12. Add robots.txt, sitemap.xml, llms.txt, and privacy page.
13. Configure GitHub Pages.
14. Connect `plasticscalc.com`.
15. Add Search Console and Analytics when deployment is live.

---

## 15. OPEN ISSUES

None yet.

Future issues should be recorded here with:

- Problem
- Affected files/pages
- Cause if known
- What has already been tried
- Recommended next step

---

## 16. IMPORTANT DECISIONS LOG

### Decision 001 — Niche

**Decision:** Build around Plastic Injection Molding first, but keep the brand broad enough for all plastics processing.

**Reason:** Injection molding has strong calculator depth, B2B commercial value, long-tail SEO potential, limited image dependency, and lower regulatory risk than drone/aviation niches.

### Decision 002 — Domain

**Decision:** Use `plasticscalc.com`.

**Reason:** Short, memorable, clearly related to plastics calculations, and broad enough for injection molding, extrusion, blow molding, thermoforming, materials, and production tools.

### Decision 003 — Architecture

**Decision:** Static HTML/CSS/JavaScript with GitHub Pages and no database.

**Reason:** Low maintenance, low hosting complexity, strong crawlability, easy deployment, and compatibility with the existing portfolio strategy.

### Decision 004 — Development Continuity

**Decision:** `handover.md` must be maintained continuously.

**Reason:** Development may move between sessions, devices, and AI coding agents. The repository itself must contain enough context to resume work safely.

---

## 17. SESSION LOG

Add new entries at the top.

### 2026-08-20 — Existing-asset growth review: OBSERVE / NO-GO without first-party search evidence

- Repository and baseline: canonical clone `C:\Users\cangh\OneDrive\문서\plasticscalc-source`, remote `https://github.com/canghun13/plasticscalc`, clean `main` at start commit `917c8c3d27cabcb7b0fa6402c545471fb32751cf`. The session checked actual remote main with `git ls-remote`, fetched `origin/main`, and applied a safe `git pull --ff-only`; local `HEAD` and `origin/main` then matched. Baseline verification reported **89 public HTML files, 88 indexable pages / 88 sitemap URLs, and 52 registered tools**, with no metadata, canonical, internal-link, sitemap, registry, or loader issue.
- Data availability and date: as of **2026-08-20**, no Google Search Console Performance/Coverage export, GA4 landing-page export, Bing export, keyword report, or page-traffic export was present in the repository, current working directory, supplied attachments, or explicitly retained project files. The GA4 tracking ID in production code is not traffic evidence. No impressions, clicks, CTR, rank, sessions, or user behavior were inferred.
- Scope protection: the recent Mold Cooling & Thermal Control, Process Validation & Stability, Energy Measurement & Efficiency, and Part Design & DFM clusters were excluded. The 2026-08-20 new-workflow NO-GO candidates were not reopened. This review considered only established calculator assets and did not change titles, H1s, formulas, UI, CSS, internal links, registry, sitemap, or generated pages.
- Current SERP review opened the principal results rather than relying on result titles. Searches covered `injection molding runner volume calculator`, `injection molding clamp tonnage calculator`, `injection molding cycle time calculator`, `injection molding shot size calculator`, `plastic regrind percentage calculator`, `injection molding OEE calculator`, and exact-site variants for the inspected PlasticsCalc URLs. The general PlasticsCalc homepage appeared for a broad site query, but the inspected individual Runner Volume, Cycle Time, Clamp Tonnage, and Shot Size URLs were not surfaced as candidate-specific results in the reviewed result sets. This is a limited SERP observation, not an indexing diagnosis.
- Opened competitor evidence: [Pleasant Precision Runner Calculator](https://teamppi.com/runner-calculator/) supports multiple full-round and trapezoid segments plus sprue totals; [Calcimator Cycle Time Calculator](https://calcimator.com/calculators/manufacturing/cycle-time-molding) separates fill, pack, cooling, mold motion, ejection, and robot delay and reports cycles/hour and cycles/shift; [Mech Codex Clamp Tonnage](https://mechcodex.com/calculators/manufacturing/clamp-tonnage) exposes multiple sizing methods and machine screening; [MachiningCalc Shot Size](https://machiningcalc.com/en/shot-size) combines weight, melt volume, and throughput; and the [University of Tennessee MEP OEE Calculator](https://tmep.cis.tennessee.edu/oee-calculator) accepts raw shift evidence and exposes Availability, Performance, Quality, and the lowest driver. These pages demonstrate current tool intent and the possible utility gaps, but they do not establish that the corresponding PlasticsCalc page already has impressions or users.
- Shortlist and scoring (Search/Growth 35 + User Value 25 + Evidence Strength 20 + Existing Asset Leverage 10 + Implementation Efficiency 10):

  | Candidate existing-asset upgrade | Growth | User | Evidence | Leverage | Efficiency | Total |
  | --- | ---: | ---: | ---: | ---: | ---: | ---: |
  | Runner Volume: multiple circular/trapezoid segments and aggregate result | 28 | 23 | 11 | 10 | 7 | **79** |
  | Clamp Tonnage: improve press-screen result context without changing the established pressure formula | 29 | 21 | 10 | 10 | 8 | **78** |
  | Cycle Time: separate physical cycle events and expose non-overlapping output context | 27 | 22 | 10 | 10 | 8 | **77** |
  | Shot Size: connect complete-shot mass to melt-volume and injection-unit evidence more directly | 27 | 21 | 10 | 10 | 8 | **76** |
  | OEE Capacity: accept raw shift records and show A/P/Q loss-driver decomposition | 24 | 23 | 10 | 9 | 7 | **73** |

- Candidate evidence and risk:
  - **Runner Volume** has the clearest functional gap: PlasticsCalc explicitly calculates one circular runner diameter and one total length, while the opened competitor handles several runner sections, trapezoids, and a sprue total. The upgrade would be measurable through segment add/remove, profile formulas, aggregate volume, and unit tests. However, the result set does not prove that the existing page receives impressions, and implementing dynamic rows/profile modes would alter a stable Phase 3 calculator for a feature already supplied by a specialist competitor.
  - **Clamp Tonnage** has strong recurring calculator intent and recent shop-floor questions about projected area and pressure basis. PlasticsCalc already gives a cautious cavity-pressure calculation, links to projected area, and keeps fit checks separate. Competitors provide richer presets and press suggestions, but adopting generic material factors or universal utilization targets would weaken the current evidence boundary. With no page-level search data, the safer page is not clearly underperforming.
  - **Cycle Time** has clear calculator intent, and competitors expose additional events and throughput. PlasticsCalc already states the cycle-boundary problem and links to dedicated Cooling Time, Parts Per Hour, and Cavity Count tools. Adding plasticizing, robot, or delay fields without a proven landing query risks double-counting concurrent events and duplicating the existing workflow.
  - **Shot Size** is a repeated practical query and competitors combine shot mass, melt volume, barrel use, and throughput. PlasticsCalc deliberately separates Shot Size, Shot Volume, Injection Unit Utilization, Residence Time, and Resin Purchase Quantity so each input basis remains explicit. No first-party query family shows that users fail to follow that workflow, so collapsing those decisions now would be speculative.
  - **OEE Capacity** could provide more value by deriving A/P/Q from raw shift evidence rather than requiring precomputed percentages. The opened university tool confirms that user workflow, but the SERP is dominated by general manufacturing OEE tools, not injection-specific capacity pages, and there is no PlasticsCalc landing evidence. A dedicated raw-record redesign is larger than a low-risk content clarification.
- Hard Gates:

  | Candidate | A Evidence | B User benefit | C Measurable | D Low regression risk | E Better now than observe | Decision |
  | --- | --- | --- | --- | --- | --- | --- |
  | Runner Volume segments/profiles | PASS (SERP + observable page gap) | PASS | PASS | HOLD | **FAIL** | OBSERVE |
  | Clamp Tonnage decision support | PASS (SERP + observable competitor gap) | PASS | PASS | PASS | **FAIL** | OBSERVE |
  | Cycle Time event breakdown | PASS (SERP + observable result gap) | PASS | PASS | HOLD | **FAIL** | OBSERVE |
  | Shot Size workflow consolidation | PASS (SERP + observable workflow gap) | PASS | PASS | HOLD | **FAIL** | OBSERVE |
  | OEE raw-record decomposition | PASS (SERP + observable input gap) | PASS | PASS | HOLD | **FAIL** | OBSERVE |

- Final decision: **OBSERVE / NO-GO**. The highest candidate is Runner Volume multi-segment/profile support at **79/100**, below the approximate 80-point GO threshold. Its decisive failure is Gate E: without GSC/GA4 page-level evidence, no repeated PlasticsCalc query family, and no reproduced user-blocking defect, current SERP competition plus a possible feature gap is not enough to show that changing a correct stable tool is better now than observing. No score was rounded up.
- Next signals that can convert OBSERVE to GO: a GSC export showing repeated runner-volume/profile/segment queries or 10–30 position impressions to the existing Runner Volume URL; GA4 organic entrances followed by immediate exits or no related-tool continuation; user reports asking for trapezoid or multi-segment totals; or a reproducible calculator defect. For Clamp, Cycle, Shot, or OEE, require the same page-level query clustering or direct user evidence before changing stable formulas or workflow boundaries.
- Production changes: **0**. No production HTML, CSS, JavaScript, generator, calculator, formula, registry, loader, sitemap, metadata, navigation, analytics, footer, or owner-managed directory badge content changed. This handover entry is the only repository change for the session. Browser QA was not triggered because no production file or rendered component changed.
- Final automated checks: `verify.mjs` passed with 89 HTML / 88 indexable / 88 sitemap URLs and zero issues. All 13 existing test files passed: registry 52/52, legacy calculators 33, calculator UI 52 pages, consent, content value, DFM 12 cases, energy 12 cases, markup 89 pages, mobile header 89 pages, pre-expansion audit, thermal 45 cases, validation 32 cases, and validation contrast. Every repository JavaScript file passed `node --check`, and `git diff --check` passed.
- Remaining risk: **HIGH none**. **MEDIUM:** there is no first-party GSC/GA4 export to prioritize existing pages, and reviewed search results did not surface the inspected individual calculator URLs. These are evidence/observation gaps, not confirmed technical or indexing defects. PlasticsCalc remains operationally ready on the unchanged production baseline.

### 2026-08-20 — New-workflow discovery: NO-GO after hot-runner electrical diagnostic review

- Repository and baseline: canonical clone `C:\Users\song\Documents\ChatGPT\plasticscalc\canonical`, remote `https://github.com/canghun13/plasticscalc.git`, clean `main` at start commit `eaa5e178c90ad32327971549ecfeafc8edd0af4f` after `git ls-remote`, `git fetch origin main`, and a safe `git pull --ff-only`. Local `HEAD`, `origin/main`, and actual remote main matched before discovery. Baseline verification reported **89 public HTML files, 88 indexable pages / 88 sitemap URLs, and 52 registered tools**, with no metadata, canonical, link, or sitemap issue.
- Recent exclusion list was established before searching. Implemented clusters excluded: Mold Cooling & Thermal Control; Process Validation & Stability; Energy Measurement & Efficiency; Injection Molding Part Design & DFM Feature Screening. Previously reviewed families excluded in full: Material Drying/Moisture; Machine Pressure/Process Transfer/Intensification; Runner/Gate Flow; Process Capability/SPC; Mold Venting/Air Traps; Screw/Barrel/NRV Condition; Mold PM; Robot/EOAT; Purge/Changeover; Production Campaign Scheduling; Granulator/Regrind Operations; Material Conveying/Hopper Logistics; Insert Molding; Hydraulic Leakage Economics; Mold Steel/Surface Capability; Prototype/Bridge Route; Dimensional Inspection/Conditioning; Plastic Joining/Secondary Assembly; Resin Substitution; Molded Marking; Hot-Runner Compatibility; Ejection Planning; Post-Mold Conditioning; Pneumatic Accessory Planning; and Packaging Handoff. Alias candidates and workflows with the same user decision were not reconsidered.
- Broad discovery produced **13 genuinely different candidate families** from new shop-floor actions rather than recent formula neighbors:
  1. **Molding-defect symptom-to-next-check troubleshooting** — process technician; classify an observed short shot/flash/sink/burn pattern and choose the next controlled check; representative query `injection molding short shot troubleshooting tool`; Troubleshooter; potentially 5–8 defect-specific tools; low formula overlap but some validation/DFM/venting adjacency.
  2. **Hot-runner electrical commissioning and zone diagnostics** — tooling or qualified electrical technician; interpret de-energized heater/thermocouple measurements, verify zone mapping, and screen controller loading; `hot runner heater resistance thermocouple troubleshooting`; Checker/Analyzer/Planner; 4–5 possible tools; distinct from the previously rejected component-compatibility/selection workflow, but adjacent to general mold maintenance.
  3. **Nozzle-to-sprue interface setup** — setup technician; check radius, orifice, alignment evidence, and release-risk inputs before startup; `injection molding nozzle tip radius sprue bushing compatibility`; Compatibility checker; only 1–3 credible tools; overlaps existing runner/sprue and DFM context.
  4. **Approved setup-sheet and process-change handoff** — process technician/shift lead; capture the released machine/mold/material state and subsequent changes; `injection molding process setup sheet template`; local Generator/Comparator; 3–4 possible records; distinct from process validation math but could collapse into one document workflow.
  5. **Mold-transfer documentation package** — contract molder/tooling engineer; determine whether a received tool has the machine, process, quality, spare, and revision evidence needed for transfer; `injection mold transfer checklist setup sheet`; Checker/Generator; 2–4 possible artifacts; machine-fit pieces overlap existing fit calculators and the remainder is mostly document completeness.
  6. **Shift handoff and production-closeout record** — operator/shift lead; carry current output, downtime, deviations, material status, and unresolved actions to the next crew; `manufacturing shift handover production log`; local Generator; 2–3 possible reports; little calculator overlap but strongly generic and template-led.
  7. **Mold/cell utility-connection readiness** — setup technician; reconcile electrical, cooling, hydraulic, air, connector, and interference requirements before hookup; `injection molding cell utilities checklist`; Planner/Compatibility checker; 3–4 possible records; cooling, energy, conveying, and pneumatic portions overlap excluded or implemented workflows.
  8. **In-mold pressure/temperature sensor selection and placement** — mold designer/process engineer; choose direct/indirect/contactless sensing and a measurement location for the quality objective; `injection molding cavity pressure sensor placement`; Selector; 2–4 possible screens; distinct user decision, but geometry, FEA, and supplier product data are decisive.
  9. **Cavity-level defect mapping and inspection allocation** — quality technician; identify whether defect burden is concentrated by cavity and decide where to sample next; `multi cavity injection molding defect analysis`; Analyzer/Visualizer; 3–4 possible modes; overlaps cavity-balance, repeatability, scrap, and excluded SPC workflows.
  10. **First-article report generation** — quality technician; turn drawing-characteristic measurements into an initial approval record; `injection molding first article inspection report generator`; local Generator/Checker; 2–3 possible tools; the recent dimensional-inspection family is excluded and strong generic FAI tools already exist.
  11. **Material-lot genealogy and traceability record** — operator/quality technician; connect resin/masterbatch/regrind lots, machine, mold, cavity, time, and finished-part lot; `injection molding material lot traceability record`; local Generator/Completeness checker; 2–4 possible records; distinct from dosage math but depends on facility-specific identifiers and QMS retention rules.
  12. **Mold lifting and handling pre-plan** — tooling/setup technician; estimate sling loads, center-of-gravity effects, clearance, and required verification before moving a mold; `injection mold lifting sling angle calculator`; Planner/Visualizer; 3–4 generic rigging calculations; safety-critical and already served by stronger general rigging tools and site procedures.
  13. **Mold shutdown/restart and preservation handoff** — operator/setup technician; tailor a closeout/restart sequence to the resin, idle duration, hot runner, auxiliaries, and storage state; `injection molding machine shutdown startup checklist`; Planner/Generator; 2–3 credible tools; much of the workflow is vendor/material purging or excluded PM/post-mold conditioning.
- First filter removed mold transfer, shift handoff, utility readiness, sensor selection, cavity mapping, FAI, lot genealogy, lifting, and shutdown/restart from the shortlist. Their main limitations were static checklist output, fewer than four independent tools, recent-family overlap, proprietary geometry/product data, regulation/safety dependence, or much stronger generic software. Five candidates received full scoring (Monetization 40 / Search-Traffic 35 / Competition Gap 25): **Hot-Runner Electrical Commissioning & Diagnostics 79/100 (34/26/19); Molding-Defect Troubleshooting 78/100 (32/31/15); Setup Sheet & Process-Change Handoff 75/100 (32/27/16); Nozzle–Sprue Interface Setup 73/100 (31/25/17); Molded-Color & Appearance Measurement 71/100 (28/28/15)**.
- Hard Gate A–I results:

  | Candidate | A Demand | B 4 tools | C Distinct | D Gap | E Deterministic | F Static | G Maintain | H Coherent | I Actionable | Decision |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | Hot-runner electrical diagnostics | PASS | **FAIL** | PASS | HOLD | **FAIL** | HOLD | HOLD | PASS | PASS | REJECT |
  | Defect troubleshooting | PASS | PASS | PASS | **FAIL** | **FAIL** | PASS | HOLD | PASS | PASS | REJECT |
  | Setup/change handoff | PASS | **FAIL** | PASS | **FAIL** | PASS | PASS | PASS | PASS | PASS | REJECT |
  | Nozzle–sprue interface | PASS | **FAIL** | HOLD | PASS | HOLD | PASS | PASS | HOLD | PASS | REJECT |
  | Color/appearance measurement | PASS | **FAIL** | PASS | **FAIL** | PASS | PASS | PASS | HOLD | PASS | REJECT |

- **Hot-runner electrical demand, long-tail, depth, and failure:** queries included `hot runner heater resistance calculator`, `hot runner thermocouple continuity test`, `hot runner insulation resistance test`, `hot runner zone mapping test`, `hot runner controller load amps per zone`, `heater open short troubleshooting`, and `hot runner zone not reaching setpoint`. Current molding discussions ask about mismatched zone/thermocouple cables, cold-zone reading differences, additional zone loads, open heater circuits, and rising nozzle temperature. OEM evidence is strong: [Mold-Masters' manual](https://www.moldmasters.com/sites/default/files/2024-03/ENG%20HR%20UM.pdf) gives `R = V²/P`, directs comparison against the General Assembly drawing, gives its own 2.5–25 ohm thermocouple range, and requires one-zone-at-a-time response verification; [Mastip's installation procedure](https://mastip.com/media/4211/hot-runner-installation-procedure.pdf) gives a different 1–15 ohm thermocouple range, a supplier-specific 2 megaohm minimum using an insulation meter, and a below-50 °C zone-mapping procedure. Potential tools were heater expected-vs-measured resistance, controller zone/bank load, thermocouple continuity, insulation resistance, and zone-response mapping. After specification review, only resistance/load arithmetic was a robust standalone web tool. Continuity/insulation boundaries are supplier and assembly specific, the correct heater reading comes from each hot-half drawing, and the physical tests require de-energization, qualified personnel, meters, and OEM procedures. Splitting several range checks out of one commissioning record would inflate Tool count rather than create four independent decisions. Gate B and E therefore fail.
- Actual hot-runner competition was opened, not inferred from result titles. Fast Heat's [MoldXChecker manual](https://www.dme.net/wp-content/uploads/TechnicalGuides/MXC_Operators_Manual.pdf) shows dedicated hardware that directly tests heater/thermocouple resistance, opens, shorts, ground faults, and every zone; controller catalogs such as [DME hot-runner controls](https://www.dme.net/wp-content/uploads/PDFCatalogs/HotRunnerControlSystems.pdf) already detect little/no heat rise, pinched thermocouples, heater wiring, fuse, and zone-temperature faults. A generic free [heater-resistance calculator](https://calculator.academy/heater-resistance-calculator/) already supplies `R = V²/P` and `I = P/V`; DME publishes controller power worksheets. A vendor-neutral browser worksheet would be account-free, mobile, and useful for recording measurements, but it cannot replace the correct drawing limits, the measuring hardware, or the controller's live diagnosis. That is not a strong enough independent-visit reason for a four-tool cluster.
- **Defect-troubleshooting demand, long-tail, and competition:** queries covered `short shot troubleshooting before mold modification`, `injection molding flash at parting line causes`, `sink over boss process or design`, `burn mark venting or speed`, `black specks material degradation`, `cold slug/nozzle drool`, multi-cavity/localized/global symptoms, and startup versus stable-production defects. Recent forum threads repeat these problems and ask what to check next. However, BASF's opened [Injection Molding Troubleshooter](https://plastics-rubber.basf.com/asiapacific/en/performance_polymers/services/product_support_troubleshooting/injection_moulding_troubleshooter) supplies initial advice across weld lines, burning, black specks, sink, demolding, jetting, gloss, flash, cold slug and more, backed by material/design data and expert support. [MoldMind](https://moldmind.org/) advertises a free AI defect-analysis workflow across flash, warpage, sink, short shots, burn marks and flow lines, while i-Moulder and numerous OEM/material troubleshooting matrices cover similar scopes. Four defect pages are possible, but deterministic evidence-based priority changes with material grade, mold geometry, cavity location, machine limit, history, and direct observations. A static tool must either reproduce a crowded guide matrix or overstate root-cause confidence. Gate D and E fail.
- **Setup/change-handoff demand, long-tail, and competition:** queries included `injection molding process setup sheet`, `machine specific setup sheet`, `process change log`, `mold transfer setup sheet`, `shift process change handoff`, `approved molding condition record`, `resin lot setup traceability`, and `startup signoff template`. Community reports describe binders, missed night-shift changes, revision logs, and daily shift reports. The opened [MangoApps setup-sheet template](https://www.mangoapps.com/templates/forms/injection-molding-process-setup-sheet-2) already captures job/mold/machine, resin lot, barrel zones, pressure, speed, shot, hold, cooling, cycle, approval, operator verification, and notes. [RJG The Hub for Mold Transfer](https://rjginc.com/new-mold-transfer-application-on-the-hub/) adds asset databases, compatible-machine recommendations, universal and machine-specific setup sheets, automatic generation, revision history, analytics, and exports. Smartsheet/Jotform also provide free generic handoff forms. A private browser-local export is a reasonable convenience, but setup sheet, change log, shift handoff, and transfer package are one document-control suite rather than four strong independent tools; without server storage or revision control it is weaker than the alternatives. Gate B and D fail.
- **Nozzle–sprue interface demand, long-tail, and competition:** query variants included nozzle radius versus bushing radius, nozzle orifice smaller than sprue entry, cold-sprue sticking, nozzle drool/stringing, standardizing tip radii, hot-sprue versus cold-sprue interfaces, and setup after a tool transfer. Technical sources do not support four universal decisions: published guidance differs between equal radii and a nozzle radius 0.5–1.0 mm smaller than the bushing, while orifice, material, tip style, thermal behavior, contact condition, alignment, and machine/mold drawings remain application-specific. One useful radius/orifice screen could exist, but the other ideas become troubleshooting advice or overlap existing runner/sprue, DFM, and rejected hot-runner compatibility work. Gate B fails and C/E remain HOLD.
- **Color/appearance demand, long-tail, and competition:** queries included `plastic delta E calculator`, `CIEDE2000 molded part color tolerance`, `multi cavity mold color variation`, `master versus production Lab values`, `lot to lot color drift`, `delta L delta a delta b interpretation`, and instrument-versus-visual acceptance. SABIC explains delta-L/a/b and delta-E for production color control, and recent cavity-color discussions show real measurement disputes. But opened free tools such as [Aback Tools CIEDE2000](https://abacktools.com/tools/design/color-tools/color-difference-calculator) already run locally without signup, compute the full formula, show Lab breakdown, presets, interpretation and a visual comparison; 3NH and several other free calculators expose multiple Delta-E methods. For professional molded-part inspection, the spectrophotometer/quality software already carries illuminant, observer, geometry, tolerance, calibration, sample preparation and customer specification. Multi-cavity, lot, and drift views all reuse the same pairwise formula and belong in one analyzer mode, not four independent tools. Gate B and D fail.
- Independent-site Gate conclusion: every shortlist had a plausible convenience argument—vendor-neutral inputs, no account, local processing, mobile access, and visible limitations—but none retained a defensible reason to visit PlasticsCalc for **four** separate repeat decisions after full competitor and source review. The highest candidate remained below 80/100 and failed two hard gates. No score was rounded up and no adjacent recent candidate was renamed to manufacture a GO.
- Final decision: **NO-GO**. Highest candidate: Hot-Runner Electrical Commissioning & Diagnostics at 79/100. Decisive failures: fewer than four strong independent web-tool decisions after consolidation (Gate B) and inability to issue safe universal PASS/FAIL boundaries without the exact OEM/hot-half drawing, qualified electrical procedure, and physical diagnostic equipment (Gate E). Long-tail was decomposed through measurement, mapping, load, failure symptom, setup, controller, and comparison intent before rejection. Production changes are **0**: no HTML, CSS, JavaScript, generator, registry, loader, sitemap, navigation, calculator, guide, or existing content changed. Only this discovery handover entry is intended for commit. This discovery cycle is closed.

### 2026-08-14 — Injection Molding Part Design & DFM Feature Screening cluster

- Repository and baseline: `C:\Users\cangh\OneDrive\문서\plasticscalc-source`, canonical remote `https://github.com/canghun13/plasticscalc`, clean `main` at `ccd5a5ed51f478549e19964d31e3103c2e0b9a2e` after `git fetch origin main` and `git pull --ff-only`. Before discovery, local `HEAD`, `origin/main`, and `git ls-remote origin refs/heads/main` matched. Discovery date: 2026-08-14. Before work: 82 public HTML files, 81 indexable/sitemap URLs, and 48 registered calculators/tools.
- Exclusion source of truth: the recent handover records already implemented Mold Cooling/Thermal Control, Process Validation/Stability, and Energy Measurement/Efficiency, and already reviewed Material Drying/Moisture, Machine Pressure/Transfer, Runner/Gate Flow, Process Capability/SPC, Mold Venting/Air-Trap, Screw/Barrel/NRV, Mold PM, Robot/EOAT, Purge/Changeover, campaign scheduling, granulator/regrind operations, conveying/hopper logistics, insert molding, and hydraulic leakage. None was renamed or recycled.
- Broad discovery covered 12 distinct families: **(1) part-design/DFM feature screening, (2) dimensional tolerance/conditioning inspection planning, (3) mold-steel and surface-capability selection, (4) prototype/bridge manufacturing-route planning, (5) packaging/pack-out/pallet handoff, (6) plastic joining and secondary assembly, (7) resin substitution/application compatibility, (8) molded marking/text/date-code manufacturability, (9) hot-runner zone/setup compatibility, (10) ejection-feature planning, (11) post-mold conditioning/storage/transport handoff, and (12) compressed-air/pneumatic accessory planning**. Pack-out was removed early because PackCalc already exposes a broad free packaging-tool suite; resin substitution and hot-runner selection require proprietary grade/component data; marking and ejection did not yield four independent tools outside the selected DFM workflow; compressed-air planning overlaps the new energy boundary and qualified equipment sizing.
- Shortlist scores using monetization 40 / search-traffic 35 / competition gap 25: **Part Design & DFM Feature Screening 87/100 (36/32/19); Mold Steel & Surface Capability 76/100 (34/25/17); Prototype & Bridge Route Planning 74/100 (33/27/14); Dimensional Inspection & Conditioning 72/100 (30/28/14); Plastic Joining & Secondary Assembly 69/100 (31/23/15)**.
- Gate A-G: **Part Design & DFM: PASS/PASS/PASS/PASS/PASS/PASS/PASS**. **Mold Steel: FAIL/PASS/PASS/PASS/PASS/FAIL/FAIL** because one current free selector already maps material/volume/finish to common steels and a neutral implementation would need maintained supplier-grade equivalence data. **Prototype/Bridge: PASS/PASS/FAIL/PASS/PASS/FAIL/FAIL** because quantity, price and lead-time conclusions depend on live supplier quotes and competing digital-quote workflows. **Dimensional Inspection: PASS/HOLD/FAIL/PASS/PASS/FAIL/PASS** because customer/standard/material-conditioning rules are case-specific, tolerance tools already exist, and parts overlap existing shrinkage/validation decisions. **Plastic Joining: FAIL/PASS/FAIL/PASS/PASS/HOLD/PASS** because material compatibility, horn/fixture, amplitude, joint geometry and weld limits remain OEM/application-trial dependent and four defensible universal tools did not survive specification review.
- Search and demand evidence: DFM queries included `injection molding part design DFM wall thickness rib boss draft angle checker`, `injection molding rib thickness ratio`, `boss wall thickness injection molding`, `draft angle for textured injection molded parts`, `wall thickness uniformity checker`, and pre-tooling/appearance/ejection variants. Current Reddit and engineering discussions repeatedly ask how to review wall transitions, rib bases, boss proportions, draw direction and texture before steel is cut. Mold-steel long tails covered corrosive/abrasive resin, polish, volume, hardness and repairability; prototype/bridge queries covered 3D printing versus molding, 1,000-part runs, production material and lead time; inspection queries covered ISO 20457, conditioned dimensions, cavity sampling and tolerance capability; joining queries covered material compatibility, energy directors, amplitude, fixtures and weld trials.
- Competition opened and reviewed: [Control Plastics' multi-tab calculator](https://www.controlplastics.com/test.php) accepts only wall height, texture depth and minimum wall on its draft/texture/wall tab; [Vasar Odin](https://www.vasar.io/dfm-analysis) is a CAD-upload workflow with live draft, undercut and thin-wall detection while texture/material-aware rules and fillets are marked as coming; [Protolabs wall-thickness guidance](https://www.protolabs.com/resources/design-tips/improving-part-design-with-uniform-wall-thickness/) and its quote workflow provide strong DFM but are supplier/quote led; [MoldMinds tools](https://moldminds.com/tools) include material/texture draft, shrinkage, clamp and RFQ tools rather than a four-record neutral feature workflow. Mold-steel selector and supplier catalogs substantially cover that candidate; prototype-route results are dominated by quote providers; MoldMinds/Engelhardt tolerance tools and Branson/Dukane-style OEM joining guidance reduce the other gaps.
- Final discovery decision: **GO — Injection Molding Part Design & DFM Feature Screening**. The gap is not CAD analysis replacement. It is a neutral, account-free workflow that records measurements already available from CAD and supplier requirements, screens four different feature decisions, explains every rule, and hands flags to formal moldmaker review. Existing PlasticsCalc tools calculate press, shot, process, production, material or validation quantities; combining them does not answer these feature-design questions.
- Four independent tools: **Wall Thickness Uniformity Checker** (`wall-thickness-uniformity`, Checker) compares CAD extrema with a user-sourced project deviation; **Rib Design Checker** (`rib-design-checker`, Checker) evaluates thickness, height, clear spacing and base-radius ratios; **Boss Design Checker** (`boss-design-checker`, Checker) evaluates boss wall, fastener/insert-to-OD and base radius; **Draft and Texture Checker** (`draft-texture-checker`, Checker) compares actual draft with a source-bounded 0–101 mm depth reference and an entered texture/finish-supplier minimum. They answer different wall-basis, reinforcement, fastening and ejection/finish decisions and are repeated per part revision or feature, not forward/reverse variants.
- New pages (seven): hub `tools/injection-molding/injection-molding-part-design-dfm.html`; four checker pages `wall-thickness-uniformity.html`, `rib-design-checker.html`, `boss-design-checker.html`, and `draft-texture-checker.html`; guides `guides/injection-molding-dfm-measurement-workflow.html` and `guides/injection-molding-feature-validation.html`. `assets/js/dfm-calculators.js` contains the four registry keys; `dfm-pages.mjs` generates only this cluster and idempotently adds scoped links/sitemap entries. Contextual links were limited to Homepage, Tool Index, Injection Molding hub, Guides index, and Mold Shrinkage.
- Rules and sources: wall deviation is project-defined arithmetic rather than a fabricated universal tolerance. Rib references use published 40–60% wall thickness, a conservative 3× height review point, 2.5× clear spacing and 25–40% base radius. Boss references use 40–60% wall, approximately 2× fastener/insert OD and an absolute boss-to-wall transition radius of at least 0.2 mm. Draft uses the documented 1° through 50 mm and 3° over 50 through 101 mm depth screen, then takes the larger of that reference and the exact supplier-entered texture minimum. Primary technical references are the linked Protolabs wall, design-essentials, beginner and mouldability guides plus [Covestro strategic-radii guidance](https://solutions.covestro.com/-/media/covestro/solution-center/story/brochures/strategic-radii-in-structural-part-design.pdf) and [Covestro connecting-element guidance](https://solutions.covestro.com/-/media/covestro/solution-center/whitepapers/the-insertion-of-connecting-elements-using-ultrasound.pdf). Every page states that a passing screen is not defect prediction or tooling approval.
- Independent validation: `dfm-calculator-tests.mjs` independently recomputes 12 varied cases and checks wall within/outside classification, rib 4/4 and 0/4 boundaries, boss 3/3 and 0/3 boundaries, draft meet/negative-margin boundaries, four defaults, displayed formulas and worked examples through the registry contract. All passed. Browser interaction also confirmed very small finite values, blank, zero, negative, `NaN`, Infinity, greater-than-range, contradictory dimensions, review flags, changed values, recalculation and Reset for all four tools without `NaN`, `Infinity` or `undefined` output.
- Complete automatic release gate: 89 public HTML / 88 indexable / 88 sitemap URLs; broken internal links, malformed markup, duplicate IDs, missing/duplicate title or canonical, registry/page/loader mismatch and JavaScript syntax issues were 0. Legacy calculator regression 33, thermal 45, process-validation 32, energy 12, DFM 12, registry/default/worked-example 52/52, calculator UI 52/52, mobile header 89/89, validation contrast 14.77:1/13.76:1, consent, content-value, pre-expansion and `git diff --check` passed.
- Actual browser QA used a response-verified local PlasticsCalc server. The seven new pages rendered at 1440/1280/1024/768/390 = **35 page-viewports**. Eleven representative existing pages (Homepage, Tool Index, Injection Molding hub, Materials hub, Guides, Cooling/Thermal hub, Cooling Time, Clamp Tonnage, Mold Shrinkage, Projected Area, and Method) rendered at 1440/768/390 = **33 page-viewports**. Total 68. Console errors/warnings, horizontal overflow, H1/header overlap, visible clipping and broken images were 0. All canonical paths matched. The four mobile result screenshots were manually inspected; number contrast was 16.36:1 and detail contrast 13.88:1, with readable labels, units, buttons, formula and interpretation. Mobile MENU opened and closed with Escape. Consent settings reopened and declined normally. Homepage retained all six owner-managed directory badges at all three viewports.
- Protected UI and production state: no CSS, container, breakpoint, header, footer, consent, existing formula or existing calculator UI code changed. Existing-page additions occur before `</main>`; the suffix containing footer and the Homepage owner-managed post-footer badge block remains unchanged. After work: **89 public HTML files, 88 indexable/sitemap URLs, and 52 registered calculators/tools**. Remaining HIGH issues: none. Remaining MEDIUM issues: none. Operationally ready after final test, commit, push, remote-hash match and deployment propagation.

### 2026-08-11 — Injection Molding Energy Measurement & Efficiency cluster

- Repository and baseline: `C:\Users\song\Documents\ChatGPT\plasticscalc\canonical`, canonical remote `https://github.com/canghun13/plasticscalc`, clean `main` at `2838e23c92a7445e527cba6dc2ac6c98178e3ff1`. `HEAD`, `origin/main`, and `git ls-remote origin refs/heads/main` matched before work. Discovery date: 2026-08-11. Before work: 75 public HTML files, 74 indexable/sitemap URLs, 44 calculators, 19 guide/reference pages plus the Guides index, and six dedicated index/cluster hubs.
- Excluded as already reviewed or implemented: Material Drying / Moisture Control, Machine Pressure / Process Transfer / Intensification, Runner & Gate Flow Design, Process Capability / SPC, Mold Venting / Air-Trap Planning, Mold Cooling & Thermal Control, and Process Validation & Stability. Candidate overlap was judged by the user's actual workflow, not by shared variables.
- Broad candidate families examined across distinct roles, equipment, production stages, failure modes, and economics: **(1) Injection molding energy measurement and efficiency**, **(2) robot/EOAT and molding-cell automation**, **(3) purge and material/color changeover planning**, **(4) screw/barrel/non-return-valve condition**, **(5) mold preventive-maintenance planning**, **(6) finite-capacity production campaign and changeover scheduling**, **(7) granulator/regrind recovery operations**, **(8) central material conveying and hopper logistics**, **(9) insert-molding setup and automation planning**, and **(10) hydraulic leakage/oil-loss economics**. Purging depended heavily on material/vendor procedure; granulator and conveying ideas lacked four independent non-proprietary tools and converged on existing material/drying workflows; insert molding depended on geometry/simulation; hydraulic leakage was dominated by generic leak tools; finite scheduling required multi-resource data and was dominated by SaaS/ERP.
- Shortlist scores using the required model (monetization 40 / traffic-search 35 / competition gap 25): **Energy Measurement & Efficiency 85/100** (35/31/19); **Screw, Barrel & NRV Condition 81/100** (35/27/19); **Mold Preventive Maintenance Planning 80/100** (34/26/20); **Robot/EOAT Cell Planning 78/100** (36/28/14).
- Gate A-G: **Energy: PASS/PASS/PASS/PASS/PASS/PASS/PASS**. **Screw/Barrel/NRV: HOLD/PASS/HOLD/PASS/PASS/PASS/PASS** because clearance, wear-profile, and rate-loss ideas partly collapse into one inspection workflow and universal replacement limits are OEM/component-specific. **Mold PM: PASS/PASS/HOLD/PASS/PASS/PASS/PASS** because the planner tools are real but shot-count intervals and failure thresholds must be established per mold rather than inferred by a universal formula. **Robot/EOAT: PASS/PASS/HOLD/PASS/HOLD/FAIL/PASS** because actual reach, inertia, path time, and safety validation need OEM/integrator data while A3, Yushin, and AutomationCalculators already provide strong free ROI/cycle workflows.
- Energy demand and long-tail evidence: searches covered `injection molding kWh per part calculator`, `injection molding specific energy consumption kWh/kg`, `EUROMAP 60.2 product related energy consumption`, `injection molding idle shutdown break even`, `hydraulic vs electric injection molding energy calculator`, `injection molding startup maximum demand`, and `injection molding auxiliary equipment energy`. Repeated current forum questions ask how to calculate electricity per article and whether press-only power omits dryers, temperature control, robots, conveyors, and chillers. EUROMAP 60.2 defines a product-related five-block measurement boundary; EUROMAP 60.1 defines specific energy and idle power; NIST explicitly allocates cycle, setup, and calibration energy to a molded part; Plastics Engineering recommends measuring idle/startup/operating energy and staging starts to limit maximum demand.
- Energy competition review: PlastikCity's free molding calculator uses shot weight, cycle time, price, and annual hours to estimate technology-type annual costs; it does not accept a measured product run, separate EUROMAP-style blocks, allocate rejects/runners, or handle idle break-even, verified upgrade payback, or startup demand. Symestic provides a strong general machine energy/idle/CO2 calculator, but it is not molding-product normalization. NIST and EUROMAP provide methods rather than interactive production tools. The resulting gap is a neutral, source-led workflow built around measured molding records rather than generic machine-type factors.
- Screw/Barrel demand and competition: long tails covered radial clearance from barrel ID/screw OD, barrel ovality/taper profile, screw-recovery rate loss, non-return-valve leakage/cushion symptoms, and wear replacement economics. R. Dray already provides an injection-molding rate-loss calculator; SPI barrel-clearance guidance and several supplier inspection PDFs cover measurement, while recurrent forum questions confirm demand. The candidate was not selected because four independent tools could not be separated cleanly without repeating one clearance/profile relation or using OEM-specific limits.
- Mold PM demand and competition: long tails covered shot-count PM due dates, mold-life utilization, planned-vs-unplanned downtime cost, tool-room maintenance capacity, and maintenance backlog. ZetarMold and supplier guides explain shot-count schedules, ColdBlast provides a cleaning ROI workflow, and SetupLens/ERP products cover live PM planning. Search intent is real, but static arithmetic cannot determine a defensible maintenance interval without mold-specific history, OEM/toolmaker criteria, resin, actions, and observed condition.
- Robot/EOAT demand and competition: long tails covered molding robot ROI, EOAT payload, extraction-cycle window, machine-tending throughput, and 24/7 labor savings. A3 has a detailed 20-year ROI tool, Yushin provides molding-specific ROI workbooks, AutomationCalculators provides robot cycle/payload/reach tools, and Wittmann emphasizes payload, EOAT, path, and cycle-time selection. The free competition gap and static completion gate were not strong enough.
- Final discovery decision: **GO — Injection Molding Energy Measurement & Efficiency**. It is distinct from existing machine cost, material, cooling/thermal, production-output, and process-validation calculators because its user workflow begins with electrical meter boundaries and ends with normalized product energy, idle-state decisions, comparable upgrade economics, and facility startup demand. Existing tools cannot be combined to answer those four questions.
- New pages (seven): hub `tools/injection-molding/injection-molding-energy-efficiency.html`; calculators `product-energy-intensity.html`, `idle-shutdown-break-even.html`, `machine-energy-upgrade-payback.html`, and `startup-peak-demand.html`; guides `guides/injection-molding-energy-measurement.html` and `guides/injection-molding-energy-comparison.html`. Registry keys: `product-energy-intensity`, `idle-shutdown-break-even`, `machine-energy-upgrade-payback`, `startup-peak-demand` in `assets/js/energy-calculators.js`. Generator `energy-pages.mjs` creates only the new pages and idempotently appends scoped contextual links/sitemap URLs; it never regenerates the protected global page set.
- Contextual links were added only to Homepage, Tool Index, Injection Molding hub, Guides index, Machine Cost Per Part, and Mold Cooling & Thermal Control. A byte comparison against `HEAD` confirmed the complete suffix from `</main>` through footer and any owner-managed badge block was preserved for every modified existing HTML file. The Homepage retained all six owner-managed directory badge images at 1440, 768, and 390 px.
- Primary technical sources: [EUROMAP 60.2 — Determination of Product Related Energy Consumption](https://www.euromap.org/media/recommendations/60/2013/EU_60.2_Jan_2013.pdf); [EUROMAP 60.1 — Determination of Machine Related Energy Efficiency Class](https://www.euromap.org/media/recommendations/60/2013/EU_60.1_Jan_2013.pdf); [NIST — Characterizing Energy Consumption of the Injection Molding Process](https://www.nist.gov/publications/characterizing-energy-consumption-injection-molding-process); and [Plastics Engineering — Energy Management Systems: Injection Molding](https://www.plasticsengineering.org/2024/06/energy-management-systems-injection-molding-1-005491/). The production calculations use user-measured values; no competitor JavaScript or proprietary material/machine database was used.
- Independent formula validation: 12 varied arithmetic cases plus four default/registry worked-example checks passed. These independently recompute injected and saleable mass, SEC, per-good-part energy, average power, idle break-even/net saving, annual upgrade energy/payback/ten-year net, and concurrent/staged demand. Existing regressions also passed: legacy 33 calculators, thermal 45 cases, validation 32 cases, registry/default/worked examples 48/48, and validation table contrast 14.77:1 / 13.76:1.
- Complete automatic gate passed: 82 public HTML / 81 indexable / 81 sitemap URLs; broken internal links, malformed markup, duplicate IDs, missing/duplicate canonical/title, registry/loader mismatch, and JavaScript syntax issues were 0. Mobile header 82 pages, calculator UI 48 pages, consent, content-value, and pre-expansion tests passed.
- Actual browser QA: all seven new pages at 1440, 1280, 1024, 768, and 390 px (35 renders) plus nine representative existing pages at 1440, 768, and 390 px (27 renders), total **62 page-viewport renders**. The existing set covered Homepage, Tool Index, Injection Molding hub, Machine Cost Per Part, Cooling Time, Cavity Weight Balance, Cooling/Thermal hub, Process Validation/Stability hub, and Contact. Each new calculator passed initial/default, changed input/recalculation, Reset restoration, and invalid-input error states. A 9,090,909,091 kWh/kg long-result stress case remained readable at 390 px. Mobile validation table horizontal scroll was directly exercised; all 12 cells were readable and computed minimum table contrast was 13.76:1.
- Browser results: console errors/warnings 0; page horizontal overflow 0; header/H1 overlap 0; visible calculator-panel overlap 0; clipped H1/input/button/result elements 0; one H1 per page; results and long labels readable; new result contrast 16.36:1. Mobile MENU was hidden initially, opened with `aria-expanded=true`, and closed on Escape. Footer, six owner-managed Homepage badges, and Analytics preference dialog/Decline behavior passed. Desktop navigation and global container/spacing/typography/common calculator UI were not modified.
- After work: 82 public HTML files, 81 indexable/sitemap URLs, 48 calculators, 21 guide/reference pages plus the Guides index, and seven dedicated index/cluster hubs. Remaining HIGH issues: none. Remaining MEDIUM issues: none. Operationally ready after final commit, push, remote-hash synchronization, and deployment propagation.

### 2026-08-10 — Platen Fit orthogonal-rotation correction

- Repository and baseline: `C:\Users\song\Documents\ChatGPT\plasticscalc\canonical`, canonical remote `https://github.com/canghun13/plasticscalc`, clean `main` at `3d7f383928170f4053bd9c7e056dfa79b0157d3c` before work. The baseline matched `origin/main`. Current inventory remains 75 public HTML files, 44 calculators, 19 guide/reference pages plus the Guides index, and six dedicated index/cluster hubs.
- Audit scope: all public HTML/sitemap relationships, calculator registry and loaders, automatic test coverage, metadata/canonicals, internal-link indegree, current handover issues, live calculator behavior, mobile/header/consent behavior, content/query fit, and the protected post-footer directory-badge area. No repository GSC or GA4 export was present, so no traffic, impression, click, CTR, position, or landing-page claim was inferred. GA4 code presence is not analytics evidence.
- Baseline automatic audit passed before selection: 75 HTML / 74 indexable / 74 sitemap URLs; broken internal links, duplicate IDs, malformed markup, missing canonicals, duplicate titles/canonicals, registry/loader mismatch, and JavaScript syntax issues were 0. Registry/UI coverage was 44/44 calculators; legacy arithmetic 33 calculators, thermal arithmetic 45 cases, validation arithmetic 32 cases, validation contrast, mobile header, consent, content-value, and pre-expansion checks all passed.
- Current search review found no defensible query-volume data. Exact and intent searches exposed the PlasticsCalc machine-fit workflow but did not surface the Platen Fit URL as a strong result. Current machine-selection results and official manufacturer documents consistently treat platen width/height, tie-bar spacing, mold height, and other physical limits as distinct fit inputs; this supports the user need but is not a ranking forecast.
- Candidate scores using user/search impact 35, evidence strength 25, existing-asset reuse 15, long-term value 15, and implementation efficiency 10: **Platen Fit orthogonal-rotation correction 94/100** (34/25/14/12/9); **contextual links for near-orphan guides 82/100** (26/24/14/11/7); **resin-loss/scrap basis normalization 76/100** (28/13/13/13/9); **phase-3 query-intent/content refinement 71/100** (25/11/14/13/8); **full-build preservation of the owner-managed post-footer badge block 69/100** (12/25/10/14/8). The earlier second-cluster NO-GO was not recycled as a candidate.
- Selected one task only: **Platen Fit orthogonal-rotation correction**. The published page promised a check “including rotation,” but production JavaScript evaluated only `max(mold W / platen W, mold H / platen H)` in the entered orientation. Live production reproduction with a 750 × 650 mm mold and 700 × 800 mm platen returned 107.14% and “does not fit,” although the 90-degree orientation is 650 × 750 mm and fits at 93.75%. This was a decision-support defect, not a cosmetic rewrite.
- Implementation: `assets/js/phase3-calculators.js` now evaluates the entered and 90-degree orientations, selects the smaller limiting-side occupancy, reports the selected orientation and width/height margins, and rejects zero mold dimensions as invalid. `phase3-pages.mjs` and the generated Platen Fit page now show the two-orientation formula, retain the 87.5% default example, add the rotation-changing 93.75% example, state the orthogonal-envelope limits, and link directly to the existing mold-fit workflow. No URL, title, canonical, global CSS, shared layout, header, footer, consent code, or calculator count changed.
- Regression coverage: `calculator-tests.mjs` adds entered-orientation, rotated-orientation, and neither-orientation-fit cases, including result interpretation checks. The first run correctly failed because the replacement worked example omitted the registry-default 87.5% result; the page was corrected to retain that default contract and add rotation as a second example. The complete automatic gate then passed: verify 75/74/74 with zero issues; markup 75; mobile header 75; registry/UI 44/44; legacy calculators 33; thermal 45; validation 32; validation contrast 14.77:1/13.76:1; consent, content-value, and pre-expansion checks passed.
- Actual browser QA: production reproduced the faulty 107.14% entered-orientation result before the fix. Local QA verified initial 87.5% as-entered output, changed 750 × 650 / 700 × 800 input at 93.75% with `rotated 90°` and 50 mm margins, Reset restoration, and zero-dimension rejection. At 1440, 1280, 1024, 768, and 390 px, page horizontal overflow, header/H1 overlap, and clipped fields were all 0; H1, footer, result, and the responsive workstation remained present. Console errors/warnings were 0. Measured text contrast ranged from 13.88:1 to 16.36:1. Mobile MENU opened, exposed navigation, and closed on Escape. Desktop and mobile screenshots were visually inspected; result text, formula, inputs, worked examples, and workflow link were readable.
- Internal-link audit found no orphaned indexable page, but 13 indexable pages had at most two distinct incoming internal-link sources. The focused near-orphan guide-link candidate remains viable but was not bundled into this task because the instruction requires only one highest-value package.
- Remaining HIGH issues: none. Remaining MEDIUM issue: the current full generator sequence removes the owner-managed post-footer directory-badge block from generated pages. This session restored every incidental generator change byte-for-byte and left the protected block unchanged. Do not modify or regenerate that owner-managed area without explicit owner approval; treat a full regeneration as unsafe until an approved preservation mechanism exists.
- Modified production files: `assets/js/phase3-calculators.js`, `phase3-pages.mjs`, `tools/injection-molding/platen-fit.html`, `calculator-tests.mjs`, and this handover entry. Production readiness: yes after commit, push, remote-hash synchronization, and deployment propagation.

### 2026-08-08 — Second-cluster research gate: NO-GO

- Repository and baseline: `C:\Users\cangh\OneDrive\문서\plasticscalc-source`, canonical remote `https://github.com/canghun13/plasticscalc`, clean `main` at `83c657332f793b6463ddaa1950554f9271e24e89` after `fetch` and `pull --ff-only`. Current inventory is 75 public HTML files, 44 calculators, 19 guide/reference content pages plus the Guides index, and six dedicated index/cluster hubs (Tools, Injection Molding, Materials, Guides, Cooling/Thermal, and Process Validation/Stability).
- The latest site was re-inventoried rather than relying on the earlier candidate score. Existing coverage already spans mold/machine sizing, runner/sprue geometry and material accounting, production/cost, materials, Cooling/Thermal, and the first expansion cluster, Process Validation/Stability.
- **Material Drying & Moisture Control — 78/100** (monetization 34/40, search potential 30/35, competition gap 14/25). Demand evidence includes distinct drying-time, hopper sizing, throughput, dew-point and residual-moisture questions, plus a current shop-floor dryer-sizing discussion. Official Motan data exposes material-specific temperature, residence-time and bin-throughput tables and states that airflow, time, temperature and dew point must work together. The decisive gap failure is current competition: KunststoffWissen already provides a free material drying-time workflow with material lookup, storage adjustment, hopper sizing, residual-moisture validation and manufacturer sources. Exact values remain grade-, dryer-, initial-moisture-, airflow- and bin-geometry-dependent; the plausible tools collapse mainly to one supplier-data lookup plus repeated `throughput × time` arithmetic rather than four independent, reliably universal tools. HOLD.
- **Machine Pressure & Process Transfer — 72/100** (29/40, 27/35, 16/25). Autodesk and repeated practitioner questions confirm plastic-versus-hydraulic pressure and cross-machine transfer intent. However, Calculator Academy's current free calculator already combines pressure-derived intensification, hydraulic/plastic conversion, piston/screw-diameter ratio and machine-to-machine transfer in one four-mode tool. Those modes are variations of the same area/ratio relation, apply poorly to electric machines, overlap PlasticsCalc's machine and Process Validation pressure workflow, and do not justify a second cluster. REJECT.
- **Runner & Gate Flow Design — 69/100** (31/40, 26/35, 12/25). Gate-size, gate-shear and runner-pressure questions are real, and PlastikCity already offers a free material-aware round/rectangular gate shear calculator. Autodesk Moldflow's Runner Adviser covers runner/gate/sprue optimization, balance and pressure-drop workflow using part geometry and Cross-WLF material behavior. A static tool without verified rheology and 3D flow inputs would create false precision; simpler volume, weight and measured pressure-drop tasks already exist in PlasticsCalc. REJECT.
- **Process Capability & SPC — 68/100** (28/40, 29/35, 11/25). NIST supplies trustworthy Cp/Cpk formulas and current molding discussions show interest in control charts. Competition is saturated by strong free tools: cpkcalculator.org accepts raw or summary data, computes Cp/Cpk/Pp/Ppk, plots sequence/distribution and supplies focused guides; SPCEasy adds similar no-login analysis and reporting. The topic also overlaps Shot Weight Repeatability and Process Validation, while valid capability conclusions require a stable process, justified subgroups and customer specifications. REJECT.
- **Mold Venting & Air-Trap Planning — 52/100** (24/40, 20/35, 8/25). Forum questions show troubleshooting demand, but the intent is primarily placement and material-specific guidance rather than repeatable calculator use. Avient's vent dimensions are material-family guidance, while Autodesk's venting analysis requires 3D air-trap locations, compressible-flow analysis and simulation boundary conditions. Four independent, trustworthy static tools do not emerge without proprietary geometry/material inputs. REJECT.
- Main competitor pages opened and reviewed: [KunststoffWissen Plastic Drying Time Calculator](https://kunststoff-profi.de/en/market/calculators/plastic-drying-time/); [Calculator Academy Intensification Ratio Calculator](https://calculator.academy/intensification-ratio-calculator/); [PlastikCity Mould Gate Size Calculator](https://www.plastikcity.co.uk/knowledge-base/industry-calculators/mould-gate-size-calculator); Autodesk [Runner Adviser](https://help.autodesk.com/cloudhelp/2019/ENU/MoldflowAdviser-Analyses/files/GUID-9D49DC8F-1129-43F9-BFCA-694FBF59D726.htm) and [Venting Analysis](https://help.autodesk.com/cloudhelp/2027/ENU/MoldflowComm-CLC-Analyses/files/analysis-sequences/MFLO-VENTING-ANALYSIS-CPT.html); [cpkcalculator.org](https://cpkcalculator.org/); and [SPCEasy](https://spceasy.com/). Primary/reference evidence included official [Motan drying tables](https://www.motan.com/fileadmin/data/products/pdf/drying/luxor-a/en_LUXOR-A.pdf), [Autodesk intensification guidance](https://help.autodesk.com/cloudhelp/2023/ENU/MoldflowInsight-CLC-Processing-Cond/files/Injection-molding-machine/MoldflowInsight_CLC_Processing_Cond_Injection_molding_machine_Calculating_the_machine_html.html), [NIST capability formulas](https://www.itl.nist.gov/div898/handbook/ppc/section4/ppc46.htm), [Avient mold-venting guidance](https://www.avient.com/resource-center/knowledge-base/article/injection-molding-mold-design), and current industry/community questions.
- Final decision: **NO-GO**. The highest candidate is below the approximately 80/100 gate and fails the stricter core requirement of four independent, trustworthy tools with a defensible free-competition gap. No production HTML, CSS, JavaScript, sitemap, registry, loader, calculator, guide, or hub was added or changed. This expansion cycle is closed rather than forcing a marginal second cluster.

### 2026-08-08 — Process Validation result-table contrast regression fix

- QA baseline: `545e2899e927bed644cbffc094207b71b9c520d1` on `main`, synchronized with `origin/main`; repository path `C:\Users\cangh\OneDrive\문서\plasticscalc-source`.
- Symptom and cause: four Process Validation calculators rendered light result-table rows with the light foreground inherited from the dark `.calc-result-panel`. The table supplied a light background but no body-cell foreground, producing only 1.18:1 contrast. Header cells were unaffected because they already declared their own dark background and light text.
- Affected calculators: Relative Viscosity Curve, Cavity Weight Balance, Gate Seal Study, and Pressure Drop Study. Shot Weight Repeatability has no result table, but was included in the complete cluster regression QA and remained readable.
- Minimal fix: `assets/css/site.css` now sets `color:var(--ink)` only on `.validation-table tbody td`. No global color, spacing, width, header, footer, consent, or directory-badge rule changed. `validation-pages.mjs` advances only the five calculator pages to stylesheet release `20260808-validation-2`; the hub and guides remain on release `validation-1`. The five generated calculator HTML files contain that scoped cache update.
- Contrast evidence: body cells improved from 1.18:1 to 14.77:1 on white rows and 13.76:1 on alternating rows. Header cells measured 14.88:1; the dark result-panel foreground remained 13.88:1 and result numbers 16.36:1. `validation-contrast-tests.mjs` independently parses the production CSS variables, requires the scoped selector, and enforces at least 7:1 for both body-row backgrounds.
- Actual browser QA: all five calculators rendered at 1440, 1280, 1024, 768, and 390 px (25 page/viewport renders). All four tables retained their rows, values, headers, and intentional mobile wrapper scrolling; the Pressure Drop table was scrolled to its right edge to confirm the final incremental-drop column remained reachable and readable. Mobile screenshots were visually inspected. Counts: console errors 0, page horizontal overflow 0, H1/header overlap 0, control or content clipping 0, NaN/undefined/Infinity output 0.
- Existing-calculator regression: Clamp Tonnage, Material Cost, Mold Heat Removal, and Cooling Circuit Balance were rendered at 1440 and 390 px (8 page/viewport renders). All passed with no console error, page overflow, overlap, clipping, or invalid output; the existing mobile header behavior remained intact.
- Final automatic tests: contrast 2/2 backgrounds passed; validation arithmetic 32/32; registry 44/44; calculator UI 44/44; mobile header 75/75 pages; markup 75/75 pages; site verification 75 HTML / 74 indexable / 74 sitemap with zero issues; legacy calculators 33/33; thermal arithmetic 45/45; consent passed; content-value 44 calculators / 3 hubs passed; pre-expansion audit passed.
- Modified files: `assets/css/site.css`, `validation-pages.mjs`, the five Process Validation calculator HTML files, `validation-contrast-tests.mjs`, and this handover entry. Remaining HIGH issues: none. Remaining MEDIUM issues: none. Production readiness: yes, after commit/push and local/origin/remote hash synchronization.

### 2026-08-08 — Process Validation & Stability cluster

- Repository: `C:\Users\cangh\OneDrive\문서\plasticscalc-source`; start commit `7aa000eac7dd6de48069b300ea357544c6463c4f`. Before work: 66 public HTML pages, 39 calculators and 16 guide/reference pages. The tree was clean, `main` matched `origin/main`, and the Cooling/Thermal and mobile-header work was retained.
- Current-site gap review covered three candidates. Process Validation & Stability scored 86/100 (monetization 34/40, search potential 28/35, competition gap 24/25): recurring viscosity, cavity-balance, gate-seal, pressure-drop and repeatability questions were visible, while results were fragmented across training articles and proprietary cavity-balance software. Material Drying scored 82/100: strong equipment relevance and queries, but a current specialist competitor already supplies material lookup/drying-time and hopper-residence workflows, while dependable values remain grade/dryer specific. Machine Transfer & Pressure scored 77/100: clear pressure/flow intent, but a current high-ranking calculator already combines intensification, hydraulic/plastic conversion, diameter and transfer modes; electric-machine applicability and overlap reduced the gap.
- Selected one cluster only: **Injection Molding Process Validation & Stability**. Added nine pages: hub `process-validation-stability.html`; calculators `molding-viscosity-curve.html`, `cavity-weight-balance.html`, `gate-seal-study.html`, `pressure-drop-study.html`, and `shot-weight-repeatability.html`; guides `scientific-molding-validation-workflow.html`, `cavity-balance-and-shot-weight-measurement.html`, and `gate-seal-and-pressure-drop-study-setup.html`.
- Registry keys: `molding-viscosity-curve`, `cavity-weight-balance`, `gate-seal-study`, `pressure-drop-study`, `shot-weight-repeatability` in `assets/js/validation-calculators.js`. Every page loads the matching registry, supplies defaults, units, validation, Calculate/Reset, formula, worked example, assumptions, interpretation, workflow links and sources.
- Main calculations: relative shear-rate index `1/fill time`; relative-viscosity index `plastic pressure × fill time`; cavity imbalance `(max − min) / mean × 100`; gate-study interval change `(current − prior) / prior × 100` with two consecutive user-threshold intervals; incremental pressure drop `current cumulative − prior cumulative`; sample SD, range and `CV = sample SD / mean × 100`. Results are explicitly comparative screens, not universal acceptance, safety, capability or process-release decisions.
- Formula/method sources: PlasticsToday scientific-molding fill study; M. Holland pressure-loss study; BASF injection-molding problem guidance; NIST measures of scale and coefficient of variation; peer-reviewed multi-cavity filling-imbalance research; Hingtung cavity-balance procedure. Inputs must come from one controlled machine/mold/material state, with plastic-pressure basis, cavity/sample identity, scale resolution and conditioning interval preserved.
- Independent arithmetic verification: 32 cases passed across the five new calculators, including units, mean/sample SD/CV, max-to-min balance, plateau detection, incremental pressure stages, registry defaults and relative-index calculations. Boundary behavior rejects empty, non-finite, zero/negative where physically invalid, over-limit and mismatched series without NaN/Infinity output.
- Automated quality gate passed: 75/75 HTML markup and mobile-header checks; 74 indexable pages = 74 sitemap URLs; unique titles/canonicals 75; broken internal links, malformed markup, duplicate IDs, missing canonical, registry/script-loader mismatch and JS syntax errors all 0. Existing 33 calculator regression cases, 45 thermal cases, consent, value/content and pre-expansion audits passed. Registry/UI coverage is 44/44 calculators.
- Browser QA: all nine new pages at 1440/1280/1024/768/390 (45 renders), plus Homepage, Tools, Injection Molding, Materials, Field Guides, Cooling/Thermal, Clamp Tonnage, Cooling Time and Contact at 1440/768/390 (27 renders), total 72. All five new calculators passed default, changed input/recalculation, Reset, empty input and boundary invalid-input interaction. Mobile MENU toggle/Escape/outside close remained correct. Console errors/warnings 0; horizontal overflow 0; header/H1 overlap 0; clipping 0.
- After work: 75 public HTML pages, 44 calculators and 19 guide/reference pages. Changed only the new cluster, scoped validation CSS/JS, sitemap/contextual links, registry/UI/mobile count tests, new validation tests/generator and this handover. Desktop/mobile header behavior, existing calculator formulas/UI, footer, analytics consent and the footer-below owner-managed directory badge block were not modified. Remaining HIGH/MEDIUM issues: none. Operationally ready after final commit/push synchronization.

### 2026-08-01 Mobile header navigation

- Start commit: `7575b995c0f14411905eb1465b55892e1d65e40a`. Replaced only the mobile wrapping primary navigation with an initially closed MENU button and retained the desktop navigation, URLs, order, footer, consent UI, and owner-managed badge area.
- The existing 800px mobile breakpoint is used. MENU is a real accessible button with `aria-expanded` and `aria-controls`; it opens below the brand and closes on toggle, link choice, Escape, outside click, and desktop resize. The menu remains normal links if JavaScript is unavailable.
- Changed files: all 66 published HTML headers, `build-pages.mjs`, `phase3-pages.mjs`, `thermal-pages.mjs`, scoped header rules in `assets/css/site.css`, `assets/js/site.js`, `mobile-header-tests.mjs`, and this handover. Desktop header markup and rendering are unchanged; the footer-below owner-managed directory badge was not modified.
- Automated checks passed: `mobile-header-tests.mjs` (66/66 header markup, unique primary-navigation ID, unchanged link order/URLs and behavior hooks), JavaScript syntax, markup checks, sitemap/canonical verification, 33 legacy calculator arithmetic tests, 39 calculator registry/UI tests, 45 thermal tests, and consent tests.
- Browser QA passed at 1440, 1280, 1024, 768, and 390px for Homepage, Tools index, Injection Molding hub, Materials hub, Field Guides hub, Method, Contact, Clamp Tonnage Calculator, Mold Heat Removal Calculator, and Cooling Time Estimates guide (50 renders). At mobile widths MENU was closed by default; desktop kept the original horizontal navigation and hid MENU. Verified toggle, Escape, outside click, exact menu-link navigation/close, and desktop-to-mobile resize reset. The 390px screenshot was inspected.
- Browser findings: console errors 0; horizontal overflow 0; header/H1 overlap 0; H1 or menu-text clipping 0; no footer or owner-managed badge regression. No HIGH/MEDIUM issues remain; operationally ready after commit/push synchronization.

### 2026-08-01 Mold Heat Removal and Circuit Balance completion

- QA baseline: `53408d02706400dbbce50ff4337b1cb6a8eaa745`. Replaced the two previously missing interaction models without adding pages, calculators, presets, or global CSS changes. The owner-managed directory-badge area below the footer was not touched.
- Mold Heat Removal now has separate Enthalpy and Simplified specific-heat modes. Each mode displays only its relevant inputs, recalculates immediately on mode selection, reports its selected method with processed mass, kW, BTU/h and refrigeration tons, and restores the Enthalpy defaults on Reset. The simplified-method output states its constant-Cp and crystallization/phase-change limitations.
- Cooling Circuit Balance now starts with two circuits and supports additive multi-circuit comparison, middle/last deletion, a protected two-circuit minimum, editable circuit labels, Reset, per-circuit velocity/Re/regime/delta-T/heat-removal output, median-relative deviations, and potential-only imbalance wording with field-measurement and zone-load validation guidance.
- Automated validation: `thermal-calculator-tests.mjs` expanded to 45 thermal arithmetic/state cases (both Heat modes, hidden-input independence, default/add/remove/minimum/reset circuit states, varying circuit geometry/flow/delta-T, potential status, and finite result checks). `calculator-registry-tests.mjs`, `calculator-ui-tests.mjs`, `calculator-tests.mjs` (33), `markup-tests.mjs`, `verify.mjs`, `consent-tests.mjs`, JavaScript syntax validation, and `git diff --check` all passed.
- Browser QA on the local server: Mold Heat Removal and Cooling Circuit Balance rendered at 1440, 1280, 1024, 768, and 390 px (10 viewport checks); Cooling Time and Mold Cooling & Thermal Control hub rendered at 1440 and 390 px (4 checks). All had H1/footer, no horizontal overflow, and contained visible controls/results. The two locally served pages retain production canonical URLs by design, so local URL equality is not expected. Heat mode switching/reset and Balance add/add/delete-middle/minimum-protection/reset were executed in-browser at mobile width. Console errors, visible overlap, and visible clipping: 0. No HIGH or MEDIUM issue remains.

### 2026-08-01 — Mold Cooling browser QA completion

- QA baseline: `1122208b6cdd8be6964f246ae2111db3f4c810a2`. Browser-rendered the ten Mold Cooling & Thermal Control pages at 1440, 1280, 1024, 768 and 390 px (50 checks), and Cooling Time, Tools hub, Injection Molding hub and homepage at 1440, 768 and 390 px (12 checks).
- All checked pages had one H1, header/footer, correct self-canonical, no horizontal overflow, no header/H1 overlap and no clipped calculator input. No console errors were recorded. The owner-managed directory-badge area was not modified.
- Browser interaction check passed for all six new calculators: initial form/default result, changed input recalculation, negative-value rejection without NaN/Infinity, result unit/detail, and Reset restoration. Zero heat/load values remain valid physical zero-load cases; negative values are rejected. The present implementation has no separate Heat-Removal mode switch, Water-Rise measurement mode, or dynamic multi-circuit add/remove UI, so those requested conditional checks were not applicable to this committed scope.
- Re-ran thermal arithmetic, existing calculator, registry, UI, content, markup, metadata/link, consent and JavaScript syntax checks after QA. No blocking issue remains from this QA pass; no source/UI correction was needed.

### 2026-08-01 — Mold Cooling & Thermal Control cluster

- Started from `12b13e5` with 56 public HTML files, 33 calculators, and 13 guides. Added exactly 10 pages: hub `tools/injection-molding/mold-cooling-thermal-control.html`; six calculators (`cooling-reynolds`, `required-cooling-flow`, `mold-heat-removal`, `cooling-water-rise`, `injection-chiller-size`, `cooling-circuit-balance`); and three guides for turbulent flow, series/parallel circuits, and measurement validation.
- Added `assets/js/thermal-calculators.js` and extended registry verification for all 39 calculator pages. The six tools use Reynolds/flow rearrangement, mass-flow energy balance, coolant ΔT, single-base-load chiller sizing, and measured-circuit comparison. Chiller base load explicitly accepts one chosen estimate, never polymer and measured circuit loads added together.
- Default water inputs approximate 20°C water; glycol and other temperatures require supplier-verified manual density, viscosity and specific heat rather than unsupported extrapolation. SmartFlow is cited for the conditional 4,000–8,000 mold-cooling reference and diminishing benefit; Conair for plastics process load/chiller scope; Dow for glycol-property context.
- Independent regression coverage: 31 thermal arithmetic cases (five Reynolds, five required-flow, four heat-removal, five water-rise, four chiller, eight circuit-comparison cases) plus finite-default tests. Worked examples were corrected to match the shared result rounding.
- New pages link Cooling Time → heat removal → flow → Reynolds → water rise → chiller → circuit comparison → measurement validation. Cooling Time, Tools and Injection Molding hubs link back to the cluster. No global CSS, existing calculator formulas, header/footer, or owner-managed badge area changed.

### 2026-07-26 — Calculator registry and worked-example audit

- Reverified the actual `main` source and live browser behavior after a prior audit used a stale cached HTML response. All 33 Calculator pages have a matching `data-calculator` entry: 14 in `assets/js/calculators.js` and 19 in `assets/js/phase3-calculators.js`. Phase 3 pages load their second registry explicitly, so the reported 19 missing calculators were a false positive, not an implementation gap.
- Added `calculator-registry-tests.mjs`. It requires exactly 33 calculator pages and registry entries, rejects duplicate or orphaned IDs, verifies each page loads the owning registry script, smoke-tests every default calculation for a finite unit-bearing result, and checks that the worked example contains the same rounded default result.
- Corrected four worked-example mismatches discovered by that test: Break-Even Volume (66,666.67 parts), Sprue Volume (4.62 cm3), Parts Per Shift (3,352.32 good parts), and OEE Capacity (3,007.78 parts). Updated both `phase3-pages.mjs` and the generated Calculator HTML so later generation retains the correction.
- Browser smoke test against the current source: 33/33 calculators rendered one form with a finite default result and no console errors. Live production Runner Volume also rendered its Phase 3 form and the 22.62 cm³ default result, confirming the stale-response audit was not representative of the deployed page.
- Mandatory Quality Gate: [x] automated checks passed (content, markup, metadata/link, calculator, registry, calculator UI, consent, and JavaScript syntax); [x] all 33 calculator default forms smoke-tested in a browser; [x] five representative calculators checked at 390 px without overflow; [x] no console errors; [x] handover updated. Remaining blocking issue: none.

### 2026-07-22 — Phase 3 final audit and consolidation

- Audit scope: rechecked the Phase 3 sitemap, public-file inventory, commit history, 20 originally added calculators, nine added guides, hub linkage, calculator runtime, metadata, markup, and the owner-approved layout boundary. No new public page was added.
- Duplicate removed: `Injection Rate Calculator` was the direct algebraic inverse of `Fill Time Calculator` using the same two inputs. It did not have an independent input source, decision boundary, or workflow value. The URL was removed from the generator, runtime configuration, hub cards, filesystem, and sitemap; Fill Time now explicitly states that the same documented record yields average injection rate. Final total is **56 public HTML files, 55 indexable pages, 33 calculators, and 13 guides**.
- Calculator hardening: the Phase 3 shared runtime now rejects percentage values above 100, zero-valued divisor inputs (geometry, rate, time, capacity, package size, and relevant machine values), reversed mold-height range, and non-positive break-even contribution. Deliberately negative *results* for platen/tie-bar/mold-height fit remain visible as a clear no-fit signal; they are not silently clamped.
- Formula/duplicate result: runner/sprue geometry, mass/density, screw-stroke, unit utilization, residence/recovery/fill, machine-fit, output/OEE, blend/purchase, and cost/break-even formulas were checked against their stated unit basis and worked examples. No additional formula defect was found. Runner Weight remains distinct from Resin Weight because it applies a cold-runner mass/accounting boundary; the remaining production and cost tools retain distinct inputs or decisions.
- Guide/value result: the nine added guides retain independent questions (machine screening, runner system implications, material ordering, regrind, mold fit, density basis, datasheet selection, calculator misuse, and cycle workflow). They use source-linked validation boundaries rather than making material-property or CAE claims. No guide was removed or merged.
- Linking/SEO result: the Geometry → Projected Area → Clamp → Machine Fit; shot/injection-unit; cycle → capacity → cost; and material → regrind → cost paths are linked from hubs, tools, or guides. `verify.mjs` confirms 56 unique titles/canonicals, 55 sitemap URLs, self-canonicals, metadata, GA loader, and no broken local absolute links. Markup tests found no malformed anchors, duplicate IDs, or encoding artifacts.
- Rendered Quality Gate: desktop audit covered Homepage, all five hubs, eight new calculators, three existing calculators, three new guides, About, Contact, and Privacy; mobile audit covered the same representative categories. All sampled pages had no horizontal overflow, contained calculator fields/buttons, valid default finite results, header/footer, and one H1. Console error audit was empty. Global CSS/layout was not edited.
- Final readiness decision: **A. Injection Molding phase 1 is complete and ready for carefully sourced future expansion.** Remaining risks are not blocking defects: HIGH—no public author/reviewer identity can be claimed until the owner provides one; MEDIUM—future material data must stay exact-grade/condition sourced; LOW—continue production/analytics feedback review. Next recommended phase is source-first Materials depth, then Extrusion only after a similarly documented calculator/guide brief.

### 2026-07-22 — Phase 3 Injection Molding depth expansion

- Scope: expanded the public site from 28 HTML files / 14 calculators / 4 guides to 57 HTML files / 34 calculators / 13 guides (56 indexable URLs; 404 remains noindex). The approved global container, width, spacing, panel, grid, flex, responsive, and calculator-layout CSS was not changed. The owner’s locked reference-layout rule remains controlling.
- Research and selection: reviewed current official Autodesk Moldflow runner/sprue documentation, BASF cooling and grade-processing/regrind guidance, ENGEL machine-data and tie-bar/platen examples, and ARBURG cycle-time material. Chosen tools answer separate shop-floor questions rather than creating unit-swapped copies: runner/sprue geometry; screw stroke, injection-unit utilization, residence, recovery, fill and rate; platen/tie-bar/mold-height fit; shift/OEE/scrap-adjusted output; regrind/masterbatch/purchase planning; machine allocation and commercial break-even. Each page names its source type and explicitly retains the machine/mold/material/trial validation boundary.
- New calculators: Runner Volume, Runner Weight, Sprue Volume, Screw Stroke, Injection Unit Utilization, Residence Time, Screw Recovery Time, Fill Time, Injection Rate, Platen Fit, Tie-Bar Clearance, Mold Height Compatibility, Parts Per Shift, OEE Capacity, Scrap-Adjusted Output, Regrind Blend, Masterbatch Dosage, Resin Purchase Quantity, Machine Cost Per Part, and Break-Even Volume. `assets/js/phase3-calculators.js` owns their isolated calculator configuration; existing `calculators.js` and its 14-tool contract remain intact.
- New guides: machine sizing workflow; runner vs hot-runner implications; production material usage; scrap and regrind planning; platen/tie-bar/mold-fit checks; solid vs melt density; resin-datasheet interpretation; calculator common mistakes; and cycle-time workflow. These are linked into the new calculator/hub workflows and do not assert generic material properties or CAE results.
- Build and linking: added `phase3-pages.mjs` before asset refresh in the static build. It writes crawlable self-canonical pages, adds unique metadata/structured data, updates Homepage, Tools, Injection Molding, Materials, and Guides hubs by content insertion only, and removes then rewrites Phase 3 sitemap URLs on every build so duplicate sitemap entries cannot accumulate.
- Verification: `verify.mjs` reports 57 HTML pages, 56 indexable pages, 57 unique titles/canonicals, 56 sitemap URLs, and no issues. Markup, content-value, pre-expansion, legacy and Phase 3 calculator math, calculator UI, consent, JavaScript syntax, and diff checks passed. Browser rendering verified finite default outputs, field wrappers, one H1, no console errors, and no horizontal overflow across all 20 new calculator pages; desktop and 390px mobile samples covered runner volume, screw stroke, platen fit, parts per shift, regrind blend, and break-even volume. Mobile fields were contained at 345px.
- Remaining risk / next priority: no page converts a simplified check into a machine-selection, mold-release, supplier-qualification, or simulation claim. Before any later process-family expansion, add only individually sourced topics and consider publishing truthful author/reviewer information if it becomes available; do not add generic resin-property tables or further calculator variants merely to increase page count.
- Production verification after commit `5f474ea`: cache-bypassed `https://plasticscalc.com/tools/injection-molding/runner-volume.html` served its self-canonical, loaded `phase3-calculators.js`, rendered the default 22.62 cm³ result, had one H1, and had no desktop horizontal overflow.

### 2026-07-18 — Materials content-width hierarchy correction

- Scope: corrected the Materials hub’s inconsistent desktop width hierarchy without changing calculator DOM, formulas, JavaScript behavior, URLs, SEO metadata, or the established industrial engineering-reference visual direction. The same shared width-system principles remain in effect for the other hubs, guides, legal pages, and calculator reference areas.
- Root cause: the previous Materials restructuring rule in `enrich-layout.mjs` only matched a following `section.wrap.section.wash`. The current generated workflow already used `section.wrap.section.material-data-workflow`, so the rule silently did not match. The upper cards, density heading/paragraph, table, and follow-up notes consequently remained one generic `.wrap section`, while the workflow alone had the narrower reference measure. This caused readable prose to inherit the wide table area and created the visible mismatch.
- Structural repair: the generated Materials source now has explicit content-type regions: `.materials-page-shell` (1120px page/data shell), `.materials-tool-cards` (760px task-card measure), `.materials-readable-copy` (720px heading and explanatory copy), `.materials-table-area` (1120px technical table measure), `.materials-reference-notes` (720px source/limitation/link copy), and `.material-data-workflow` with a matching 1120px shell and 720px header/copy measure. They share a left alignment inside the page shell but no longer force prose, tables, cards, and workflow content into one width.
- CSS system: added named `--measure-cards`, `--measure-readable`, and `--measure-data` tokens instead of changing the site-wide `.wrap` width. Desktop cards are two columns only inside their bounded card region; at 760px and below they become one column. Table data retains its required wide working area, while general paragraphs deliberately cannot inherit the table line length. Existing hub workflow, calculator reference/workstation, guide, and legal measures were retained so this is a targeted width-system repair rather than a visual redesign.
- Regression coverage: `pre-expansion-audit-tests.mjs` now requires all five Materials width-region classes and fails if the obsolete single-width `.materials-workbench` structure returns. `refresh-assets.mjs` advances the generated stylesheet query to `20260718-width-1` so the deployed CSS is not masked by cache.
- Local rendered verification: at 1280px, the page shell/table/workflow measured 1120px, cards 760px, and density/workflow explanatory copy plus table notes 720px; all began on the same x-position and no horizontal overflow occurred. The desktop screenshot specifically confirmed the density heading and paragraph use a readable line length above the full-width reference table, followed by the aligned workflow. At 390px, cards collapse to one 345px column, the readable/table/workflow regions are each 345px, and there is no horizontal overflow.
- Mandatory Quality Gate: [x] automated checks passed (`pre-expansion-audit-tests.mjs`, `content-value-tests.mjs`, `markup-tests.mjs`, `verify.mjs`, `calculator-tests.mjs`, `calculator-ui-tests.mjs`, `consent-tests.mjs`, JavaScript syntax, and `git diff --check`); [x] representative pages visually checked; [x] five structurally different calculators visually checked; [x] desktop checked; [x] mobile checked; [x] no new broken layout; [x] no calculator regression; [x] handover updated.
- Production verification after commit `8290bf4`: `plasticscalc.com/tools/materials/` served stylesheet release `20260718-width-1`. At 1280px, the deployed shell/table/workflow were 1120px, cards were 760px, and readable heading/paragraph/note/workflow copy were 720px with the same left alignment and no horizontal overflow. At 390px, cards were one column and readable/table/workflow regions were 345px with no horizontal overflow. The deployed desktop screenshot confirmed the intended hierarchy: readable density context above the wider technical table, then an aligned workflow rather than an unrelated narrow panel.

### 2026-07-18 — Pre-Expansion Quality & Value Audit

- Scope audited: all 28 public HTML files (27 indexable sitemap pages plus the noindex 404): homepage; Tools, Injection Molding, Materials, and Guides hubs; all 14 calculators; all four guides; About/Method; Contact; Privacy; and Disclaimer. The audit combined generated-source review, page-purpose and value review, production rendering before changes, local rendering after changes, automated checks, and current official Google documentation. No new URL or calculator was created.
- Content inventory and audit outcome: the 14 calculator pages each retain a distinct formula/example plus tool-specific input-source, next-decision, sanity-check, and limitation content; the four guides each answer a distinct problem and retain source links rather than receiving mechanically repeated FAQ or filler additions. The actual low-value/template risk was concentrated in six navigational/editorial surfaces: the homepage's generic final strip, the Tools and Injection hub's shallow four-card decision blocks, the Materials hub's shallow state cards, the short Guides directory, and About's incomplete published method. The Guides hub was retained as a necessary directory because its reference protocol and four distinct guide destinations serve an independent navigation purpose; no artificial expansion was added.
- Horizontal/layout finding: a single 1320px shared measure was applied too broadly. At wide desktop widths, short decision content and explanatory panels could become overly long; meanwhile calculator reference, material data, guide, and legal content need different readable measures. The shared CSS now uses a 1260px general measure, 1120px reference/workstation measure, and 780px explanatory measure. Hub workflows, Materials, homepage evidence, calculator reference/decision areas, guides, and legal reading layouts now opt into the relevant measure instead of receiving one global rectangle.
- Content-driven UI remediation: replaced the Tools and Injection Molding hubs' repeated short four-column card blocks with compact evidence-led workflow rows: documented starting evidence on the left and linked next calculation/cross-check on the right. The Tools route now explicitly connects part/geometry, injection unit, thermal/output, capacity/quality, and material/cost; the Injection route distinguishes mold opening/clamp, complete shot/injection unit, cooling/cycle, and good-output/commercial checks. This is a workflow map, not a larger generic panel.
- Homepage remediation: replaced the generic technical-handoff tiles with three practical evidence records — parting-plane, shot/process, and production/cost — each naming the record to bring, the first tools to use, and the separate validation boundary. The homepage now more directly answers what PlasticsCalc calculates, where to begin, and why it differs from a generic calculator directory.
- Materials remediation: retained the two cited BASF solid-density examples and replaced shallow data-selection cards with a responsive property/source/used-by/limitation reference. It covers solid density, melt density, linear shrinkage, thermal diffusivity, and purchase mass/price with explicit calculator links and non-substitution boundaries. No unsupported numeric material-property table or inferred polymer-family defaults were added. The table is a full-width technical reference on desktop and becomes labelled property records on mobile, with no horizontal overflow.
- Calculator-value remediation: calculator formulas and runtime logic were not changed. Clamp Tonnage, Shot Size, Cooling Time, and Material Cost now show a compact, topic-specific decision chain between the calculator result and the reference sections (for example, complete shot → cushion → melt-density basis → documented injection-unit check). The other ten calculators already had distinct source/input, next-decision, sanity-check, and failure-boundary blocks and were retained rather than padded with repetitive content.
- Trust/Method remediation: About/Method now publishes a source hierarchy (machine maker, exact-grade supplier data, standards/association, then established engineering reference), a rule for retaining generic assumptions as estimates, and a traceable correction path through Contact. No author credential, corporate affiliation, certification, or independent review claim was invented.
- Contact, Privacy, and Disclaimer audit: Contact continues to use the owner-supplied `canghun13@naver.com`; Privacy accurately describes opt-in GA4 and local preference storage; Disclaimer remains consistent with calculator limitations. No advertising feature was added or presented as currently active.
- Official guidance consulted: [Google Search Central — helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content); [Google Search spam policies — scaled content abuse](https://developers.google.com/search/docs/essentials/spam-policies); and [Google AdSense — make pages ready](https://support.google.com/adsense/answer/7299563?hl=en-EN). The implementation uses these as an audit framework, not an approval checklist or guarantee.
- Google/AdSense quality audit: consulted current official Google Search Central people-first guidance, scaled-content-abuse policy, and AdSense page-readiness guidance. **High risk:** there is no public named author or qualified technical-review identity and no evidence can be invented; this needs an owner-provided identity/review policy before a broad authority expansion. **Medium risk:** the site remains a small first-release corpus, 14 calculators share a visible structural shell, and source citation depth is uneven outside the most safety/material/cost-sensitive content; do not mass-generate phase-3 pages before a per-topic primary-source plan exists. **Low risk:** the site has a clear injection-molding purpose, working and discoverable navigation, transparent estimate boundaries, public Contact/Privacy/Disclaimer pages, static crawlable content, self-canonicals, and no generated near-duplicate URL set. These findings are quality-risk assessment only, not an AdSense approval prediction.
- Pre-expansion decision: do not begin a large third-phase expansion yet. The code and UI are stable enough for carefully sourced, individually reviewed additions, but a mass page expansion remains blocked until the owner chooses how to publish accurate authorship/review context and the next calculator/guide topic has a cited primary-source and unique-use-case brief.
- New regression coverage: added `pre-expansion-audit-tests.mjs` and updated `content-value-tests.mjs` so future builds must retain the homepage evidence records, both hub workflow maps, the Materials property map, four critical calculator decision chains, and About source hierarchy.
- Rendered verification after changes: desktop (1280px) and mobile (390px) checks covered Homepage, Tools, Injection Molding, Materials, Guides hub, all four guides, About/Method, Contact, Privacy, and five structurally different calculators. A production desktop sweep also covered all 28 public files before changes. Post-change local rendering had one H1 per sampled page, no horizontal overflow, intact navigation, readable measures, stacked mobile material records, and zero calculator label/input/unit ordering failures. Visual inspection specifically covered the Tools workflow rows, Materials table/stacked mobile records, and Shot Size decision chain.
- Mandatory Quality Gate: [x] automated checks passed (`pre-expansion-audit-tests.mjs`, `content-value-tests.mjs`, `markup-tests.mjs`, `verify.mjs`, `calculator-tests.mjs`, `calculator-ui-tests.mjs`, `consent-tests.mjs`, JavaScript syntax, and `git diff --check`); [x] representative pages visually checked; [x] representative calculators visually checked; [x] desktop checked; [x] mobile checked; [x] no new broken layout; [x] no calculator regression; [x] handover updated.
- Production verification after commit `1df8909`: `plasticscalc.com` served stylesheet release `20260718-audit-1`. At both 1280px and 390px, the live homepage, Tools, Injection Molding, Materials, Guides hub, all four guides, About/Method, Contact, Privacy, and five structurally different calculators each had one H1, no horizontal overflow, and the expected new workflow/property/decision-chain structures. All sampled calculator fields retained correct label/input/unit ordering; the Materials table became labelled stacked records at mobile width.

### 2026-07-18 — Shared spacing calibration (content-driven density)

- Scope: corrected shared vertical spacing across the 28 public HTML pages without changing the industrial engineering-reference visual direction, calculator formulas, calculator DOM, page URLs, or SEO content.
- Root cause: the original visual system retained a 50px section default (later reduced to 38px) alongside 19–20px reference/panel padding, 28px calculator content-grid margins, 20px guide-protocol cells, and a 28px narrow-screen hub override. Short information blocks therefore inherited the same large vertical footprint as long-form sections.
- Shared fix in `assets/css/site.css`: added named spacing tokens and applied them at the shared component boundary. Desktop sections now use 32px vertical padding; standard cards/reference/decision/guide/material panels use 16px; dense hub cards use 14px; reference grids use 12px gaps and 20px block margins. Mobile uses 24px sections, 14px panels, 18px reference-grid margins, and 22px compact hub sections. Guide protocol cells, Materials follow-up, and hub evidence spacing now follow the same rhythm.
- The calculator workstation and `.calc-field` contract were deliberately excluded from this calibration. This preserves the established label → input → unit component layout and prevents a repeat of the prior global-form regression.
- Added `refresh-assets.mjs` as the final static-build step and moved generated pages to stylesheet release `20260718-spacing-1`, so a deployed CSS update is not hidden behind the previous cached stylesheet query string. It recursively updates generated HTML only; it does not alter page content.
- Rendered verification: reviewed homepage, Tools, Injection Molding, Materials, a representative guide, About, and all 14 calculator pages at the default desktop viewport and 390px mobile viewport. All reviewed pages had one H1, loaded the new stylesheet, had no horizontal overflow, and used the expected 32px/16px desktop or 24px/14px mobile shared spacing. Hub decision sections correctly use the tighter 28px/22px section treatment.
- Production verification after commit `94ba4b9`: `plasticscalc.com` served stylesheet release `20260718-spacing-1`. Homepage, Tools, Injection Molding, Materials, a guide, About, and five structurally different calculators were rechecked at 1280px and 390px. Every sampled page had one H1, no horizontal overflow, and the deployed 32px/16px desktop or 24px/14px mobile spacing; the five calculators had no label/input/unit containment or ordering failures.
- Calculator regression result: every calculator retained a contained, vertical label/input/unit field component at desktop and mobile (0 field-order or containment failures across all 14 pages). No calculator formulas or interaction logic changed.
- Mandatory Quality Gate: [x] automated checks passed (`content-value-tests.mjs`, `markup-tests.mjs`, `verify.mjs`, `calculator-tests.mjs`, `calculator-ui-tests.mjs`, `consent-tests.mjs`, JavaScript syntax, and `git diff --check`); [x] representative pages visually checked; [x] representative calculators and all calculator forms checked; [x] desktop checked; [x] mobile checked; [x] no new broken layout; [x] no calculator regression; [x] handover updated.
- Remaining follow-up: after every later shared layout change, retain this token-based spacing system and repeat the Quality Gate. Avoid reintroducing fixed minimum heights or page-specific vertical-spacing overrides for short content blocks.

### 2026-07-18 — Content & Value Audit (people-first and AdSense-readiness)

- Scope audited: 28 public HTML files (27 indexable): homepage; Tools, Injection Molding, Materials, and Guides hubs; all 14 calculators; four guides; About; Contact; Privacy; Disclaimer; and 404. The audit used rendered-page review, source review, calculator behavior checks, internal-link/metadata checks, and current official Google guidance rather than an approval prediction.
- Official criteria consulted: Google Search Central’s people-first guidance (original, satisfying, focused, well-sourced content); Google Search spam policy on scaled content abuse; Google AdSense guidance on unique/relevant content, clear navigation, transparency, and site-wide review. Approval is not guaranteed by these changes.
- Audit finding: 18 pages had a thin/repetitive-content risk despite having working functionality—14 calculators reused the same operational headings and FAQ, three hubs relied on generic “choose/before using” messaging, and About did not yet make the maintenance/correction method concrete. Homepage, four focused guides, Contact, Privacy, Disclaimer, and 404 were retained because they already serve distinct visitor, transparency, or navigational purposes.
- Direct remediation: all 14 calculator pages now replace generic operational copy and identical FAQs with tool-specific input-source, next-decision, sanity-check, and failure-boundary content. No calculator URL or formula was added or changed. Examples: shot tools now distinguish measured shot records from machine rating basis; cycle/output tools distinguish gross output from uptime/yield; shrinkage and resin-weight tools specify grade/direction/solid-vs-melt evidence; cost tools define their accounting boundary.
- Hub remediation: Tools and Injection Molding now present decision evidence and cross-checks rather than generic calls to choose a tool. Materials now documents a constrained data-selection workflow for solid versus melt density, filled/conditioned grades, and cost inputs, while retaining only cited grade-specific density examples instead of expanding an unsupported generic table.
- Trust remediation: About now states the published calculation lifecycle, limits, correction path, and absence of machine-maker/qualification claims. Contact remains the route for traceable technical correction suggestions.
- Added `content-value-tests.mjs` to enforce distinct calculator decision blocks and FAQs, absence of the removed generic calculator filler, concrete hub evidence, Materials data workflow, and method transparency after every static rebuild. Automated content, markup, metadata/link, calculator, calculator-UI, consent, and JavaScript checks pass before deployment; production render verification follows this content release.
- During rendered audit, found a build-order regression in the first content release: a broad layout pattern moved Formula/Inputs/Worked example into the decision grid. The value-content headings now carry a build-only marker, the layout pass targets only those marked headings, and `content-value-tests.mjs` now asserts that all 14 calculators retain the three reference blocks separately from the four decision blocks. The correction is included before final deployment verification.
- Final public-render audit after commit `c15088f`: homepage, Tools, Injection Molding, Materials, Guides, a representative guide, About, Contact, Privacy, Disclaimer, and 404 were rendered at desktop and 390px mobile widths. All had expected H1s and no horizontal overflow. The new hub evidence grids are four columns on desktop and one column at mobile width.
- All 14 calculator pages were rendered at desktop and 390px after the build-order correction. Every page retained exactly three Formula/Inputs/Worked-example reference blocks plus four distinct decision/limitation blocks; no generic calculator heading leaked into the decision area, no content panel was clipped, default results were finite, and mobile label/input/unit components remained contained in one field column. Browser console error audit was empty.
- Mandatory Quality Gate completion for this release: [x] automated checks passed (`content-value-tests.mjs`, markup, metadata/link, calculator, calculator UI, consent, syntax, diff); [x] representative pages visually checked; [x] all calculator content structures rendered; [x] desktop checked; [x] mobile checked; [x] no new broken layout; [x] no calculator regression; [x] handover updated.
- Remaining AdSense/quality uncertainty (not an approval prediction): the site is still a small first-release corpus; it has no published author or independent technical-review identity because none has been provided; and it needs continued grade-specific primary-source review plus real visitor feedback/usage evidence. Do not add mass calculator pages or generic material tables to address this. Before broader expansion, add only source-backed content with a distinct shop-floor question, confirm any author/reviewer information that can be truthfully published, and review Search Console/GA4 feedback once real traffic exists.

### 2026-07-18 — Layout density and information-hierarchy calibration

- Guides hub refinement: removed the oversized, repetitive “How to use a guide with a calculator” wash panel and its nested technical-note box. It is now a compact `Reference protocol` strip with Calculate / Check / Validate steps, preserving the engineering-use boundary without duplicating the guide cards or leaving a large low-information panel.
- The protocol uses a two-part desktop grid and intentional one-column mobile fallback. `enrich-site-pages.mjs` owns the markup so the refinement survives the static rebuild; the shared CSS deployment reference advances to `v=20260718-layout-3`.
- Production verification after commit `55dd3e9`: `/guides/` no longer exposes the old heading or its oversized technical-note box. The protocol is 104px high at the 1440px desktop viewport (475px title / 845px steps) and folds to a 359px single-column panel at 390px, with no horizontal overflow in either case.
- Formula-panel regression correction: guide formulas inherited the generic `.formula { overflow:auto }` behavior after their guide-specific padding and borders were removed, which created an unnecessary internal scrollbar and detached `ƒ(x)` marker. Guide and calculator-reference formulas now explicitly use visible overflow, normal wrapping, static positioning, and no pseudo-marker; formula text must be fully readable without an internal scroll. CSS deployment version advances to `v=20260718-layout-4`.
- Production verification after commit `7a435ef`: the Shot Size & Barrel Capacity guide formula has `overflow: visible`, no pseudo-marker, and equal client/scroll dimensions at desktop. At 390px it wraps into two normal lines (50px height) inside its panel with no page overflow or internal scrollbar.
- Scope was deliberately limited to quality correction of the existing carbon/paper/orange/lime industrial engineering-reference system. No calculator formula, URL, canonical, navigation architecture, or calculator input DOM contract was changed.
- Added `enrich-layout.mjs` as the final repeatable build step. It turns the existing calculator explanation content into distinct responsive reference, decision, caution/limitation, FAQ, and related-tool panels; it also converts the four guide pages and About/Privacy/Disclaimer/Contact pages from long undifferentiated document flows into grouped reading panels. The source content remains static, crawlable, and is regenerated consistently by `build-pages.mjs`.
- Desktop density calibration in `assets/css/site.css`: content measure is now 1320px with a 94% responsive shell; standard section rhythm is 38px; hero padding and its pale-side treatment were tightened; dense tool grids now use `auto-fit` rather than retaining empty `auto-fill` columns; card padding/minimum height were reduced without changing the square-edged visual language.
- Materials hub was rebuilt as a purpose-specific workbench: the weight/cost tool path occupies the main panel, while grade-density guidance is a separate, visible reference aside. This removes the previous left-weighted two-card layout and uses the available desktop width without treating solid density as melt density.
- Calculator pages now group Formula/Inputs/Worked example, operational decision guidance, caution/limitations, FAQ, and related tools into visually distinct blocks. At 900px and below those blocks intentionally fold to one column. The dedicated `.calc-workstation` / `.calc-field` form contract was not overridden, preventing a repeat of the label/input/unit regression.
- Automated validation after regeneration passed: `markup-tests.mjs` (28 pages), `verify.mjs` (27 indexable pages, unique metadata/canonicals, sitemap and links), `calculator-tests.mjs` (14/14), `calculator-ui-tests.mjs` (all calculator field wrappers and mobile fallback), `consent-tests.mjs`, JavaScript syntax check, and `git diff --check`.
- The shared stylesheet reference now carries the explicit `v=20260718-layout-2` deployment version. This is a targeted cache-busting reference for this layout release only, so a browser cannot combine newly generated HTML with a stale shared stylesheet during GitHub Pages propagation.
- Structural coverage check confirmed layout panels on all 14 calculator pages, all four guides, all four legal/contact pages, and the Materials hub.
- Production desktop inspection confirmed the denser Materials workbench and Shot Size workstation use the intended 1320px desktop measure with no horizontal overflow. The first 390px mobile inspection found a homepage-only overflow: the late desktop `.tool-index` width override superseded the older mobile collapse. The responsive override now explicitly returns `.tool-index` to one column at 900px and below; the stylesheet deployment version was advanced to `v=20260718-layout-2` for the corrective release. Final production mobile recheck follows that release.
- Final public-render audit after commit `78ebf76`: homepage, Tools hub, Injection Molding hub, Materials hub, Guides hub, a representative guide, About, Privacy, Disclaimer, Contact, and 404 were inspected at desktop and 390px mobile widths. All had their expected H1 and no horizontal overflow. Materials renders as a 632px main / 539px reference workbench on desktop and a 345px one-column flow on mobile; guide/legal reading panels likewise collapse cleanly.
- All 14 calculator pages were rendered at desktop and 390px. Every page had finite default output, no `NaN`/`undefined`/`Infinity`, no horizontal overflow, contained label/input/unit elements, and vertical label → input → unit order. At mobile, every calculator form used a single 293px field column and every new explanatory panel used one column. Browser interaction regression checks changed, calculated, and reset Clamp Tonnage, Shot Size, Cooling Time, Material Cost, and Mold Shrinkage; each reset restored its default and Material Cost changed from 0.13 to 2.49 per part under a deliberately large mass input. No browser console errors were reported.
- Mandatory Quality Gate completion for this release: [x] automated checks passed; [x] representative pages visually checked; [x] representative calculators visually checked; [x] desktop checked; [x] mobile checked; [x] no new broken layout; [x] no calculator regression; [x] handover updated. No remaining layout issue is known from this release.

### 2026-07-18 — Foundation and initial calculator release

- Reviewed `README.md`, this handover, Git status, origin remote, `main` branch, and CNAME (`plasticscalc.com`) before implementation.
- Competitive/search-intent review: calculator SERPs are populated by simple single-purpose tools. Useful opportunities are transparent assumptions, linked sizing/process/cost workflow, static crawlable explanatory pages, and tools for capacity, scrap, utilization and amortization—not only clamp/shot inputs. References reviewed included KEYENCE injection-molding formulas, MIT course material on clamp force, BASF cooling-time material, and current industry calculator implementations.
- Built static shared design system in `assets/css/site.css`; created technical, responsive header, navigation, footer, breadcrumbs, cards, formula and result layouts.
- Added homepage, tools hub, injection molding category, materials expansion category, guides structure, about, privacy, disclaimer and 404 page.
- Implemented 14 working calculators using the shared `assets/js/calculators.js` configuration: clamp tonnage, shot size, shot volume, projected area, cycle time, cooling time, parts/hour, cavity count, mold shrinkage, resin weight, material cost per part, scrap rate, machine utilization, and mold amortization.
- Every calculator has a self-canonical static URL, unique title/description/H1, Open Graph basics, SoftwareApplication schema, calculator UI, formula/method, inputs, worked-example guidance, limitations, FAQ, and related tools.
- Formula approach: clamp force is projected area × estimated cavity pressure × safety factor; shot mass aggregates parts/runner/cushion; volume/mass use density; cycle is phase sum; cooling uses the standard one-dimensional flat-wall Fourier-style estimate; output/cavity calculations use available time; cost and production calculations use explicit input assumptions. All tools warn that results are estimates and require validation using material/machine/mold data and trials.
- Added GA4 once globally through `assets/js/site.js` using `G-4HCMML5ENX`; localhost is excluded. Added `robots.txt`, `sitemap.xml`, `llms.txt`, and basic SVG favicon. `CNAME` was preserved.
- `build-pages.mjs` is the static-page generator. It is a development helper only; generated HTML is committed for GitHub Pages crawlability.

### 2026-07-18 — Source-reviewed interpretation guides

- Added two substantive, static guides and linked them from the Guides hub and sitemap:
  - `guides/clamp-force-and-projected-area.html`
  - `guides/cooling-time-estimates.html`
- Clamp guide records the projection-area/cavity-pressure distinction and a validation sequence. It links to KEYENCE’s injection molding formula reference and MIT manufacturing course material.
- Cooling guide documents the one-dimensional estimate’s inputs and omissions, plus a controlled validation method. It links to BASF’s cooling-time technical information and Autodesk Moldflow documentation.
- Re-ran `verify.mjs`: 25 HTML pages, 25 unique titles, 25 unique canonicals, zero missing local absolute links. `git diff --check` passed.

### 2026-07-18 — Shot-size machine-match guide

- Added `guides/shot-size-and-barrel-capacity.html` and linked it from the Guides hub and sitemap.
- The guide distinguishes complete shot mass from injection volume, cautions that a quoted PS shot-weight rating is not a material-neutral barrel capacity, and directs users to grade-specific material and injection-unit documentation. It cites ARBURG technical data and a BASF material-data example.
- Re-ran `verify.mjs`: 26 HTML pages, 26 unique titles, 26 unique canonicals, zero missing local absolute links. `git diff --check` passed.

### 2026-07-18 — Cost-estimate interpretation guide

- Added `guides/injection-molding-cost-estimate.html`, linked from the Guides hub and sitemap.
- It defines the cost stack, separates one-time tooling from recurring costs, describes the scope of the material/scrap/amortization calculators, and identifies conversion, quality, post-process and logistics costs that require production data or supplier validation.
- Sources linked: Autodesk Moldflow Cost Adviser and Protolabs cost-factor guidance.
- Re-ran `verify.mjs`: 27 HTML pages, 27 unique titles, 27 unique canonicals, zero missing local absolute links. `git diff --check` passed.

### 2026-07-18 — Calculator input and accessibility hardening

- Updated shared `assets/js/calculators.js` for all 14 calculators: explicit error messages, non-negative numeric validation, domain checks for density, cycle time, cooling temperatures/diffusivity, cavity count, production life, and utilization time.
- Added reset controls, `aria-live`/atomic result feedback, `role="alert"` validation feedback, unit descriptions attached to inputs, and `aria-invalid` state updates.
- Invalid or non-finite calculations no longer display a misleading numeric result; users receive an actionable correction message instead.
- Validation run: `node --check assets/js/calculators.js`, `verify.mjs` (27 unique titles/canonicals with no missing local absolute links), and `git diff --check` all passed.

### 2026-07-18 — First-release full quality audit

- Audited the complete repository, README, handover, branch/remote, file structure, CNAME, robots, llms, sitemap, all 14 calculators, and all 27 generated HTML pages before modifying the existing structure.
- Calculator formula verification: clamp force follows projected area × cavity pressure; shot/volume/mass use the stated density relationships; cycle is the sum of phases; cooling uses the documented flat-wall Fourier-style estimate; output, cavity, scrap, utilization, material cost and amortization formulas match their displayed calculations. Normal-value regression tests now cover all 14 tools in `calculator-tests.mjs`.
- Found and corrected one engineering-definition issue: Keyence defines molding shrinkage as `(cavity − molded part) ÷ cavity`, so Mold Shrinkage now calculates cavity dimension as `molded part ÷ (1 − shrinkage)` rather than multiplying by `(1 + shrinkage)`. The page formula, default result (101.52 mm at 1.5%), worked example, and validation for shrinkage below 100% were updated together.
- Added actual numerical worked examples to every calculator page and clarified that the first release intentionally uses displayed fixed engineering units rather than a unit switcher. Existing input labels make each unit explicit; no implicit unit conversion is claimed.
- Replaced generic related-tool lists with process-flow links: projected area → clamp force; shot size → shot volume/resin weight; cycle/cooling → output/cavity planning; resin weight → cost/scrap/amortization. Relevant guides are linked where they exist.
- Expanded `verify.mjs` to check every indexable page for unique title, description, H1, self-canonical, OG title, structured data, GA4 script, valid local absolute links, exact sitemap membership, robots sitemap directive, and CNAME. `404.html` is deliberately excluded from sitemap.
- Final checks before commit: 14 calculator regression tests passed; JavaScript syntax check passed; 27 HTML pages / 26 indexable pages / 26 sitemap URLs have no audit issues; `git diff --check` passed. GA4 remains centrally loaded once from `assets/js/site.js` with `G-4HCMML5ENX`.

### Current audit status and next priorities

- Current total: 14 calculators, 4 guides, 27 generated HTML files (26 indexable; 404 excluded).
- No new calculator was added because the core workflow did not have a safety- or usability-critical gap; the priority was accuracy and completeness of the initial set.
- Production deployment verification after commit `0217347`: the public Mold Shrinkage page and shared calculator script served the corrected `part ÷ (1 − shrinkage)` formula, the 101.52 mm worked example, and the corrected runtime expression. GitHub Pages propagation is complete.
- Added explicit `noindex,follow` on `404.html`; 404 remains excluded from sitemap. The expanded verifier now asserts this condition alongside canonical, sitemap, robots, CNAME, GA4, and local-link checks.
- Materials hub quality update: added two grade-specific solid-density references for Resin Weight context—BASF Ultramid B3S Q661 (PA6, 1.13 g/cm³) and Ultradur B 4300 G6 HR (PBT-GF30, 1.51 g/cm³), both ISO 1183 basis. Each source is linked and the page distinguishes solid density from melt density. No automatic Shot Volume preset was added because that calculator needs melt density at process conditions, not these solid-density values.
- Production HTTP audit after commit `703296c`: all 26 sitemap URLs returned HTTP 200, served their own self-canonical URL, and referenced the shared GA4 loader exactly once. No public deployment issues were found.
- GA4 basic consent update: `assets/js/site.js` now blocks loading GA4 until a visitor explicitly accepts analytics. The site records a granted/denied choice locally, offers equally available Accept and Decline controls, and provides a Privacy-page control to reopen the choice. This is a conservative basic implementation (no GA request before acceptance), not a substitute for a jurisdiction-specific CMP, legal review, or a consent-mode/TCF integration if those become required.
- Post-change checks: static page generation, `node --check` for site and calculator scripts, all 14 calculator regression tests, `verify.mjs`, and `git diff --check` passed.
- Added `consent-tests.mjs` to regression-test consent behavior without a browser dependency: no GA4 script before a choice, exactly one script after acceptance, no script/banner after a stored decline, and one script after a stored acceptance. The GA call now explicitly uses `window.gtag`, removing reliance on browser global-name lookup. Consent tests, calculator tests, syntax check, verifier, and diff check passed.
- Production verification after commit `eb30841`: the public Privacy page contains the preference control; cache-bypassed public `site.js` contains the consent key, the granted-only GA4 load condition, and explicit `window.gtag` calls. Deployment is complete.
- Content and markup remediation pass: detected character-encoding artifacts in the generated HTML source that could render broken formula symbols, punctuation, and anchor text. Added `sanitize-pages.mjs` to the static generation pipeline and verified no non-ASCII corruption remains in generated HTML.
- Enriched every existing calculator page with tool-specific operational use, primary result drivers, and a common mistake. Added `enrich-tool-pages.mjs` to retain this content after every static regeneration; no new calculator URLs were created.
- Reworked the homepage around machine sizing, cycle/output, and cost workflows. Replaced short About, Privacy, and Disclaimer pages with site-specific explanatory content. Privacy accurately describes opt-in GA4 behavior, and the disclaimer distinguishes estimates from approvals and supplier/process validation.
- Validation after the remediation pass: 27 HTML files, 26 indexable/self-canonical sitemap URLs, no broken local absolute links, no detected non-ASCII corruption in generated HTML, and all 14 calculator regression tests passed.
- Hub and guide enrichment pass: expanded Tools, Injection Molding, Materials, and Guides hubs with decision workflows, scope boundaries, selection guidance, related reference paths, and practical callouts. Added operational FAQ sections to all four existing guides. `enrich-site-pages.mjs` preserves this content across future static builds.
- Re-ran generation, verifier, calculator regression tests, non-ASCII scan, and diff check successfully; no new public URLs were introduced.
- Production verification after commit `0dd882e`: the public homepage workflow, calculator-specific operational content, guide FAQs, and Injection Molding hub workflow all served correctly. The only non-ASCII characters returned by the browser were normal rendered engineering and typography symbols (for example ×, ÷, π, degree, superscript, dash, and copyright), not encoding corruption.
- Next priority: use real material-grade documentation to introduce carefully scoped material presets only where the data source, temperature basis, and limitations can be shown. Then add browser-level interaction tests and review GA4 Realtime/consent requirements before broader SEO expansion.

### Open issues / next actions

1. Production verification on 2026-07-18: `https://plasticscalc.com/` and `https://canghun13.github.io/plasticscalc/` returned HTTP 200. The deployed homepage includes its expected title and self-canonical. The deployed `assets/js/site.js` contains GA4 ID `G-4HCMML5ENX` and its `gtag('config', ...)` call.
2. Validate formulas against material-specific supplier data sheets and add cited long-form guides (especially cooling, shrinkage, pressure and machine capacity) before expanding calculator count.
3. Add a consent solution if legally required for target visitor jurisdictions before relying on GA4 cookies, and confirm an event in the GA4 Realtime report using a normal browser visit.
4. Add automated link/metadata and calculator test scripts when a standard local runtime/toolchain is adopted.

### Baseline — Project Initialization

- PlasticsCalc niche selected.
- Domain selected: `plasticscalc.com`.
- Initial project scope and expansion plan documented.
- README and handover baseline created.
- Next step: create the repository and initialize development.

---

## 18. AI AGENT INSTRUCTION

When an AI coding agent receives this repository:

- Read `README.md`.
- Read this entire `handover.md`.
- Inspect the actual code before making assumptions.
- Do not redesign the project architecture without a strong reason.
- Do not mass-generate pages before the reusable structure and formula-validation process are stable.
- Do not change canonical strategy or URL structure casually.
- Do not claim a task is complete unless the code is actually implemented and tested.
- Before ending the session, update this document with exact completed work and the next actionable step.

---

## 19. Mandatory Quality Gate Before Commit / Push

This is a permanent release rule. Apply it before every commit/push for a major change, especially after shared CSS, header/footer, grid/flex/layout, calculator-form, common-component, navigation, or large content/template work.

### 1. Automated checks

Run and maintain reusable automated checks for:

- Broken links
- Malformed HTML
- Duplicate IDs
- JavaScript errors
- Sitemap and internal links
- Calculator default behavior

### 2. Visual regression sampling

Do not rely on source review alone, and do not require a browser pass over every page for every change. Verify these representative page types in a real rendered browser:

- Homepage
- Tools hub
- Injection Molding hub
- Materials hub
- One representative guide/blog page
- About or one legal page

Also verify at least five calculators with different UI structures. Include, where available:

- A simple-input calculator
- A multi-input calculator
- A calculator with unit conversion or differing units
- A calculator with a more detailed result panel
- A calculator combined with a table/reference section

### 3. Desktop and mobile

Check all representative pages and calculators at desktop and mobile viewports. Verify:

- Label/input/unit association
- Overflow and clipped text
- Grid/flex integrity
- Button placement
- Navigation
- Excessive whitespace
- Card/panel alignment
- Result readability

### 4. Full visual-check trigger

Broaden visual checking beyond the representative sample when there is a global CSS or design-system change, calculator common-component change, responsive-breakpoint change, or a known post-deployment visual regression.

### 5. No blind completion

Do not declare UI healthy from code and automated tests alone. When visual verification is available, render and inspect it. If visual verification is unavailable, record that limitation explicitly in this handover and the final work report.

### 6. Required checklist

Before declaring a major task complete, confirm:

- [ ] Automated checks passed
- [ ] Representative pages visually checked
- [ ] Representative calculators visually checked
- [ ] Desktop checked
- [ ] Mobile checked
- [ ] No new broken layout
- [ ] No calculator regression
- [ ] handover.md updated

If this checklist is not complete, the task is not complete.

---

## 20. Approved Reference Layout — Locked Without Owner Approval

The owner has explicitly approved the desktop layout shown in the 2026-07-18 reference captures for the Injection Molding evidence workflow and the Materials data-selection workflow. Treat that rendered relationship as the current baseline design.

- Preserve the overall page container and maximum widths, left/right page padding, section widths, readable text line lengths, and the relationship between panels and technical tables.
- In particular, preserve the dense engineering-reference character: readable copy remains narrower than data tables where the content warrants it, and workflow panels/tables align as one coherent page system rather than inheriting arbitrary full-width or narrow-width overrides.
- Do **not** change global container, `max-width`, spacing-token, shared section, shared panel, grid, flex, responsive-layout, or other site-wide layout CSS without first presenting the proposed visual change and receiving the owner's explicit approval.
- Future work may modify content, functionality, SEO, calculators, metadata, and internal links while preserving this layout baseline.
- If a layout change appears necessary for correctness, accessibility, or a new content type, stop before implementation: explain the reason, affected page types, expected visual difference, and regression-testing plan, then wait for approval. Local page-specific fixes that alter the approved visual relationship are also subject to this rule.
- Any owner-approved layout change must be recorded here with the affected selectors, reference viewport(s), before/after rationale, and production verification result.

---

### 2026-07-18 Markup integrity remediation

- Investigated the deployed Materials-page symptom `resin-weight.html">Resin Weight Calculator` as a shared generation issue, not a one-off content typo.
- Root cause: `build-pages.mjs` built the Materials card grid by applying a substring regex to the already-rendered combined `links` HTML. Each match began at the slug inside an `href` value, so it discarded the opening `<article>`, `<h3>`, and `<a href="...` markup. This affected exactly two cards in `tools/materials/index.html`: Resin Weight Calculator and Material Cost Per Part Calculator.
- Replaced that regex extraction with `materialLinks`, generated directly from the two matching `toolData` records using the same complete-card template as the main tools hub. This removes the fragile HTML-string parsing path.
- Added `markup-tests.mjs` and ran it against all 27 generated HTML files. It fails on visible `.html">` or attribute-like fragments, unclosed/nested anchors, unquoted or missing anchor href values, duplicate IDs, and replacement-character encoding errors. The final run passed.
- Regenerated every public HTML page and re-ran `verify.mjs` (27 HTML files, 26 indexable pages, unique metadata/canonicals, sitemap and link checks), `calculator-tests.mjs` (14/14 calculators), `consent-tests.mjs`, and `git diff --check`; all passed.
- Next action: after the commit is deployed, cache-bypass fetch `https://plasticscalc.com/tools/materials/` and verify that both calculator cards render as complete anchors and that no href fragment appears in visible page text.
- Deployment verification after commit `cb0c759`: cache-bypassed `https://plasticscalc.com/tools/materials/` returned HTTP 200 with both expected full anchors. Its visible text contained neither `resin-weight.html` nor attribute-like `href=`/`src=` fragments.

---

### 2026-07-18 PlasticsCalc visual identity system

- Rebuilt the shared visual system specifically for PlasticsCalc as an industrial engineering-reference workstation. The implementation remains static, image-light, and mobile-first; no generic landing-page template or external design dependency was added.
- Differentiation from the prior shared template: removed the soft teal/blue palette, repeated rounded cards, pill-like controls, centered generic CTA hero, and uniform three-column section rhythm. The new palette uses carbon, warm paper, safety orange, and material-reference lime; radius is zero throughout primary UI.
- Header is now a compact reference-desk masthead with a PC maker's mark, an engineering-reference subtitle, and uppercase tool-index/process/material/field-guide navigation. Footer is split into an engineering-reference statement and compliance/method block rather than a generic link row.
- Homepage is now a workstation composition: a gridded process-question hero with an INPUT -> ESTIMATE -> VERIFY readout; a three-step Geometry/Thermal/Economics process rail; a constraint-led core-tool index; and a compact technical-handoff strip. It no longer uses the previous hero + CTA + repeated card-grid sequence.
- Tool cards now form square-edged, dense reference tiles with category labels and calibration bars instead of floating rounded cards. Generic category, materials, guide, and about pages inherit the same editorial data-panel system.
- Calculator pages use a bordered two-panel work area: a parameter form on a paper field beside a carbon estimate-output panel, with monospace unit labels, technical result labeling, square controls, and responsive single-column fallback. Formula blocks, technical notes, and material-reference tables were restyled as distinct engineering artifacts.
- Added responsive rules for the masthead, workstation hero, process rail, tool index, calculator form, and footer; narrow screens collapse intentionally to one-column work flow rather than retaining a compressed card grid.
- Updated the SVG favicon to use the same carbon/orange/lime PlasticsCalc signal system.
- Validation after redesign: generated all 27 HTML pages; `markup-tests.mjs`, `verify.mjs`, `calculator-tests.mjs`, `consent-tests.mjs`, JavaScript syntax checks, and `git diff --check` passed. SEO URLs, canonicals, page content, and calculator formulas were not changed.
- Next priority: after deployment, verify the production homepage, one calculator, and the Materials table at desktop and mobile widths; retain this visual system for any new tool or guide instead of reintroducing rounded generic-card patterns.
- Deployment verification after commit `1e95d00`: cache-bypassed `https://plasticscalc.com/` returned HTTP 200 with the workstation hero, Geometry/Thermal/Economics process rail, constraint-led tool index, and engineering-reference masthead. The served stylesheet contained the carbon/orange/lime signal palette and responsive layout rules.

---

### 2026-07-18 Calculator UI regression remediation and Contact page

- Root cause of the calculator UI regression: the design-system CSS made the calculator form a two-column grid, while the shared JavaScript emitted each field as three independent direct grid children (`label`, `input`, `unit`). CSS therefore placed a label and a different field's input in adjacent cells, then moved the unit to the next grid cell. The issue was structural, not formula-related, and affected all 14 calculator pages.
- Rebuilt the shared calculator DOM in `assets/js/calculators.js`. Every input is now a self-contained `.calc-field` component containing its semantic `label`, associated input, and `aria-describedby` unit text. The calculator uses `.calc-workstation`, `.calc-input-panel`, `.calc-result-panel`, and `.calc-controls` classes instead of relying on the site-wide `.grid` or generic card layout.
- Added calculator-specific CSS isolation in `assets/css/site.css`: field components are the only form-grid children; desktop retains a two-field work layout; the calculator workstation stacks at 800px and every field stacks at 520px. This preserves the PlasticsCalc workstation design while preventing global card/grid changes from rearranging field internals.
- During runtime testing, found and corrected a separate Projected Area issue: `form.elements['length']` resolves to the form collection's `length` property rather than the input element. Validation now resolves fields with `form.querySelector('[name="…"]')`, restoring the default 204 cm² calculation without changing the formula.
- Added `calculator-ui-tests.mjs` to enforce the wrapper, label/unit association, dedicated workstation classes, mobile field fallback, and all-14-page coverage in future checks.
- Browser-rendered desktop audit: all 14 calculators had contained label/input/unit rectangles, default finite results, no horizontal overflow, and the shared calculator workspace. Browser interaction audit changed an input, clicked Calculate, and reset each calculator; all 14 recalculated and restored the default value. A larger changed value produced a distinct finite formatted result for all 14 tools. A fresh Projected Area browser tab had no console errors.
- Browser-rendered mobile audit at 390px: all 14 calculator forms had one field column, contained labels/inputs/units, result panel below the fields, and no horizontal overflow. Desktop/mobile audits of homepage, tools, injection hub, materials, guides, about, privacy, disclaimer, contact, and 404 found a header, footer, Contact link, H1, and no horizontal overflow.
- Added `contact.html` as a truthful static Contact and feedback policy page. No invented email address, mailbox, or server form was added because no verified contact method exists in the repository. The page covers general inquiries, calculator error reports, technical correction sources, engineering disclaimer, privacy questions, and future verified-contact policy.
- Added Contact to shared header/footer navigation, sitemap, `llms.txt`, and the Privacy Policy's contact guidance. Current totals: 28 HTML pages, 27 indexable sitemap URLs, 14 calculators, and 4 guides.
- Validation before commit: `calculator-ui-tests.mjs`, `markup-tests.mjs`, `verify.mjs`, `calculator-tests.mjs`, `consent-tests.mjs`, JS syntax checks, and `git diff --check` passed.
- Next priority: after deployment, cache-bypass check Contact and a calculator at the production domain; retain `.calc-field` and `.calc-workstation` as the only supported calculator layout contract.
- Deployment verification after commit `52aa581`: cache-bypassed production `calculators.js` included `calc-field`, `calc-workstation`, and the safe query-selector field lookup; `contact.html` returned the published Contact policy. A production-browser Clamp Tonnage audit found three fields with label/input/unit rectangles contained and vertically ordered within each field, no horizontal overflow, and the expected 220 US tons result. The live Contact page has no form, includes Privacy and engineering-disclaimer links, and has no horizontal overflow.

### 2026-07-18 Verified public contact route

- The site owner supplied `canghun13@naver.com` as the verified public contact address. Contact now uses a visible `mailto:` link for general inquiries, calculator feedback/error reports, technical correction suggestions, and privacy questions.
- Updated the Contact copy and Privacy-page contact guidance together. The site remains static and does not add a server-side form, account system, or an invented support channel.

### 2026-07-29

- 메인 페이지 푸터 아래의 디렉토리 뱃지 영역은 사용자가 직접 관리하는 영역이므로 수정·삭제·리팩터링하지 않는다.- https://kittylaunch.com, https://sellwithboost.com 에 등록 (내가 직접함)


### 2026-07-30

- 메인 페이지 푸터 아래의 디렉토리 뱃지 영역은 사용자가 직접 관리하는 영역이므로 수정·삭제·리팩터링하지 않는다.- https://twelve.tools,https://findly.tools 에 등록 (내가 직접함)


### 2026-08-06

- 메인 페이지 푸터 아래의 디렉토리 뱃지 영역은 사용자가 직접 관리하는 영역이므로 수정·삭제·리팩터링하지 않는다.- https://boostdomainrating.com/ 에 등록 (내가 직접함)
