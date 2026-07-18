import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const read = file => readFileSync(file, 'utf8');
const write = (file, html) => writeFileSync(file, html);
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

for (const file of readdirSync('tools/injection-molding').filter(file => file.endsWith('.html') && file !== 'index.html')) {
  const path = join('tools/injection-molding', file);
  let html = read(path);
  html = html.replace(/<h2>Formula and method<\/h2>([\s\S]*?)<h2>Inputs and units<\/h2>([\s\S]*?)<h2>Worked example<\/h2>([\s\S]*?)(?=<h2>[^<]+<\/h2>)/, '<div class="calc-reference-grid"><section class="reference-block reference-method"><h2>Formula and method</h2>$1</section><section class="reference-block reference-inputs"><h2>Inputs and units</h2>$2</section><section class="reference-block reference-example"><h2>Worked example</h2>$3</section></div>');
  html = html.replace(/<h2>([^<]+)<\/h2>([\s\S]*?)<h2>([^<]+)<\/h2>([\s\S]*?)<h2>([^<]+)<\/h2>([\s\S]*?)<h2>(Interpretation, assumptions, and limitations)<\/h2>([\s\S]*?)(?=<h2>FAQ)/, '<div class="calc-decision-grid"><section class="decision-block"><h2>$1</h2>$2</section><section class="decision-block"><h2>$3</h2>$4</section><section class="decision-block decision-caution"><h2>$5</h2>$6</section><section class="decision-block decision-limits"><h2>$7</h2>$8</section></div>');
  html = html.replace(/<h2>FAQ<\/h2>([\s\S]*?)<h2>Related calculators<\/h2>([\s\S]*?)(?=<\/section>)/, '<div class="calc-bottom-grid"><section class="bottom-block bottom-faq"><h2>FAQ</h2>$1</section><section class="bottom-block bottom-related"><h2>Related calculators</h2>$2</section></div>');
  write(path, html);
}

for (const file of readdirSync('guides').filter(file => file.endsWith('.html') && file !== 'index.html')) {
  const path = join('guides', file);
  let html = read(path);
  html = html.replace(/<article class="wrap section">([\s\S]*?)<\/article>/, (_, content) => {
    const sections = content.replace(/<h2>([^<]+)<\/h2>([\s\S]*?)(?=<h2>|$)/g, (_, heading, body) => `<section class="guide-section guide-${slug(heading)}"><h2>${heading}</h2>${body}</section>`);
    return `<article class="wrap section guide-layout">${sections}</article>`;
  });
  write(path, html);
}

for (const path of ['about.html', 'privacy.html', 'disclaimer.html', 'contact.html']) {
  let html = read(path);
  html = html.replace(/<article class="wrap section">([\s\S]*?)<\/article>/, (_, content) => {
    const leading = content.match(/^<h1>[\s\S]*?<\/p>/)?.[0] || '';
    const remainder = content.slice(leading.length);
    const sections = remainder.replace(/<h2>([^<]+)<\/h2>([\s\S]*?)(?=<h2>|$)/g, (_, heading, body) => `<section class="reading-section reading-${slug(heading)}"><h2>${heading}</h2>${body}</section>`);
    return `<article class="wrap section reading-layout">${leading}${sections}</article>`;
  });
  write(path, html);
}

let materials = read('tools/materials/index.html');
materials = materials.replace(/<section class="wrap section"><div class="grid">([\s\S]*?)<\/div><h2>Reference density: verify the exact grade<\/h2>([\s\S]*?)<\/section><section class="wrap section wash">/, '<section class="wrap section materials-workbench"><div class="materials-main"><p class="workspace-label">Start here</p><h2>Weight and resin cost</h2><div class="grid">$1</div></div><aside class="materials-reference"><h2>Reference density: verify the exact grade</h2>$2</aside></section><section class="wrap section wash materials-followup">');
write('tools/materials/index.html', materials);
