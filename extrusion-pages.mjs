import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {dirname} from 'node:path';

const domain='https://plasticscalc.com';
const hub='/tools/extrusion/';
const nav='<a href="/tools/">Tool index</a><a href="/tools/injection-molding/">Injection molding</a><a href="/tools/materials/">Materials</a><a href="/guides/">Field guides</a><a href="/about.html">Method</a><a href="/contact.html">Contact</a>';
const footer='<footer class="site-footer"><div class="wrap"><div><strong>PlasticsCalc</strong><p>Plastics processing calculators and reference notes for first-pass engineering work.</p></div><div><p><a href="/contact.html">Contact</a> &middot; <a href="/privacy.html">Privacy</a> &middot; <a href="/disclaimer.html">Engineering disclaimer</a> &middot; <a href="/about.html">Method</a></p><p class="small">&copy; 2026 PlasticsCalc &mdash; estimates require material, equipment, process, and product validation.</p></div></div></footer>';
const owner='';
const escapeJson=value=>JSON.stringify(value).replace(/</g,'\\u003c');

function page(path,title,description,h1,body,type='WebPage'){
  const url=`${domain}/${path.replace(/index.html$/,'')}`;
  const json=escapeJson({'@context':'https://schema.org','@type':type,name:h1,url});
  const crumb=path==='tools/extrusion/index.html'
    ? '<a href="/">Home</a> / <a href="/tools/">Tools</a> / '
    : '<a href="/">Home</a> / <a href="/tools/">Tools</a> / <a href="/tools/extrusion/">Extrusion</a> / ';
  const scripts=type==='SoftwareApplication'?'<script defer src="/assets/js/extrusion-calculators.js"></script>':'';
  const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><link rel="canonical" href="${url}"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><meta property="og:url" content="${url}"><link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/css/site.css?v=20260826-extrusion-1"><script type="application/ld+json">${json}</script><script defer src="/assets/js/site.js?v=20260826-extrusion-1"></script>${scripts}</head><body><header class="site-header"><div class="wrap top"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">PC</span><span class="brand-type"><strong>PlasticsCalc</strong><small>Engineering reference desk</small></span></a><button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-navigation">MENU</button><nav class="nav" id="primary-navigation" aria-label="Primary">${nav}</nav></div></header><main><div class="wrap crumb">${crumb}${h1}</div>${body}</main>${footer}${owner}</body></html>`;
  mkdirSync(dirname(path),{recursive:true});
  writeFileSync(path,html);
}

const speOutput='<a href="https://extrusion.4spe.org/wp-content/uploads/2019/01/EH-V22-3-H.pdf">SPE Extrusion Division: Output Calculations</a>';
const speSheet='<a href="https://extrusion.4spe.org/wp-content/uploads/2019/01/Vol25-03-09-Estimating-flow-rate-of-a-continuous-sheet-line-SPE-Extrusion-Division-1-0-Wiki.pdf">SPE Extrusion Division: Estimating Flow Rate of a Continuous Sheet Line</a>';
const spePlanning='<a href="https://extrusion.4spe.org/wp-content/uploads/2019/01/Vol22-03-01-Planning-the-Extrusion-Line-SPE-Extrusion-Division-1-0-Wiki.pdf">SPE Extrusion Division: Planning the Extrusion Line</a>';
const eastman='<a href="https://www.eastman.com/content/dam/eastman/corporate/en/literature/s/spmbs1431.pdf">Eastman: Extrusion of Tubing and Profiles</a>';
const dupont='<a href="https://www.nevicolor.it/produkte/polymer-suchen/dupont/surlyn/documenti/surlyn-extrusion-guide.pdf">DuPont Surlyn Extrusion Guide</a>';
const thermo='<a href="https://documents.thermofisher.com/TFS-Assets/CAD/Application-Notes/LR71-e-Investigating-Process-Parameter-Mechanism.pdf">Thermo Fisher: Residence-Time Distribution in Extrusion</a>';
const davis='<a href="https://davis-standard.com/DS_wordpress/wp-content/uploads/2022/09/EXTRUDER_Euro-Blue_EN.pdf">Davis-Standard Extruder Specifications</a>';

