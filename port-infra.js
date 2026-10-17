const { execSync } = require('child_process');
const fs = require('fs');

// Port infrastructure dirs needed by upstream's vercel.json / build pipeline
const dirs = ['api', 'lib'];

dirs.forEach(d => {
  try {
    execSync(`git checkout origin/main -- ${d}`, { stdio: 'pipe' });
    console.log(`OK: ${d}/`);
  } catch (e) {
    console.log(`FAIL: ${d}/ -> ${e.message.split('\n')[0]}`);
  }
});