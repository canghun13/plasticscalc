import {readFileSync} from'node:fs';
import vm from'node:vm';

const context={document:{addEventListener(){},querySelector(){return null}},Intl,FormData};
vm.createContext(context);
vm.runInContext(`${readFileSync('assets/js/calculators.js','utf8')}\nglobalThis.registry=tools`,context);
const tool=context.registry['parts-per-hour'];
if(!tool)throw Error('parts-per-hour registry entry is missing');

const near=(actual,expected,name)=>{if(Math.abs(actual-expected)>1e-9)throw Error(`${name}: ${actual} !== ${expected}`)};
const fixtures=[
  {cycle:60,cavities:1,partsPerHour:60,cyclesPerHour:60,partsPerMinute:1},
  {cycle:30,cavities:2,partsPerHour:240,cyclesPerHour:120,partsPerMinute:4},
  {cycle:45,cavities:4,partsPerHour:320,cyclesPerHour:80,partsPerMinute:16/3},
  {cycle:30,cavities:4,partsPerHour:480,cyclesPerHour:120,partsPerMinute:8},
  {cycle:7.5,cavities:8,partsPerHour:3840,cyclesPerHour:480,partsPerMinute:64},
  {cycle:3600,cavities:1,partsPerHour:1,cyclesPerHour:1,partsPerMinute:1/60}
];
for(const fixture of fixtures){
  const result=tool.calc(fixture);
  near(result.value,fixture.partsPerHour,`parts/hour ${fixture.cycle}s × ${fixture.cavities}`);
  near(result.metrics.cyclesPerHour,fixture.cyclesPerHour,'cycles/hour');
  near(result.metrics.partsPerMinute,fixture.partsPerMinute,'parts/minute');
  near(result.metrics.partsPerCycle,fixture.cavities,'parts/cycle');
}
for(const values of [{cycle:0,cavities:4},{cycle:-1,cavities:4},{cycle:NaN,cavities:4},{cycle:Infinity,cavities:4},{cycle:30,cavities:0},{cycle:30,cavities:-1},{cycle:30,cavities:1.5},{cycle:30,cavities:Infinity},{cycle:30,cavities:Number.MAX_SAFE_INTEGER+1}]){
  if(!tool.validate(values))throw Error(`invalid input accepted: ${JSON.stringify(values)}`);
}
for(const values of [{cycle:.001,cavities:1},{cycle:1e9,cavities:1},{cycle:30,cavities:Number.MAX_SAFE_INTEGER}]){
  if(tool.validate(values))throw Error(`valid finite input rejected: ${JSON.stringify(values)}`);
  if(!Number.isFinite(tool.calc(values).value))throw Error(`valid input produced a non-finite result: ${JSON.stringify(values)}`);
}

const html=readFileSync('tools/injection-molding/parts-per-hour.html','utf8');
for(const token of ['Parts Per Hour Calculator | PlasticsCalc','data-calculator="parts-per-hour"','site.css?v=20260925-parts-hour-1','calculators.js?v=20260925-parts-hour-1','Theoretical parts per hour = 3,600 ÷ cycle time × active cavities.','480 parts/hour','8 parts/minute','120 cycles/hour','active cavities','OEE Capacity','Scrap-Adjusted Output','Parts Per Shift'])if(!html.includes(token))throw Error(`page token missing: ${token}`);
for(const stale of ['planned uptime','432 parts/hour'])if(html.toLowerCase().includes(stale))throw Error(`stale page token remains: ${stale}`);
if(!readFileSync('assets/css/site.css','utf8').includes('.calculator[data-calculator="parts-per-hour"] .rate-summary'))throw Error('target-scoped result CSS is missing');
console.log(JSON.stringify({independentArithmeticCases:fixtures.length,invalidCases:9,extremeFiniteCases:3,status:'passed'}));
