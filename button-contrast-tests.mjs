import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const css=readFileSync('assets/css/site.css','utf8');
const root=css.match(/:root\{([^}]+)\}/)[1];
const variables=Object.fromEntries([...root.matchAll(/(--[\w-]+):([^;]+)/g)].map(([,key,value])=>[key,value]));
const resolve=value=>value.startsWith('var(')?variables[value.slice(4,-1)]:value;
const declarations=selector=>Object.fromEntries(css.match(new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\{([^}]+)\\}'))[1].split(';').filter(Boolean).map(item=>{const at=item.indexOf(':');return [item.slice(0,at),item.slice(at+1)]}));
const linear=v=>{v/=255;return v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4};
const luminance=hex=>{const n=Number.parseInt(hex.slice(1),16);return .2126*linear(n>>16)+.7152*linear(n>>8&255)+.0722*linear(n&255)};
const contrast=(a,b)=>(Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
const normal=declarations('.button,button'),hover=declarations('.button:hover,button:hover');
assert.equal(resolve(normal.background),'#e35e2b','Brand background must not change to hide the contrast failure.');
assert.equal(normal.font,'800 .75rem/1 var(--mono)','Do not enlarge labels to use the large-text exception.');
assert.equal(normal['min-height'],'42px');assert.equal(normal.padding,'10px 15px');
const normalRatio=contrast(resolve(normal.color),resolve(normal.background));
const hoverRatio=contrast(resolve(hover.color),resolve(hover.background));
const filmFocus=declarations('.film-testing-page .calc-controls button[type="submit"]:focus-visible');
const filmFocusRatio=contrast('#fffdf7',resolve(filmFocus.background));
assert.ok(filmFocusRatio>=4.5,'Film inline focus text is white and needs a dark focused surface.');
for(const slug of ['dart-impact-failure-weight','film-coefficient-of-friction','film-tensile-strength','flexible-package-seal-strength','plastic-film-haze']){
  const html=readFileSync(`tools/film-testing/${slug}.html`,'utf8');
  assert.ok(html.includes('.film-testing-page .calc-controls button:hover,.film-testing-page .calc-controls button:focus-visible{color:#fffdf7}'),'Match the actual Film template focus-color override.');
}
assert.ok(normalRatio>=4.5,`Default small button text contrast ${normalRatio}`);
assert.ok(hoverRatio>=4.5,`Hover small button text contrast ${hoverRatio}`);
// A literal independent failing control catches accidentally reversing the gate.
assert.ok(contrast('#fffdf7','#e35e2b')<4.5);
assert.ok(contrast('#17201e','#e35e2b')>4.5);
assert.ok(css.includes('.secondary{background:transparent!important;color:var(--carbon)!important;'));
assert.ok(readFileSync('assets/css/scrap-rate.css','utf8').includes('button[type="submit"]{background:var(--signal-dark);color:var(--white)}'));
console.log(JSON.stringify({status:'passed',normalRatio,hoverRatio,filmFocusRatio,filmPages:5,literalControls:2,layoutAndOverrideGuards:true}));
