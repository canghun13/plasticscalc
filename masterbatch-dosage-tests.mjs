import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source = `${readFileSync('assets/js/phase3-calculators.js', 'utf8')}\nglobalThis.__phase3Tools=phase3Tools;`;
const context = {document:{addEventListener(){},querySelector(){return null}},Intl,console};
vm.createContext(context);
vm.runInContext(source, context);

const tool = context.__phase3Tools['masterbatch-dosage'];
if (!tool) throw Error('Production masterbatch calculator is not registered.');

const near = (actual, expected, name) => {
  if (Math.abs(actual - expected) > 1e-9) throw Error(`${name}: expected ${expected}, received ${actual}`);
};
const fixture = (name, input, expectedMasterbatch, expectedSnippets = []) => {
  const result = tool.c(input);
  near(result.v, expectedMasterbatch, name);
  if (result.u !== 'kg masterbatch') throw Error(`${name}: unexpected result unit ${result.u}`);
  for (const snippet of expectedSnippets) {
    if (!result.d.includes(snippet)) throw Error(`${name}: missing detail ${snippet}`);
  }
};

fixture('total blend default', {mode:'total',mass:200,dosage:2}, 4, [
  '4.00 kg masterbatch + 196.00 kg base resin = 200.00 kg total',
  '2.000% of total blend',
  '50.00:1 total-to-masterbatch',
  '49.00:1 base-to-masterbatch'
]);
fixture('total blend decimal dosage', {mode:'total',mass:1250,dosage:3.2}, 40, [
  '40.00 kg masterbatch + 1210.00 kg base resin = 1250.00 kg total'
]);
fixture('base resin default', {mode:'base',mass:200,dosage:2}, 4, [
  '4.00 kg masterbatch + 200.00 kg base resin = 204.00 kg total',
  '1.961% of total blend',
  '2.000% added to base resin'
]);
fixture('base resin larger batch', {mode:'base',mass:500,dosage:4}, 20, [
  '20.00 kg masterbatch + 500.00 kg base resin = 520.00 kg total'
]);
fixture('active content target', {mode:'active',mass:1000,active:50,target:1.5}, 30, [
  '30.00 kg masterbatch + 970.00 kg base resin = 1000.00 kg total',
  '3.000% of total blend',
  '50.00% concentrate delivers 1.50% active content'
]);
fixture('active content fractional batch', {mode:'active',mass:275,active:25,target:0.5}, 5.5, [
  '5.50 kg masterbatch + 269.50 kg base resin = 275.00 kg total'
]);

const totalBasis = tool.c({mode:'total',mass:100,dosage:4}).v;
const equivalentBaseBasis = tool.c({mode:'base',mass:96,dosage:4/96*100}).v;
near(totalBasis, equivalentBaseBasis, 'equivalent total and base definitions');

const modeDefinition = tool.i.find(([key]) => key === 'mode');
if (!modeDefinition || modeDefinition[4].map(([value]) => value).join(',') !== 'total,base,active') {
  throw Error('Mode selector must expose total, base, and active definitions.');
}
if (JSON.stringify(tool.visible) !== JSON.stringify({total:['mass','dosage'],base:['mass','dosage'],active:['mass','active','target']})) {
  throw Error('Mode-specific input visibility contract changed.');
}

const page = readFileSync('tools/injection-molding/masterbatch-dosage.html', 'utf8');
const pageChecks = [
  '<title>Masterbatch Dosage &amp; Let-Down Ratio Calculator | PlasticsCalc</title>',
  '<h1>Masterbatch Dosage & Let-Down Ratio Calculator</h1>',
  'Total basis: masterbatch = total batch x dosage.',
  'Base basis: masterbatch = base resin x dosage.',
  'Active target: dosage = target final active / masterbatch active content.',
  '50:1 total-to-masterbatch or 49:1 base-to-masterbatch',
  'MOCOM masterbatch guideline',
  'Ampacet let-down guidance'
];
for (const snippet of pageChecks) {
  if (!page.includes(snippet)) throw Error(`Masterbatch page missing: ${snippet}`);
}

console.log({masterbatchFixtures:7, modes:3, pageChecks:pageChecks.length, status:'passed'});
