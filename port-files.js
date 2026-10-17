const { execSync } = require('child_process');
const fs = require('fs');

const list = fs.readFileSync(process.env.TEMP + '\\upstream-added.txt', 'utf8')
  .split(/\r?\n/)
  .map(s => s.trim())
  .filter(Boolean);

console.log(`Porting ${list.length} files from origin/main...`);

const BATCH = 40;
let ok = 0, fail = 0;
const failed = [];

for (let i = 0; i < list.length; i += BATCH) {
  const chunk = list.slice(i, i + BATCH);
  try {
    execSync(`git checkout origin/main -- ${chunk.map(p => `"${p}"`).join(' ')}`, { stdio: 'pipe' });
    ok += chunk.length;
  } catch (e) {
    // retry individually
    for (const p of chunk) {
      try {
        execSync(`git checkout origin/main -- "${p}"`, { stdio: 'pipe' });
        ok++;
      } catch (e2) {
        fail++;
        failed.push(p);
      }
    }
  }
}

console.log(`OK: ${ok}, FAILED: ${fail}`);
if (failed.length) {
  console.log('Failed files:');
  failed.slice(0, 30).forEach(f => console.log('  ' + f));
}