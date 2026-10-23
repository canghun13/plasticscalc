import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const context={};vm.createContext(context);
vm.runInContext(readFileSync('assets/js/scrap-rate-calculator.js','utf8')+'\nglobalThis.calculate=calculateScrapRuns',context);
const calculate=runs=>context.calculate(runs);
const fixtures=[
  [[{basis:'good',count:9700,scrap:300}],10000,9700,300,3,97],
  [[{basis:'total',count:10000,scrap:300}],10000,9700,300,3,97],
  [[{basis:'good',count:100,scrap:0}],100,100,0,0,100],
  [[{basis:'total',count:100,scrap:0}],100,100,0,0,100],
  [[{basis:'good',count:0,scrap:100}],100,0,100,100,0],
  [[{basis:'total',count:100,scrap:100}],100,0,100,100,0],
  [[{basis:'total',count:100,scrap:10},{basis:'good',count:891,scrap:9}],1000,981,19,1.9,98.1],
  [[{basis:'total',count:100,scrap:10},{basis:'good',count:90,scrap:10}],200,180,20,10,90],
  [[{basis:'good',count:999999999,scrap:1}],1000000000,999999999,1,0.0000001,99.9999999],
  [[{basis:'total',count:Number.MAX_SAFE_INTEGER,scrap:0}],Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,0,0,100],
  [[{basis:'good',count:Number.MAX_SAFE_INTEGER-1,scrap:1}],Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER-1,1,100/Number.MAX_SAFE_INTEGER,(Number.MAX_SAFE_INTEGER-1)/Number.MAX_SAFE_INTEGER*100],
  [Array.from({length:20},()=>({basis:'total',count:100,scrap:3})),2000,1940,60,3,97]
];
for(const [runs,total,good,scrap,rate,yieldRate]of fixtures){
  const before=JSON.stringify(runs),r=calculate(runs);
  assert.equal(r.total,total);assert.equal(r.good,good);assert.equal(r.scrap,scrap);
  assert.ok(Math.abs(r.rate-rate)<1e-12);assert.ok(Math.abs(r.yield-yieldRate)<1e-12);
  assert.equal(r.rows.length,runs.length);assert.equal(JSON.stringify(runs),before,'must not mutate source counts');
  assert.equal(r.good+r.scrap,r.total);assert.ok(r.rows.every(row=>row.good+row.scrap===row.total));
}
const invalid=[null,[],Array.from({length:21},()=>({basis:'total',count:1,scrap:0})),[{basis:'wrong',count:100,scrap:1}],
  [{basis:'good',count:0,scrap:0}],[{basis:'total',count:0,scrap:0}],[{basis:'total',count:100,scrap:101}],
  [{basis:'good',count:Number.MAX_SAFE_INTEGER,scrap:1}],
  [{basis:'total',count:Number.MAX_SAFE_INTEGER,scrap:0},{basis:'good',count:1,scrap:0}]];
for(const key of ['count','scrap'])for(const value of [-1,0.5,NaN,Infinity,1e309,Number.MAX_SAFE_INTEGER+1,'',null,'100'])invalid.push([{basis:'total',count:100,scrap:1,[key]:value}]);
for(const runs of invalid)assert.throws(()=>calculate(runs));
const html=readFileSync('tools/injection-molding/scrap-rate.html','utf8');
assert.ok(html.includes('data-scrap-workflow="runs"'));
assert.ok(html.indexOf('/assets/js/scrap-rate-calculator.js')<html.indexOf('/assets/js/calculators.js'));
assert.ok(html.includes('<h1>Scrap Rate Calculator</h1>'));
assert.ok(html.includes('<title>Scrap Rate Calculator | PlasticsCalc</title>'));
assert.ok(html.includes('https://plasticscalc.com/tools/injection-molding/scrap-rate.html'));
assert.ok(html.includes('1.9%'));assert.ok(html.includes('not automatically first-pass yield'));
assert.ok(readFileSync('assets/js/calculators.js','utf8').includes("if(root.dataset.scrapWorkflow==='runs'){mountScrapRate(root);return}"));
assert.ok(readFileSync('build-pages.mjs','utf8').trim().endsWith("await import('./scrap-rate-pages.mjs');"));
console.log(JSON.stringify({status:'passed',independentFixtures:fixtures.length,invalidCases:invalid.length,pageContract:true}));
