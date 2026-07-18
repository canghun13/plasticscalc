import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const path = join(dir, entry.name);
  return entry.isDirectory() && entry.name !== '.git' ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
});

const issues = [];
for (const file of htmlFiles(root)) {
  const html = readFileSync(file, 'utf8');
  const name = relative(root, file).replaceAll('\\', '/');
  const visibleText = html.replace(/<[^>]*>/g, ' ');

  if (/\.html\s*">/i.test(visibleText)) issues.push(`${name}: HTML href fragment is visible as text`);
  if (/(?:href|src)\s*=\s*["']?[^\s<]+/i.test(visibleText)) issues.push(`${name}: attribute-like text is visible outside a tag`);
  if (/\uFFFD/.test(html)) issues.push(`${name}: replacement-character encoding error`);

  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const id of new Set(ids.filter((id, index) => ids.indexOf(id) !== index))) issues.push(`${name}: duplicate id "${id}"`);

  let anchorDepth = 0;
  for (const match of html.matchAll(/<[^>]*>/g)) {
    const tag = match[0];
    if (/^<a\b/i.test(tag)) {
      if (anchorDepth) issues.push(`${name}: nested <a> tag`);
      anchorDepth += 1;
      if (!/\bhref\s*=\s*(["'])[^"']*\1/i.test(tag)) issues.push(`${name}: <a> tag has a missing or unquoted href`);
    } else if (/^<\/a\s*>/i.test(tag)) {
      anchorDepth -= 1;
      if (anchorDepth < 0) { issues.push(`${name}: closing </a> without an opening <a>`); anchorDepth = 0; }
    }
    if ((tag.match(/"/g) || []).length % 2) issues.push(`${name}: unbalanced double quote in ${tag.slice(0, 80)}`);
  }
  if (anchorDepth) issues.push(`${name}: unclosed <a> tag`);
}

const materials = readFileSync(join(root, 'tools', 'materials', 'index.html'), 'utf8');
for (const [slug, label] of [['resin-weight', 'Resin Weight Calculator'], ['material-cost', 'Material Cost Per Part Calculator']]) {
  const expected = `<a href="/tools/injection-molding/${slug}.html">${label}</a>`;
  if (!materials.includes(expected)) issues.push(`tools/materials/index.html: missing complete ${label} anchor`);
}

if (issues.length) {
  console.error(JSON.stringify({ htmlPages: htmlFiles(root).length, status: 'failed', issues }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ htmlPages: htmlFiles(root).length, status: 'passed', checks: ['visible-attribute-leaks', 'anchor-balance', 'anchor-quoting', 'duplicate-ids', 'encoding-replacement'] }));
