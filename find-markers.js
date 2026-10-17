const fs = require('fs');
const { execSync } = require('child_process');

// Discover every GENERATED marker pair build.js needs, plus where upstream puts it
const buildSrc = fs.readFileSync('site/build.js', 'utf8');
const constRe = /const\s+([A-Z_]+_(?:START|END))\s*=\s*'([^']+)'/g;
const markers = {};
let m;
while ((m = constRe.exec(buildSrc))) markers[m[1]] = m[2];

const needed = Object.entries(markers).filter(([k, v]) => v.includes('GENERATED:'));
console.log('build.js needs these marker pairs:');
needed.forEach(([k, v]) => console.log(`  ${k} = ${v}`));

// Which markers are already satisfied?
const files = fs.readdirSync('site').filter(f => f.endsWith('.html'));
const present = new Set();
files.forEach(f => {
  const src = fs.readFileSync('site/' + f, 'utf8');
  needed.forEach(([, v]) => { if (src.includes(v)) present.add(v); });
});

const missing = needed.filter(([, v]) => !present.has(v));
console.log('\nMISSING markers:');
missing.forEach(([k, v]) => console.log(`  ${k}: ${v}`));

// For each missing marker, find upstream's host file + surrounding context
if (missing.length) {
  console.log('\n=== upstream placement for missing markers ===');
  files.forEach(f => {
    let up;
    try { up = execSync(`git show origin/main:site/${f}`, { maxBuffer: 64 * 1024 * 1024 }).toString(); }
    catch { return; }
    missing.forEach(([, v]) => {
      const idx = up.indexOf(v);
      if (idx < 0) return;
      const start = up.lastIndexOf('\n', Math.max(0, idx - 400));
      const before = up.slice(start, idx).trim().split('\n').slice(-4).map(s => s.trim());
      console.log(`\n${v}\n  host: site/${f}`);
      before.forEach(b => console.log(`    ...${b.slice(0, 88)}`));
    });
  });
}