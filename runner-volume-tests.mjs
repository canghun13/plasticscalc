import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync('assets/js/runner-volume-calculator.js','utf8');
const context={Intl};vm.createContext(context);vm.runInContext(source+'\nglobalThis.calculate=calculateRunnerVolume;globalThis.report=runnerVolumeReport;globalThis.format=runnerVolumeFormat;',context);
const round={shape:'round',diameter:6,length:800,quantity:1};
const trap={shape:'trapezoid',wide:8,narrow:4,height:3,length:100,quantity:4};
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<=Math.max(Math.abs(expected)*1e-12,1e-14),`${actual} != ${expected}`);
// Literal or independently stated geometry, never expected values from production.
const fixtures=[
 ['mm',[round],7.2*Math.PI],
 ['mm',[{...round,diameter:10,length:100}],2.5*Math.PI],
 ['mm',[{...round,diameter:2,length:1000,quantity:3}],3*Math.PI],
 ['mm',[trap],7.2],
 ['mm',[{...trap,wide:4,narrow:4,height:2,length:50,quantity:1}],0.4],
 ['mm',[{...trap,wide:10,narrow:6,height:5,length:250,quantity:2}],20],
 ['mm',[round,trap],7.2*Math.PI+7.2],
 ['in',[{shape:'trapezoid',wide:1,narrow:1,height:1,length:1,quantity:1}],16.387064],
 ['in',[{...round,diameter:1,length:1}],4.096766*Math.PI],
 ['mm',[{...round,diameter:0.001,length:0.001}],Math.PI*2.5e-13],
 ['mm',[{...round,diameter:1e5,length:1e5}],Math.PI*2.5e11],
 ['mm',Array.from({length:20},()=>({...trap,quantity:1})),36],
];
for(const [units,groups,expected]of fixtures){const result=context.calculate({units,groups});near(result.cm3,expected);near(result.in3,expected/16.387064);assert.equal(result.rows.length,groups.length)}
const defaultResult=context.calculate({units:'mm',groups:[round]});
assert.equal(context.format(defaultResult.cm3),'22.62');
const converted={...round};for(const key of ['diameter','length'])converted[key]/=25.4;
near(context.calculate({units:'in',groups:[converted]}).cm3,7.2*Math.PI);
near(context.calculate({units:'mm',groups:[{...round,length:400,quantity:2}]}).cm3,7.2*Math.PI);
const hiddenIgnored=context.calculate({units:'mm',groups:[{...round,wide:'',narrow:'NaN',height:-1}]});near(hiddenIgnored.cm3,7.2*Math.PI);
const hiddenRoundIgnored=context.calculate({units:'mm',groups:[{...trap,diameter:'not used'}]});near(hiddenRoundIgnored.cm3,7.2);
let invalid=0;
for(const [row,keys]of [[round,['diameter','length','quantity']],[trap,['wide','narrow','height','length','quantity']]])for(const key of keys)for(const raw of ['', ' ', 0, -1, Infinity, NaN, '1e309', null, undefined]){
  assert.throws(()=>context.calculate({units:'mm',groups:[{...row,[key]:raw}]}),error=>error.name==='Error'&&error.message.startsWith('Group 1:'));invalid++;
}
for(const record of [null,{}, {units:'cm',groups:[round]},{units:'mm',groups:[]},{units:'mm',groups:null},{units:'mm',groups:Array(21).fill(round)},{units:'mm',groups:[{...round,shape:'triangle'}]},{units:'mm',groups:[null]},{units:'mm',groups:[{...round,quantity:1.5}]},{units:'mm',groups:[{...round,quantity:Number.MAX_SAFE_INTEGER+1}]},{units:'mm',groups:[{...trap,wide:2,narrow:4}]},{units:'mm',groups:[{...round,diameter:1e200}]},{units:'mm',groups:[{...round,diameter:1e-200}]},{units:'mm',groups:[{...trap,wide:1e150,narrow:1e150,height:1e150,length:1e150}]}]){
 assert.throws(()=>context.calculate(record));invalid++;
}
// Sum overflow must not survive as an apparently valid finite per-row result.
const largeGroup={...round,diameter:1e100,length:2e110};
assert.ok(Number.isFinite(context.calculate({units:'mm',groups:[largeGroup]}).cm3));
assert.throws(()=>context.calculate({units:'mm',groups:Array(20).fill(largeGroup)}),/Combined volume/);invalid++;
const record={units:'mm',groups:[round,trap]},result=context.calculate(record),report=context.report(record,result);
for(const text of ['29.82 cm³','quantity=4','wide=8 mm','Sprue, gates, wells','https://plasticscalc.com/tools/injection-molding/runner-volume.html'])assert.ok(report.includes(text),text);
for(const number of [1e-12,1e15])assert.match(context.format(number),/E/);
const html=readFileSync('tools/injection-molding/runner-volume.html','utf8');
assert.ok(html.includes('data-runner-workflow="segments"'));
assert.ok(html.indexOf('/assets/js/runner-volume-calculator.js')<html.indexOf('/assets/js/phase3-calculators.js'));
assert.ok(html.includes('<title>Runner Volume Calculator | PlasticsCalc</title>'));
assert.ok(html.includes('<h1>Runner Volume Calculator</h1>'));
assert.ok(html.includes('https://plasticscalc.com/tools/injection-molding/runner-volume.html'));
for(const text of ['22.62','29.82','physical segment','perpendicular','no upload','Sprue Volume','Runner Weight','OpenStax','NIST'])assert.ok(html.includes(text),text);
assert.match(readFileSync('assets/js/phase3-calculators.js','utf8'),/if\(root\.dataset\.runnerWorkflow==='segments'\)\{mountRunnerVolume\(root\);return\}/);
assert.ok(readFileSync('build-pages.mjs','utf8').includes("await import('./runner-volume-pages.mjs')"));
assert.ok(readFileSync('phase3-pages.mjs','utf8').includes("if (onlyTool === 'runner-volume') await import('./runner-volume-pages.mjs')"));
assert.match(readFileSync('assets/css/runner-volume.css','utf8'),/\[data-runner-copy\]\{[^}]*background:#fffdf7!important/);
console.log(JSON.stringify({status:'passed',literalFixtures:fixtures.length,invalidCases:invalid,physicalEquivalenceCases:2,inactiveShapeCases:2,copy:true,pageContract:true}));
