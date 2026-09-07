import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = `${readFileSync('assets/js/phase3-calculators.js', 'utf8')}\nglobalThis.__phase3Tools=phase3Tools;`;
const context = { document: { addEventListener() {}, querySelector() { return null; } }, Intl, console };
vm.createContext(context);
vm.runInContext(source, context);

const tool = context.__phase3Tools['regrind-blend'];
if (!tool) throw Error('Production regrind calculator is not registered.');

const near = (actual, expected, name) => {
  if (Math.abs(actual - expected) > 1e-9) throw Error(`${name}: expected ${expected}, received ${actual}`);
};
const fixture = ({ name, input, virgin, regrind, virginPct, regrindPct, virginToRegrind, regrindToVirgin }) => {
  if (tool.validate(input)) throw Error(`${name}: valid fixture was rejected.`);
  const result = tool.c(input);
  near(result.v, regrind, `${name} primary result`);
  near(result.recipe.virgin, virgin, `${name} virgin mass`);
  near(result.recipe.regrind, regrind, `${name} regrind mass`);
  near(result.recipe.total, input.total, `${name} total mass`);
  near(result.recipe.virginPct, virginPct, `${name} virgin percentage`);
  near(result.recipe.regrindPct, regrindPct, `${name} regrind percentage`);
  if (result.u !== `${input.unit} regrind` || result.recipe.unit !== input.unit) throw Error(`${name}: unit contract changed.`);
  if (result.recipe.virginToRegrind !== virginToRegrind) throw Error(`${name}: unexpected virgin-to-regrind ratio ${result.recipe.virginToRegrind}`);
  if (result.recipe.regrindToVirgin !== regrindToVirgin) throw Error(`${name}: unexpected regrind-to-virgin ratio ${result.recipe.regrindToVirgin}`);
};

const fixtures = [
  { name:'100 kg at 20%', input:{total:100,ratio:20,unit:'kg'}, virgin:80, regrind:20, virginPct:80, regrindPct:20, virginToRegrind:'4:1', regrindToVirgin:'1:4' },
  { name:'25 kg at 7.5%', input:{total:25,ratio:7.5,unit:'kg'}, virgin:23.125, regrind:1.875, virginPct:92.5, regrindPct:7.5, virginToRegrind:'12.333:1', regrindToVirgin:'1:12.333' },
  { name:'1,000 lb at 30%', input:{total:1000,ratio:30,unit:'lb'}, virgin:700, regrind:300, virginPct:70, regrindPct:30, virginToRegrind:'2.333:1', regrindToVirgin:'1:2.333' },
  { name:'0% boundary', input:{total:50,ratio:0,unit:'kg'}, virgin:50, regrind:0, virginPct:100, regrindPct:0, virginToRegrind:'100:0 — virgin only', regrindToVirgin:'0:100 — virgin only' },
  { name:'100% boundary', input:{total:50,ratio:100,unit:'kg'}, virgin:0, regrind:50, virginPct:0, regrindPct:100, virginToRegrind:'0:100 — regrind only', regrindToVirgin:'100:0 — regrind only' },
  { name:'very small percentage', input:{total:100,ratio:0.01,unit:'kg'}, virgin:99.99, regrind:0.01, virginPct:99.99, regrindPct:0.01, virginToRegrind:'9,999:1', regrindToVirgin:'1:9,999' }
];
for (const test of fixtures) fixture(test);

const invalid = [
  ['blank/zero total', {total:Number(''),ratio:20,unit:'kg'}, 'total'],
  ['negative total', {total:-1,ratio:20,unit:'kg'}, 'total'],
  ['NaN total', {total:Number.NaN,ratio:20,unit:'kg'}, 'total'],
  ['Infinity total', {total:Number.POSITIVE_INFINITY,ratio:20,unit:'kg'}, 'total'],
  ['negative percentage', {total:100,ratio:-0.1,unit:'kg'}, 'ratio'],
  ['over 100%', {total:100,ratio:100.1,unit:'kg'}, 'ratio'],
  ['NaN percentage', {total:100,ratio:Number.NaN,unit:'kg'}, 'ratio'],
  ['Infinity percentage', {total:100,ratio:Number.POSITIVE_INFINITY,unit:'kg'}, 'ratio'],
  ['unsupported unit', {total:100,ratio:20,unit:'g'}, 'unit']
];
for (const [name, input, field] of invalid) {
  const error = tool.validate(input);
  if (!error || !error.f.includes(field)) throw Error(`${name}: expected ${field} validation error.`);
}

const unitDefinition = tool.i.find(([key]) => key === 'unit');
if (!unitDefinition || unitDefinition[4].map(([value]) => value).join(',') !== 'kg,lb') throw Error('Mass-unit selector must expose kg and lb.');

const page = readFileSync('tools/injection-molding/regrind-blend.html', 'utf8');
const pageChecks = [
  '<title>Regrind Blend Calculator | PlasticsCalc</title>',
  '<h1>Regrind Blend Calculator</h1>',
  'Regrind mass = total batch mass × (regrind % ÷ 100)',
  'Virgin mass = total batch mass − regrind mass',
  '4:1 virgin-to-regrind and 1:4 regrind-to-virgin',
  'This calculator never recommends an allowable regrind percentage.',
  'Movacolor MCTC recipe calculations',
  'Masterbatch Dosage Calculator'
];
for (const snippet of pageChecks) if (!page.includes(snippet)) throw Error(`Regrind page missing: ${snippet}`);

console.log({ regrindFixtures:fixtures.length, invalidCases:invalid.length, pageChecks:pageChecks.length, status:'passed' });
