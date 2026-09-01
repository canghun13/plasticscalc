const filmTestingMath={
  tensile(v){
    const thicknessMm=v.thickness/1000;
    const area=v.width*thicknessMm;
    return{strength:v.force/area,elongation:v.extension/v.gauge*100,area};
  },
  cof(v){
    const normal=v.mass/1000*9.80665;
    return{staticCof:v.staticForce/normal,kineticCof:v.kineticForce/normal,normal};
  },
  seal(v){
    return{peakPerMm:v.peak/v.width,averagePerMm:v.average/v.width,peak15:v.peak/v.width*15,average15:v.average/v.width*15};
  },
  haze(v){
    const total=v.t2/v.t1;
    const diffuse=(v.t4-v.t3*total)/v.t1;
    return{haze:diffuse/total*100,total:total*100,diffuse:diffuse*100};
  },
  dart(v){
    const failures=[v.f1,v.f2,v.f3,v.f4,v.f5];
    const sumPercent=failures.reduce((sum,count)=>sum+count/v.samples*100,0);
    const highest=v.lowest+4*v.increment;
    return{failureWeight:highest-v.increment*(sumPercent/100-.5),sumPercent,highest};
  }
};

const filmTestingTools={
  'film-tensile-strength':{
    n:'Plastic Film Tensile Strength & Elongation',
    i:[
      ['width','Specimen width',15,'mm',0],
      ['thickness','Film thickness',50,'µm',0],
      ['gauge','Initial gauge length',50,'mm',0],
      ['force','Maximum tensile force',30,'N',0],
      ['extension','Extension at break',40,'mm',0]
    ],
    c:v=>{const r=filmTestingMath.tensile(v);return{v:r.strength,u:'MPa tensile strength',d:`Elongation at break: ${r.elongation.toFixed(2)}%. Original cross-section: ${r.area.toFixed(4)} mm². Compare only specimens tested on the same documented method and direction.`}}
  },
  'film-coefficient-of-friction':{
    n:'Plastic Film Coefficient of Friction',
    i:[
      ['mass','Sled mass',200,'g',0],
      ['staticForce','Initial peak force',0.588399,'N',0],
      ['kineticForce','Average sliding force',0.392266,'N',0]
    ],
    c:v=>{const r=filmTestingMath.cof(v);return{v:r.staticCof,u:'static COF',d:`Kinetic COF: ${r.kineticCof.toFixed(3)}. Normal force from the entered sled mass: ${r.normal.toFixed(4)} N. Preserve surface pairing, direction, conditioning, speed and dwell basis.`}}
  },
  'flexible-package-seal-strength':{
    n:'Flexible Package Seal Strength',
    i:[
      ['width','Specimen width',15,'mm',0],
      ['peak','Maximum peel force',8.4,'N',0],
      ['average','Average peel force',6.6,'N',0]
    ],
    c:v=>{const r=filmTestingMath.seal(v);return{v:r.peak15,u:'N/15 mm peak seal strength',d:`Average: ${r.average15.toFixed(3)} N/15 mm. Actual-width basis: ${r.peakPerMm.toFixed(3)} N/mm peak and ${r.averagePerMm.toFixed(3)} N/mm average. Record failure mode and test technique separately.`}}
  },
  'plastic-film-haze':{
    n:'Plastic Film Haze & Transmittance',
    i:[
      ['t1','T1 incident-light reading',100,'reading',0],
      ['t2','T2 specimen total-light reading',92,'reading',0],
      ['t3','T3 instrument-scatter reading',0.5,'reading',0,true],
      ['t4','T4 specimen-plus-instrument scatter',4,'reading',0,true]
    ],
    c:v=>{const r=filmTestingMath.haze(v);return{v:r.haze,u:'% haze',d:`Total luminous transmittance: ${r.total.toFixed(3)}%. Corrected diffuse transmittance: ${r.diffuse.toFixed(3)}%. Use readings from a qualified, calibrated instrument and the applicable current procedure.`}}
  },
  'dart-impact-failure-weight':{
    n:'Plastic Film Dart Impact Failure Weight',
    i:[
      ['lowest','Lowest tested missile mass',100,'g',0],
      ['increment','Uniform mass increment',20,'g',0],
      ['samples','Specimens at each level',10,'count',0],
      ['f1','Failures at level 1',0,'count',0,true],
      ['f2','Failures at level 2',2,'count',0,true],
      ['f3','Failures at level 3',5,'count',0,true],
      ['f4','Failures at level 4',8,'count',0,true],
      ['f5','Failures at level 5',10,'count',0,true]
    ],
    c:v=>{const r=filmTestingMath.dart(v);return{v:r.failureWeight,u:'g estimated 50% failure mass',d:`Five equal groups span ${v.lowest.toFixed(0)}–${r.highest.toFixed(0)} g; summed failure percentages: ${r.sumPercent.toFixed(1)}. This is the successive-group arithmetic screen, not the staircase calculation.`}}
  }
};

