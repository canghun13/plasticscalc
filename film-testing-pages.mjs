import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {dirname} from 'node:path';

const domain='https://plasticscalc.com';
const hub='/tools/film-testing/';
const nav='<a href="/tools/">Tool index</a><a href="/tools/injection-molding/">Injection molding</a><a href="/tools/materials/">Materials</a><a href="/guides/">Field guides</a><a href="/about.html">Method</a><a href="/contact.html">Contact</a>';
const footer='<footer class="site-footer"><div class="wrap"><div><strong>PlasticsCalc</strong><p>Plastics processing calculators and reference notes for first-pass engineering work.</p></div><div><p><a href="/contact.html">Contact</a> &middot; <a href="/privacy.html">Privacy</a> &middot; <a href="/disclaimer.html">Engineering disclaimer</a> &middot; <a href="/about.html">Method</a></p><p class="small">&copy; 2026 PlasticsCalc &mdash; estimates require material, equipment, process, and product validation.</p></div></div></footer>';
const escapeJson=value=>JSON.stringify(value).replace(/</g,'\\u003c');

function page(path,title,description,h1,body,type='WebPage'){
  const url=`${domain}/${path.replace(/index.html$/,'')}`;
  const json=escapeJson({'@context':'https://schema.org','@type':type,name:h1,url});
  const crumb=path==='tools/film-testing/index.html'
    ? '<a href="/">Home</a> / <a href="/tools/">Tools</a> / '
    : '<a href="/">Home</a> / <a href="/tools/">Tools</a> / <a href="/tools/film-testing/">Film testing</a> / ';
  const scripts=type==='SoftwareApplication'?'<script defer src="/assets/js/film-testing-calculators.js"></script>':'';
  const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><link rel="canonical" href="${url}"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><meta property="og:url" content="${url}"><link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/css/site.css?v=20260901-film-test-1"><style>.film-testing-page .calc-controls button{color:#132235}.film-testing-page .calc-controls button:hover,.film-testing-page .calc-controls button:focus-visible{color:#fffdf7}</style><script type="application/ld+json">${json}</script><script defer src="/assets/js/site.js?v=20260901-film-test-1"></script>${scripts}</head><body class="film-testing-page"><header class="site-header"><div class="wrap top"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">PC</span><span class="brand-type"><strong>PlasticsCalc</strong><small>Engineering reference desk</small></span></a><button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-navigation">MENU</button><nav class="nav" id="primary-navigation" aria-label="Primary">${nav}</nav></div></header><main><div class="wrap crumb">${crumb}${h1}</div>${body}</main>${footer}</body></html>`;
  mkdirSync(dirname(path),{recursive:true});
  writeFileSync(path,html);
}

const astm882='<a href="https://store.astm.org/d0882-18.html">ASTM D882: Tensile Properties of Thin Plastic Sheeting</a>';
const astm1894='<a href="https://store.astm.org/standards/d1894">ASTM D1894: Static and Kinetic Coefficients of Friction</a>';
const astmF88='<a href="https://store.astm.org/f0088_f0088m-21.html">ASTM F88/F88M: Seal Strength of Flexible Barrier Materials</a>';
const astm1003='<a href="https://store.astm.org/d1003-00.html">ASTM D1003: Haze and Luminous Transmittance</a>';
const astm1709='<a href="https://store.astm.org/d1709-16.html">ASTM D1709: Impact Resistance of Plastic Film by the Free-Falling Dart Method</a>';

