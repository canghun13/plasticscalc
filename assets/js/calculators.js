const tools={
  'clamp-tonnage':{name:'Clamp Tonnage',inputs:[['area','Total projected area',100,'in&sup2;'],['pressure','Estimated cavity pressure',4000,'psi'],['safety','Safety factor',1.1,'&times;']],calc:v=>({value:v.area*v.pressure*v.safety/2000,unit:'US tons',detail:'Required clamp force = projected area × cavity pressure × safety factor ÷ 2,000.'})},
  'shot-size':{name:'Shot Size',inputs:[['weight','Part weight',45,'g'],['cavities','Cavities',4,''],['runner','Cold runner/sprue weight',12,'g'],['cushion','Cushion',10,'%']],calc:v=>{const shot=(v.weight*v.cavities+v.runner)*(1+v.cushion/100);return{value:shot,unit:'g per shot',detail:`Total parts: ${(v.weight*v.cavities).toFixed(1)} g. Required shot includes the entered cushion.`}}},
  'shot-volume':{name:'Shot Volume',inputs:[['weight','Shot weight',180,'g'],['density','Melt density',0.95,'g/cm&sup3;']],calc:v=>({value:v.weight/v.density,unit:'cm³',detail:'Use melt density when comparing to a machine barrel capacity.'})},
  'projected-area':{name:'Projected Area',inputs:[['length','Projected length',120,'mm'],['width','Projected width',80,'mm'],['cavities','Cavities',2,''],['runner','Runner projected area',12,'cm&sup2;']],calc:calculateProjectedArea},
  'cycle-time':{name:'Cycle Time',inputs:[['fill','Fill/injection time',2.5,'s'],['pack','Pack/hold time',5,'s'],['cool','Cooling time',18,'s'],['motion','Open, eject and close time',5,'s']],calc:v=>({value:v.fill+v.pack+v.cool+v.motion,unit:'s/cycle',detail:`Cooling share: ${(v.cool/(v.fill+v.pack+v.cool+v.motion)*100).toFixed(1)}%.`})},
  'cooling-time':{name:'Cooling Time',inputs:[['wall','Maximum wall thickness',3,'mm'],['alpha','Thermal diffusivity',0.12,'mm&sup2;/s'],['melt','Melt temperature',240,'&deg;C'],['mold','Mold temperature',60,'&deg;C'],['eject','Ejection temperature',95,'&deg;C']],calc:v=>{const ratio=4*(v.melt-v.mold)/(Math.PI*(v.eject-v.mold));return{value:(v.wall*v.wall/(Math.PI*Math.PI*v.alpha))*Math.log(ratio),unit:'s estimated cooling time',detail:'One-dimensional flat-wall heat-transfer estimate.'}}},
  'parts-per-hour':{name:'Parts Per Hour',inputs:[['cycle','Cycle time',30,'s'],['cavities','Active cavities',4,'whole cavities']],validate:v=>{
    if(!Number.isFinite(v.cycle)||v.cycle<=0)return'Cycle time must be a finite value greater than zero.';
    if(!Number.isSafeInteger(v.cavities)||v.cavities<=0)return'Active cavities must be a positive whole number.';
    return'';
  },calc:v=>{const cyclesPerHour=3600/v.cycle;const value=cyclesPerHour*v.cavities;return{value,unit:'parts/hour',detail:'Theoretical continuous rate; downtime, speed loss, and rejected parts are not included.',metrics:{cyclesPerHour,partsPerMinute:value/60,partsPerCycle:v.cavities}}}},
  'cavity-count':{name:'Cavity Count',inputs:[['annual','Annual good-part demand',500000,'parts'],['hours','Available annual machine hours',4000,'h'],['cycle','Cycle time',30,'s'],['uptime','Planned uptime',85,'%']],calc:v=>({value:Math.ceil(v.annual/(v.hours*3600/v.cycle*v.uptime/100)),unit:'minimum cavities',detail:'Rounds up to satisfy demand at the stated available hours and uptime.'})},
  'mold-shrinkage':{name:'Mold Shrinkage',inputs:[['part','Target molded part dimension',100,'mm'],['shrink','Linear shrinkage',1.5,'%']],calc:v=>({value:v.part/(1-v.shrink/100),unit:'mm mold cavity dimension',detail:'Verify with material data and mold trials.'})},
  'resin-weight':{name:'Resin Weight',inputs:[['volume','Part volume',85,'cm&sup3;'],['density','Material density',1.05,'g/cm&sup3;'],['cavities','Cavities',2,'']],calc:v=>({value:v.volume*v.density*v.cavities,unit:'g per shot',detail:'Uses density × volume × cavities. Add runners separately if applicable.'})},
  'material-cost':{name:'Material Cost Per Part',inputs:[['part','Part weight',45,'g'],['runner','Runner weight per shot',12,'g'],['cavities','Cavities',2,''],['price','Resin price',2.4,'$/kg'],['scrap','Unrecovered scrap',3,'%']],calc:v=>({value:((v.part+v.runner/v.cavities)/1000*v.price)*(1+v.scrap/100),unit:'per part',detail:'Material only; runner is allocated across cavities and unrecovered scrap is included.'})},
  'scrap-rate':{name:'Scrap Rate',inputs:[['good','Good parts',9700,'parts'],['scrap','Scrap parts',300,'parts']],calc:v=>({value:v.scrap/(v.good+v.scrap)*100,unit:'% scrap rate',detail:`Yield: ${(v.good/(v.good+v.scrap)*100).toFixed(2)}%.`})},
  'machine-utilization':{name:'Machine Utilization',inputs:[['scheduled','Scheduled time',480,'min'],['downtime','Unplanned downtime',55,'min'],['planned','Planned downtime',20,'min']],calc:v=>({value:(v.scheduled-v.downtime-v.planned)/v.scheduled*100,unit:'utilization',detail:'Time-based utilization before quality and performance losses.'})},
  'mold-amortization':{name:'Mold Amortization',inputs:[['tooling','Tooling cost',85000,'$'],['life','Expected production life',500000,'parts'],['maintenance','Lifetime maintenance',10000,'$']],calc:v=>({value:(v.tooling+v.maintenance)/v.life,unit:'per part',detail:'Spreads the entered tooling and lifetime maintenance cost evenly over expected output.'})}
};

