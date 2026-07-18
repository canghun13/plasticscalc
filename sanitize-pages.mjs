import {readdirSync,readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(join(d,x.name)):[join(d,x.name)]);
const fixes=[['횞',' &times; '],['첨',' &divide; '],['쨌',' &middot; '],['짼','<sup>2</sup>'],['쨀','<sup>3</sup>'],['째','&deg;'],['?셲',"'s"],['?봭',' — '],['?봟',' — '],['?봵',' — '],['?쐓','"'],['??',' − ']];
for(const file of walk('.').filter(x=>x.endsWith('.html'))){let html=readFileSync(file,'utf8');for(const [from,to]of fixes)html=html.split(from).join(to);html=html.replace(/[\uFFFD]/g,'');writeFileSync(file,html)}
