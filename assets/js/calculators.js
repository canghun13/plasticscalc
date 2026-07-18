const tools={
  'clamp-tonnage':{name:'Clamp Tonnage',inputs:[['area','Total projected area',100,'in&sup2;'],['pressure','Estimated cavity pressure',4000,'psi'],['safety','Safety factor',1.1,'&times;']],calc:v=>({value:v.area*v.pressure*v.safety/2000,unit:'US tons',detail:'Required clamp force = projected area × cavity pressure × safety factor ÷ 2,000.'})},
  'shot-size':{name:'Shot Size',inputs:[['weight','Part weight',45,'g'],['cavities','Cavities',4,''],['runner','Cold runner/sprue weight',12,'g'],['cushion','Cushion',10,'%']],calc:v=>{const shot=(v.weight*v.cavities+v.runner)*(1+v.cushion/100);return{value:shot,unit:'g per shot',detail:`Total parts: ${(v.weight*v.cavities).toFixed(1)} g. Required shot includes the entered cushion.`}}},
  'shot-volume':{name:'Shot Volume',inputs:[['weight','Shot weight',180,'g'],['density','Melt density',0.95,'g/cm&sup3;']],calc:v=>({value:v.weight/v.density,unit:'cm³',detail:'Use melt density when comparing to a machine barrel capacity.'})},
  'projected-area':{name:'Projected Area',inputs:[['length','Projected length',120,'mm'],['width','Projected width',80,'mm'],['cavities','Cavities',2,''],['runner','Runner projected area',12,'cm&sup2;']],calc:v=>({value:(v.length*v.width/100*v.cavities)+v.runner,unit:'cm²',detail:'Rectangle approximation including runner area; use CAD or parting-line projection for complex shapes.'})},
  'cycle-time':{name:'Cycle Time',inputs:[['fill','Fill/injection time',2.5,'s'],['pack','Pack/hold time',5,'s'],['cool','Cooling time',18,'s'],['motion','Open, eject and close time',5,'s']],calc:v=>({value:v.fill+v.pack+v.cool+v.motion,unit:'s/cycle',detail:`Cooling share: ${(v.cool/(v.fill+v.pack+v.cool+v.motion)*100).toFixed(1)}%.`})},
  'cooling-time':{name:'Cooling Time',inputs:[['wall','Maximum wall thickness',3,'mm'],['alpha','Thermal diffusivity',0.12,'mm&sup2;/s'],['melt','Melt temperature',240,'&deg;C'],['mold','Mold temperature',60,'&deg;C'],['eject','Ejection temperature',95,'&deg;C']],calc:v=>{const ratio=4*(v.melt-v.mold)/(Math.PI*(v.eject-v.mold));return{value:(v.wall*v.wall/(Math.PI*Math.PI*v.alpha))*Math.log(ratio),unit:'s estimated cooling time',detail:'One-dimensional flat-wall heat-transfer estimate.'}}},
  'parts-per-hour':{name:'Parts Per Hour',inputs:[['cycle','Cycle time',30,'s'],['cavities','Cavities',4,''],['uptime','Planned uptime',90,'%']],calc:v=>({value:3600/v.cycle*v.cavities*v.uptime/100,unit:'parts/hour',detail:'Includes the entered planned uptime only; reject rate is not deducted.'})},
  'cavity-count':{name:'Cavity Count',inputs:[['annual','Annual good-part demand',500000,'parts'],['hours','Available annual machine hours',4000,'h'],['cycle','Cycle time',30,'s'],['uptime','Planned uptime',85,'%']],calc:v=>({value:Math.ceil(v.annual/(v.hours*3600/v.cycle*v.uptime/100)),unit:'minimum cavities',detail:'Rounds up to satisfy demand at the stated available hours and uptime.'})},
  'mold-shrinkage':{name:'Mold Shrinkage',inputs:[['part','Target molded part dimension',100,'mm'],['shrink','Linear shrinkage',1.5,'%']],calc:v=>({value:v.part/(1-v.shrink/100),unit:'mm mold cavity dimension',detail:'Verify with material data and mold trials.'})},
  'resin-weight':{name:'Resin Weight',inputs:[['volume','Part volume',85,'cm&sup3;'],['density','Material density',1.05,'g/cm&sup3;'],['cavities','Cavities',2,'']],calc:v=>({value:v.volume*v.density*v.cavities,unit:'g per shot',detail:'Uses density × volume × cavities. Add runners separately if applicable.'})},
  'material-cost':{name:'Material Cost Per Part',inputs:[['part','Part weight',45,'g'],['runner','Runner weight per shot',12,'g'],['cavities','Cavities',2,''],['price','Resin price',2.4,'$/kg'],['scrap','Unrecovered scrap',3,'%']],calc:v=>({value:((v.part+v.runner/v.cavities)/1000*v.price)*(1+v.scrap/100),unit:'per part',detail:'Material only; runner is allocated across cavities and unrecovered scrap is included.'})},
  'scrap-rate':{name:'Scrap Rate',inputs:[['good','Good parts',9700,'parts'],['scrap','Scrap parts',300,'parts']],calc:v=>({value:v.scrap/(v.good+v.scrap)*100,unit:'% scrap rate',detail:`Yield: ${(v.good/(v.good+v.scrap)*100).toFixed(2)}%.`})},
  'machine-utilization':{name:'Machine Utilization',inputs:[['scheduled','Scheduled time',480,'min'],['downtime','Unplanned downtime',55,'min'],['planned','Planned downtime',20,'min']],calc:v=>({value:(v.scheduled-v.downtime-v.planned)/v.scheduled*100,unit:'utilization',detail:'Time-based utilization before quality and performance losses.'})},
  'mold-amortization':{name:'Mold Amortization',inputs:[['tooling','Tooling cost',85000,'$'],['life','Expected production life',500000,'parts'],['maintenance','Lifetime maintenance',10000,'$']],calc:v=>({value:(v.tooling+v.maintenance)/v.life,unit:'per part',detail:'Spreads the entered tooling and lifetime maintenance cost evenly over expected output.'})}
};