const tools=[
  {
    id:'extrusion-output-test',title:'Extruder Output Test Calculator',description:'Convert a timed, weighed extrudate sample into kg/h and normalized kg/h per screw rpm.',
    question:'What is the extruder actually delivering at this recorded screw speed?',
    formula:'Output (kg/h) = collected mass (kg) × 3,600 ÷ collection time (s). Normalized output = kg/h ÷ screw rpm.',
    inputs:'Collect discharged material for a timed interval after the line is stable. Weigh only the material represented by that interval and record average screw rpm from the same interval.',
    example:'A 4 kg sample collected in 80 s at 50 rpm equals <strong>180 kg/h</strong> and 3.6 kg/h per rpm.',
    use:'Use during a stable output check, feeder verification, screw comparison, or before reconciling extruder output with take-off demand.',
    interpret:'Compare kg/h per rpm only on a documented material, screw, temperature, head-pressure, and feeding basis. A lower normalized result is a prompt to inspect the record; it is not a diagnosis.',
    limits:'The result is an interval average. Surging, startup material, diverted scrap, gear-pump behavior, moisture, and scale or timing error can make a short sample unrepresentative.',
    validation:'Repeat at least three stable intervals, retain each result rather than only the mean, and reconcile total collected mass with the production record.',
    faq:'Why normalize the output by rpm?',answer:'It creates a useful same-line comparison. It does not make different screws, materials, dies, or pressure conditions equivalent.',sources:`${speOutput} · ${davis}`
  },
  {
    id:'extrusion-line-throughput',title:'Extrusion Line Throughput Calculator',description:'Calculate required extrusion mass flow from final product cross-sectional area, solid density, and line speed.',
    question:'How much mass flow must the extruder supply for this product geometry and take-off speed?',
    formula:'Required output (kg/h) = final cross-sectional area (mm²) × line speed (m/min) × solid density (g/cm³) × 0.06.',
    inputs:'Obtain final net cross-sectional area from the drawing or CAD section, measured line speed at the product, and solid density for the exact conditioned grade or a validated product mass-per-length record.',
    example:'A 120 mm² profile at 18 m/min and 0.95 g/cm³ requires <strong>123.12 kg/h</strong>; nominal mass is 0.114 kg/m.',
    use:'Use before line setup to reconcile product geometry and take-off speed with an extruder, feeder, gear pump, cooling, cutter, and winder capacity plan.',
    interpret:'The result is the ideal net product flow. Compare it with measured gross output only after separately accounting for edge trim, startup scrap, coextrusion layers, tolerances, and yield.',
    limits:'The equation assumes a constant final section and density. It does not predict die swell, drawdown, melt pressure, actual extruder capacity, gauge variation, voids, foam expansion, or process stability.',
    validation:'Cut and weigh a known finished length after conditioning. Compare measured mass per metre with the geometric value, then compare a timed gross output test on the same basis.',
    faq:'Should I enter melt density?',answer:'No. This calculation converts the final cooled product section to mass per length, so use the appropriate solid-product density or a measured mass per length.',sources:`${speSheet} · ${spePlanning}`
  },
  {
    id:'extrusion-screw-surface-speed',title:'Extruder Screw Surface Speed Calculator',description:'Convert screw diameter and rpm into screw outside-diameter peripheral speed for setup comparison.',
    question:'What peripheral speed corresponds to this screw diameter and rpm?',
    formula:'Surface speed (m/min) = π × screw diameter (mm) ÷ 1,000 × screw speed (rpm).',
    inputs:'Use the actual screw outside diameter and the controller or tachometer rpm for the defined operating point. Keep screw design, material, torque, melt temperature, and pressure with the record.',
    example:'A 90 mm screw at 100 rpm has a surface speed of <strong>28.27 m/min</strong>.',
    use:'Use when comparing operating points across screw diameters or translating an equipment or scale-up record into a common kinematic quantity.',
    interpret:'Surface speed is one comparison coordinate. Review it alongside specific output, torque, melt temperature, pressure, residence-time behavior, and the equipment maker limit.',
    limits:'This tool does not calculate shear rate, motor load, torque demand, melt temperature, mixing quality, or a safe maximum. Flight geometry and material rheology are not represented.',
    validation:'Confirm actual rpm and screw diameter from machine documentation. Use OEM limits and measured melt/process results before changing speed.',
    faq:'Does the same surface speed reproduce the same process on another extruder?',answer:'No. It preserves one kinematic relationship only; geometry, L/D, specific output, torque, thermal history, and residence-time distribution also matter.',sources:`${davis} · ${thermo}`
  },
  {
    id:'extrusion-residence-time',title:'Extrusion Average Residence Time Calculator',description:'Estimate average material hold-up time from measured system hold-up mass and stable mass flow.',
    question:'How long does one system hold-up equivalent take to pass at this stable output?',
    formula:'Average hold-up time (min) = system material hold-up (kg) ÷ stable output (kg/h) × 60.',
    inputs:'Use a measured or defensible material hold-up for the defined extruder, adapter, screen, pump, die, and downstream melt path, plus stable mass flow from the same operating condition.',
    example:'A documented 12 kg system hold-up at 180 kg/h gives an average hold-up time of <strong>4 min</strong>.',
    use:'Use for a first material-exposure screen, trial planning, scale comparison, or deciding how long to observe after a controlled condition change.',
    interpret:'This is a volume-over-flow mean, not the first material out, last material out, or a residence-time distribution. Dead zones and axial mixing can retain some material far longer.',
    limits:'Do not infer hold-up from barrel swept volume alone. Fill level, screw geometry, starve feeding, leakage flow, adapters, dies, and operating condition change the actual distribution.',
    validation:'Use a small, safe tracer pulse and measured outlet response when residence-time distribution matters. Keep tracer amount and method consistent across comparisons.',
    faq:'Is average residence time enough to approve a heat-sensitive resin?',answer:'No. Confirm the full residence-time distribution, melt temperature, degradation evidence, supplier guidance, and actual product quality.',sources:`${thermo}`
  },
  {
    id:'extrusion-drawdown-ratio',title:'Tube Extrusion Drawdown Ratio Calculator',description:'Compare annular die-exit area with finished tube area for a documented tube or pipe tooling setup.',
    question:'What area drawdown ratio connects this annular die opening to the final tube section?',
    formula:'Area drawdown ratio = (die OD² − tip OD²) ÷ (product OD² − product ID²).',
    inputs:'Measure the die inside opening as die OD, the tip outside diameter, and the final conditioned product OD and ID. Use one length unit for all four diameters.',
    example:'A 12 mm die opening with an 8 mm tip producing 8 mm OD × 6 mm ID tube gives an area drawdown ratio of <strong>2.86:1</strong>.',
    use:'Use when recording an existing tube setup, comparing a planned product/tooling combination, or communicating the geometric basis of a trial.',
    interpret:'Compare the result only with material- and process-specific tooling guidance. The calculator deliberately supplies no universal acceptable range.',
    limits:'The geometric ratio does not predict die swell, melt strength, draw resonance, wall eccentricity, sizing behavior, vacuum response, orientation, or final tolerance capability.',
    validation:'Measure actual die and tip land geometry and conditioned tube dimensions. Confirm wall distribution around the circumference and validate the setup in a controlled trial.',
    faq:'Can this calculator select the die and tip?',answer:'No. It documents one area relationship. Resin-specific extrusion guides, tooling experience, swell, draw balance, sizing, and trial results govern selection.',sources:`${dupont} · ${eastman}`
  },
  {
    id:'extrusion-cooling-length',title:'Extrusion Cooling Path Length Calculator',description:'Convert take-off speed and a trial-based cooling residence time into required in-water or controlled-cooling path length.',
    question:'How much controlled cooling path is needed at this line speed?',
    formula:'Required path length (m) = line speed (m/min) × required cooling residence time (s) ÷ 60.',
    inputs:'Use measured take-off speed and a cooling residence time established from a resin/process trial, heat-transfer analysis, or supplier guidance. Enter usable straight path per pass if considering a multi-pass arrangement.',
    example:'At 8 m/min with 45 s required residence, the controlled cooling path is <strong>6 m</strong>; a 3.5 m usable straight path requires at least two idealized passes.',
    use:'Use for floor-layout screening, cooling-bath or spray-path planning, and assessing the line-speed effect of a validated cooling-time requirement.',
    interpret:'The path is a kinematic requirement. If available path is shorter, reduce speed, improve the validated cooling method, add path, or revisit the product and material plan.',
    limits:'The tool does not calculate the required cooling time or heat-transfer coefficient. Water temperature, agitation, product section, crystallization, sizing contact, air gaps, and handling constraints remain separate.',
    validation:'At the planned speed, verify exit temperature, shape retention, dimensions, surface, crystallinity where relevant, and downstream handling. Re-establish the time after material or section changes.',
    faq:'Can I use the default 45 seconds for any extrusion?',answer:'No. The default is a worked arithmetic example only. Enter a trial- or supplier-supported time for the exact product, material, and cooling system.',sources:`${spePlanning} · ${eastman}`
  }
];

