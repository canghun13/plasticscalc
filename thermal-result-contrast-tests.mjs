import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const css=readFileSync('assets/css/site.css','utf8');
assert.ok(css.includes('.calculator[data-calculator="cooling-circuit-balance"] .calc-result-panel>.panel{color:var(--ink)}'),'Only the light cooling-circuit result cards must set their own dark foreground.');
const token=name=>css.match(new RegExp(`--${name}:(#[0-9a-f]{6})`))[1];
const luminance=hex=>hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((sum,x,i)=>sum+x*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>(Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
const result=ratio(token('ink'),token('white'));
assert.ok(result>=7,'Keep a margin above the normal-text contrast floor.');
assert.ok(ratio('#e8ece1',token('white'))<4.5,'The old inherited pale text is an independent failing control.');
const runtime=readFileSync('assets/js/thermal-calculators.js','utf8');
assert.ok(runtime.includes('comparison.rows.map(row=>`<section class="panel"><h3>'),'The scoped selector must match the actual dynamic card structure.');
assert.ok(css.includes('.result{position:relative;display:flex;flex-direction:column;justify-content:center;min-height:100%;background:var(--carbon);color:#e8ece1}'),'Do not recolor all dark result panels to repair a nested light card.');
console.log(JSON.stringify({status:'passed',circuitCardContrast:result,oldInheritedContrast:ratio('#e8ece1',token('white')),scopedCardAndDarkPanelGuards:true}));
