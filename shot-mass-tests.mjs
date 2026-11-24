import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const context={Intl,document:{addEventListener(){}}};
vm.createContext(context);
vm.runInContext(readFileSync('assets/js/calculators.js','utf8')+'\nglobalThis.shot=tools["shot-size"];',context);
const fixtures=[
  [[45,4,12,10],[180,192,19.2,211.2]],
  [[45,4,0,0],[180,180,0,180]],
  [[45,4,0,10],[180,180,18,198]],
  [[45,4,12,0],[180,192,0,192]],
  [[2.5,12,7.5,12],[30,37.5,4.5,42]],
  [[45,1,12,10],[45,57,5.7,62.7]]
];
for(const [[weight,cavities,runner,cushion],expected] of fixtures){
  const r=context.shot.calc({weight,cavities,runner,cushion});
  [r.parts,r.moldedMass,r.allowance,r.value].forEach((value,i)=>assert.ok(Math.abs(value-expected[i])<1e-10));
  assert.match(r.detail,/Planning mass:.*including.*allowance/);
  assert.match(r.detail,/not ejected mass or a screw-cushion setting/);
  assert.doesNotMatch(r.detail,/NaN|Infinity|undefined/);
}
const tool=readFileSync('tools/injection-molding/shot-size.html','utf8');
const guide=readFileSync('guides/shot-size-and-barrel-capacity.html','utf8');
assert.match(tool,/calculators\.js\?v=20261124-shot-1/);
assert.match(tool,/192 g molded shot mass/);
assert.match(tool,/211\.2 g planning mass/);
assert.match(tool,/the molded shot equals the total part mass/);
assert.doesNotMatch(tool,/must be greater than total molded part mass/);
assert.match(guide,/Molded shot mass = total cavity part mass \+ ejected cold runner\/sprue mass/);
assert.doesNotMatch(guide,/Shot mass =.*1 \+ cushion/);
const hub=readFileSync('tools/injection-molding/index.html','utf8');
assert.match(hub,/Keep the planning allowance, physical screw cushion, resin and machine rating basis separate/);
assert.doesNotMatch(hub,/runner, and cushion|runner or sprue, and cushion/);
assert.match(readFileSync('build-pages.mjs','utf8'),/await import\('\.\/shot-mass-pages\.mjs'\);\s*await import\('\.\/scrap-rate-pages\.mjs'\);/);
console.log(JSON.stringify({status:'passed',independentFixtures:fixtures.length,toolAndGuideContract:true}));
