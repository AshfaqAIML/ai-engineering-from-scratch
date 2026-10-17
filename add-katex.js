const fs = require('fs');
const { execSync } = require('child_process');

const { blockA, blockB, cssBlock } = JSON.parse(
  fs.readFileSync(process.env.TEMP + '\\katex-blocks.json', 'utf8'));

const up = execSync('git show origin/main:site/lesson.html', { maxBuffer: 64 * 1024 * 1024 }).toString();
const upLines = up.split(/\r?\n/);
// context line before the call site, to anchor the same insertion in the fork
const callIdx = upLines.findIndex(l => /renderMathBlocks\(article\)/.test(l));
const anchorCtx = upLines.slice(callIdx - 4, callIdx + 2).join('\n');

const p = 'site/lesson.html';
let s = fs.readFileSync(p, 'utf8');
const notes = [];

if (!s.includes('KATEX_BASE')) {
  // 1. Insert loader + renderer before the main lesson script closes.
  //    Anchor on the same neighbouring statement upstream uses.
  const lines = s.split('\n');
  // place right before the line that renders figures, else before the last </script>
  let insertAt = lines.findIndex(l => /AIFS_loadFigureProviders/.test(l));
  if (insertAt < 0) {
    for (let i = lines.length - 1; i >= 0; i--) {
      if (/^\s*<\/script>\s*$/.test(lines[i])) { insertAt = i; break; }
    }
  }
  lines.splice(insertAt, 0, blockA, '', blockB);
  s = lines.join('\n');
  notes.push(`inserted katex loader + renderMathBlocks at line ${insertAt + 1}`);
}

// 2. Invoke renderMathBlocks(article) after the article is rendered.
//    Fork renders the article then loads figure providers; match that shape.
if (!/renderMathBlocks\(article\)/.test(s) && s.includes('KATEX_BASE')) {
  const providerRe = /(var assetPromise = window\.AIFS_loadFigureProviders[\s\S]*?window\.AIFS_loadFigureProviders\(article\)[\s\S]*?: Promise\.resolve\(\[\]\);)/;
  if (providerRe.test(s)) {
    s = s.replace(providerRe, '$1\n    renderMathBlocks(article);');
    notes.push('added renderMathBlocks(article) call');
  } else {
    notes.push('WARN: could not find figure-provider anchor for the call');
  }
}

// 3. KaTeX CSS rule
if (cssBlock && !s.includes('.lesson-article .katex {')) {
  const styleAnchor = /(<\/style>)/;
  if (styleAnchor.test(s)) {
    s = s.replace(styleAnchor, `${cssBlock}\n  $1`);
    notes.push('added .katex css rule');
  }
}

fs.writeFileSync(p, s, 'utf8');
notes.forEach(n => console.log('  ' + n));
console.log('has CDN url:', s.includes('cdn.jsdelivr.net/npm/katex'));