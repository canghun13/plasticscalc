import { readFileSync } from 'node:fs';

const read = (file) => readFileSync(file, 'utf8');
const failures = [];
const expect = (condition, message) => { if (!condition) failures.push(message); };
const count = (html, pattern) => (html.match(pattern) || []).length;

const toolsHub = read('tools/index.html');
expect(toolsHub.includes('Follow the evidence record, not a generic tool list.'), 'Tools hub is missing its evidence-led workflow heading.');
expect(count(toolsHub, /class="workflow-step"/g) === 5, 'Tools hub must retain five decision workflow steps.');

const injectionHub = read('tools/injection-molding/index.html');
expect(injectionHub.includes('A production assumption needs four independent evidence checks.'), 'Injection hub is missing its independent-check framing.');
expect(count(injectionHub, /class="workflow-step"/g) === 4, 'Injection hub must retain four machine and mold workflow steps.');

const materials = read('tools/materials/index.html');
expect(materials.includes('Choose a material property by the calculation, state, and decision.'), 'Materials hub is missing the property-selection workflow.');
expect(count(materials, /data-label="Property"/g) === 5, 'Materials hub must retain five property-to-calculator rows.');
for (const term of ['Solid density', 'Melt density', 'Linear shrinkage', 'Thermal diffusivity', 'Purchase mass and price']) {
  expect(materials.includes(term), `Materials hub is missing ${term}.`);
}

const home = read('index.html');
expect(home.includes('Bring one usable evidence record to the workstation.'), 'Homepage is missing its evidence-record orientation.');
expect(count(home, /<dt>/g) === 3, 'Homepage must retain three evidence record paths.');

const about = read('about.html');
expect(about.includes('Source hierarchy and correction path'), 'About page is missing source hierarchy and correction policy.');

for (const id of ['clamp-tonnage', 'shot-size', 'cooling-time', 'material-cost']) {
  const html = read(`tools/injection-molding/${id}.html`);
  expect(html.includes('From estimate to the next check'), `${id} is missing its decision chain.`);
  expect(count(html, /<section class="calc-decision-chain"/g) === 1, `${id} must have exactly one decision chain.`);
}

if (failures.length) {
  console.error(JSON.stringify({ status: 'failed', failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  checks: ['homepage evidence records', 'tools workflow map', 'injection workflow map', 'materials property map', 'critical calculator decision chains', 'about source hierarchy']
}));
