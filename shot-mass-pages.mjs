import { readFileSync, writeFileSync } from 'node:fs';

// Finalize only the calculator, guide and existing handoff for this workflow.
const toolPath = 'tools/injection-molding/shot-size.html';
const guidePath = 'guides/shot-size-and-barrel-capacity.html';
const hubPath = 'tools/injection-molding/index.html';
const oldDescription = 'Calculate injection molding shot weight including cavities, runner, and cushion.';
const shotDescription = 'Calculate molded injection shot weight from cavity parts and the cold runner or sprue, with a separate planning allowance.';
const replace = (html, before, after) => {
  if (html.includes(after)) return html;
  if (!html.includes(before)) throw new Error(`Missing shot-mass source: ${before}`);
  return html.replaceAll(before, after);
};
let tool = readFileSync(toolPath, 'utf8');
tool = tool.replace(/src="\/assets\/js\/calculators\.js(?:\?[^"]*)?"/, 'src="/assets/js/calculators.js?v=20261124-shot-1"');
for (const [before, after] of [
  [oldDescription, shotDescription],
  ['<strong>Cushion</strong><span>A stated process allowance, not scrap</span>', '<strong>Planning allowance</strong><span>Separate estimate, not ejected mass or measured screw cushion</span>'],
  ['Shot mass includes all cavity parts, runner/sprue, and the selected cushion.', 'Molded shot mass = part mass × active cavities + ejected cold runner/sprue mass. Planning mass = molded shot mass × (1 + allowance ÷ 100).'],
  ['(45 g × 4 cavities + 12 g runner) × 1.10 cushion allowance = <strong>211.2 g</strong>.', '45 g × 4 cavities + 12 g runner = <strong>192 g molded shot mass</strong>. A 10% illustrative allowance adds 19.2 g, giving <strong>211.2 g planning mass</strong>.'],
  ['Record cushion as a process assumption rather than treating it as scrap.', 'Weigh runner and sprue together once. Use the same part mass only for identical active cavities. A planning allowance is optional; the default 10% illustrates the arithmetic and is not a recommended setting.'],
  ['The calculated shot must be greater than total molded part mass because it includes runner mass and cushion. If it is not, a mass or cavity input has been omitted.', 'If no cold feed is ejected, enter 0 g runner/sprue and the molded shot equals the total part mass. Use molded shot mass for per-cycle material accounting. Confirm actual screw cushion separately on the machine; it is residual melt, not material ejected each cycle.'],
  ['It may remove cold-runner scrap, but the injection unit still needs a documented shot and cushion. Confirm the actual system and process with the mold documentation.', 'Only enter zero cold feed if none is ejected. Some hot-runner molds still have a cold sub-runner or sprue. Check the actual mold and verify screw cushion separately.']
]) tool = replace(tool, before, after);

let guide = readFileSync(guidePath, 'utf8');
for (const [before, after] of [
  ['Add every cavity’s part mass, cold runner and sprue mass, then consider the process cushion. A hot-runner job may have little runner scrap, but it still needs a documented shot mass and a stable cushion.', 'Sum the mass of every molded part and any cold runner or sprue ejected that cycle. If no cold feed is ejected, the molded shot equals the sum of the part masses. Keep any estimating allowance separate from this material balance.'],
  ['Shot mass = (part weight × cavities + runner weight) × (1 + cushion)', 'Molded shot mass = total cavity part mass + ejected cold runner/sprue mass'],
  ['A stable cushion supports packing control; its suitable value depends on the machine, screw, material, and validated process.', 'The screw cushion is residual melt ahead of the screw after injection, not ejected mass. Check it as a separate machine measurement. A percentage estimating allowance is not a cushion setting. See the <a href="https://www.moldmasters.com/sites/default/files/2021-11/ENG%20TP%20UM.pdf">Mold-Masters glossary</a>.']
]) guide = replace(guide, before, after);

let hub = replace(readFileSync(hubPath, 'utf8'), oldDescription, shotDescription);
hub = replace(hub, 'Build mass from cavities, cold runner or sprue, and cushion; identify the resin and machine rating basis.', 'Sum the cavity parts and ejected cold runner or sprue. Keep the planning allowance, physical screw cushion, resin and machine rating basis separate.');

writeFileSync(toolPath, tool);
writeFileSync(guidePath, guide);
writeFileSync(hubPath, hub);
