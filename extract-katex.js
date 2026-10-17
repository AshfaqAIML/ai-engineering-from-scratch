const fs = require('fs');
const { execSync } = require('child_process');

const up = execSync('git show origin/main:site/lesson.html', { maxBuffer: 64 * 1024 * 1024 }).toString();
const lines = up.split(/\r?\n/);

// Block A: KATEX constants + loadKatex (lines 4420..4454 1-indexed)
const blockA = lines.slice(4419, 4454).join('\n');

// Block B: renderMathBlocks function - find its start and brace-balanced end
const rbIdx = lines.findIndex(l => /function renderMathBlocks\(root\)/.test(l));
if (rbIdx < 0) throw new Error('renderMathBlocks not found');
let depth = 0, started = false, rbEnd = rbIdx;
for (let i = rbIdx; i < lines.length; i++) {
  for (const ch of lines[i]) {
    if (ch === '{') { depth++; started = true; }
    else if (ch === '}') depth--;
  }
  if (started && depth === 0) { rbEnd = i; break; }
}
const blockB = lines.slice(rbIdx, rbEnd + 1).join('\n');
console.log(`blockA (katex loader): ${blockA.split('\n').length} lines`);
console.log(`blockB (renderMathBlocks): ${blockB.split('\n').length} lines`);

// Call site: where renderMathBlocks(article) is invoked
const callSite = lines.findIndex(l => /renderMathBlocks\(article\)/.test(l));
console.log(`call site line: ${callSite + 1}`);

// CSS rule for .katex
const cssIdx = up.indexOf('.lesson-article .katex {');
let cssBlock = '';
if (cssIdx >= 0) {
  const endIdx = up.indexOf('}', cssIdx) + 1;
  cssBlock = up.slice(cssIdx, endIdx);
  console.log(`css: ${cssBlock.split('\n').length} lines`);
}

fs.writeFileSync(process.env.TEMP + '\\katex-blocks.json', JSON.stringify({
  blockA, blockB, cssBlock, callSiteLine: callSite + 1
}, null, 0));
console.log('saved to TEMP\\katex-blocks.json');