const fmt=n=>Number.isFinite(n)?new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(n):'Check inputs';
const fmtRate=n=>Number.isFinite(n)?new Intl.NumberFormat('en-US',{maximumSignificantDigits:8}).format(n):'Check inputs';
const fmtProjectedArea=n=>Number.isFinite(n)?new Intl.NumberFormat('en-US',{maximumSignificantDigits:8,notation:n!==0&&(Math.abs(n)>=1e9||Math.abs(n)<1e-6)?'scientific':'standard'}).format(n):'Check inputs';
const field=([key,label,defaultValue,unit])=>`<div class="calc-field"><label for="${key}">${label}</label><input id="${key}" name="${key}" type="number" step="any" min="0" required value="${defaultValue}" aria-describedby="${key}-unit"><span class="unit" id="${key}-unit">${unit||'Unitless input'}</span></div>`;

function validateProjectedArea(v){
  const method=v.method??'rectangle';
  const units=v.units??'metric';
  if(!['rectangle','circle','cad'].includes(method))return'Choose a supported projected-area method.';
  if(!['metric','imperial'].includes(units))return'Choose a supported unit system.';
  if(!Number.isSafeInteger(v.cavities)||v.cavities<1)return'Cavities must be a positive whole number.';
  if(!Number.isFinite(v.runner)||v.runner<0)return'Runner/feed-system area must be finite and zero or greater.';
  const keys=method==='rectangle'?['length','width']:method==='circle'?['diameter']:['area'];
  if(keys.some(key=>!Number.isFinite(v[key])||v[key]<=0))return'Enter a finite, positive value for every active geometry input.';
  return'';
}

function calculateProjectedArea(v){
  const invalid=validateProjectedArea(v);
  if(invalid)throw Error(invalid);
  const method=v.method??'rectangle';
  const metric=(v.units??'metric')==='metric';
  const dimensionScale=metric?0.1:2.54; // entered length to cm
  const areaScale=metric?1:6.4516; // entered area to cm²
  const perCavity=method==='rectangle'?(v.length*dimensionScale)*(v.width*dimensionScale):method==='circle'?Math.PI*(v.diameter*dimensionScale/2)**2:v.area*areaScale;
  const cavitiesArea=perCavity*v.cavities;
  const runnerArea=v.runner*areaScale;
  const value=cavitiesArea+runnerArea;
  if(![perCavity,cavitiesArea,runnerArea,value,value/6.4516].every(Number.isFinite)||perCavity<=0||value<=0)throw Error('The geometry is outside the supported numeric range.');
  return{value,unit:'cm²',detail:'Total projection = identical cavity projections + complete runner/feed-system projection, counted once.',metrics:{perCavity,cavitiesArea,runnerArea,squareInches:value/6.4516}};
}

