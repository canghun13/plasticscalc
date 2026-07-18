import { readFileSync, writeFileSync } from 'node:fs';

const homeReference = `<section class="wrap section home-reference" aria-labelledby="home-evidence-title"><header class="section-intro"><p class="eyebrow">Before the calculation</p><h2 id="home-evidence-title">Bring one usable evidence record to the workstation.</h2><p>PlasticsCalc is designed for a transparent first estimate: identify the record you have, run the linked calculation, then preserve the source and use the result to define the next validation step.</p></header><dl class="home-evidence-list"><div><dt>Parting-plane record</dt><dd>CAD projection, cavity count, runner projection, and a cavity-pressure basis lead to <a href="/tools/injection-molding/projected-area.html">Projected Area</a> and <a href="/tools/injection-molding/clamp-tonnage.html">Clamp Tonnage</a>. Confirm physical press and mold fit separately.</dd></div><div><dt>Shot and process record</dt><dd>Part and runner mass, cushion, resin basis, wall section, and an observed cycle lead to <a href="/tools/injection-molding/shot-size.html">Shot Size</a>, <a href="/tools/injection-molding/cooling-time.html">Cooling Time</a>, and <a href="/tools/injection-molding/cycle-time.html">Cycle Time</a>.</dd></div><div><dt>Production and cost record</dt><dd>Available hours, uptime, good-versus-scrap count, weighed mass, and purchase data lead to <a href="/tools/injection-molding/parts-per-hour.html">Parts Per Hour</a>, <a href="/tools/injection-molding/scrap-rate.html">Scrap Rate</a>, and <a href="/tools/injection-molding/material-cost.html">Material Cost</a>.</dd></div></dl></section>`;

let home = readFileSync('index.html', 'utf8');
home = home.replace(/<section class="wrap section"><h2>Built for a technical handoff<\/h2>[\s\S]*?<\/section>(?=<\/main>)/, homeReference);
writeFileSync('index.html', home);

let about = readFileSync('about.html', 'utf8');
const methodSection = '<section class="reading-section reading-source-hierarchy"><h2>Source hierarchy and correction path</h2><p>For a calculation input, PlasticsCalc prefers the relevant machine manufacturer, exact-grade material supplier data, standards body or industry association, then established engineering references. A generic rule of thumb is kept as a stated estimate; it is not promoted to grade-specific or validated production data.</p><p>When a formula, source, unit, or boundary needs correction, send the page URL, affected input, source, and condition through <a href="/contact.html">Contact</a>. The site records source-based changes in its project handover and does not represent a correction as machine, material, or process approval.</p></section>';
about = about.replace('</article></main>', `${methodSection}</article></main>`);
writeFileSync('about.html', about);

const chains = {
  'clamp-tonnage': [
    ['Parting plane', 'CAD projection for every cavity and runner'],
    ['Pressure basis', 'Measured cavity pressure or a documented estimate'],
    ['Press screen', 'Clamp force with a stated margin'],
    ['Separate checks', 'Tie bars, platen, mold height, injection unit, and ejection']
  ],
  'shot-size': [
    ['Complete shot', 'Part mass × cavities plus runner or sprue'],
    ['Cushion', 'A stated process allowance, not scrap'],
    ['Volume basis', 'Melt density when the next check is volumetric'],
    ['Machine check', 'Documented screw, stroke, and injection-unit rating']
  ],
  'cooling-time': [
    ['Thermal record', 'Controlling wall, grade basis, melt, mold, and ejection temperatures'],
    ['Wall model', 'A comparative flat-wall estimate'],
    ['Process screen', 'Use with total cycle and ejection requirement'],
    ['Trial validation', 'Check dimensions, stress, warp, surface, and release']
  ],
  'material-cost': [
    ['Mass boundary', 'Part and runner mass allocated by cavity'],
    ['Material policy', 'Purchase price and recovery or scrap rule'],
    ['Material result', 'A resin-only exposure per part'],
    ['Commercial scope', 'Add conversion, quality, tooling, and logistics separately']
  ]
};

for (const [id, steps] of Object.entries(chains)) {
  const path = `tools/injection-molding/${id}.html`;
  let html = readFileSync(path, 'utf8');
  const chain = `<section class="calc-decision-chain" aria-labelledby="${id}-decision-chain"><p class="eyebrow">Decision chain</p><h2 id="${id}-decision-chain">From estimate to the next check</h2><ol>${steps.map(([title, detail]) => `<li><strong>${title}</strong><span>${detail}</span></li>`).join('')}</ol></section>`;
  html = html.replace('<div class="calc-reference-grid">', `${chain}<div class="calc-reference-grid">`);
  writeFileSync(path, html);
}
