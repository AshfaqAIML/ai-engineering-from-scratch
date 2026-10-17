const fs = require('fs');
const { execSync } = require('child_process');

const tests = fs.readdirSync('site').filter(f => /^test_.*\.js$/.test(f)).sort();

const crlfPattern = /(^---\\n|frontmatter|split\('\\n'\))/;
const symlinkPattern = /EPERM|symlink/;

tests.forEach(t => {
  let out = '';
  let code = 0;
  try {
    out = execSync(`node site/${t}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024 });
  } catch (e) {
    code = e.status || 1;
    out = (e.stdout || '') + (e.stderr || '');
  }
  if (code === 0) return;

  const firstErr = (out.split(/\r?\n/).find(l => /Error:|AssertionError/.test(l)) || '').trim();
  let cause = 'OTHER';
  if (/EPERM|symlink/i.test(out)) cause = 'ENV:windows-symlink';
  else if (/no frontmatter|orphaned ui-strings|missing ### /i.test(firstErr)) cause = 'CRLF-or-content';
  console.log(`${t}\n   [${cause}] ${firstErr.slice(0, 120)}`);
});