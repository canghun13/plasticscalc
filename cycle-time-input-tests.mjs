import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

// Exercise the actual shared form handler, including output clearing and reset.
// The individual stages may be zero, but their sum cannot be the denominator 0.
const source=readFileSync('assets/js/calculators.js','utf8');
let root;
const context={Intl,document:{addEventListener(){},querySelector(){return root}},
  FormData:class{constructor(form){return Object.entries(form.values)}},
  setTimeout(callback){callback()}};
vm.createContext(context);
vm.runInContext(source+'\nglobalThis.registry=tools;globalThis.mount=mountCalculator;',context);
function mount(id){
  const tool=context.registry[id];
  const defaults=Object.fromEntries(tool.inputs.map(([key,,value])=>[key,String(value)]));
  const controls=Object.fromEntries(tool.inputs.map(([key])=>[key,{attributes:{},setAttribute(name,value){this.attributes[name]=value},focus(){}}]));
  const handlers={};
  const form={values:{...defaults},addEventListener(name,callback){handlers[name]=callback},querySelector(selector){
    if(selector==='[aria-invalid="true"]')return Object.values(controls).find(control=>control.attributes['aria-invalid']==='true');
    return controls[selector.match(/\[name="([^"]+)"\]/)?.[1]];
  }};
  const error={hidden:true,textContent:''},value={textContent:''},detail={textContent:''};
  root={dataset:{calculator:id},querySelector(selector){return ({form,'#calc-error':error,'#calc-value':value,'#calc-detail':detail})[selector]},querySelectorAll(){return []}};
  context.mount();
  return {defaults,form,error,value,detail,submit(values){form.values=Object.fromEntries(Object.entries(values).map(([key,value])=>[key,String(value)]));handlers.submit({preventDefault(){}})},reset(){form.values={...defaults};handlers.reset()}};
}
const cycle=mount('cycle-time');
assert.equal(cycle.error.hidden,true);
assert.equal(cycle.value.textContent,'30.5 s/cycle');
assert.equal(cycle.detail.textContent,'Cooling share: 59.0%.');
const zero={fill:0,pack:0,cool:0,motion:0};
cycle.submit(zero);
assert.equal(cycle.error.hidden,false,'all-zero cycle must not display a successful NaN cooling share');
assert.equal(cycle.error.textContent,'Total cycle time must be greater than zero.');
assert.equal(cycle.value.textContent,'—','clear the previous result');
assert.ok(!/NaN|Infinity|undefined/.test(cycle.detail.textContent));
cycle.reset();
assert.equal(cycle.error.hidden,true);
assert.equal(cycle.value.textContent,'30.5 s/cycle');

// Literal arithmetic controls: no minimum cycle, component minimum or rounding.
const fixtures=[
  [{fill:3,pack:2,cool:10,motion:5},'20 s/cycle','50.0'],
  [{...zero,fill:2},'2 s/cycle','0.0'],
  [{...zero,pack:2},'2 s/cycle','0.0'],
  [{...zero,cool:2},'2 s/cycle','100.0'],
  [{...zero,motion:2},'2 s/cycle','0.0'],
  [{fill:0,pack:5,cool:18,motion:5},'28 s/cycle','64.3'],
  [{fill:2.5,pack:0,cool:18,motion:5},'25.5 s/cycle','70.6'],
  [{fill:2.5,pack:5,cool:0,motion:5},'12.5 s/cycle','0.0'],
  [{fill:2.5,pack:5,cool:18,motion:0},'25.5 s/cycle','70.6'],
  [{fill:0.0001,pack:0.0001,cool:0.0001,motion:0.0001},'0 s/cycle','25.0'],
  [{fill:1e10,pack:1e10,cool:1e10,motion:1e10},'40,000,000,000 s/cycle','25.0'],
];
for(const [input,value,share]of fixtures){cycle.submit(input);assert.equal(cycle.error.hidden,true);assert.equal(cycle.value.textContent,value);assert.equal(cycle.detail.textContent,`Cooling share: ${share}%.`)}
cycle.submit({...zero,cool:Number.MIN_VALUE});
assert.equal(cycle.error.hidden,true,'preserve a finite positive cycle without an arbitrary floor');
assert.equal(cycle.detail.textContent,'Cooling share: 100.0%.');
for(const raw of ['', ' ', '-1', 'NaN', 'Infinity', '1e309']){
  cycle.submit({...cycle.defaults,fill:raw});
  assert.equal(cycle.error.hidden,false);assert.equal(cycle.value.textContent,'—');
  assert.ok(!/NaN|Infinity|undefined/.test(cycle.detail.textContent));
}
cycle.submit({fill:1e308,pack:1e308,cool:1e308,motion:1e308});
assert.equal(cycle.error.hidden,false);assert.equal(cycle.value.textContent,'—');
cycle.reset();assert.equal(cycle.value.textContent,'30.5 s/cycle');
const control=mount('parts-per-hour');
assert.equal(control.value.textContent,'480 parts/hour');
control.submit({...control.defaults,cycle:0});
assert.equal(control.error.hidden,false);assert.equal(control.value.textContent,'—');
console.log(JSON.stringify({status:'passed',literalFixtures:fixtures.length,positiveSubnormal:1,invalidCases:8,healthyControl:'parts-per-hour',reset:true}));
