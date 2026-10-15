import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

// Exercise real mount/submit/reset handlers, not a copy of the validation rule.
let root;
const context={Intl,document:{addEventListener(){},querySelector(){return root}},
 FormData:class{constructor(form){return Object.entries(form.values)}},setTimeout(fn){fn()}};
vm.createContext(context);
for(const file of ['calculators','phase3-calculators','energy-calculators'])vm.runInContext(readFileSync(`assets/js/${file}.js`,'utf8'),context);
vm.runInContext('globalThis.api={tools,phase3Tools,energyTools,mountCalculator,mountPhase3,mountEnergy};',context);
const {api}=context;
const cases=[
 ['shot-size',api.tools,'inputs',api.mountCalculator,211.2,62.7],
 ['resin-weight',api.tools,'inputs',api.mountCalculator,178.5,89.25],
 ['material-cost',api.tools,'inputs',api.mountCalculator,.126072,.140904],
 ['parts-per-hour',api.tools,'inputs',api.mountCalculator,480,120], // Healthy control.
 ['parts-per-shift',api.phase3Tools,'i',api.mountPhase3,3352.32,838.08],
 ['oee-capacity',api.phase3Tools,'i',api.mountPhase3,3007.776,751.944],
 ['machine-cost-per-part',api.phase3Tools,'i',api.mountPhase3,.1388888888888889,.5555555555555556],
 ['product-energy-intensity',api.energyTools,'i',api.mountEnergy,24/110,24/35]
];
const invalid=['1.5','0','-1','9007199254740992','NaN','Infinity','1e309',''];
let submissions=0;
for(const [id,registry,inputsKey,mount,expectedDefault,expectedOne]of cases){
 const tool=registry[id],definitions=tool[inputsKey];
 const defaults=Object.fromEntries(definitions.map(([key,,value])=>[key,String(value)]));
 const controls=Object.fromEntries(definitions.map(([key])=>[key,{attributes:{},setAttribute(k,v){this.attributes[k]=v},focus(){this.focused=true}}]));
 const handlers={},form={values:{...defaults},elements:controls,addEventListener(k,fn){handlers[k]=fn},querySelector(s){return s==='[aria-invalid="true"]'?Object.values(controls).find(e=>e.attributes['aria-invalid']==='true'):controls[s.match(/name="([^"]+)"/)?.[1]]}};
 const error={hidden:true,textContent:''},number={textContent:''},detail={textContent:''};
 root={dataset:{calculator:id},innerHTML:'',querySelector(s){return ({form,'#calc-error':error,'.form-error':error,'#calc-value':number,'.number':number,'#calc-detail':detail,'.detail':detail})[s]??null},querySelectorAll(){return []}};
 mount();
 const cavityMarkup=root.innerHTML.match(/<input[^>]*name="cavities"[^>]*>/)?.[0]??'';
 assert.match(cavityMarkup,/step="1"/);assert.match(cavityMarkup,/min="1"/);
 const initial=number.textContent;
 assert.equal(error.hidden,true,`${id}: defaults`);
 // Literal arithmetic fixtures are checked independently of renderer rounding.
 const calculate=inputsKey==='inputs'?tool.calc:tool.c;
 const numericDefaults=Object.fromEntries(Object.entries(defaults).map(([k,v])=>[k,Number(v)]));
 const output=calculate(numericDefaults),one=calculate({...numericDefaults,cavities:1});
 assert.ok(Math.abs((output.value??output.v)-expectedDefault)<1e-9,`${id}: default arithmetic`);
 assert.ok(Math.abs((one.value??one.v)-expectedOne)<1e-9,`${id}: one-cavity arithmetic`);
 for(const raw of invalid){
  form.values={...defaults,cavities:raw};handlers.submit({preventDefault(){}});submissions++;
  assert.equal(error.hidden,false,`${id}: ${raw} cavities accepted`);
  assert.match(error.textContent,/positive whole number/,`${id}: cavity-specific error`);
  assert.ok(['—','Check inputs'].includes(number.textContent),`${id}: stale result`);
  assert.equal(controls.cavities.attributes['aria-invalid'],'true');
  form.values={...defaults};handlers.reset();
  assert.equal(error.hidden,true);assert.equal(number.textContent,initial);
  assert.equal(controls.cavities.attributes['aria-invalid'],'false');
 }
 for(const valid of ['1','3','128','2.0','2e0']){
  form.values={...defaults,cavities:valid};handlers.submit({preventDefault(){}});
  assert.equal(error.hidden,true,`${id}: valid count ${valid} rejected`);
 }
 // Cavities are discrete, but mass/time/percent inputs remain continuous.
 const other=definitions.find(([key])=>key!=='cavities')[0];
 assert.ok(root.innerHTML.includes('step="any"'),`${id}: continuous fields lost`);
 form.values={...defaults,[other]:'0.5'};handlers.submit({preventDefault(){}});
 assert.equal(error.hidden,true,`${id}: continuous fractional input rejected`);
}
console.log(JSON.stringify({status:'passed',handlers:cases.length,invalidSubmissions:submissions,literalFixtures:cases.length*2,validCounts:cases.length*5}));
