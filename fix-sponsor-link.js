const fs = require('fs');
const path = require('path');

const dir = 'site';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let n = 0;

files.forEach(f => {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, 'utf8');
  const before = s;

  // Upstream test expects the literal footer link: <a href="sponsors.html">Sponsor us</a>
  s = s.replace(/<a href="sponsors">Sponsors<\/a>/g, '<a href="sponsors.html">Sponsor us</a>');

  if (s !== before) { fs.writeFileSync(p, s, 'utf8'); n++; }
});

console.log(`normalized sponsor footer link in ${n} pages`);

// Verify the literal upstream test token now exists somewhere in the footer of each page
const missing = files.filter(f => {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!s.includes('footer-links')) return false;
  return !s.includes('<a href="sponsors.html">Sponsor us</a>');
});
console.log(`pages with a footer but no "Sponsor us" link: ${missing.length}${missing.length ? ' -> ' + missing.join(', ') : ''}`);