const filmTestingFmt=n=>new Intl.NumberFormat('en-US',{maximumFractionDigits:3}).format(n);

function filmTestingMessage(id,values){
  if(id==='flexible-package-seal-strength'&&values.average>values.peak)return'Average peel force cannot exceed the recorded maximum force.';
  if(id==='plastic-film-haze'){
    if(values.t2>values.t1||values.t3>values.t1||values.t4>values.t1)return'Optical readings cannot exceed the incident-light reading on this normalized basis.';
    const r=filmTestingMath.haze(values);
    if(!Number.isFinite(r.haze)||r.haze<0||r.haze>100||r.total<=0||r.total>100)return'These readings do not produce a physical 0–100% haze/transmittance result.';
  }
  if(id==='dart-impact-failure-weight'){
    const failures=[values.f1,values.f2,values.f3,values.f4,values.f5];
    if(!Number.isInteger(values.samples)||failures.some(value=>!Number.isInteger(value)))return'Specimen and failure counts must be whole numbers.';
    if(failures.some(value=>value<0||value>values.samples))return'Each failure count must be between zero and the specimens per level.';
    if(failures.some((value,index)=>index&&value<failures[index-1]))return'Failure counts must not decrease as missile mass increases.';
    if(failures[0]!==0||failures[4]!==values.samples)return'Level 1 must have zero failures and level 5 must have 100% failures for this five-level screen.';
  }
  return'';
}

function mountFilmTesting(){
  const root=document.querySelector('[data-calculator]'),id=root&&root.dataset.calculator,tool=id&&filmTestingTools[id];
  if(!tool)return;
  root.innerHTML=`<section class="calc-workstation" aria-label="${tool.n} calculator"><div class="panel calc-input-panel"><p class="workspace-label">Documented film test readings</p><h2>Calculate ${tool.n}</h2><form novalidate>${tool.i.map(([key,label,value,unit,min,allowZero])=>`<div class="calc-field"><label for="${key}">${label}</label><input id="${key}" name="${key}" type="number" step="any" min="${min}" value="${value}" data-allow-zero="${allowZero?'true':'false'}" aria-describedby="${key}-unit"><span class="unit" id="${key}-unit">${unit}</span></div>`).join('')}<div class="calc-controls"><button type="submit">Calculate</button><button class="secondary" type="reset">Reset values</button></div><p class="form-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Calculated data-reduction result</p><div class="number"></div><p class="detail"></p></aside></section>`;
  const form=root.querySelector('form'),error=root.querySelector('.form-error'),number=root.querySelector('.number'),detail=root.querySelector('.detail');
  const calculate=()=>{
    const values=Object.fromEntries(new FormData(form));let message='';
    for(const [key,value] of Object.entries(values)){
      const input=form.elements[key],numberValue=Number(value),allowZero=input.dataset.allowZero==='true';
      values[key]=numberValue;
      const invalid=value.trim()===''||!Number.isFinite(numberValue)||numberValue<0||(!allowZero&&numberValue<=0);
      input.setAttribute('aria-invalid',invalid?'true':'false');
      if(invalid)message='Enter finite, non-negative readings; required dimensions, forces, masses and counts must be greater than zero.';
    }
    if(!message)message=filmTestingMessage(id,values);
    if(message){error.hidden=false;error.textContent=message;number.textContent='Check inputs';detail.textContent='Correct the recorded test basis before using this result.';return;}
    const result=tool.c(values);
    if(!Number.isFinite(result.v)){error.hidden=false;error.textContent='This input combination does not produce a finite result.';number.textContent='Check inputs';detail.textContent='Review the denominator and measured readings.';return;}
    error.hidden=true;number.textContent=`${filmTestingFmt(result.v)} ${result.u}`;detail.textContent=result.d;
  };
  form.addEventListener('submit',event=>{event.preventDefault();calculate();});
  form.addEventListener('reset',()=>setTimeout(calculate));
  calculate();
}

document.addEventListener('DOMContentLoaded',mountFilmTesting);
