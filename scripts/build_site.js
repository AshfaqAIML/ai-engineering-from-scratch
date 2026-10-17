#!/usr/bin/env node
/**
 * Full site build pipeline, in dependency order.
 * Referenced by vercel.json buildCommand so the command stays under
 * Vercel's 256-character projectSettings limit.
 *
 *   1. translation coverage  -> site/translation-coverage.json
 *   2. build                 -> data.js, hubs, SEO manifests, glossary term
 *                               pages, phase hubs, sitemap, llms.txt, OG cards
 *   3. certification data    -> site/certification-data.js (fork addition)
 *   4. projects              -> site/projects-data.js
 *   5. agents                -> agent resources + Markdown mirrors
 *   6. manuals               -> manual pages from manuals/*.md
 *   7. clean urls            -> extensionless route surfaces
 *   8. version assets        -> cache-busting ?v= hashes on HTML
 */
const { execFileSync } = require('child_process');
const path = require('path');

const repoRoot = path.join(__dirname, '..');

const STEPS = [
  ['site/fetch-translation-coverage.js', []],
  ['site/build.js', []],
  ['scripts/build_certification_data.js', []],
  ['site/build-projects.js', ['--strict']],
  ['site/build-agents.js', []],
  ['site/build-manuals.js', []],
  ['site/clean-urls.js', []],
  ['site/version-assets.js', []],
];

for (const [script, args] of STEPS) {
  const label = path.basename(script);
  process.stdout.write(`\n▶ ${label} ${args.join(' ')}\n`);
  execFileSync(process.execPath, [script, ...args], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
}

process.stdout.write('\n✅ site build pipeline complete\n');