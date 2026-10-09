import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

// Exercise the real shared submit handler: pure calculator fixtures cannot catch
// Number('') becoming zero when the generated form uses novalidate.
const source=readFileSync('assets/js/calculators.js','utf8');
let root;
const context={Intl,document:{addEventListener(){},querySelector(){return root}},
  FormData:class{constructor(form){return Object.entries(form.values)}},
  setTimeout(callback){callback()}};
vm.createContext(context);
vm.runInContext(source+'\nglobalThis.registry=tools;globalThis.mount=mountCalculator;',context);
let fields=0,calculators=0;
for(const [id,tool]of Object.entries(context.registry)){
  if(id==='projected-area')continue; // Dedicated mode-aware handler already tested.
  const defaults=Object.fromEntries(tool.inputs.map(([key,,value])=>[key,String(value)]));
  const controls=Object.fromEntries(tool.inputs.map(([key])=>[key,{attributes:{},setAttribute(name,value){this.attributes[name]=value},focus(){this.focused=true}}]));
  const handlers={};
  const form={values:{...defaults},addEventListener(name,callback){handlers[name]=callback},querySelector(selector){
    if(selector==='[aria-invalid="true"]')return Object.values(controls).find(control=>control.attributes['aria-invalid']==='true');
    return controls[selector.match(/\[name="([^"]+)"\]/)?.[1]];
  }};
  const error={hidden:true,textContent:''},value={textContent:''},detail={textContent:''};
  const metrics=id==='parts-per-hour'?['cyclesPerHour','partsPerMinute','partsPerCycle'].map(key=>({dataset:{rateMetric:key},textContent:''})):[];
  root={dataset:{calculator:id},querySelector(selector){return ({form,'#calc-error':error,'#calc-value':value,'#calc-detail':detail})[selector]},querySelectorAll(){return metrics}};
  context.mount();
  assert.equal(error.hidden,true,`${id}: valid defaults rejected`);
  const initial=value.textContent;
  for(const [key]of tool.inputs){
    Object.values(controls).forEach(control=>control.focused=false);
    form.values={...defaults,[key]:''};handlers.submit({preventDefault(){}});
    assert.equal(error.hidden,false,`${id}/${key}: blank required input accepted`);
    assert.equal(value.textContent,'—',`${id}/${key}: stale result retained`);
    assert.equal(controls[key].attributes['aria-invalid'],'true');
    assert.equal(controls[key].focused,true);
    assert.ok(metrics.every(metric=>metric.textContent==='—'));
    form.values={...defaults};handlers.reset();
    assert.equal(error.hidden,true);assert.equal(value.textContent,initial);
    fields++;
  }
  // Non-finite and negative raw inputs must still fail; this is not a formula change.
  for(const raw of ['NaN','Infinity','1e309','-1']){
    form.values={...defaults,[tool.inputs[0][0]]:raw};handlers.submit({preventDefault(){}});
    assert.equal(error.hidden,false);assert.equal(value.textContent,'—');
  }
  calculators++;
}
// Explicit zero is valid where physically meaningful; blank must not masquerade as zero.
const scrap=context.registry['scrap-rate'];
assert.equal(scrap.calc({good:9700,scrap:0}).value,0);
assert.equal(scrap.calc({good:0,scrap:300}).value,100);
assert.equal(scrap.calc({good:9700,scrap:300}).value,3);
assert.equal(context.registry['shot-size'].calc({weight:45,cavities:4,runner:0,cushion:0}).value,180);
console.log(JSON.stringify({status:'passed',calculators,blankFields:fields,nonFiniteOrNegativeCases:calculators*4,explicitZeroFixtures:4}));
