import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const css=readFileSync('assets/css/site.css','utf8');
const selector='.calculator[data-calculator="masterbatch-dosage"] .calc-field[hidden]';
const escaped=selector.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const matches=[...css.matchAll(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`,'g'))];
assert.equal(matches.length,1,'Masterbatch needs one target-scoped hidden-field rule');
assert.equal(matches[0][1].replace(/\s/g,''),'display:none','Only inactive Masterbatch fields should change display');
assert.ok(css.includes('.calc-field{display:grid;'),'Keep the existing visible-field grid');
assert.ok(css.includes('.calculator[data-calculator="projected-area"] .calc-field[hidden]{display:none}'),'Keep the healthy Projected Area control');

const source=readFileSync('assets/js/phase3-calculators.js','utf8');
const context={document:{addEventListener(){},querySelector(){return null}},Intl};
vm.createContext(context);
vm.runInContext(source+'\nglobalThis.masterbatch=phase3Tools["masterbatch-dosage"];',context);
const tool=context.masterbatch;
const expected={total:['mass','dosage'],base:['mass','dosage'],active:['mass','active','target']};
for(const [mode,fields] of Object.entries(expected))assert.deepEqual(Array.from(tool.visible[mode]),fields,mode+' active fields');
assert.match(source,/field\.hidden=!show/);
assert.match(source,/control\.disabled=!show/);
assert.match(source,/new FormData\(form\)/);
assert.match(source,/form\.addEventListener\('reset',\(\)=>setTimeout\(\(\)=>\{syncMode\(\);calc\(\)\}\)\)/);
const fixtures=[
  [{mode:'total',mass:200,dosage:2},4],
  [{mode:'base',mass:200,dosage:2},4],
  [{mode:'active',mass:200,active:40,target:2},10],
  [{mode:'total',mass:500,dosage:4},20],
  [{mode:'base',mass:500,dosage:4},20],
  [{mode:'active',mass:500,active:25,target:0.5},10]
];
for(const [input,expectedValue] of fixtures)assert.equal(tool.c(input).v,expectedValue);
console.log(JSON.stringify({status:'passed',scopedHiddenRule:1,modes:3,arithmeticFixtures:fixtures.length,hiddenDisabledFormDataReset:true}));