function mountProjectedArea(root){
  root.innerHTML=`<section class="calc-workstation" aria-label="Projected Area calculator"><div class="panel calc-input-panel"><p class="workspace-label">Geometry record</p><h2>Calculate Projected Area</h2><form novalidate><div class="calc-field"><label for="projection-method">Per-cavity input method</label><select id="projection-method" name="method" aria-describedby="projection-method-unit"><option value="rectangle">Rectangle dimensions</option><option value="circle">Circle diameter</option><option value="cad">Known/CAD projected area</option></select><span class="unit" id="projection-method-unit">One cavity, viewed along mold opening</span></div><div class="calc-field"><label for="projection-units">Input units</label><select id="projection-units" name="units" aria-describedby="projection-units-unit"><option value="metric">mm dimensions / cm² areas</option><option value="imperial">in dimensions / in² areas</option></select><span class="unit" id="projection-units-unit">Changing units converts entered values</span></div>${field(['length','Projected length',120,'mm'])}${field(['width','Projected width',80,'mm'])}${field(['diameter','Projected diameter',100,'mm'])}${field(['area','Projected area of one cavity',96,'cm²'])}${field(['cavities','Identical cavities',2,'whole cavities'])}${field(['runner','Complete runner/feed-system projected area',12,'cm²'])}<p class="projection-help">Enter the feed-system projection for the whole mold once. For different cavity shapes, enter the verified sum of their projections in Known/CAD mode with cavities = 1; add the feed-system area separately.</p><div class="calc-controls"><button type="submit">Calculate</button><button class="secondary" type="reset">Reset values</button></div><p class="form-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Total projected mold area</p><div class="number" id="calc-value">—</div><dl class="projection-summary"><div><dt>Total in square inches</dt><dd data-projection-metric="squareInches">—</dd></div><div><dt>One cavity</dt><dd data-projection-metric="perCavity">—</dd></div><div><dt>All cavities</dt><dd data-projection-metric="cavitiesArea">—</dd></div><div><dt>Runner/feed system</dt><dd data-projection-metric="runnerArea">—</dd></div></dl><p id="calc-detail">Enter values and calculate.</p><p class="projection-help">Use the square-inch total in the <a href="/tools/injection-molding/clamp-tonnage.html">Clamp Tonnage Calculator</a>, which takes in². Keep the cavity-pressure basis with the area record.</p></aside></section>`;
  const form=root.querySelector('form');
  const method=form.querySelector('[name="method"]');
  const units=form.querySelector('[name="units"]');
  const error=root.querySelector('.form-error');
  const value=root.querySelector('#calc-value');
  const detail=root.querySelector('#calc-detail');
  const metrics=[...root.querySelectorAll('[data-projection-metric]')];
  const input=key=>form.querySelector(`[name="${key}"]`);
  input('cavities').step='1';input('cavities').min='1';
  let previousUnits='metric';
  const configure=()=>{
    const active=method.value==='rectangle'?['length','width']:method.value==='circle'?['diameter']:['area'];
    for(const key of ['length','width','diameter','area']){const element=input(key);element.disabled=!active.includes(key);element.closest('.calc-field').hidden=element.disabled;root.querySelector(`#${key}-unit`).textContent=key==='area'?(units.value==='metric'?'cm²':'in²'):(units.value==='metric'?'mm':'in')}
    root.querySelector('#runner-unit').textContent=units.value==='metric'?'cm²':'in²';
  };
  const fail=message=>{error.textContent=message;error.hidden=false;value.textContent='—';metrics.forEach(element=>element.textContent='—');detail.textContent='Correct the input and calculate again.'};
  const calculate=()=>{
    const data=Object.fromEntries(new FormData(form));
    for(const [key,raw]of Object.entries(data)){if(key==='method'||key==='units')continue;const element=input(key);const bad=raw.trim()===''||!Number.isFinite(Number(raw));element.setAttribute('aria-invalid',String(bad));if(bad){fail(`Enter a number for ${element.labels[0].textContent}.`);return}data[key]=Number(raw)}
    const invalid=validateProjectedArea(data);if(invalid){fail(invalid);return}
    try{const result=calculateProjectedArea(data);error.hidden=true;value.textContent=`${fmtProjectedArea(result.value)} cm²`;detail.textContent=result.detail;metrics.forEach(element=>{const key=element.dataset.projectionMetric;element.textContent=`${fmtProjectedArea(result.metrics[key])} ${key==='squareInches'?'in²':'cm²'}`})}catch(err){fail(err.message)}
  };
  units.addEventListener('change',()=>{
    if(units.value!==previousUnits){const toImperial=units.value==='imperial';for(const key of ['length','width','diameter','area','runner']){const element=input(key);if(element.value.trim()!==''&&Number.isFinite(Number(element.value))){const divisor=['area','runner'].includes(key)?6.4516:25.4;const converted=toImperial?Number(element.value)/divisor:Number(element.value)*divisor;element.value=String(converted)}}previousUnits=units.value}
    configure();calculate();
  });
  method.addEventListener('change',()=>{configure();calculate()});
  form.addEventListener('submit',event=>{event.preventDefault();calculate()});
  form.addEventListener('reset',()=>setTimeout(()=>{previousUnits='metric';configure();calculate()}));
  configure();calculate();
}

