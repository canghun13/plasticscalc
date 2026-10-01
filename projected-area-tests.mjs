import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const context={document:{addEventListener(){}},Intl};
vm.createContext(context);
vm.runInContext(readFileSync('assets/js/calculators.js','utf8')+'\nglobalThis.math={calculateProjectedArea,validateProjectedArea,fmtProjectedArea};',context);
const {calculateProjectedArea:calc,validateProjectedArea:validate}=context.math;
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<=Math.max(1e-12,Math.abs(expected)*1e-10),`${actual} != ${expected}`);
// Literal independent fixtures, including CAD and inch/cm² conversion.
const fixtures=[
  [{length:120,width:80,cavities:2,runner:12},204,96,192,12,31.62006324012648],
  [{method:'rectangle',units:'imperial',length:4,width:3,cavities:2,runner:2},167.7416,77.4192,154.8384,12.9032,26],
  [{method:'circle',units:'metric',diameter:100,cavities:2,runner:12},169.07963267948966,78.53981633974483,157.07963267948966,12,26.20739548011191],
  [{method:'circle',units:'imperial',diameter:2,cavities:4,runner:0},81.07319666039963,20.26829916509991,81.07319666039963,0,12.566370614359172],
  [{method:'cad',units:'metric',area:42.5,cavities:4,runner:10},180,42.5,170,10,27.9000558001116],
  [{method:'cad',units:'imperial',area:10,cavities:3,runner:2},206.4512,64.516,193.548,12.9032,32],
  [{method:'cad',units:'metric',area:150,cavities:1,runner:0},150,150,150,0,23.250046500093],
  [{length:0.01,width:0.02,cavities:1,runner:0},0.000002,0.000002,0.000002,0,0.00000031000062000124]
];
for(const [input,total,one,all,runner,inches]of fixtures){assert.equal(validate(input),'');const result=calc(input);near(result.value,total);near(result.metrics.perCavity,one);near(result.metrics.cavitiesArea,all);near(result.metrics.runnerArea,runner);near(result.metrics.squareInches,inches);assert.equal(result.unit,'cm²')}
const base={length:120,width:80,cavities:2,runner:12};
const invalid=[{length:0},{width:-1},{length:NaN},{length:Infinity},{cavities:0},{cavities:1.5},{cavities:9007199254740992},{runner:-1},{runner:NaN},{method:'unsupported'},{units:'unsupported'},{method:'circle',diameter:0},{method:'cad',area:0},{method:'cad',area:Infinity}];
for(const change of invalid){assert.notEqual(validate({...base,...change}),'');assert.throws(()=>calc({...base,...change}))}
assert.throws(()=>calc({...base,length:1e308,width:1e308}));
assert.throws(()=>calc({...base,length:1e-300,width:1e-300,runner:0}));
assert.equal(context.math.fmtProjectedArea(2e38),'2E38');
assert.equal(context.math.fmtProjectedArea(2e-12),'2E-12');
assert.equal(context.math.fmtProjectedArea(204),'204');
const html=readFileSync('tools/injection-molding/projected-area.html','utf8');
assert.ok(html.includes('Projected Area Calculator</h1>'));
assert.ok(html.includes('cavities = 1'));
assert.ok(html.includes('1 in² = 6.4516 cm²'));
assert.ok(html.includes('Known/CAD projected area'));
assert.ok(html.includes('Dynisco'));
console.log(JSON.stringify({status:'passed',fixtures:fixtures.length,invalid:invalid.length,numericBoundaries:2}));
