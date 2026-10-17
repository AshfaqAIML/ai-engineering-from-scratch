const fs = require('fs');

function insertMarkers(file, pairs) {
  let html = fs.readFileSync(file, 'utf8');
  const notes = [];

  pairs.forEach(({ container, start, end, desc }) => {
    if (html.includes(start)) { notes.push(`${desc}: already present`); return; }

    // Insert the marker pair right after the opening container tag
    const re = new RegExp(`(<${container}\\b[^>]*>)`);
    if (!re.test(html)) { notes.push(`${desc}: CONTAINER NOT FOUND (${container})`); return; }

    html = html.replace(re, `$1\n  ${start}\n  ${end}`);
    notes.push(`${desc}: markers inserted after <${container}>`);
  });

  fs.writeFileSync(file, html, 'utf8');
  return notes;
}

const a = insertMarkers('site/catalog.html', [
  {
    container: 'tbody id="catalogBody"',
    start: '<!-- GENERATED:LESSON-DISCOVERY:START -->',
    end: '<!-- GENERATED:LESSON-DISCOVERY:END -->',
    desc: 'catalog lesson-discovery'
  }
]);

const b = insertMarkers('site/certifications.html', [
  {
    container: 'section class="cert-container cert-section" aria-labelledby="tracksTitle"',
    start: '<!-- GENERATED:CERTIFICATION-DISCOVERY:START -->',
    end: '<!-- GENERATED:CERTIFICATION-DISCOVERY:END -->',
    desc: 'certifications discovery'
  }
]);

[...a, ...b].forEach(n => console.log('  ' + n));