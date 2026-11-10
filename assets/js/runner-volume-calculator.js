const runnerVolumeLimit=20;
function calculateRunnerVolume(record){
  if(!record||!['mm','in'].includes(record.units))throw Error('Choose mm or in for the geometry record.');
  if(!Array.isArray(record.groups)||record.groups.length<1||record.groups.length>runnerVolumeLimit)throw Error('Enter between 1 and 20 segment groups.');
  const scale=record.units==='in'?25.4:1;
  const rows=record.groups.map((row,index)=>{
    const fail=message=>{throw Error(`Group ${index+1}: ${message}`)};
    if(!row||!['round','trapezoid'].includes(row.shape))fail('choose full round or trapezoid.');
    const keys=['length','quantity',...(row.shape==='round'?['diameter']:['wide','narrow','height'])],v={};
    for(const key of keys){const raw=row[key];if(raw===null||raw===undefined||typeof raw==='boolean'||String(raw).trim()===''||!Number.isFinite(Number(raw))||Number(raw)<=0)fail(`${key} must be a finite number greater than zero.`);v[key]=Number(raw)}
    if(!Number.isSafeInteger(v.quantity))fail('quantity must be a positive whole number within the exact integer range.');
    if(row.shape==='trapezoid'&&v.wide<v.narrow)fail('wide base must be at least the narrow base.');
    const area=row.shape==='round'?Math.PI*(v.diameter*scale)**2/4:((v.wide*scale+v.narrow*scale)/2)*(v.height*scale);
    const volume=(area/1000)*(v.length*scale)*v.quantity;
    if(!Number.isFinite(area)||!Number.isFinite(volume)||area<=0||volume<=0)fail('geometry is outside the finite calculation range.');
    return{shape:row.shape,quantity:v.quantity,areaMm2:area,lengthMm:v.length*scale,cm3:volume,inputs:v};
  });
  const cm3=rows.reduce((sum,row)=>sum+row.cm3,0);
  if(!Number.isFinite(cm3)||cm3<=0)throw Error('Combined volume is outside the finite calculation range.');
  return{cm3,in3:cm3/16.387064,rows,units:record.units};
}
const runnerVolumeFormat=value=>new Intl.NumberFormat('en-US',value!==0&&(Math.abs(value)<0.01||Math.abs(value)>=1e9)?{notation:'scientific',maximumSignificantDigits:7}:{maximumFractionDigits:2}).format(value);
function runnerVolumeReport(record,result){
  return['Runner Volume Calculator — PlasticsCalc',`Input dimensions: ${record.units}; length is per physical segment.`,`Total runner volume: ${runnerVolumeFormat(result.cm3)} cm³ (${runnerVolumeFormat(result.in3)} in³)`,...result.rows.map((row,i)=>`Group ${i+1}: ${row.shape==='round'?'full round':'trapezoid'}; ${Object.entries(row.inputs).map(([key,value])=>`${key}=${value}${key==='quantity'?'':` ${record.units}`}`).join(', ')}; ${runnerVolumeFormat(row.cm3)} cm³`),'Count each physical segment once. Sprue, gates, wells and junction corrections excluded.','Constant-section geometric estimate, not runner sizing or flow validation.','https://plasticscalc.com/tools/injection-molding/runner-volume.html'].join('\n');
}
function mountRunnerVolume(root){
  root.innerHTML=`<section class="calc-workstation" aria-label="Runner volume segment calculator"><div class="panel calc-input-panel"><p class="workspace-label">Cold-runner geometry record</p><h2>Calculate Runner Volume</h2><form novalidate><div class="calc-field"><label for="runner-units">Geometry units</label><select id="runner-units" name="units"><option value="mm">mm</option><option value="in">in</option></select><span class="unit">Changing units converts every entered dimension</span></div><p class="runner-help">Group identical constant-section segments. Length is for one segment; quantity is the number of identical physical segments, not cavities. Count shared branches once. Up to 20 groups.</p><div data-runner-groups></div><div class="calc-controls"><button type="submit">Calculate</button><button type="button" class="secondary" data-runner-add>Add group</button><button type="reset" class="secondary">Reset values</button></div><p class="form-error" role="alert" hidden></p></form></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Combined runner volume</p><div class="number">—</div><p class="detail">Enter geometry and calculate.</p><p class="runner-conversion" data-runner-in3></p><div data-runner-breakdown></div><p class="runner-help">Runner segments only. Add the separately calculated sprue volume once if you need a complete feed-system record.</p><button type="button" class="secondary" data-runner-copy disabled>Copy geometry report</button><p class="runner-help" data-runner-copy-status role="status"></p></aside></section>`;
  const form=root.querySelector('form'),units=form.querySelector('[name=units]'),container=root.querySelector('[data-runner-groups]'),add=root.querySelector('[data-runner-add]'),error=root.querySelector('.form-error'),value=root.querySelector('.number'),detail=root.querySelector('.detail'),in3=root.querySelector('[data-runner-in3]'),breakdown=root.querySelector('[data-runner-breakdown]'),copy=root.querySelector('[data-runner-copy]'),copyStatus=root.querySelector('[data-runner-copy-status]');
  let counter=0,previousUnits='mm',last=null;
  const invalidate=()=>{last=null;copy.disabled=true;copyStatus.textContent='';value.textContent='—';detail.textContent='Inputs changed. Calculate to update the volume.';in3.textContent='';breakdown.replaceChildren()};
  const createGroup=(initial=false)=>{
    const id=counter++,group=document.createElement('fieldset');group.className='runner-group';group.dataset.runnerGroup='';
    const field=(key,label,defaultValue,unit)=>`<div class="calc-field" data-runner-field="${key}"><label for="runner-${id}-${key}">${label}</label><input id="runner-${id}-${key}" name="${key}" type="number" step="${key==='quantity'?'1':'any'}" min="${key==='quantity'?'1':'0'}" required value="${initial?defaultValue:key==='quantity'?'1':''}" aria-describedby="runner-${id}-${key}-unit"><span class="unit" id="runner-${id}-${key}-unit">${unit}</span></div>`;
    group.innerHTML=`<legend>Segment group</legend><div class="calc-field"><label for="runner-${id}-shape">Cross-section</label><select id="runner-${id}-shape" name="shape"><option value="round">Full round</option><option value="trapezoid">Trapezoid</option></select><span class="unit">Uniform along this segment</span></div>${field('diameter','Full diameter',6,units.value)}${field('wide','Wide parallel base',8,units.value)}${field('narrow','Narrow parallel base',4,units.value)}${field('height','Perpendicular section height',3,units.value)}${field('length','One segment centerline length',800,units.value)}${field('quantity','Identical segment quantity',1,'whole segments')}<button type="button" class="secondary" data-runner-remove>Remove group</button>`;
    container.append(group);configure(group);renumber();
  };
  function configure(group){const shape=group.querySelector('[name=shape]').value;for(const key of ['diameter','wide','narrow','height']){const field=group.querySelector(`[data-runner-field="${key}"]`),show=shape==='round'?key==='diameter':key!=='diameter';field.hidden=!show;field.querySelector('input').disabled=!show}}
  function renumber(){const groups=[...container.children];groups.forEach((group,i)=>{group.querySelector('legend').textContent=`Segment group ${i+1}`;const remove=group.querySelector('[data-runner-remove]');remove.disabled=groups.length===1;remove.setAttribute('aria-label',`Remove segment group ${i+1}`)});add.disabled=groups.length>=runnerVolumeLimit}
  const read=()=>({units:units.value,groups:[...container.children].map(group=>Object.fromEntries([...group.querySelectorAll('input,select')].filter(input=>!input.disabled).map(input=>[input.name,input.value])))});
  const calculate=()=>{invalidate();try{const record=read(),result=calculateRunnerVolume(record);error.hidden=true;value.textContent=`${runnerVolumeFormat(result.cm3)} cm³`;in3.textContent=`Equivalent volume: ${runnerVolumeFormat(result.in3)} in³`;detail.textContent=`${result.rows.length} segment group${result.rows.length===1?'':'s'}; no sprue, gate or well allowance included.`;for(const [i,row]of result.rows.entries()){const card=document.createElement('div');card.className='runner-breakdown';const heading=document.createElement('h3'),text=document.createElement('p');heading.textContent=`Group ${i+1}: ${runnerVolumeFormat(row.cm3)} cm³`;text.textContent=`${row.shape==='round'?'Full round':'Trapezoid'} · ${row.quantity} segment${row.quantity===1?'':'s'} · section ${runnerVolumeFormat(row.areaMm2)} mm² · ${runnerVolumeFormat(row.lengthMm)} mm per segment`;card.append(heading,text);breakdown.append(card)}last={record,result};copy.disabled=false}catch(err){error.hidden=false;error.textContent=err.message;detail.textContent='Correct the input and calculate again.'}};
  form.addEventListener('input',()=>{invalidate();error.hidden=true});
  form.addEventListener('change',event=>{
    if(event.target===units){const factor=units.value==='in'?1/25.4:25.4;if(units.value!==previousUnits)for(const input of container.querySelectorAll('input:not([name=quantity])')){if(input.value.trim()!==''&&Number.isFinite(Number(input.value)))input.value=String(Number(input.value)*factor)}previousUnits=units.value;for(const unit of container.querySelectorAll('.unit'))if(['mm','in'].includes(unit.textContent))unit.textContent=units.value}
    if(event.target.name==='shape')configure(event.target.closest('fieldset'));invalidate();error.hidden=true;
  });
  add.addEventListener('click',()=>{if(container.children.length<runnerVolumeLimit){createGroup();invalidate();error.hidden=true;container.lastElementChild.querySelector('select').focus()}});
  container.addEventListener('click',event=>{const button=event.target.closest('[data-runner-remove]');if(button&&container.children.length>1){button.closest('fieldset').remove();renumber();invalidate();error.hidden=true}});
  form.addEventListener('submit',event=>{event.preventDefault();calculate()});
  form.addEventListener('reset',()=>setTimeout(()=>{units.value='mm';previousUnits='mm';counter=0;container.replaceChildren();createGroup(true);calculate()}));
  copy.addEventListener('click',async()=>{if(!last)return;try{await navigator.clipboard.writeText(runnerVolumeReport(last.record,last.result));copyStatus.textContent='Geometry report copied.'}catch{copyStatus.textContent='Clipboard unavailable. Select and copy the displayed results.'}});
  createGroup(true);calculate();
}
