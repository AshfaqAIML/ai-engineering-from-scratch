const fs = require('fs');
const path = require('path');

// New upstream pages to surface in nav + footer
const NEW_PAGES = [
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'blogs', label: 'Blogs' },
  { href: 'how-to-learn', label: 'How to Learn' },
  { href: 'inside-an-ai-agent', label: 'Inside an AI Agent' },
  { href: 'sponsors', label: 'Sponsors' },
  { href: 'manuals', label: 'Manuals' },
];

const dir = 'site';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const report = [];

files.forEach(f => {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, 'utf8');
  const added = [];

  // 1. Drawer nav (#siteNav): add after the About link, before the GitHub link
  const navAnchor = /(\n(\s*)<a href="about(?:\.html)?(?:[^"]*)"[^>]*>About<\/a>)/;
  if (navAnchor.test(s) && !s.includes('>Skills</a>')) {
    const indent = s.match(navAnchor)[2];
    const links = NEW_PAGES.map(np => `${indent}<a href="${np.href}">${np.label}</a>`).join('\n');
    s = s.replace(navAnchor, `$1\n${links}`);
    added.push('nav');
  }

  // 2. Footer links: append before </div> that closes .footer-links
  if (s.includes('footer-links') && !/footer[\s\S]*?>Skills</.test(s)) {
    const footRe = /(<div class="footer-links">)([\s\S]*?)(<\/div>)/;
    const m = s.match(footRe);
    if (m) {
      const indentM = m[2].match(/\n(\s*)/);
      const ind = indentM ? indentM[1] : '        ';
      const links = NEW_PAGES.map(np => `${ind}<a href="${np.href}">${np.label}</a>`).join('\n');
      s = s.replace(footRe, `$1$2\n${links}\n${ind.slice(0, -2)}$3`);
      added.push('footer');
    }
  }

  if (added.length) {
    fs.writeFileSync(p, s, 'utf8');
    report.push(`${f}: ${added.join('+')}`);
  }
});

console.log(`updated ${report.length} pages:`);
report.forEach(r => console.log('  ' + r));