function validateDomain(id,v){
  if(['shot-volume','resin-weight'].includes(id)&&v.density<=0)return'Material density must be greater than zero.';
  if(id==='cooling-time'&&(v.alpha<=0||v.melt<=v.mold||v.eject<=v.mold||v.eject>=v.melt))return'Cooling temperatures must satisfy melt > ejection > mold, and thermal diffusivity must be greater than zero.';
  if(id==='parts-per-hour')return tools[id].validate(v);
  if(id==='cavity-count'&&v.cycle<=0)return'Cycle time must be greater than zero.';
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
  if(root.dataset.calculator==='projected-area'){mountProjectedArea(root);return}
  const isPartsPerHour=root.dataset.calculator==='parts-per-hour';
  const rateSummary=isPartsPerHour?'<dl class="rate-summary" aria-label="Theoretical rate breakdown"><div><dt>Cycles per hour</dt><dd data-rate-metric="cyclesPerHour">—</dd></div><div><dt>Parts per minute</dt><dd data-rate-metric="partsPerMinute">—</dd></div><div><dt>Parts per cycle</dt><dd data-rate-metric="partsPerCycle">—</dd></div></dl>':'';
  root.innerHTML=`<section class="calc-workstation" aria-label="${tool.name} calculator"><div class="panel calc-input-panel"><p class="workspace-label">Input parameters</p><h2>Calculate ${tool.name}</h2><form id="calc-form" novalidate>${tool.inputs.map(field).join('')}<div class="calc-controls"><button type="submit">Calculate</button><button class="secondary" type="reset">Reset values</button></div><p class="form-error" id="calc-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>${isPartsPerHour?'Theoretical rate':'Estimated result'}</p><div class="number" id="calc-value">—</div><p id="calc-detail">Enter values and calculate.</p>${rateSummary}</aside></section>`;
  const form=root.querySelector('form');
  if(isPartsPerHour){const cavityInput=form.querySelector('[name="cavities"]');cavityInput.step='1';cavityInput.min='1'}
  const error=root.querySelector('#calc-error');
  const value=root.querySelector('#calc-value');
  const detail=root.querySelector('#calc-detail');
  const metrics=[...root.querySelectorAll('[data-rate-metric]')];
  const showError=message=>{error.hidden=false;error.textContent=message;value.textContent='—';detail.textContent='Correct the input and calculate again.';metrics.forEach(metric=>metric.textContent='—');form.querySelector('[aria-invalid="true"]')?.focus()};
  const calculate=()=>{
    const values=Object.fromEntries(new FormData(form));
    let invalid='';
    Object.keys(values).forEach(key=>{const raw=values[key];values[key]=Number(raw);const input=form.querySelector(`[name="${key}"]`);const bad=(isPartsPerHour&&raw==='')||!Number.isFinite(values[key])||values[key]<0;input.setAttribute('aria-invalid',bad?'true':'false');if(bad&&!invalid)invalid=`Enter a valid non-negative value for ${tool.inputs.find(input=>input[0]===key)[1]}.`});
    invalid||=validateDomain(root.dataset.calculator,values);
    if(invalid){showError(invalid);return}
    try{const result=tool.calc(values);if(!Number.isFinite(result.value))throw Error();const format=isPartsPerHour?fmtRate:fmt;error.hidden=true;value.textContent=`${format(result.value)} ${result.unit}`;detail.textContent=result.detail;metrics.forEach(metric=>metric.textContent=format(result.metrics?.[metric.dataset.rateMetric]))}catch{showError('These inputs cannot produce a valid estimate. Review the values and units.')}
  };
  form.addEventListener('submit',event=>{event.preventDefault();calculate()});
  form.addEventListener('reset',()=>setTimeout(calculate));
  calculate();
}

document.addEventListener('DOMContentLoaded',mountCalculator);
