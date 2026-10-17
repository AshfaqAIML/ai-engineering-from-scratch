const fs = require('fs');
const { execSync } = require('child_process');

const upIndex = execSync('git show origin/main:site/index.html', { maxBuffer: 64 * 1024 * 1024 }).toString();

// Extract the intelligence-check <aside> block (with its <noscript>)
const start = upIndex.indexOf('<aside class="intelligence-check"');
if (start < 0) throw new Error('intelligence-check aside not found upstream');
const endTag = '</aside>';
const end = upIndex.indexOf(endTag, start) + endTag.length;
const block = upIndex.slice(start, end);

console.log(`Extracted intelligence-check block: ${block.length} bytes, ${block.split('\n').length} lines`);

const p = 'site/index.html';
let html = fs.readFileSync(p, 'utf8');
let changed = [];

// 1. CSS link in <head>
if (!html.includes('intelligence-check.css')) {
  html = html.replace(
    '<link rel="stylesheet" href="style.css',
    '<link rel="stylesheet" href="intelligence-check.css">\n<link rel="stylesheet" href="style.css'
  );
  changed.push('intelligence-check.css');
}

// 2. Insert the aside right after the masthead-install-caption
const anchor = /(<p class="masthead-install-caption[^>]*>[\s\S]*?<\/p>)/;
if (!anchor.test(html)) throw new Error('masthead-install-caption anchor not found');
html = html.replace(anchor, `$1\n\n        ${block.replace(/\n/g, '\n        ')}`);
changed.push('intelligence-check markup');

// 3. JS before </body>
if (!html.includes('intelligence-check.js')) {
  html = html.replace('</body>', '  <script src="intelligence-check.js" defer></script>\n</body>');
  changed.push('intelligence-check.js');
}

fs.writeFileSync(p, html, 'utf8');
console.log('index.html updated:', changed.join(', '));