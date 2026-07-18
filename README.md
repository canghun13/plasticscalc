# PlasticsCalc

PlasticsCalc is a free web-based calculator and reference site for plastic processing professionals, engineers, technicians, estimators, and students.

The initial focus is **Plastic Injection Molding Tools**, with long-term expansion into other plastics-processing categories.

## Domain

- Production domain: `https://plasticscalc.com`

## Project Goal

Build a fast, static, SEO-focused calculator site that provides practical tools for plastics manufacturing without requiring accounts, payments, or a backend database.

Primary goals:

- Publish useful engineering and production calculators.
- Target long-tail search queries with clear practical intent.
- Build topical authority around plastic injection molding first.
- Expand gradually into broader plastics-processing topics.
- Monetize primarily through advertising and, where appropriate, relevant affiliate or B2B partnerships.

## Initial Scope

### Injection Molding

Planned calculator and content areas include:

- Clamp tonnage
- Shot size and shot weight
- Injection capacity
- Projected area
- Cycle time
- Cooling time
- Fill time
- Screw recovery and residence time
- Cavity count
- Runner and sprue calculations
- Mold shrinkage
- Material usage and resin cost
- Masterbatch and regrind ratios
- Scrap and yield
- Parts per hour / shift
- OEE and machine utilization
- Machine-hour and part-cost calculations
- Mold amortization
- Break-even quantity

## Long-Term Expansion

PlasticsCalc should be structured so it can later expand into:

- Injection Molding
- Extrusion
- Blow Molding
- Thermoforming
- Plastic Materials
- Production & Costing
- Quality & Process Control

## Technology

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages
- Cloudflare for domain / DNS
- No database
- No required user accounts
- No server-side application dependency

## Recommended Structure

```text
plasticscalc/
├─ index.html
├─ tools/
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

## SEO Principles

- Each calculator must have its own indexable static page.
- Each page must have a unique title, meta description, H1, and explanatory copy.
- Important calculator pages should include:
  - Formula / calculation logic
  - Input explanations
  - Worked example
  - Result interpretation
  - FAQ
  - Related calculators
- Internal linking should connect calculators, material guides, and related articles.
- Avoid thin pages created only to increase page count.
- Prefer useful long-tail pages tied to real engineering or production questions.
- Keep canonical tags, sitemap entries, and internal URLs consistent.

## Accuracy and Safety

Engineering calculations must be verified before publication.

Each tool should:

- Clearly state assumptions and units.
- Distinguish estimates from manufacturer-specific or validated engineering data.
- Avoid presenting results as final engineering approval.
- Include an appropriate disclaimer when process, tooling, machine-selection, or safety decisions may depend on additional factors.

## Deployment

The site is intended to be deployed through GitHub Pages and connected to `plasticscalc.com`.

Typical workflow:

1. Develop and test locally.
2. Commit changes to Git.
3. Push to GitHub.
4. Verify GitHub Pages deployment.
5. Check the production site.
6. Update `handover.md` with completed work, remaining tasks, and important decisions.

## Development Continuity

`handover.md` is the operational source of truth for ongoing development.

Any AI coding agent or developer continuing the project should read `handover.md` before making changes and update it before ending a work session.
