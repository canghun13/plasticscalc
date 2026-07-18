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
