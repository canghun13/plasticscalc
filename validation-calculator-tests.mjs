import {readFileSync} from'node:fs';
import vm from'node:vm';
const context={document:{addEventListener(){},querySelector(){return null}},Intl};vm.createContext(context);vm.runInContext(`${readFileSync('assets/js/validation-calculators.js','utf8')}\nglobalThis.math=validationMath;globalThis.registry=validationTools`,context);
const {math,registry}=context,cases=[];
const near=(actual,expected,name,tolerance=1e-8)=>{if(Math.abs(actual-expected)>tolerance)throw Error(`${name}: ${actual} !== ${expected}`);cases.push(name)};
const same=(actual,expected,name)=>{if(actual!==expected)throw Error(`${name}: ${actual} !== ${expected}`);cases.push(name)};

near(math.viscosity([2,1.5,1],[75,90,125]).lowest.relativeViscosity,125,'viscosity-default');
near(math.viscosity([1,2,3],[50,30,20]).lowest.relativeViscosity,50,'viscosity-lowest-first');
near(math.viscosity([.5,1],[200,110]).rows[0].relativeShearRate,2,'viscosity-shear-rate');
near(math.viscosity([.8,1.2],[100,100]).rows[1].relativeViscosity,120,'viscosity-pressure-time-product');
near(math.viscosity([4,2,1],[20,35,80]).lowest.fillTime,2,'viscosity-lowest-row');

near(math.cavity([10.1,9.9,10,10]).mean,10,'cavity-mean');
near(math.cavity([10.1,9.9,10,10]).imbalance,2,'cavity-default-imbalance');
near(math.cavity([1,1]).imbalance,0,'cavity-equal');
near(math.cavity([12,10]).imbalance,18.181818181818183,'cavity-two');
near(math.cavity([2,4,6]).imbalance,100,'cavity-wide');
near(math.cavity([8,10,12]).rows[0].deviation,-20,'cavity-deviation');

same(math.gate([0,1,2,3,4],[10,10.5,10.68,10.7,10.71],.2,2).plateau,3,'gate-default-plateau');
same(math.gate([0,1,2,3],[10,11,12,13],.2,2).plateau,null,'gate-no-plateau');
near(math.gate([0,1,2,3],[10,10.1,10.11,10.115],.2,2).rows[2].change,.0990099009900978,'gate-percent-change');
same(math.gate([0,1,2,3],[10,10.01,10.02,10.03],.2,2).plateau,1,'gate-early-plateau');
same(math.gate([0,2,4,6],[20,20.2,20.21,20.22],.1,2).plateau,4,'gate-time-basis');

near(math.pressure([15,45,78,110]).largest.increment,33,'pressure-largest');
near(math.pressure([10,20,30,40]).largest.increment,10,'pressure-equal-increments');
near(math.pressure([0,25,30,31]).largest.increment,25,'pressure-runner-increment');
near(math.pressure([12,18,40,70]).rows[3].increment,30,'pressure-part-increment');
same(math.pressure([5,15,18,20]).largest.stage,'Through sprue and runner','pressure-stage-label');

near(math.repeat([10.02,10.01,10.03,10,10.02]).mean,10.016,'repeat-mean');
near(math.repeat([10.02,10.01,10.03,10,10.02]).sd,.0114017542509912,'repeat-sample-sd');
near(math.repeat([10.02,10.01,10.03,10,10.02]).cv,.11383540586053452,'repeat-cv');
near(math.repeat([5,5,5]).cv,0,'repeat-zero-variation');
near(math.repeat([1,2,3]).range,2,'repeat-range');
near(math.repeat([1,2,3]).sd,1,'repeat-known-sd');

for(const [id,tool]of Object.entries(registry)){const defaults=Object.fromEntries(tool.i.map(([key,,value])=>[key,value])),result=tool.c(defaults);if(!Number.isFinite(result.v)||!result.u)throw Error(`${id}: invalid default result`);cases.push(`${id}-registry-default`)}
console.log(JSON.stringify({validationCases:cases.length,status:'passed'}));
