import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const js = `${readFileSync('assets/js/calculators.js', 'utf8')}\n${readFileSync('assets/js/phase3-calculators.js', 'utf8')}\n${readFileSync('assets/js/thermal-calculators.js', 'utf8')}\n${readFileSync('assets/js/validation-calculators.js', 'utf8')}`;
const energyJs = readFileSync('assets/js/energy-calculators.js', 'utf8');
const dfmJs = readFileSync('assets/js/dfm-calculators.js', 'utf8');
const extrusionJs = readFileSync('assets/js/extrusion-calculators.js', 'utf8');
const filmTestingJs = readFileSync('assets/js/film-testing-calculators.js', 'utf8');
const css = readFileSync('assets/css/site.css', 'utf8');
const calculatorDirectories = ['tools/injection-molding','tools/extrusion','tools/film-testing'];
const calculatorPages = calculatorDirectories.flatMap(directory => readdirSync(directory).filter(file => file.endsWith('.html') && readFileSync(join(directory, file), 'utf8').includes('data-calculator=')));
const checks = [
  ['field wrapper', js.includes('<div class="calc-field">')],
  ['label association', js.includes('aria-describedby="${key}-unit"')],
  ['input unit pairing', js.includes('<span class="unit" id="${key}-unit">${unit||\'Unitless input\'}</span>')],
  ['workstation container', js.includes('class="calc-workstation"')],
  ['isolated field grid', css.includes('.calc-workstation form') && css.includes('.calc-field{display:grid')],
  ['mobile field fallback', css.includes('@media(max-width:520px){.calc-workstation form{grid-template-columns:1fr}')],
  ['phase 3 calculator mount', js.includes('function mountPhase3') && js.includes('calc-workstation')],
  ['validation calculator mount', js.includes('function mountValidation') && js.includes('validation-workstation')],
  ['energy calculator mount', energyJs.includes('function mountEnergy') && energyJs.includes('calc-workstation')],
  ['dfm calculator mount', dfmJs.includes('function mountDfm') && dfmJs.includes('calc-workstation')],
  ['extrusion calculator mount', extrusionJs.includes('function mountExtrusion') && extrusionJs.includes('calc-workstation')],
  ['film testing calculator mount', filmTestingJs.includes('function mountFilmTesting') && filmTestingJs.includes('calc-workstation')],
  ['all calculator pages', calculatorPages.length === 63]
];
const failed = checks.filter(([, passed]) => !passed).map(([name]) => name);
console.log(JSON.stringify({ calculatorPages: calculatorPages.length, status: failed.length ? 'failed' : 'passed', checks: checks.map(([name]) => name), failed }));
if (failed.length) process.exit(1);
