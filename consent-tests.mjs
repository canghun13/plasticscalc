import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync('assets/js/site.js','utf8');
function run(initialConsent){const appended=[];let banner;const store=new Map(initialConsent?[['plasticscalc-analytics-consent',initialConsent]]:[]);const makeElement=tag=>({tag,style:{},dataset:{},setAttribute(){},addEventListener(type,fn){this[`on${type}`]=fn},remove(){this.removed=true}});const document={readyState:'complete',head:{append(el){appended.push(el)}},body:{append(el){banner=el}},querySelector(){return null},createElement:makeElement,addEventListener(){}};const window={location:{hostname:'plasticscalc.com'}};const localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)};const context={document,window,localStorage,console,Map};vm.createContext(context);vm.runInContext(source,context);return{appended,banner,store,context}}
const before=run();if(before.appended.some(x=>x.tag==='script'))throw Error('GA4 loaded before consent');if(!before.banner?.onclick)throw Error('Consent choices were not rendered');before.banner.onclick({target:{dataset:{choice:'granted'}}});if(before.appended.filter(x=>x.tag==='script').length!==1)throw Error('GA4 did not load after acceptance');
const denied=run('denied');if(denied.appended.some(x=>x.tag==='script')||denied.banner)throw Error('GA4 or banner appeared after stored decline');
const granted=run('granted');if(granted.appended.filter(x=>x.tag==='script').length!==1)throw Error('GA4 did not load after stored acceptance');
console.log({consentTests:'passed'});
