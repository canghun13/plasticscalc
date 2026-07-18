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