page('tools/extrusion/index.html','Plastic Extrusion Setup & Line Balance Calculators | PlasticsCalc','Free vendor-neutral extrusion calculators for measured output, line throughput, screw surface speed, residence time, drawdown, and cooling path planning.','Plastic Extrusion Setup & Line Balance Calculators',`<section class="hero"><div class="wrap"><p class="eyebrow">Plastic extrusion · Production setup</p><h1>Plastic Extrusion Setup &amp; Line Balance Calculators</h1><p class="lead">Connect a stable output measurement to product demand, screw kinematics, material exposure, tube drawdown, and downstream cooling space. No login, CAD upload, or vendor equipment selection.</p></div></section><section class="wrap section"><header><p class="eyebrow">Six independent decisions</p><h2>Balance the line from measured mass flow to finished product handling.</h2></header><ol class="workflow-map">${tools.map((tool,index)=>`<li><span class="workflow-step">${String(index+1).padStart(2,'0')}</span><div><strong>${tool.question}</strong><p>${tool.description}</p></div><div class="workflow-next"><span>Tool</span><a href="/tools/extrusion/${tool.id}.html">${tool.title}</a></div></li>`).join('')}</ol></section><section class="wrap section"><h2>Use one documented operating basis</h2><p>Keep material grade and condition, screw and die, temperature profile, stable screw rpm, head pressure, mass-flow interval, product dimensions, take-off speed, cooling condition, and product acceptance criteria with every result. These arithmetic tools expose mismatches; they do not invent equipment capability or a universal process window.</p><p>Reference foundation: ${speOutput} · ${speSheet} · ${spePlanning} · ${thermo} · ${dupont} · ${eastman}.</p></section>`);

