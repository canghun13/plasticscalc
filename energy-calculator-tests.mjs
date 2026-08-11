import{readFileSync}from'node:fs';import vm from'node:vm';
const context={document:{addEventListener(){},querySelector(){return null}},Intl};vm.createContext(context);vm.runInContext(`${readFileSync('assets/js/energy-calculators.js','utf8')}\nglobalThis.tools=energyTools;globalThis.math=energyMath`,context);
const{tools,math}=context,near=(actual,expected,name,tolerance=1e-9)=>{if(Math.abs(actual-expected)>tolerance)throw Error(`${name}: ${actual} !== ${expected}`)},finite=(value,name)=>{if(!Number.isFinite(value))throw Error(`${name}: non-finite`)};
const productCases=[
 {machine:14,tool:1,barrel:4,cyclic:1.2,variable:3.8,hours:.75,cycles:1000,cavities:4,rejects:100,partMass:25,runnerMass:10},
 {machine:2,tool:0,barrel:1,cyclic:0,variable:0,hours:.25,cycles:100,cavities:1,rejects:0,partMass:10,runnerMass:0},
 {machine:100,tool:10,barrel:20,cyclic:5,variable:15,hours:8,cycles:5000,cavities:32,rejects:250,partMass:2.4,runnerMass:0}
];
for(const [index,v]of productCases.entries()){const r=math.product(v),energy=v.machine+v.tool+v.barrel+v.cyclic+v.variable,parts=v.cycles*v.cavities-v.rejects,injected=v.cycles*(v.cavities*v.partMass+v.runnerMass)/1000;near(r.secInjected,energy/injected,`product SEC ${index}`);near(r.kwhPerGoodPart,energy/parts,`product per-part ${index}`);near(r.averagePower,energy/v.hours,`product power ${index}`);finite(r.secGood,`product saleable SEC ${index}`)}
near(tools['product-energy-intensity'].c(productCases[0]).v,24/110,'product default');
for(const v of[{idlePower:18,reducedPower:3,restartEnergy:12,idleHours:3,rate:.12},{idlePower:5,reducedPower:0,restartEnergy:2,idleHours:1,rate:.3},{idlePower:100,reducedPower:20,restartEnergy:40,idleHours:10,rate:.08}]){const r=math.idle(v);near(r.breakEvenHours,v.restartEnergy/(v.idlePower-v.reducedPower),'idle break-even');near(r.netSaved,Math.max(0,(v.idlePower-v.reducedPower)*v.idleHours-v.restartEnergy),'idle net')}
near(tools['idle-shutdown-break-even'].c({idlePower:18,reducedPower:3,restartEnergy:12,idleHours:3,rate:.12}).v,.8,'idle default');
for(const v of[{baselineSec:1.2,proposedSec:.7,annualMass:500000,rate:.12,premium:100000,maintenanceDelta:5000},{baselineSec:2,proposedSec:1,annualMass:10000,rate:.2,premium:5000,maintenanceDelta:0},{baselineSec:.8,proposedSec:.6,annualMass:1e6,rate:.1,premium:50000,maintenanceDelta:2000}]){const r=math.upgrade(v),energy=(v.baselineSec-v.proposedSec)*v.annualMass,net=energy*v.rate-v.maintenanceDelta;near(r.energySaved,energy,'upgrade energy');near(r.paybackYears,v.premium/net,'upgrade payback');near(r.tenYearNet,net*10-v.premium,'upgrade ten-year')}
near(tools['machine-energy-upgrade-payback'].c({baselineSec:1.2,proposedSec:.7,annualMass:500000,rate:.12,premium:100000,maintenanceDelta:5000}).v,4,'upgrade default');
for(const v of[{base:120,load1:80,load2:70,load3:30,limit:250},{base:0,load1:10,load2:0,load3:0,limit:15},{base:500,load1:50,load2:200,load3:100,limit:900}]){const r=math.demand(v),sum=v.base+v.load1+v.load2+v.load3,staged=v.base+Math.max(v.load1,v.load2,v.load3);near(r.concurrentPeak,sum,'demand concurrent');near(r.stagedPeak,staged,'demand staged');near(r.concurrentMargin,v.limit-sum,'demand margin')}
near(tools['startup-peak-demand'].c({base:120,load1:80,load2:70,load3:30,limit:250}).v,300,'demand default');
console.log(JSON.stringify({tools:Object.keys(tools).length,independentCases:12,status:'passed'}));
