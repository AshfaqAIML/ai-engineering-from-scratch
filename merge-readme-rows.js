const fs = require('fs');
const { execSync } = require('child_process');

const upReadme = execSync('git show origin/main:README.md', { maxBuffer: 64 * 1024 * 1024 }).toString();
const mine = fs.readFileSync('README.md', 'utf8');

// Collect upstream lesson-table rows, keyed by phase dir + lesson slug
const rowRe = /^\|\s*(\d+)\s*\|\s*\[([^\]]+)\]\((phases\/[^)]+\/)\)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*$/gm;
const upRows = new Map();
let m;
while ((m = rowRe.exec(upReadme))) {
  upRows.set(m[3].replace(/\/$/, ''), { num: m[1], title: m[2], dir: m[3], type: m[4], lang: m[5] });
}
console.log(`upstream lesson rows parsed: ${upRows.size}`);

// Which of those are missing from the fork's README?
const mineRowRe = /^\|\s*(\d+)\s*\|\s*\[([^\]]+)\]\((phases\/[^)]+\/)\)/gm;
const mineDirs = new Set();
while ((m = mineRowRe.exec(mine))) mineDirs.add(m[3].replace(/\/$/, ''));

const missing = [...upRows.keys()].filter(d => !mineDirs.has(d));
console.log(`rows missing from fork README: ${missing.length}`);
missing.forEach(d => {
  const r = upRows.get(d);
  console.log(`  ${r.dir} | ${r.title} | ${r.type} | ${r.lang}`);
});

if (!missing.length) { console.log('nothing to add'); process.exit(0); }

// Group missing rows by phase directory and insert after the last existing row of that phase
const byPhase = new Map();
missing.forEach(d => {
  const phase = d.split('/').slice(0, 2).join('/');
  if (!byPhase.has(phase)) byPhase.set(phase, []);
  byPhase.get(phase).push(upRows.get(d));
});

let out = mine;
let inserted = 0;

for (const [phase, rows] of byPhase) {
  // find the phase's table block: all rows whose link dir starts with phase + '/'
  const lines = out.split('\n');
  const rowIdx = [];
  for (let i = 0; i < lines.length; i++) {
    const mm = lines[i].match(/^\|\s*(\d+)\s*\|\s*\[([^\]]+)\]\((phases\/[^)]+)\)/);
    if (mm && mm[3].startsWith(phase + '/')) rowIdx.push(i);
  }
  if (!rowIdx.length) { console.log(`  no rows found for phase ${phase}, skipping ${rows.length}`); continue; }

  const insertAt = rowIdx[rowIdx.length - 1] + 1;
  const newLines = rows.map(r =>
    `| ${r.num} | [${r.title}](${r.dir}) | ${r.type} | ${r.lang} |`);

  lines.splice(insertAt, 0, ...newLines);
  out = lines.join('\n');
  inserted += newLines.length;
  console.log(`  + ${newLines.length} row(s) into ${phase}`);
}

fs.writeFileSync('README.md', out, 'utf8');
console.log(`\ninserted ${inserted} README lesson rows`);