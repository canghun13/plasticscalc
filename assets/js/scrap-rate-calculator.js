// One count-based scrap workflow. No storage, uploads, or external requests.
function calculateScrapRuns(runs){
  if(!Array.isArray(runs)||runs.length<1||runs.length>20)throw Error('Use between 1 and 20 runs.');
  let total=0,scrap=0,good=0;
  const rows=runs.map((run,index)=>{
    const prefix=`Run ${index+1}: `;
    if(!['good','total'].includes(run.basis))throw Error(prefix+'choose a supported count basis.');
    if(![run.count,run.scrap].every(n=>Number.isSafeInteger(n)&&n>=0))throw Error(prefix+'counts must be non-negative safe whole numbers.');
    const produced=run.basis==='good'?run.count+run.scrap:run.count;
    if(!Number.isSafeInteger(produced)||produced<=0)throw Error(prefix+'total produced must be a positive safe whole number.');
    if(run.scrap>produced)throw Error(prefix+'scrap cannot exceed total produced.');
    const accepted=produced-run.scrap;
    total+=produced;scrap+=run.scrap;good+=accepted;
    if(![total,scrap,good].every(Number.isSafeInteger))throw Error('Combined counts exceed the supported safe whole-number range.');
    return {basis:run.basis,count:run.count,total:produced,scrap:run.scrap,good:accepted,rate:run.scrap/produced*100};
  });
  return {total,scrap,good,rate:scrap/total*100,yield:good/total*100,rows};
}

