const fs = require('fs');
const p = 'site/certifications.js';
let s = fs.readFileSync(p, 'utf8');

// Match both quote styles and any attribute prefix
const before = (s.match(/'lesson\?path=/g) || []).length + (s.match(/"lesson\?path=/g) || []).length;

s = s.replace(/'lesson\?path=/g, "'lesson.html?path=");
s = s.replace(/"lesson\?path=/g, '"lesson.html?path=');
s = s.replace(/'certification\?path=/g, "'certification.html?path=");
s = s.replace(/"certification\?path=/g, '"certification.html?path=');

fs.writeFileSync(p, s, 'utf8');
console.log(`rewrote ${before} lesson hrefs to .html form`);
console.log(`remaining bare 'lesson?path= : ${(s.match(/'lesson\?path=/g) || []).length}`);
console.log(`now has 'lesson.html?path= : ${(s.match(/'lesson\.html\?path=/g) || []).length}`);