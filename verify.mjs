import {existsSync,readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(x=>x.name==='.git'?[]:x.isDirectory()?walk(join(d,x.name)):[join(d,x.name)]);
const files=walk('.').filter(x=>x.endsWith('.html'));const titles=new Set(),canonicals=new Set(),issues=[];
for(const file of files){const html=readFileSync(file,'utf8');const title=html.match(/<title>([^<]+)/)?.[1];const canonical=html.match(/rel="canonical" href="([^"]+)/)?.[1];if(!title||!canonical||titles.has(title)||canonicals.has(canonical))issues.push(`metadata: ${file}`);titles.add(title);canonicals.add(canonical);for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]+)/g)){let target='.'+match[1];if(match[1].endsWith('/'))target+='index.html';if(!existsSync(target))issues.push(`${file} -> ${match[1]}`)}}
console.log({htmlPages:files.length,uniqueTitles:titles.size,uniqueCanonicals:canonicals.size,issues});if(issues.length)process.exit(1);
