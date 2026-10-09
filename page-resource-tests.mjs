import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
const walk=directory=>readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.name==='.git'?[]:entry.isDirectory()?walk(join(directory,entry.name)):[join(directory,entry.name)]);
const pages=walk('.').filter(file=>file.endsWith('.html'));
for(const file of pages){
  const head=readFileSync(file,'utf8').split('</head>')[0];
  const icons=[...head.matchAll(/<link\b[^>]*rel="icon"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal(icons.length,1,`${file}: missing/duplicate favicon; browser may request absent /favicon.ico`);
  assert.equal(icons[0][1],'/assets/icons/favicon.svg');
  assert.ok(existsSync('.'+icons[0][1]),`${file}: missing favicon resource`);
}
assert.ok(readFileSync('thermal-pages.mjs','utf8').includes('<link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml">'),'thermal generator must preserve icon');
console.log(JSON.stringify({status:'passed',faviconPages:pages.length}));
