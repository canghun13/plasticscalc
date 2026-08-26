const extrusionMath={
  output(v){const output=v.mass*3600/v.seconds;return{output,specific:output/v.rpm}},
  throughput(v){const output=v.area*v.speed*v.density*.06;return{output,massPerMeter:v.area*v.density/1000}},
  surface(v){const surface=Math.PI*v.diameter/1000*v.rpm;return{surface,revPerSecond:v.rpm/60}},
  residence(v){const minutes=v.holdup/v.output*60;return{minutes,throughputsPerHour:60/minutes}},
  drawdown(v){const dieArea=Math.PI/4*(v.dieOd**2-v.tipOd**2),productArea=Math.PI/4*(v.productOd**2-v.productId**2);return{ratio:dieArea/productArea,dieArea,productArea}},
  cooling(v){const path=v.speed*v.seconds/60;return{path,passes:Math.ceil(path/v.straight),usedStraight:Math.ceil(path/v.straight)*v.straight}}
};
const extrusionTools={
  'extrusion-output-test':{n:'Extruder Output Test',i:[['mass','Collected sample mass',4,'kg'],['seconds','Collection time',80,'s'],['rpm','Average screw speed',50,'rpm']],c:v=>{const r=extrusionMath.output(v);return{v:r.output,u:'kg/h measured output',d:`Normalized output: ${r.specific.toFixed(3)} kg/h per rpm. Repeat stable timed samples and preserve material, screw, temperatures, pressure and scale basis.`}}},
  'extrusion-line-throughput':{n:'Extrusion Line Throughput',i:[['area','Final net cross-sectional area',120,'mm²'],['speed','Product line speed',18,'m/min'],['density','Solid product density',.95,'g/cm³']],c:v=>{const r=extrusionMath.throughput(v);return{v:r.output,u:'kg/h required net output',d:`Nominal product mass per metre: ${r.massPerMeter.toFixed(4)} kg/m. Add trim, startup scrap and yield separately before comparing with gross extruder output.`}}},
  'extrusion-screw-surface-speed':{n:'Extruder Screw Surface Speed',i:[['diameter','Screw outside diameter',90,'mm'],['rpm','Screw speed',100,'rpm']],c:v=>{const r=extrusionMath.surface(v);return{v:r.surface,u:'m/min screw surface speed',d:`${r.revPerSecond.toFixed(3)} revolutions/s. Use this with specific output, torque, melt temperature, pressure and OEM limits—not as a universal speed limit.`}}},
  'extrusion-residence-time':{n:'Extrusion Average Residence Time',i:[['holdup','Measured system material hold-up',12,'kg'],['output','Stable material output',180,'kg/h']],c:v=>{const r=extrusionMath.residence(v);return{v:r.minutes,u:'min average hold-up time',d:`The system passes ${r.throughputsPerHour.toFixed(2)} hold-up equivalents per hour. This is not the first-out, last-out or residence-time distribution.`}}},
  'extrusion-drawdown-ratio':{n:'Tube Extrusion Drawdown Ratio',i:[['dieOd','Die opening diameter',12,'mm'],['tipOd','Tip outside diameter',8,'mm'],['productOd','Finished tube outside diameter',8,'mm'],['productId','Finished tube inside diameter',6,'mm']],c:v=>{const r=extrusionMath.drawdown(v);return{v:r.ratio,u:':1 area drawdown ratio',d:`Die annulus ${r.dieArea.toFixed(3)} mm²; product annulus ${r.productArea.toFixed(3)} mm². Apply only material- and process-specific tooling guidance.`}}},
  'extrusion-cooling-length':{n:'Extrusion Cooling Path Length',i:[['speed','Product line speed',8,'m/min'],['seconds','Required controlled-cooling time',45,'s'],['straight','Usable straight path per pass',3.5,'m']],c:v=>{const r=extrusionMath.cooling(v);return{v:r.path,u:'m required cooling path',d:`At least ${r.passes} idealized pass${r.passes===1?'':'es'} at ${v.straight.toFixed(2)} m usable straight length (${r.usedStraight.toFixed(2)} m installed straight-path capacity). Check bends, air gaps, handling and heat transfer separately.`}}}
};
const extrusionFmt=n=>new Intl.NumberFormat('en-US',{maximumFractionDigits:3}).format(n);
function mountExtrusion(){
  const root=document.querySelector('[data-calculator]'),id=root&&root.dataset.calculator,tool=id&&extrusionTools[id];if(!tool)return;
  root.innerHTML=`<section class="calc-workstation" aria-label="${tool.n} calculator"><div class="panel calc-input-panel"><p class="workspace-label">Documented extrusion inputs</p><h2>Calculate ${tool.n}</h2><form novalidate>${tool.i.map(([key,label,value,unit])=>`<div class="calc-field"><label for="${key}">${label}</label><input id="${key}" name="${key}" type="number" step="any" min="0" value="${value}" aria-describedby="${key}-unit"><span class="unit" id="${key}-unit">${unit}</span></div>`).join('')}<div class="calc-controls"><button type="submit">Calculate</button><button class="secondary" type="reset">Reset values</button></div><p class="form-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Calculated planning result</p><div class="number"></div><p class="detail"></p></aside></section>`;
  const form=root.querySelector('form'),error=root.querySelector('.form-error'),number=root.querySelector('.number'),detail=root.querySelector('.detail');
  const calculate=()=>{
    const values=Object.fromEntries(new FormData(form));let message='';
    for(const [key,value] of Object.entries(values)){const input=form.elements[key];values[key]=Number(value);const invalid=value.trim()===''||!Number.isFinite(values[key])||values[key]<=0;input.setAttribute('aria-invalid',invalid?'true':'false');if(invalid)message='Enter finite values greater than zero for every required input.'}
    if(!message&&id==='extrusion-drawdown-ratio'&&(values.dieOd<=values.tipOd||values.productOd<=values.productId))message='Die opening must exceed tip diameter, and product OD must exceed product ID.';
    if(message){error.hidden=false;error.textContent=message;number.textContent='Check inputs';detail.textContent='Correct the input basis before using this result.';return}
    const result=tool.c(values);if(!Number.isFinite(result.v)){error.hidden=false;error.textContent='This input combination does not produce a finite result.';number.textContent='Check inputs';detail.textContent='Review the geometry and denominator values.';return}
    error.hidden=true;number.textContent=`${extrusionFmt(result.v)} ${result.u}`;detail.textContent=result.d;
  };
  form.addEventListener('submit',event=>{event.preventDefault();calculate()});
  form.addEventListener('reset',()=>setTimeout(calculate));
  calculate();
}
document.addEventListener('DOMContentLoaded',mountExtrusion);
