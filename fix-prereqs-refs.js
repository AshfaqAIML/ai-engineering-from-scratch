const fs = require('fs');
const path = require('path');

const dir = 'site';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js'));
let total = 0;
const touched = [];

files.forEach(f => {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, 'utf8');
  const before = (s.match(/prereqs\.html/g) || []).length;
  if (!before) return;

  // Preserve /prereqs (the route) - only rewrite the .html filename
  s = s.replace(/prereqs\.html/g, 'roadmap.html');
  fs.writeFileSync(p, s, 'utf8');
  total += before;
  touched.push(`${f} (${before})`);
});

console.log(`replaced ${total} prereqs.html -> roadmap.html in ${touched.length} files:`);
touched.forEach(t => console.log('  ' + t));