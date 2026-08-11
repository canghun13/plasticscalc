import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const expectedLinks = [
  ['/tools/', 'Tool index'],
  ['/tools/injection-molding/', 'Injection molding'],
  ['/tools/materials/', 'Materials'],
  ['/guides/', 'Field guides'],
  ['/about.html', 'Method'],
  ['/contact.html', 'Contact']
];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? htmlFiles(join(directory, entry.name))
    : entry.name.endsWith('.html') ? [join(directory, entry.name)] : []));
  return nested.flat();
}

const files = await htmlFiles(root);
assert.equal(files.length, 82, 'Expected all 82 published HTML files.');
for (const file of files) {
  const html = await readFile(file, 'utf8');
  assert.match(html, /<button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-navigation">MENU<\/button>/, `${file}: MENU button markup`);
  const nav = html.match(/<nav class="nav" id="primary-navigation" aria-label="Primary">([\s\S]*?)<\/nav>/);
  assert.ok(nav, `${file}: primary navigation id`);
  assert.equal((html.match(/id="primary-navigation"/g) || []).length, 1, `${file}: one primary navigation id`);
  const links = [...nav[1].matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map(([, href, label]) => [href, label]);
  assert.deepEqual(links, expectedLinks, `${file}: unchanged menu order and URLs`);
}

const [css, js] = await Promise.all([
  readFile(join(root, 'assets/css/site.css'), 'utf8'),
  readFile(join(root, 'assets/js/site.js'), 'utf8')
]);
assert.match(css, /@media\(max-width:800px\).*\.menu-toggle/s, 'Mobile menu uses the existing 800px breakpoint.');
assert.match(css, /@media\(min-width:801px\)\{\.menu-toggle\{display:none\}\}/, 'Desktop hides MENU button.');
for (const token of ['initMobileNavigation', "event.key==='Escape'", "event.target.closest('.site-header')", "window.matchMedia('(min-width:801px)'"]) {
  assert.ok(js.includes(token), `Mobile navigation behavior includes ${token}.`);
}
console.log(`mobile-header-tests: ${files.length} pages passed`);
