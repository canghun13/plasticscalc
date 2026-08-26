import {readFileSync,readdirSync} from 'node:fs';
import vm from 'node:vm';

const source=`${readFileSync('assets/js/extrusion-calculators.js','utf8')}\nglobalThis.__tools=extrusionTools;globalThis.__math=extrusionMath;`;
const context={document:{addEventListener(){},querySelector(){return null}},Intl};vm.createContext(context);vm.runInContext(source,context);
const {__tools:tools,__math:math}=context;
const near=(actual,expected,name,tolerance=1e-9)=>{if(Math.abs(actual-expected)>tolerance)throw Error(`${name}: ${actual} !== ${expected}`)};
const finite=(value,name)=>{if(!Number.isFinite(value))throw Error(`${name}: non-finite`)};

const outputFixtures=[
  [{mass:4,seconds:80,rpm:50},180,3.6],
  [{mass:.25,seconds:30,rpm:20},30,1.5],
  [{mass:12.5,seconds:300,rpm:75},150,2]
];
for(const [v,expected,specific] of outputFixtures){const r=math.output(v);near(r.output,expected,'output');near(r.specific,specific,'specific output')}

const throughputFixtures=[
  [{area:120,speed:18,density:.95},123.12,.114],
  [{area:1,speed:1,density:1},.06,.001],
  [{area:800,speed:2.5,density:1.2},144,.96]
];
for(const [v,expected,massPerMeter] of throughputFixtures){const r=math.throughput(v);near(r.output,expected,'throughput');near(r.massPerMeter,massPerMeter,'mass per metre')}

for(const [v,expected] of [[{diameter:90,rpm:100},Math.PI*9],[{diameter:25,rpm:60},Math.PI*1.5],[{diameter:150,rpm:5},Math.PI*.75]])near(math.surface(v).surface,expected,'surface speed');
for(const [v,expected] of [[{holdup:12,output:180},4],[{holdup:1,output:60},1],[{holdup:30,output:120},15]])near(math.residence(v).minutes,expected,'residence');
for(const [v,expected] of [[{dieOd:12,tipOd:8,productOd:8,productId:6},80/28],[{dieOd:10,tipOd:0.1,productOd:5,productId:.1},(100-.01)/(25-.01)],[{dieOd:20,tipOd:10,productOd:10,productId:5},4]])near(math.drawdown(v).ratio,expected,'drawdown');
for(const [v,expected,passes] of [[{speed:8,seconds:45,straight:3.5},6,2],[{speed:1,seconds:60,straight:2},1,1],[{speed:30,seconds:120,straight:12},60,5]]){const r=math.cooling(v);near(r.path,expected,'cooling path');near(r.passes,passes,'cooling passes')}

for(const [id,tool] of Object.entries(tools)){
  const defaults=Object.fromEntries(tool.i.map(([key,,value])=>[key,value]));
  const result=tool.c(defaults);finite(result.v,`${id} default`);if(!result.u||!result.d)throw Error(`${id}: incomplete result`);
}
const pages=readdirSync('tools/extrusion').filter(file=>file.endsWith('.html')&&file!=='index.html');
if(pages.length!==6)throw Error(`Expected 6 extrusion tool pages, found ${pages.length}`);
for(const file of pages){const html=readFileSync(`tools/extrusion/${file}`,'utf8');const id=html.match(/data-calculator="([^"]+)"/)?.[1];if(!tools[id])throw Error(`${file}: missing registry`);for(const snippet of ['Formula and method','Inputs and units','Worked example','When to use it','How to interpret the result','Assumptions and limitations','Validation guidance','FAQ','Sources'])if(!html.includes(snippet))throw Error(`${file}: missing ${snippet}`)}
console.log(JSON.stringify({tools:Object.keys(tools).length,independentFixtures:18,pageChecks:pages.length,status:'passed'}));
