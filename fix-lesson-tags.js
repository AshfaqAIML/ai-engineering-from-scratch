const fs = require('fs');

const p = 'site/lesson.html';
let html = fs.readFileSync(p, 'utf8');
const before = html.length;
const notes = [];

// 1. certifications.css in <head>
if (!/href="certifications\.css/.test(html)) {
  html = html.replace(
    '<link rel="stylesheet" href="style.css',
    '<link rel="stylesheet" href="certifications.css?v=20260925a">\n<link rel="stylesheet" href="style.css'
  );
  notes.push('certifications.css');
}

// 2. Remove the legacy individual figures-*.js script tags
const legacyRe = /^\s*<script src="figures-[^"]+"[^>]*><\/script>\r?\n/gm;
const legacyCount = (html.match(legacyRe) || []).length;
html = html.replace(legacyRe, '');
if (legacyCount) notes.push(`removed ${legacyCount} legacy figures-*.js tags`);

// 3. Add lesson-figures.js + figure-manifest.js where legacy tags used to start
if (!html.includes('lesson-figures.js')) {
  const anchor = /(\s*<script src="header\.js[^"]*"[^>]*><\/script>)/;
  if (anchor.test(html)) {
    html = html.replace(anchor,
      '$1\n  <script src="lesson-figures.js"></script>\n  <script src="figure-manifest.js"></script>');
    notes.push('lesson-figures.js + figure-manifest.js');
  }
}

// 4. content-source.js + lesson-markdown.js (lesson markdown rendering)
if (!html.includes('content-source.js')) {
  const anchor2 = /(\s*<script src="data\.js[^"]*"[^>]*><\/script>)/;
  if (anchor2.test(html)) {
    html = html.replace(anchor2,
      '$1\n  <script src="content-source.js"></script>\n  <script src="lesson-markdown.js" defer></script>');
    notes.push('content-source.js + lesson-markdown.js');
  }
}

fs.writeFileSync(p, html, 'utf8');
console.log(`lesson.html: ${before} -> ${html.length} bytes`);
console.log('changes:', notes.length ? notes.join(' | ') : 'NONE');