const tools=[
  {
    id:'film-tensile-strength',title:'Plastic Film Tensile Strength & Elongation Calculator',description:'Reduce thin plastic film tensile force, width, thickness, gauge length, and extension to tensile strength and elongation at break.',
    question:'What stress and elongation correspond to this thin-film tensile specimen?',
    formula:'Original cross-section (mm²) = width (mm) × thickness (µm) ÷ 1,000. Tensile strength (MPa) = maximum force (N) ÷ original cross-section (mm²). Elongation (%) = extension at break ÷ initial gauge length × 100.',
    inputs:'Enter the specimen width and average thickness represented by the test strip, the initial gauge length, maximum tensile force, and extension at break. Keep machine direction or transverse direction, specimen type, test speed, conditioning, grip separation, and failure location with the record.',
    example:'A 15 mm-wide, 50 µm-thick strip with 50 mm gauge length, 30 N maximum force, and 40 mm extension gives <strong>40 MPa</strong> tensile strength and 80% elongation.',
    use:'Use after a thin-film tensile pull to check data reduction, normalize force for specimen section, or compare repeated specimens on one documented test basis.',
    interpret:'MPa is numerically equal to N/mm². Compare results only within the same material direction, specimen geometry, conditioning, strain-rate, gripping, and result definition. Keep individual replicates and failure observations.',
    limits:'This arithmetic does not correct for thickness variation, grip slippage, breaks at the jaw, preload, machine compliance, strain measurement method, anisotropy, or yield-versus-break definitions. It does not determine conformance.',
    validation:'Verify width and thickness with calibrated devices, confirm the gauge basis used by the extension channel, reject or flag invalid break locations under the governing procedure, and independently reproduce one specimen calculation.',
    faq:'Can I compare machine-direction and transverse-direction results directly?',answer:'Treat them as separate populations. Film orientation often makes direction a primary part of the test identity.',sources:astm882
  },
  {
    id:'film-coefficient-of-friction',title:'Plastic Film Coefficient of Friction Calculator',description:'Calculate static and kinetic coefficient of friction from plastic-film sled mass, initial peak force, and average sliding force.',
    question:'What static and kinetic COF correspond to the recorded sled and pulling forces?',
    formula:'Normal force (N) = sled mass (kg) × 9.80665 m/s². Static COF = initial peak force ÷ normal force. Kinetic COF = average sliding force ÷ normal force.',
    inputs:'Enter the total moving sled mass and the force channel values for initial peak and defined sliding average. Document both contacting surfaces, test direction, conditioning, contact time, travel speed, travel interval, apparatus geometry, and whether the interface is film-to-film or film-to-another surface.',
    example:'A 200 g sled with 0.588399 N initial peak and 0.392266 N sliding average gives <strong>0.3 static COF</strong> and 0.200 kinetic COF.',
    use:'Use to reduce a recorded film friction trace for incoming-film checks, converting or packaging trials, and same-method lot or treatment comparisons.',
    interpret:'COF is dimensionless. Static and kinetic values answer different handling questions; retain both. A result is meaningful only with the complete surface pairing and test condition.',
    limits:'The calculation does not remove stick-slip, misalignment, curling, contamination, blocking, electrostatic, speed, dwell, or conditioning effects. Local gravity convention and apparatus friction may be handled differently by a lab procedure.',
    validation:'Check sled mass, load-cell zero and calibration, level and alignment, specimen orientation, surface identity, and the averaging interval. Run the required replicates and inspect the force trace rather than retaining only one number.',
    faq:'Does lower COF always mean better packaging performance?',answer:'No. The desired range depends on feeding, winding, stacking, sealing, printing, product retention, and the specific contacting surfaces.',sources:astm1894
  },
  {
    id:'flexible-package-seal-strength',title:'Flexible Package Seal Strength Calculator',description:'Normalize maximum and average flexible-package peel force to N/mm and the common N/15 mm reporting basis.',
    question:'What normalized peak and average seal strengths correspond to this peel specimen?',
    formula:'Seal strength (N/mm) = peel force (N) ÷ specimen width (mm). N/15 mm result = seal strength (N/mm) × 15 mm.',
    inputs:'Enter the measured specimen width, maximum peel force, and the average force for the defined region of the seal trace. Keep sealing conditions, specimen orientation, test technique, unsupported tail length, separation rate, conditioning, and failure mode with the result.',
    example:'A 15 mm specimen with 8.4 N maximum and 6.6 N average force gives <strong>8.4 N/15 mm</strong> peak and 6.6 N/15 mm average seal strength.',
    use:'Use after a flexible-package seal pull to normalize differently cut specimen widths or to verify laboratory/exported spreadsheet arithmetic.',
    interpret:'Peak and average values are not interchangeable. Pair the normalized number with the failure mode because peel, cohesive rupture, material tear, elongation, and grip effects can produce different meaning.',
    limits:'Normalization does not make different test techniques or materials equivalent. The tool does not select a seal-window target, remove machine dynamics, identify seal leaks, or approve package integrity.',
    validation:'Measure the actual cut width, confirm force units and the averaging region, review the curve and failure mode, preserve every valid replicate, and follow the current governing procedure for specimen preparation and reporting.',
    faq:'Why show both N/mm and N/15 mm?',answer:'N/mm is a direct width normalization; N/15 mm is common in flexible-packaging records. Keeping both makes conversions explicit without changing the underlying force trace.',sources:astmF88
  },
  {
    id:'plastic-film-haze',title:'Plastic Film Haze & Transmittance Calculator',description:'Calculate corrected haze and total luminous transmittance from four integrating-sphere photometric readings.',
    question:'What corrected haze and total transmittance follow from these four instrument readings?',
    formula:'Total transmittance ratio = T2 ÷ T1. Corrected diffuse ratio = [T4 − T3 × (T2 ÷ T1)] ÷ T1. Haze (%) = corrected diffuse ratio ÷ total transmittance ratio × 100.',
    inputs:'Enter T1 incident light, T2 specimen total light, T3 instrument scatter, and T4 specimen-plus-instrument scatter from one qualified instrument sequence. Values may be raw readings or consistently normalized readings on the same scale.',
    example:'T1 = 100, T2 = 92, T3 = 0.5, and T4 = 4 gives <strong>3.85% haze</strong> and 92% total luminous transmittance.',
    use:'Use to independently reduce four-channel integrating-sphere measurements for clear or translucent film and sheet QC or trial comparisons.',
    interpret:'Haze is the corrected diffuse share of transmitted light; total transmittance is the share of incident light transmitted. Keep the instrument geometry, illuminant/observer basis, specimen condition, surface direction, and thickness with the result.',
    limits:'The result is only as valid as the instrument sequence and calibration. This tool does not substitute for a haze meter, correct scratched or contaminated specimens, handle every instrument architecture, or establish appearance acceptance.',
    validation:'Confirm the instrument procedure and calibration, clean and orient specimens consistently, repeat measurements across representative positions, and reject any nonphysical result before reporting.',
    faq:'Can I enter percentages instead of raw instrument readings?',answer:'Yes, if all four entries use the same scale and retain the required relationships. Do not mix raw counts and percentages.',sources:astm1003
  },
  {
    id:'dart-impact-failure-weight',title:'Plastic Film Dart Impact Failure Weight Calculator',description:'Check five-level successive-group dart-impact arithmetic for the estimated plastic-film mass at 50% failure.',
    question:'What 50% failure mass follows from five equal successive specimen groups?',
    formula:'Highest level WL = lowest level + 4 × increment. Sum S = failure percentages at all five levels. Estimated failure mass WF = WL − increment × (S ÷ 100 − 0.5).',
    inputs:'Enter the lowest missile mass, uniform mass increment, equal specimens per level, and failures at five ascending mass levels. This screen requires zero failures at level 1, all failures at level 5, whole-number counts, and nondecreasing failures.',
    example:'Five groups of 10 specimens at 100, 120, 140, 160, and 180 g with 0, 2, 5, 8, and 10 failures give <strong>140 g</strong> estimated 50% failure mass.',
    use:'Use to verify arithmetic for a completed alternative successive-group series when the laboratory method or specification calls for this design.',
    interpret:'The result estimates the missile mass producing 50% failure on the entered method and conditioning basis. Keep dart geometry, drop configuration, specimen thickness, failure definition, conditioning, and group data.',
    limits:'This is not the staircase calculation and does not design an efficient test series, supply a confidence interval, replace method-specific rounding, or approve compliance. Five levels are intentionally fixed for an auditable screen.',
    validation:'Confirm equal group sizes and increments, verify the bounding zero- and 100%-failure groups, check every specimen disposition, reproduce the sum of percentages, and apply the current laboratory procedure for final reporting.',
    faq:'Can I use staircase up-and-down observations here?',answer:'No. Staircase data use a different sequence and reduction. This calculator is explicitly limited to five equal successive groups.',sources:astm1709
  }
];

