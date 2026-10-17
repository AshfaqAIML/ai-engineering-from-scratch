const fs = require('fs');
const { execSync } = require('child_process');

// Confirm the CRLF theory: same regex, with and without newline normalization
const p = 'skills/blueprint-figure/SKILL.md';
const raw = fs.readFileSync(p, 'utf8');
const lf = raw.replace(/\r\n/g, '\n');
const re = /^---\n([\s\S]*?)\n---/;
console.log('CRLF as-checked-out :', re.test(raw) ? 'PASS' : 'FAIL');
console.log('after LF normalize  :', re.test(lf) ? 'PASS' : 'FAIL');
console.log('=> frontmatter parse failure is a Windows CRLF artifact:', !re.test(raw) && re.test(lf));