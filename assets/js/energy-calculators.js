const energyMath={
 product(v){
  const totalEnergy=v.machine+v.tool+v.barrel+v.cyclic+v.variable;
  const producedParts=v.cycles*v.cavities;
  const goodParts=producedParts-v.rejects;
  const injectedMass=v.cycles*(v.cavities*v.partMass+v.runnerMass)/1000;
  const goodMass=goodParts*v.partMass/1000;
  return{totalEnergy,producedParts,goodParts,injectedMass,goodMass,secInjected:totalEnergy/injectedMass,secGood:totalEnergy/goodMass,kwhPerGoodPart:totalEnergy/goodParts,averagePower:totalEnergy/v.hours};
 },
 idle(v){
  const avoidedPower=v.idlePower-v.reducedPower;
  const breakEvenHours=v.restartEnergy/avoidedPower;
  const grossAvoided=avoidedPower*v.idleHours;
  const netSaved=Math.max(0,grossAvoided-v.restartEnergy);
  return{avoidedPower,breakEvenHours,grossAvoided,netSaved,costSaved:netSaved*v.rate};
 },
 upgrade(v){
  const energySaved=(v.baselineSec-v.proposedSec)*v.annualMass;
  const grossSavings=energySaved*v.rate;
  const netSavings=grossSavings-v.maintenanceDelta;
  return{energySaved,grossSavings,netSavings,paybackYears:v.premium/netSavings,tenYearNet:netSavings*10-v.premium};
 },
 demand(v){
  const starts=[v.load1,v.load2,v.load3];
  const concurrentPeak=v.base+starts.reduce((sum,value)=>sum+value,0);
  const stagedPeak=v.base+Math.max(...starts);
  return{concurrentPeak,stagedPeak,concurrentMargin:v.limit-concurrentPeak,stagedMargin:v.limit-stagedPeak,avoidedPeak:concurrentPeak-stagedPeak};
 }
};
const energyTools={
 'product-energy-intensity':{n:'Injection Molding Product Energy Intensity',i:[['machine','Machine drives and control energy',14,'kWh'],['tool','Tool axes energy',1,'kWh'],['barrel','Barrel heating energy',4,'kWh'],['cyclic','Cyclic peripheral energy',1.2,'kWh'],['variable','Variable peripheral energy',3.8,'kWh'],['hours','Measurement duration',0.75,'h'],['cycles','Measured molding cycles',1000,'cycles'],['cavities','Producing cavities',4,'parts/cycle'],['rejects','Rejected parts',100,'parts'],['partMass','Good part mass',25,'g/part'],['runnerMass','Runner and sprue mass',10,'g/cycle']],c:v=>{const r=energyMath.product(v);return{v:r.secInjected,u:'kWh/kg injected',d:`Total ${r.totalEnergy.toFixed(2)} kWh; average power ${r.averagePower.toFixed(2)} kW; ${r.goodParts.toFixed(0)} good parts; ${r.kwhPerGoodPart.toFixed(4)} kWh/good part; ${r.secGood.toFixed(3)} kWh/kg of saleable parts.`}}},
 'idle-shutdown-break-even':{n:'Injection Molding Idle Shutdown Break-Even',i:[['idlePower','Ready-to-operate idle power',18,'kW'],['reducedPower','Reduced or shutdown-state power',3,'kW'],['restartEnergy','Restart and stabilization energy',12,'kWh'],['idleHours','Expected idle window',3,'h'],['rate','Electricity rate',0.12,'currency/kWh']],c:v=>{const r=energyMath.idle(v);return{v:r.breakEvenHours,u:'h break-even idle window',d:`${(r.breakEvenHours*60).toFixed(1)} minutes. For the entered ${v.idleHours.toFixed(2)} h window, net avoided energy is ${r.netSaved.toFixed(2)} kWh and net electricity saving is ${r.costSaved.toFixed(2)} currency units.`}}},
 'machine-energy-upgrade-payback':{n:'Injection Molding Machine Energy Upgrade Payback',i:[['baselineSec','Measured baseline SEC',1.2,'kWh/kg'],['proposedSec','Verified proposed SEC',0.7,'kWh/kg'],['annualMass','Annual comparable molded mass',500000,'kg/year'],['rate','Electricity rate',0.12,'currency/kWh'],['premium','Installed upgrade premium',100000,'currency'],['maintenanceDelta','Added annual maintenance cost',5000,'currency/year']],c:v=>{const r=energyMath.upgrade(v);return{v:r.paybackYears,u:'years simple payback',d:`Avoided electricity ${r.energySaved.toFixed(0)} kWh/year; gross saving ${r.grossSavings.toFixed(2)}/year; net saving ${r.netSavings.toFixed(2)}/year; ten-year net ${r.tenYearNet.toFixed(2)}.`}}},
 'startup-peak-demand':{n:'Injection Molding Startup Peak Demand',i:[['base','Facility load before starts',120,'kW'],['load1','Startup load 1',80,'kW'],['load2','Startup load 2',70,'kW'],['load3','Startup load 3',30,'kW'],['limit','Demand limit or target',250,'kW']],c:v=>{const r=energyMath.demand(v);return{v:r.concurrentPeak,u:'kW concurrent screen',d:`Concurrent margin ${r.concurrentMargin.toFixed(1)} kW; one-at-a-time staged peak ${r.stagedPeak.toFixed(1)} kW with ${r.stagedMargin.toFixed(1)} kW margin. Potential screened peak reduction: ${r.avoidedPeak.toFixed(1)} kW.`}}}
};
const energyFmt=n=>new Intl.NumberFormat('en-US',{maximumFractionDigits:3}).format(n);
function mountEnergy(){
 const root=document.querySelector('[data-calculator]'),tool=root&&energyTools[root.dataset.calculator];if(!tool)return;
 root.innerHTML=`<section class="calc-workstation" aria-label="${tool.n} calculator"><div class="panel calc-input-panel"><p class="workspace-label">Measured planning inputs</p><h2>Calculate ${tool.n}</h2><form novalidate>${tool.i.map(([key,label,value,unit])=>`<div class="calc-field"><label for="${key}">${label}</label><input id="${key}" name="${key}" type="number" step="any" min="0" required value="${value}" aria-describedby="${key}-unit"><span class="unit" id="${key}-unit">${unit||'Unitless input'}</span></div>`).join('')}<div class="calc-controls"><button type="submit">Calculate</button><button class="secondary" type="reset">Reset values</button></div><p class="form-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Estimated result</p><div class="number"></div><p class="detail"></p></aside></section>`;
 const form=root.querySelector('form'),error=root.querySelector('.form-error'),number=root.querySelector('.number'),detail=root.querySelector('.detail');
 const calculate=()=>{
  const values=Object.fromEntries(new FormData(form));for(const key in values)values[key]=Number(values[key]);
  let message='';
  if(Object.values(values).some(value=>!Number.isFinite(value)||value<0))message='Enter finite, non-negative values.';
  if(root.dataset.calculator==='product-energy-intensity'&&(values.hours<=0||values.cycles<=0||values.cavities<=0||values.partMass<=0||values.rejects>=values.cycles*values.cavities||values.machine+values.tool+values.barrel+values.cyclic+values.variable<=0))message='Enter positive energy, duration, cycles, cavities and part mass; rejects must be fewer than produced parts.';
  if(root.dataset.calculator==='idle-shutdown-break-even'&&(values.idlePower<=values.reducedPower||values.restartEnergy<=0||values.rate<0))message='Idle power must exceed reduced-state power and restart energy must be greater than zero.';
  if(root.dataset.calculator==='machine-energy-upgrade-payback'&&(values.baselineSec<=values.proposedSec||values.annualMass<=0||values.rate<=0||values.premium<=0||(values.baselineSec-values.proposedSec)*values.annualMass*values.rate<=values.maintenanceDelta))message='Baseline SEC must exceed proposed SEC and verified annual savings must exceed added annual cost.';
  if(root.dataset.calculator==='startup-peak-demand'&&values.limit<=0)message='Demand limit must be greater than zero.';
  if(message){error.hidden=false;error.textContent=message;number.textContent='Check inputs';detail.textContent='Correct the highlighted measurement basis before using the result.';return;}
  const result=tool.c(values);error.hidden=true;number.textContent=`${energyFmt(result.v)} ${result.u}`;detail.textContent=result.d;
 };
 form.addEventListener('submit',event=>{event.preventDefault();calculate()});form.addEventListener('reset',()=>setTimeout(calculate));calculate();
}
document.addEventListener('DOMContentLoaded',mountEnergy);