page('tools/film-testing/index.html','Plastic Film & Flexible Packaging Test Calculators | PlasticsCalc','Free vendor-neutral calculators for film tensile, coefficient of friction, seal strength, haze and transmittance, and dart impact test data reduction.','Plastic Film & Flexible Packaging Test Calculators',`<section class="hero"><div class="wrap"><p class="eyebrow">Plastic film · Laboratory data reduction</p><h1>Plastic Film &amp; Flexible Packaging Test Calculators</h1><p class="lead">Reduce five common sets of measured film and flexible-package test readings without a spreadsheet template, login, or equipment quote. These tools check arithmetic; your current method, laboratory SOP, and product specification still govern the test.</p></div></section><section class="wrap section"><header><p class="eyebrow">Five independent test records</p><h2>Turn measured force, motion, light, and impact observations into reviewable results.</h2></header><ol class="workflow-map">${tools.map((tool,index)=>`<li><span class="workflow-step">${String(index+1).padStart(2,'0')}</span><div><strong>${tool.question}</strong><p>${tool.description}</p></div><div class="workflow-next"><span>Tool</span><a href="/tools/film-testing/${tool.id}.html">${tool.title}</a></div></li>`).join('')}</ol></section><section class="wrap section"><h2>Keep the complete test basis</h2><p>Record the exact material and lot, thickness and direction, conditioning, specimen preparation, apparatus and calibration, method revision, test settings, raw observations, invalid specimens, failure mode, replicate results, and acceptance specification. A correct calculation cannot repair an unrepresentative specimen or an invalid test.</p><p>Reference foundation: ${astm882} · ${astm1894} · ${astmF88} · ${astm1003} · ${astm1709}.</p></section>`);

