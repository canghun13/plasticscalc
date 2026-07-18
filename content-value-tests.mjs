import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = file => readFileSync(file, 'utf8');
const calculators = readdirSync('tools/injection-molding')
  .filter(file => file.endsWith('.html') && file !== 'index.html');
const failures = [];

for (const file of calculators) {
  const html = read(join('tools/injection-molding', file));
  const headings = [...html.matchAll(/<section class="decision-block[^>]*"><h2>([^<]+)<\/h2>/g)].map(match => match[1]);
  const referenceHeadings = [...html.matchAll(/<section class="reference-block[^>]*"><h2>([^<]+)<\/h2>/g)].map(match => match[1]);
  if (headings.length !== 4) failures.push(`${file}: expected four decision blocks`);
  if (new Set(headings.slice(0, 3)).size !== 3) failures.push(`${file}: decision blocks are not distinct`);
  if (headings.slice(0, 3).some(heading => ['Formula and method', 'Inputs and units', 'Worked example'].includes(heading))) failures.push(`${file}: reference content leaked into decision blocks`);
  if (referenceHeadings.join('|') !== 'Formula and method|Inputs and units|Worked example') failures.push(`${file}: reference block structure is incomplete`);
  if (/Can I use this as a final production setting\?|Use this when|What changes the result most/.test(html)) failures.push(`${file}: retained generic calculator filler`);
  if (!/<h2>FAQ<\/h2><h3>/.test(html)) failures.push(`${file}: missing specific FAQ`);
}

for (const [file, required] of Object.entries({
  'tools/index.html': ['hub-decision-grid', 'Machine fit', 'Cost exposure'],
  'tools/injection-molding/index.html': ['hub-decision-grid', '01 / Geometry', '04 / Good output'],
  'tools/materials/index.html': ['material-data-workflow', 'Finished part mass', 'Injection-unit volume', 'Filled and conditioned grades'],
  'about.html': ['Corrections and scope', 'does not claim machine-maker certification']
})) {
  const html = read(file);
  for (const value of required) if (!html.includes(value)) failures.push(`${file}: missing value-audit content: ${value}`);
}

if (failures.length) {
  console.error(JSON.stringify({ status: 'failed', failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ calculatorPages: calculators.length, hubPages: 3, status: 'passed', checks: ['unique calculator decision blocks', 'specific calculator FAQs', 'no generic calculator filler', 'hub decision evidence', 'materials data workflow', 'method transparency'] }));
