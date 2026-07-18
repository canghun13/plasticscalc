import { readdir, readFile, writeFile } from 'node:fs/promises';

// Keep the generated static pages on the current shared stylesheet after a CSS release.
const CSS_RELEASE = '20260718-width-1';
async function findHtmlFiles(directory = '.') {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = directory === '.' ? entry.name : `${directory}/${entry.name}`;
    if (entry.isDirectory() && !['.git', 'assets', 'node_modules'].includes(entry.name)) {
      files.push(...await findHtmlFiles(path));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path);
    }
  }
  return files;
}

const htmlFiles = await findHtmlFiles();

for (const file of htmlFiles) {
  const source = await readFile(file, 'utf8');
  const updated = source.replace(/site\.css\?v=[^"']+/g, `site.css?v=${CSS_RELEASE}`);
  if (updated !== source) await writeFile(file, updated);
}