for(const tool of tools){
  page(`tools/film-testing/${tool.id}.html`,`${tool.title} | PlasticsCalc`,tool.description,tool.title,`<section class="hero"><div class="wrap"><p class="eyebrow">Plastic film · Laboratory data reduction</p><h1>${tool.title}</h1><p class="lead">${tool.description}</p></div></section><section class="wrap section"><div class="calculator" data-calculator="${tool.id}"></div><div class="calc-reference-grid"><section class="reference-block reference-method"><h2>Formula and method</h2><p class="formula">${tool.formula}</p></section><section class="reference-block reference-inputs"><h2>Inputs and units</h2><p>${tool.inputs}</p></section><section class="reference-block reference-example"><h2>Worked example</h2><p>${tool.example}</p></section></div><div class="calc-decision-grid"><section class="decision-block"><h2>When to use it</h2><p>${tool.use}</p></section><section class="decision-block"><h2>How to interpret the result</h2><p>${tool.interpret}</p></section><section class="decision-block decision-limits"><h2>Assumptions and limitations</h2><p>${tool.limits}</p></section><section class="decision-block"><h2>Validation guidance</h2><p>${tool.validation}</p></section></div><div class="calc-bottom-grid"><section class="bottom-block bottom-faq"><h2>FAQ</h2><h3>${tool.faq}</h3><p>${tool.answer}</p><h2>Sources</h2><p>${tool.sources}</p></section><section class="bottom-block bottom-related"><h2>Related workflow</h2><p><a href="${hub}">Film &amp; flexible-packaging test hub</a> · ${tools.filter(other=>other.id!==tool.id).slice(0,3).map(other=>`<a href="/tools/film-testing/${other.id}.html">${other.title}</a>`).join(' · ')}</p></section></div></section>`,'SoftwareApplication');
}

function insertBeforeMain(path,marker,html){
  const current=readFileSync(path,'utf8');
  if(current.includes(marker))return;
  if(!current.includes('</main>'))throw Error(`${path}: missing </main>`);
  writeFileSync(path,current.replace('</main>',`${html}</main>`));
}
insertBeforeMain('index.html','data-film-testing-cluster-link',`<section class="wrap section" data-film-testing-cluster-link><p class="eyebrow">New laboratory workstation</p><h2><a href="${hub}">Plastic Film &amp; Flexible Packaging Test Calculators</a></h2><p>Reduce thin-film tensile, surface friction, seal peel, haze and transmittance, and five-level dart-impact measurements on a documented test basis.</p></section>`);
insertBeforeMain('tools/index.html','data-film-testing-cluster-link',`<section class="wrap section" data-film-testing-cluster-link><p class="eyebrow">Film laboratory data</p><h2><a href="${hub}">Film &amp; Flexible Packaging Test Calculators</a></h2><p>Five independent tools for tensile and elongation, static and kinetic friction, normalized seal strength, corrected haze, and dart-impact failure weight.</p></section>`);
insertBeforeMain('tools/materials/index.html','data-film-testing-cluster-link',`<section class="wrap section" data-film-testing-cluster-link><h2>Connect material identity to measured film performance</h2><p>Carry the exact grade, lot, thickness, orientation, conditioning, and specimen preparation into the <a href="${hub}">Film &amp; Flexible Packaging Test Calculators</a>. Do not compare reduced values without the full test basis.</p></section>`);

let sitemap=readFileSync('sitemap.xml','utf8');
for(const path of ['tools/film-testing/index.html',...tools.map(tool=>`tools/film-testing/${tool.id}.html`)]){
  const url=`${domain}/${path.replace(/index.html$/,'')}`;
  if(!sitemap.includes(`<loc>${url}</loc>`))sitemap=sitemap.replace('</urlset>',`  <url><loc>${url}</loc></url>\n</urlset>`);
}
writeFileSync('sitemap.xml',sitemap);
