#!/usr/bin/env node
/*
 * build_certification_data.js
 *
 * Generates site/certification-data.js (the `const CERTIFICATIONS = ...` global)
 * from the certification manifests under certifications/.
 *
 * This is a focused extract of the certification-data pipeline in upstream
 * site/build.js. It intentionally emits ONLY certification-data.js so the fork
 * can ship the upstream certification pages (certifications.html,
 * certification.html, assessment.html) without adopting upstream's conflicting
 * data.js / markdown-first schema or overwriting our auth/dashboard frontend.
 *
 * Source: certifications/claude/program.json, tracks/*.json, lessons/, assessments/
 *
 * Run:   node scripts/build_certification_data.js
 * Output: site/certification-data.js (tracked; rebuilt by CI)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const REPO_ROOT = path.resolve(__dirname, '..');
const SITE_DIR = path.join(REPO_ROOT, 'site');
const CERTIFICATIONS_PATH = path.join(REPO_ROOT, 'certifications');
const CERTIFICATION_OUTPUT_PATH = path.join(SITE_DIR, 'certification-data.js');

function readJson(filePath, label) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    throw new Error(`Could not read ${label || path.relative(REPO_ROOT, filePath)}: ${err.message}`);
  }
}

function safeRepoPath(relPath, baseDir) {
  if (!relPath || typeof relPath !== 'string') return null;
  const candidate = path.resolve(baseDir || REPO_ROOT, relPath);
  const rootWithSep = REPO_ROOT.endsWith(path.sep) ? REPO_ROOT : REPO_ROOT + path.sep;
  if (candidate !== REPO_ROOT && !candidate.startsWith(rootWithSep)) return null;
  return candidate;
}

function certificationDocMeta(markdown, fallbackName) {
  const result = {
    name: fallbackName || '',
    summary: '',
    keywords: '',
    type: 'Learn',
    languages: '',
    prerequisites: '',
    time: '',
  };
  const headings = [];
  for (const raw of String(markdown || '').split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith('# ') && !result.name) result.name = line.slice(2).trim();
    if (line.startsWith('# ')) result.name = line.slice(2).trim();
    if (!result.summary && line.startsWith('> ')) result.summary = line.slice(2).trim();
    if (line.startsWith('### ')) headings.push(line.slice(4).trim());
    const field = line.match(/^\*\*(Type|Languages|Prerequisites|Time):\*\*\s*(.+)$/i);
    if (field) {
      const key = field[1].toLowerCase();
      if (key === 'type') result.type = field[2].trim();
      else result[key] = field[2].trim();
    }
  }
  result.keywords = headings.filter(Boolean).join(' · ');
  if (result.summary.length > 180) result.summary = result.summary.slice(0, 177) + '…';
  return result;
}

function normalizeLessonRef(ref) {
  if (typeof ref === 'string') return { path: ref };
  if (!ref || typeof ref !== 'object') return null;
  return { ...ref };
}

function quizContentVersion(quiz) {
  if (!quiz) return null;
  return crypto.createHash('sha256').update(JSON.stringify(quiz)).digest('hex');
}

function trackDeclarationValue(declaration) {
  if (typeof declaration === 'string') return declaration;
  if (!declaration || typeof declaration !== 'object') return '';
  return declaration.id || declaration.slug || declaration.path || declaration.file || '';
}

function trackDeclarationIndex(program, track, file) {
  if (!Array.isArray(program.tracks)) return -1;
  return program.tracks.findIndex(declaration => {
    const value = trackDeclarationValue(declaration);
    if (!value) return false;
    const declaredFile = path.basename(value);
    const declaredSlug = path.basename(value, path.extname(value));
    return value === track.id ||
      value === track.slug ||
      declaredFile === file ||
      declaredSlug === track.slug;
  });
}

function assertCertificationTrackOrder(program, tracks) {
  const declaredTrackIds = Array.isArray(program.tracks) ? program.tracks : [];
  const emittedTrackIds = tracks.map(track => track.id);
  const matches = declaredTrackIds.length === emittedTrackIds.length &&
    declaredTrackIds.every((id, index) => id === emittedTrackIds[index]);
  if (!matches) {
    throw new Error(
      'Certification track order mismatch: program.json declares ' +
      JSON.stringify(declaredTrackIds) + ' but track manifests emit ' +
      JSON.stringify(emittedTrackIds)
    );
  }
}

function resolveAssessmentFile(programDir, assessmentPath) {
  if (!assessmentPath) return null;
  const fromRoot = safeRepoPath(assessmentPath, REPO_ROOT);
  if (fromRoot && fs.existsSync(fromRoot)) return fromRoot;
  const fromProgram = safeRepoPath(assessmentPath, programDir);
  if (fromProgram && fs.existsSync(fromProgram)) return fromProgram;
  return fromRoot || fromProgram;
}

function parseFrontmatter(text) {
  if (!text.startsWith('---')) return null;
  const end = text.indexOf('\n---', 4);
  if (end === -1) return null;
  const block = text.slice(4, end);
  const result = {};
  for (const raw of block.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (!line || line.startsWith('#') || !line.includes(':')) continue;
    const idx = line.indexOf(':');
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      result[key] = inner
        ? inner.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
        : [];
    } else if ((value.startsWith('"') && value.endsWith('"')) ||
               (value.startsWith("'") && value.endsWith("'"))) {
      result[key] = value.slice(1, -1);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function certificationLessonFiles(lessonDir, lessonRelPath, folderName) {
  const folderPath = path.join(lessonDir, folderName);
  if (!fs.existsSync(folderPath)) return [];

  const files = [];
  function collectFiles(currentDir, relativeDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      const relativePath = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory() && folderName === 'outputs') {
        collectFiles(fullPath, relativePath);
      } else if (entry.isFile()) {
        files.push({ fullPath, relativePath });
      }
    }
  }
  collectFiles(folderPath, '');

  return files.map(file => {
    const { fullPath, relativePath } = file;
    let description = '';
    if (folderName === 'outputs' && relativePath.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const meta = parseFrontmatter(content) || {};
        description = String(meta.description || '').trim();
        if (!description) {
          description = content.split(/\r?\n/)
            .map(line => line.trim())
            .find(line => line && !line.startsWith('#') && line !== '---') || '';
        }
      } catch (_) {}
    }
    return {
      name: relativePath,
      path: `${lessonRelPath}/${folderName}/${relativePath}`,
      size: fs.statSync(fullPath).size,
      description,
    };
  });
}

function parseCertifications() {
  const empty = { program: null, tracks: [], lessonsByPath: {}, assessmentsById: {} };
  if (!fs.existsSync(CERTIFICATIONS_PATH)) return empty;

  const programDirs = fs.readdirSync(CERTIFICATIONS_PATH, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(CERTIFICATIONS_PATH, entry.name))
    .filter(dir => fs.existsSync(path.join(dir, 'program.json')))
    .sort();
  if (!programDirs.length) return empty;

  const programDir = programDirs[0];
  const program = readJson(path.join(programDir, 'program.json'), 'certification program');
  const programSlug = program.slug || program.id || path.basename(programDir);
  const tracksDir = path.join(programDir, 'tracks');
  const trackFiles = fs.existsSync(tracksDir)
    ? fs.readdirSync(tracksDir).filter(file => file.endsWith('.json')).sort()
    : [];
  const trackEntries = trackFiles.map(file => {
    const track = readJson(path.join(tracksDir, file), `certification track ${file}`);
    track.id = track.id || `${programSlug}-${track.slug || path.basename(file, '.json')}`;
    track.slug = track.slug || path.basename(file, '.json');
    track.lessons = Array.isArray(track.lessons)
      ? track.lessons.map(normalizeLessonRef).filter(Boolean)
      : [];
    track.assessments = Array.isArray(track.assessments) ? track.assessments : [];
    return { file, track };
  });
  trackEntries.sort((a, b) => {
    const aIndex = trackDeclarationIndex(program, a.track, a.file);
    const bIndex = trackDeclarationIndex(program, b.track, b.file);
    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      if (aIndex !== bIndex) return aIndex - bIndex;
    }
    return a.file.localeCompare(b.file);
  });
  const tracks = trackEntries.map(entry => entry.track);
  assertCertificationTrackOrder(program, tracks);

  const lessonsByPath = {};
  const lessonsDir = path.join(programDir, 'lessons');
  if (fs.existsSync(lessonsDir)) {
    for (const entry of fs.readdirSync(lessonsDir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (!entry.isDirectory()) continue;
      const relPath = path.relative(REPO_ROOT, path.join(lessonsDir, entry.name)).split(path.sep).join('/');
      const docPath = path.join(lessonsDir, entry.name, 'docs', 'en.md');
      if (!fs.existsSync(docPath)) continue;
      const markdown = fs.readFileSync(docPath, 'utf8');
      const quizPath = path.join(lessonsDir, entry.name, 'quiz.json');
      const quiz = fs.existsSync(quizPath) ? readJson(quizPath, `${relPath}/quiz.json`) : null;
      const meta = certificationDocMeta(markdown, entry.name.replace(/^\d+-/, '').replace(/-/g, ' '));
      const lessonDir = path.join(lessonsDir, entry.name);
      lessonsByPath[relPath] = {
        path: relPath,
        slug: entry.name,
        name: meta.name,
        summary: meta.summary,
        keywords: meta.keywords,
        type: meta.type,
        languages: meta.languages,
        prerequisites: meta.prerequisites,
        time: meta.time,
        markdown,
        quiz,
        quizVersion: quizContentVersion(quiz),
        files: {
          code: certificationLessonFiles(lessonDir, relPath, 'code'),
          outputs: certificationLessonFiles(lessonDir, relPath, 'outputs'),
        },
        trackIds: [],
        domainsByTrack: {},
        rolesByTrack: {},
      };
    }
  }

  for (const track of tracks) {
    for (const ref of track.lessons) {
      const lesson = lessonsByPath[ref.path];
      if (!lesson) continue;
      if (!lesson.trackIds.includes(track.id)) lesson.trackIds.push(track.id);
      lesson.domainsByTrack[track.id] = Array.isArray(ref.domains) ? ref.domains : [];
      lesson.rolesByTrack[track.id] = ref.role || '';
    }
  }

  const assessmentsById = {};
  for (const track of tracks) {
    track.assessments = track.assessments.map((meta, index) => {
      const normalized = typeof meta === 'string' ? { path: meta } : { ...(meta || {}) };
      const assessmentLabel = normalized.id || normalized.title || `assessment ${index + 1}`;
      if (!normalized.path) {
        throw new Error(`Certification assessment "${assessmentLabel}" in track "${track.id}" must declare a source path`);
      }
      const assessmentFile = resolveAssessmentFile(programDir, normalized.path);
      if (!assessmentFile || !fs.existsSync(assessmentFile)) {
        throw new Error(`Missing certification assessment source for "${assessmentLabel}" in track "${track.id}": ${normalized.path}`);
      }
      const data = readJson(assessmentFile, normalized.path);
      const id = normalized.id || data.id || `${track.id}-${normalized.kind || data.kind || `assessment-${index + 1}`}`;
      const merged = {
        ...data,
        ...normalized,
        id,
        track: normalized.track || data.track || track.id,
        kind: normalized.kind || data.kind || 'practice',
        title: normalized.title || data.title || 'Practice assessment',
        timeLimitMinutes: Number(normalized.timeLimitMinutes || data.timeLimitMinutes || 0),
      };
      assessmentsById[id] = merged;
      return {
        id,
        path: normalized.path || '',
        kind: merged.kind,
        title: merged.title,
        timeLimitMinutes: merged.timeLimitMinutes,
        questionCount: Array.isArray(merged.questions) ? merged.questions.length : 0,
      };
    });
  }

  return { program, tracks, lessonsByPath, assessmentsById };
}

function writeCertificationData(certifications) {
  const output = `// Auto-generated by scripts/build_certification_data.js from certifications/ — do not edit manually.\n` +
    `// Last built: ${new Date().toISOString()}\n\n` +
    `const CERTIFICATIONS = ${JSON.stringify(certifications, null, 2)};\n`;
  fs.writeFileSync(CERTIFICATION_OUTPUT_PATH, output, 'utf8');
  console.log(`   wrote site/certification-data.js (${certifications.tracks.length} tracks, ${Object.keys(certifications.lessonsByPath).length} lessons, ${Object.keys(certifications.assessmentsById).length} assessments)`);
}

const certifications = parseCertifications();
writeCertificationData(certifications);