const fmt=n=>Number.isFinite(n)?new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(n):'Check inputs';
const field=([key,label,defaultValue,unit])=>`<div class="calc-field"><label for="${key}">${label}</label><input id="${key}" name="${key}" type="number" step="any" min="0" required value="${defaultValue}" aria-describedby="${key}-unit"><span class="unit" id="${key}-unit">${unit||'Unitless input'}</span></div>`;

function validateDomain(id,v){
  if(['shot-volume','resin-weight'].includes(id)&&v.density<=0)return'Material density must be greater than zero.';
  if(id==='cooling-time'&&(v.alpha<=0||v.melt<=v.mold||v.eject<=v.mold||v.eject>=v.melt))return'Cooling temperatures must satisfy melt > ejection > mold, and thermal diffusivity must be greater than zero.';
  if(['parts-per-hour','cavity-count'].includes(id)&&v.cycle<=0)return'Cycle time must be greater than zero.';
  if(id==='cavity-count'&&(v.hours<=0||v.uptime<=0))return'Available hours and planned uptime must be greater than zero.';
  if(id==='material-cost'&&v.cavities<=0)return'Cavity count must be greater than zero.';
  if(id==='scrap-rate'&&v.good+v.scrap<=0)return'Enter at least one good or scrap part.';
  if(id==='machine-utilization'&&(v.scheduled<=0||v.downtime+v.planned>v.scheduled))return'Scheduled time must be positive and cannot be less than total downtime.';
  if(id==='mold-amortization'&&v.life<=0)return'Expected production life must be greater than zero.';
  if(id==='mold-shrinkage'&&v.shrink>=100)return'Linear shrinkage must be less than 100%.';
  return'';
}

function mountCalculator(){
  const root=document.querySelector('[data-calculator]');
  if(!root)return;
  const tool=tools[root.dataset.calculator];
  if(!tool)return;
  root.innerHTML=`<section class="calc-workstation" aria-label="${tool.name} calculator"><div class="panel calc-input-panel"><p class="workspace-label">Input parameters</p><h2>Calculate ${tool.name}</h2><form id="calc-form" novalidate>${tool.inputs.map(field).join('')}<div class="calc-controls"><button type="submit">Calculate</button><button class="secondary" type="reset">Reset values</button></div><p class="form-error" id="calc-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Estimated result</p><div class="number" id="calc-value">—</div><p id="calc-detail">Enter values and calculate.</p></aside></section>`;
  const form=root.querySelector('form');
  const error=root.querySelector('#calc-error');
  const value=root.querySelector('#calc-value');
  const detail=root.querySelector('#calc-detail');
  const showError=message=>{error.hidden=false;error.textContent=message;value.textContent='—';detail.textContent='Correct the input and calculate again.';form.querySelector('[aria-invalid="true"]')?.focus()};
  const calculate=()=>{
    const values=Object.fromEntries(new FormData(form));
    let invalid='';
    Object.keys(values).forEach(key=>{values[key]=Number(values[key]);const input=form.querySelector(`[name="${key}"]`);const bad=!Number.isFinite(values[key])||values[key]<0;input.setAttribute('aria-invalid',bad?'true':'false');if(bad&&!invalid)invalid=`Enter a valid non-negative value for ${tool.inputs.find(input=>input[0]===key)[1]}.`});
    invalid||=validateDomain(root.dataset.calculator,values);
    if(invalid){showError(invalid);return}
    try{const result=tool.calc(values);if(!Number.isFinite(result.value))throw Error();error.hidden=true;value.textContent=`${fmt(result.value)} ${result.unit}`;detail.textContent=result.detail}catch{showError('These inputs cannot produce a valid estimate. Review the values and units.')}
  };
  form.addEventListener('submit',event=>{event.preventDefault();calculate()});
  form.addEventListener('reset',()=>setTimeout(calculate));
  calculate();
}

document.addEventListener('DOMContentLoaded',mountCalculator);