function mountScrapRate(root){
  const countFormat=n=>new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(n);
  const rateFormat=n=>new Intl.NumberFormat('en-US',{maximumSignificantDigits:6,notation:n!==0&&n<0.0001?'scientific':'standard'}).format(n);
  root.innerHTML=`<section class="calc-workstation scrap-workstation" aria-label="Scrap Rate calculator"><div class="panel calc-input-panel"><p class="workspace-label">Production count record</p><h2>Calculate Scrap Rate</h2><form novalidate><p class="scrap-help">Use non-overlapping runs of the same part and counting rule. Counts are pieces, not kg or defect occurrences. Up to 20 runs.</p><div class="scrap-runs"></div><div class="calc-controls"><button type="submit">Calculate</button><button type="button" class="secondary" data-add-run>Add run</button><button type="reset" class="secondary">Reset values</button></div><p class="form-error" role="alert" hidden></p></form><p class="scrap-help">Processed only in this browser tab; inputs are not uploaded or saved. Copy the report before leaving.</p></div><aside class="panel result calc-result-panel" aria-live="polite" aria-atomic="true"><p>Combined scrap rate · weighted by produced count</p><div class="number" id="calc-value">—</div><dl class="scrap-summary"><div><dt>Total produced</dt><dd data-scrap-metric="total">—</dd></div><div><dt>Scrapped parts</dt><dd data-scrap-metric="scrap">—</dd></div><div><dt>Good parts</dt><dd data-scrap-metric="good">—</dd></div><div><dt>Good-part yield</dt><dd data-scrap-metric="yield">—</dd></div></dl><p id="calc-detail">Enter values and calculate.</p><p class="scrap-help">Yield assumes every produced part is classified as good or scrap. If rework or pending inspection is a separate state, this is not first-pass yield or OEE Quality.</p><button type="button" class="secondary" data-copy-scrap disabled>Copy report</button><p class="scrap-help" data-copy-status role="status"></p></aside></section><section class="scrap-breakdown" aria-labelledby="scrap-breakdown-heading"><h2 id="scrap-breakdown-heading">Run breakdown</h2><div data-scrap-breakdown></div></section>`;
  const form=root.querySelector('form'),container=root.querySelector('.scrap-runs');
  const error=root.querySelector('.form-error'),value=root.querySelector('#calc-value'),detail=root.querySelector('#calc-detail');
  const add=root.querySelector('[data-add-run]'),copy=root.querySelector('[data-copy-scrap]'),status=root.querySelector('[data-copy-status]');
  const breakdown=root.querySelector('[data-scrap-breakdown]'),metrics=[...root.querySelectorAll('[data-scrap-metric]')];
  let serial=0,report='';
  const runElements=()=>[...container.querySelectorAll('.scrap-run')];
  const clear=message=>{
    report='';copy.disabled=true;status.textContent='';value.textContent='—';detail.textContent=message;
    metrics.forEach(e=>e.textContent='—');breakdown.replaceChildren();
  };
  const updateControls=()=>{
    const rows=runElements();add.disabled=rows.length>=20;
    rows.forEach((row,i)=>{row.querySelector('legend').textContent=`Run ${i+1}`;row.querySelector('[data-remove-run]').disabled=rows.length===1;row.querySelector('[data-remove-run]').setAttribute('aria-label',`Remove run ${i+1}`)});
  };
  const addRun=(defaults=false)=>{
    const key=`scrap-run-${++serial}`,row=document.createElement('fieldset');row.className='scrap-run';
    row.innerHTML=`<legend>Run</legend><div class="scrap-run-fields"><div class="calc-field"><label for="${key}-basis">Count basis</label><select id="${key}-basis" name="basis" aria-describedby="${key}-basis-help"><option value="good">Good + scrap</option><option value="total">Total + scrap</option></select><span class="unit" id="${key}-basis-help">Total already includes scrap</span></div><div class="calc-field"><label for="${key}-count" data-count-label>Good parts</label><input id="${key}-count" name="count" type="number" min="0" step="1" required value="${defaults?9700:''}" aria-describedby="${key}-count-unit"><span class="unit" id="${key}-count-unit">whole parts</span></div><div class="calc-field"><label for="${key}-scrap">Scrapped parts</label><input id="${key}-scrap" name="scrap" type="number" min="0" step="1" required value="${defaults?300:''}" aria-describedby="${key}-scrap-unit"><span class="unit" id="${key}-scrap-unit">whole parts, same run</span></div></div><button type="button" class="secondary" data-remove-run>Remove run</button>`;
    row.querySelector('[data-remove-run]').addEventListener('click',()=>{if(runElements().length===1)return;row.remove();updateControls();calculate();add.focus()});
    row.querySelector('select').addEventListener('change',()=>{
      const basis=row.querySelector('select').value,count=row.querySelector('[name="count"]'),scrap=row.querySelector('[name="scrap"]');
      // Convert a valid record, rather than silently changing its population.
      if(count.value.trim()!==''&&scrap.value.trim()!==''){
        const a=Number(count.value),b=Number(scrap.value),converted=basis==='total'?a+b:a-b;
        if([a,b,converted].every(Number.isSafeInteger)&&a>=0&&b>=0&&converted>=0)count.value=String(converted);
        else count.value='';
      }
      row.querySelector('[data-count-label]').textContent=basis==='total'?'Total produced (includes scrap)':'Good parts';
      calculate();
    });
    container.append(row);updateControls();
    return row;
  };
  const calculate=()=>{
    error.hidden=true;error.textContent='';status.textContent='';let badInput;
    const runs=runElements().map(row=>{
      const data={basis:row.querySelector('select').value};
      for(const key of ['count','scrap']){
        const input=row.querySelector(`[name="${key}"]`),raw=input.value;
        const invalid=raw.trim()===''||!Number.isSafeInteger(Number(raw))||Number(raw)<0;
        input.setAttribute('aria-invalid',String(invalid));if(invalid&&!badInput)badInput=input;
        data[key]=Number(raw);
      }
      return data;
    });
    try{
      if(badInput)throw Error('Enter a non-negative safe whole-number count in every field. Use 0 explicitly where applicable.');
      const result=calculateScrapRuns(runs);
      value.textContent=`${rateFormat(result.rate)} % scrap rate`;
      metrics.forEach(e=>{const key=e.dataset.scrapMetric;e.textContent=key==='yield'?`${rateFormat(result.yield)} %`:`${countFormat(result[key])} parts`});
      detail.textContent=`${countFormat(result.scrap)} scrapped ÷ ${countFormat(result.total)} produced × 100. ${runs.length} run${runs.length===1?'':'s'}; counts are summed before dividing.`;
      breakdown.innerHTML=result.rows.map((r,i)=>`<div class="scrap-run-result"><h3>Run ${i+1}</h3><dl><div><dt>Total produced</dt><dd>${countFormat(r.total)}</dd></div><div><dt>Good</dt><dd>${countFormat(r.good)}</dd></div><div><dt>Scrap</dt><dd>${countFormat(r.scrap)}</dd></div><div><dt>Scrap rate</dt><dd>${rateFormat(r.rate)} %</dd></div></dl></div>`).join('');
      report=['Scrap Rate Calculator — PlasticsCalc','Count basis: good + scrap = total; pieces only.',...result.rows.map((r,i)=>`Run ${i+1}: input ${r.basis==='total'?'total':'good'}=${r.count}, scrap=${r.scrap}; total=${r.total}, good=${r.good}, scrap rate=${rateFormat(r.rate)}%`),`Combined: ${result.scrap} scrap / ${result.total} total = ${rateFormat(result.rate)}%`,`Good parts: ${result.good}; good-part yield: ${rateFormat(result.yield)}%`,'Two-category accounting only; not FPY/OEE when rework or pending parts are separate.','https://plasticscalc.com/tools/injection-molding/scrap-rate.html'].join('\n');
      copy.disabled=false;
    }catch(e){error.hidden=false;error.textContent=e.message;clear('Correct the inputs and calculate again.');badInput?.focus()}
  };
  form.addEventListener('input',()=>{error.hidden=true;clear('Inputs changed. Calculate to refresh the report.')});
  form.addEventListener('submit',e=>{e.preventDefault();calculate()});
  add.addEventListener('click',()=>{if(runElements().length>=20)return;const row=addRun();error.hidden=true;clear('Complete the new run and calculate again.');row.querySelector('[name="count"]').focus()});
  form.addEventListener('reset',e=>{e.preventDefault();container.replaceChildren();serial=0;addRun(true);calculate()});
  copy.addEventListener('click',async()=>{if(!report)return;const snapshot=report;try{await navigator.clipboard.writeText(snapshot);status.textContent=report===snapshot?'Report copied.':''}catch{status.textContent='Copy unavailable. Select the displayed results to copy manually.'}});
  addRun(true);calculate();
}
