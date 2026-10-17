const { execSync } = require('child_process');
const fs = require('fs');

const list = execSync('git diff --diff-filter=A --name-only a56b4b8a origin/main -- phases/', { maxBuffer: 64 * 1024 * 1024 })
  .toString().split(/\r?\n/).map(s => s.trim()).filter(Boolean);

console.log(`Porting ${list.length} curriculum files...`);

const BATCH = 60;
let ok = 0, fail = 0;
const failed = [];

for (let i = 0; i < list.length; i += BATCH) {
  const chunk = list.slice(i, i + BATCH);
  try {
    execSync(`git checkout origin/main -- ${chunk.map(p => `"${p}"`).join(' ')}`, { stdio: 'pipe', maxBuffer: 64 * 1024 * 1024 });
    ok += chunk.length;
  } catch (e) {
    for (const p of chunk) {
      try { execSync(`git checkout origin/main -- "${p}"`, { stdio: 'pipe' }); ok++; }
      catch { fail++; failed.push(p); }
    }
  }
}

console.log(`OK: ${ok}, FAILED: ${fail}`);
failed.slice(0, 20).forEach(f => console.log('  FAIL ' + f));