for(const tool of tools){
  page(`tools/extrusion/${tool.id}.html`,`${tool.title} | PlasticsCalc`,tool.description,tool.title,`<section class="hero"><div class="wrap"><p class="eyebrow">Plastic extrusion · Production setup</p><h1>${tool.title}</h1><p class="lead">${tool.description}</p></div></section><section class="wrap section"><div class="calculator" data-calculator="${tool.id}"></div><div class="calc-reference-grid"><section class="reference-block reference-method"><h2>Formula and method</h2><p class="formula">${tool.formula}</p></section><section class="reference-block reference-inputs"><h2>Inputs and units</h2><p>${tool.inputs}</p></section><section class="reference-block reference-example"><h2>Worked example</h2><p>${tool.example}</p></section></div><div class="calc-decision-grid"><section class="decision-block"><h2>When to use it</h2><p>${tool.use}</p></section><section class="decision-block"><h2>How to interpret the result</h2><p>${tool.interpret}</p></section><section class="decision-block decision-limits"><h2>Assumptions and limitations</h2><p>${tool.limits}</p></section><section class="decision-block"><h2>Validation guidance</h2><p>${tool.validation}</p></section></div><div class="calc-bottom-grid"><section class="bottom-block bottom-faq"><h2>FAQ</h2><h3>${tool.faq}</h3><p>${tool.answer}</p><h2>Sources</h2><p>${tool.sources}</p></section><section class="bottom-block bottom-related"><h2>Related workflow</h2><p><a href="${hub}">Extrusion Setup &amp; Line Balance hub</a> · ${tools.filter(other=>other.id!==tool.id).slice(0,3).map(other=>`<a href="/tools/extrusion/${other.id}.html">${other.title}</a>`).join(' · ')}</p></section></div></section>`,'SoftwareApplication');
}

function insertBeforeMain(path,marker,html){
  const current=readFileSync(path,'utf8');
  if(current.includes(marker)) return;
  if(!current.includes('</main>')) throw Error(`${path}: missing </main>`);
  writeFileSync(path,current.replace('</main>',`${html}</main>`));
}
insertBeforeMain('index.html','data-extrusion-cluster-link',`<section class="wrap section" data-extrusion-cluster-link><p class="eyebrow">New process workstation</p><h2><a href="${hub}">Plastic Extrusion Setup &amp; Line Balance</a></h2><p>Measure actual output, translate final geometry into required throughput, compare screw speed, estimate material exposure, document tube drawdown, and plan cooling path.</p></section>`);
insertBeforeMain('tools/index.html','data-extrusion-cluster-link',`<section class="wrap section" data-extrusion-cluster-link><p class="eyebrow">Plastic extrusion</p><h2><a href="${hub}">Extrusion Setup &amp; Line Balance Calculators</a></h2><p>Six connected tools for actual output, product mass flow, screw surface speed, average residence time, tube drawdown, and cooling-path planning.</p></section>`);
insertBeforeMain('tools/materials/index.html','data-extrusion-cluster-link',`<section class="wrap section" data-extrusion-cluster-link><h2>Carry exact solid density into extrusion line planning</h2><p>Use the grade-specific solid density or a validated product mass-per-length record in the <a href="/tools/extrusion/extrusion-line-throughput.html">Extrusion Line Throughput Calculator</a>. Do not substitute injection-unit melt-density assumptions.</p></section>`);

let sitemap=readFileSync('sitemap.xml','utf8');
for(const path of ['tools/extrusion/index.html',...tools.map(tool=>`tools/extrusion/${tool.id}.html`)]){
  const url=`${domain}/${path.replace(/index.html$/,'')}`;
  if(!sitemap.includes(`<loc>${url}</loc>`)) sitemap=sitemap.replace('</urlset>',`  <url><loc>${url}</loc></url>\n</urlset>`);
}
writeFileSync('sitemap.xml',sitemap);
