import {readFileSync,writeFileSync} from'node:fs';

const path='tools/injection-molding/parts-per-hour.html';
let html=readFileSync(path,'utf8');
if(!html.includes('data-calculator="parts-per-hour"'))throw Error('Parts Per Hour target page was not found.');

const replaceRequired=(from,to)=>{
  if(html.includes(to))return;
  if(!html.includes(from))throw Error(`Required Parts Per Hour source text is missing: ${from.slice(0,70)}`);
  html=html.replaceAll(from,to);
};

html=html.replace(/\/assets\/css\/site\.css\?v=[^"]+/, '/assets/css/site.css?v=20260925-parts-hour-1');
html=html.replace(/\/assets\/js\/calculators\.js(?:\?v=[^"]+)?/, '/assets/js/calculators.js?v=20260925-parts-hour-1');

replaceRequired(
  'Calculate injection molding production output from cycle time.',
  'Calculate theoretical injection molding parts per minute and hour from cycle time and active cavities.'
);
replaceRequired(
  'Hourly output = 3,600 ÷ cycle time × cavities × planned uptime.',
  'Theoretical parts per hour = 3,600 ÷ cycle time × active cavities.'
);
replaceRequired(
  'Enter measured or specified values in the displayed units. Keep units consistent; results are rounded for practical planning. This first release uses the displayed engineering units rather than a unit-switcher.',
  'Enter the measured mold-to-mold cycle in seconds and the number of cavities that produce a part on every cycle. Use a stopwatch, machine cycle record, or the Cycle Time Calculator for the time; use the current mold setup for active cavities.'
);
replaceRequired(
  '3,600 ÷ 30 s × 4 cavities × 90% uptime = <strong>432 parts/hour</strong>.',
  '3,600 ÷ 30 s × 4 active cavities = <strong>480 parts/hour</strong> (8 parts/minute from 120 cycles/hour).'
);

const decisionStart=html.indexOf('<div class="calc-decision-grid">');
const pageEnd=html.indexOf('</section></main>',decisionStart);
if(decisionStart<0||pageEnd<0)throw Error('Parts Per Hour decision content markers are missing.');
const decisionContent='<div class="calc-decision-grid"><section class="decision-block"><h2>Start with a stable, defined cycle</h2><p>Measure one complete mold-to-mold cycle, including fill, pack, cooling, mold motion, ejection, and any automation that controls the next cycle. Use the <a href="/tools/injection-molding/cycle-time.html">Cycle Time Calculator</a> when those steps must be assembled.</p></section><section class="decision-block"><h2>Count active cavities, not nominal positions</h2><p>Enter only cavities actually producing parts on every cycle. A blocked or disabled cavity does not contribute to parts per cycle, even if it remains in the mold layout.</p></section><section class="decision-block decision-caution"><h2>Keep theoretical and effective output separate</h2><p>This tool reports the continuous mechanical rate. Apply time loss with <a href="/tools/injection-molding/machine-utilization.html">Machine Utilization</a> or <a href="/tools/injection-molding/oee-capacity.html">OEE Capacity</a>, quality loss with <a href="/tools/injection-molding/scrap-adjusted-output.html">Scrap-Adjusted Output</a>, and shift duration with <a href="/tools/injection-molding/parts-per-shift.html">Parts Per Shift</a>.</p></section><section class="decision-block decision-limits"><h2>Interpretation, assumptions, and limitations</h2><div class="notice">The rate assumes uninterrupted cycling at the entered time and one part from every active cavity on every cycle. It excludes planned and unplanned downtime, microstops, speed loss, startup loss, rejected parts, and downstream constraints.</div></section></div><div class="calc-bottom-grid"><section class="bottom-block bottom-faq"><h2>FAQ</h2><h3>Is this actual good-part output?</h3><p>No. It is the theoretical rate at the entered cycle and active-cavity count. Downtime, slower running, and rejects require separate measured assumptions.</p></section><section class="bottom-block bottom-related"><h2>Continue the capacity workflow</h2><p><a href="/tools/injection-molding/cycle-time.html">Cycle Time</a> · <a href="/tools/injection-molding/machine-utilization.html">Machine Utilization</a> · <a href="/tools/injection-molding/oee-capacity.html">OEE Capacity</a> · <a href="/tools/injection-molding/scrap-adjusted-output.html">Scrap-Adjusted Output</a> · <a href="/tools/injection-molding/parts-per-shift.html">Parts Per Shift</a></p></section></div>';
html=`${html.slice(0,decisionStart)}${decisionContent}${html.slice(pageEnd)}`;

writeFileSync(path,html);
