const { execSync } = require('child_process');

const htmlFiles = [
  'site/index.html', 'site/about.html', 'site/glossary.html', 'site/catalog.html',
  'site/lesson.html', 'site/learning-paths.html', 'site/assessment.html',
  'site/certification.html', 'site/certifications.html'
];

const tagRe = /<(script[^>]*src=["']([^"']+)["'][^>]*>|link[^>]*href=["']([^"']+\.css[^"']*)["'][^>]*>)/gi;

htmlFiles.forEach(f => {
  let up, mine;
  try {
    up = execSync(`git show origin/main:${f}`, { maxBuffer: 64 * 1024 * 1024 }).toString();
  } catch { return; }
  try {
    mine = require('fs').readFileSync(f, 'utf8');
  } catch { return; }

  const upTags = [...up.matchAll(tagRe)].map(m => m[2] || m[3]);
  const myTags = [...mine.matchAll(tagRe)].map(m => m[2] || m[3]);

  // strip version query for comparison
  const norm = t => t.split('?')[0];
  const mineSet = new Set(myTags.map(norm));

  const missing = [...new Set(upTags.map(norm))].filter(t => !mineSet.has(t));
  const extra = [...new Set(myTags.map(norm))].filter(t => !upTags.map(norm).includes(t));

  if (missing.length || extra.length) {
    console.log(`\n=== ${f} ===`);
    if (missing.length) console.log(`  MISSING (upstream has): ${missing.join(', ')}`);
    if (extra.length) console.log(`  EXTRA (fork has): ${extra.join(', ')}`);
  }
});