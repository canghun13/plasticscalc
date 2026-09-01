import {readFileSync,readdirSync} from 'node:fs';
import vm from 'node:vm';

const source=`${readFileSync('assets/js/film-testing-calculators.js','utf8')}\nglobalThis.__tools=filmTestingTools;globalThis.__math=filmTestingMath;globalThis.__message=filmTestingMessage;`;
const context={document:{addEventListener(){},querySelector(){return null}},Intl};vm.createContext(context);vm.runInContext(source,context);
const {__tools:tools,__math:math,__message:message}=context;
const near=(actual,expected,name,tolerance=1e-8)=>{if(Math.abs(actual-expected)>tolerance)throw Error(`${name}: ${actual} !== ${expected}`)};

for(const [v,strength,elongation] of [
  [{width:15,thickness:50,gauge:50,force:30,extension:40},40,80],
  [{width:10,thickness:100,gauge:50,force:50,extension:25},50,50],
  [{width:25.4,thickness:25.4,gauge:25,force:6.4516,extension:1},10,4]
]){const r=math.tensile(v);near(r.strength,strength,'tensile strength');near(r.elongation,elongation,'elongation')}

for(const [v,staticCof,kineticCof] of [
  [{mass:200,staticForce:.588399,kineticForce:.392266},.3,.2],
  [{mass:100,staticForce:.24516625,kineticForce:.14709975},.25,.15],
  [{mass:500,staticForce:2.4516625,kineticForce:1.4709975},.5,.3]
]){const r=math.cof(v);near(r.staticCof,staticCof,'static COF');near(r.kineticCof,kineticCof,'kinetic COF')}

for(const [v,peak15,average15] of [
  [{width:15,peak:8.4,average:6.6},8.4,6.6],
  [{width:25,peak:12,average:9},7.2,5.4],
  [{width:25.4,peak:25.4,average:12.7},15,7.5]
]){const r=math.seal(v);near(r.peak15,peak15,'peak seal');near(r.average15,average15,'average seal')}

for(const [v,haze,total] of [
  [{t1:100,t2:92,t3:.5,t4:4},3.84782608695652,92],
  [{t1:100,t2:90,t3:0,t4:9},10,90],
  [{t1:1,t2:1,t3:0,t4:.01},1,100]
]){const r=math.haze(v);near(r.haze,haze,'haze');near(r.total,total,'transmittance')}

for(const [v,expected] of [
  [{lowest:100,increment:20,samples:10,f1:0,f2:2,f3:5,f4:8,f5:10},140],
  [{lowest:50,increment:10,samples:10,f1:0,f2:1,f3:5,f4:9,f5:10},70],
  [{lowest:200,increment:25,samples:20,f1:0,f2:4,f3:10,f4:16,f5:20},250]
])near(math.dart(v).failureWeight,expected,'dart failure weight');

if(!message('flexible-package-seal-strength',{width:15,peak:5,average:6}))throw Error('seal validation missing');
if(!message('plastic-film-haze',{t1:100,t2:90,t3:10,t4:5}))throw Error('haze validation missing');
if(!message('dart-impact-failure-weight',{lowest:100,increment:20,samples:10,f1:0,f2:6,f3:5,f4:8,f5:10}))throw Error('dart monotonic validation missing');

for(const [id,tool] of Object.entries(tools)){
  const defaults=Object.fromEntries(tool.i.map(([key,,value])=>[key,value]));
  const result=tool.c(defaults);
  if(!Number.isFinite(result.v)||!result.u||!result.d)throw Error(`${id}: incomplete default result`);
}
const pages=readdirSync('tools/film-testing').filter(file=>file.endsWith('.html')&&file!=='index.html');
if(pages.length!==5)throw Error(`Expected 5 film-testing tool pages, found ${pages.length}`);
for(const file of pages){
  const html=readFileSync(`tools/film-testing/${file}`,'utf8');
  const id=html.match(/data-calculator="([^"]+)"/)?.[1];
  if(!tools[id])throw Error(`${file}: missing registry`);
  for(const snippet of ['Formula and method','Inputs and units','Worked example','When to use it','How to interpret the result','Assumptions and limitations','Validation guidance','FAQ','Sources'])if(!html.includes(snippet))throw Error(`${file}: missing ${snippet}`);
}
console.log(JSON.stringify({tools:Object.keys(tools).length,independentFixtures:15,validationFixtures:3,pageChecks:pages.length,status:'passed'}));
