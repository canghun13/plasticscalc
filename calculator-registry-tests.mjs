import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';

const calculatorDirectory = 'tools/injection-molding';
const registryFiles = {
  tools: 'assets/js/calculators.js',
  phase3Tools: 'assets/js/phase3-calculators.js',
  thermalTools: 'assets/js/thermal-calculators.js',
  validationTools: 'assets/js/validation-calculators.js',
  energyTools: 'assets/js/energy-calculators.js'
};
const source = `${readFileSync(registryFiles.tools, 'utf8')}\n${readFileSync(registryFiles.phase3Tools, 'utf8')}\n${readFileSync(registryFiles.thermalTools, 'utf8')}\n${readFileSync(registryFiles.validationTools, 'utf8')}\n${readFileSync(registryFiles.energyTools, 'utf8')}\nglobalThis.__tools = tools; globalThis.__phase3Tools = phase3Tools; globalThis.__thermalTools = thermalTools; globalThis.__validationTools = validationTools; globalThis.__energyTools = energyTools;`;
const context = { document: { addEventListener() {}, querySelector() { return null; } }, Intl };
vm.createContext(context);
vm.runInContext(source, context);

const registries = [
  { name: 'tools', entries: context.__tools, script: '/assets/js/calculators.js', inputs: 'inputs', calculate: 'calc', value: 'value', unit: 'unit' },
  { name: 'phase3Tools', entries: context.__phase3Tools, script: '/assets/js/phase3-calculators.js', inputs: 'i', calculate: 'c', value: 'v', unit: 'u' },
  { name: 'thermalTools', entries: context.__thermalTools, script: '/assets/js/thermal-calculators.js', inputs: 'i', calculate: 'c', value: 'v', unit: 'u' },
  { name: 'validationTools', entries: context.__validationTools, script: '/assets/js/validation-calculators.js', inputs: 'i', calculate: 'c', value: 'v', unit: 'u' },
  { name: 'energyTools', entries: context.__energyTools, script: '/assets/js/energy-calculators.js', inputs: 'i', calculate: 'c', value: 'v', unit: 'u' }
];
const registryById = new Map();
for (const registry of registries) {
  for (const [id, tool] of Object.entries(registry.entries)) {
    if (registryById.has(id)) throw Error(`Duplicate calculator registry entry: ${id}`);
    registryById.set(id, { registry, tool });
  }
}

const calculatorPages = readdirSync(calculatorDirectory)
  .filter(file => file.endsWith('.html') && readFileSync(join(calculatorDirectory,file),'utf8').includes('data-calculator='))
  .sort();
if (calculatorPages.length !== 48) throw Error(`Expected 48 calculator pages, found ${calculatorPages.length}`);

const format = value => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
const workedExampleFailures = [];
for (const file of calculatorPages) {
  const path = join(calculatorDirectory, file);
  const html = readFileSync(path, 'utf8');
  const id = html.match(/data-calculator="([^"]+)"/)?.[1];
  if (!id) throw Error(`${path}: missing data-calculator`);

  const entry = registryById.get(id);
  if (!entry) throw Error(`${path}: ${id} has no JavaScript registry entry`);
  if (!html.includes(`src="${entry.registry.script}"`)) {
    throw Error(`${path}: ${id} does not load ${entry.registry.script}`);
  }

  const defaults = Object.fromEntries(entry.tool[entry.registry.inputs].map(([key, , value]) => [key, value]));
  const result = entry.tool[entry.registry.calculate](defaults);
  const value = result[entry.registry.value];
  if (!Number.isFinite(value) || !result[entry.registry.unit]) {
    throw Error(`${path}: ${id} default calculation is not a finite, unit-bearing result`);
  }

  const workedExample = html.match(/<h2>Worked example<\/h2>\s*<p>([\s\S]*?)<\/p>/i)?.[1];
  if (!workedExample || !workedExample.replace(/<[^>]+>/g, '').includes(format(value))) {
    workedExampleFailures.push(`${path}: ${id} worked example does not contain the default result ${format(value)}`);
  }
}

if (registryById.size !== calculatorPages.length) {
  throw Error(`Registry/page mismatch: ${registryById.size} registry entries for ${calculatorPages.length} pages`);
}
if (workedExampleFailures.length) throw Error(workedExampleFailures.join('\n'));

console.log(JSON.stringify({ calculatorPages: calculatorPages.length, registryEntries: registryById.size, status: 'passed' }));
