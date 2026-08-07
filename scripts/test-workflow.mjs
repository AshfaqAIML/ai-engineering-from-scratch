/**
 * End-to-end workflow test for the learning platform backend.
 *
 * Simulates the full learner journey exactly as the site would:
 *   1. Register a fresh account
 *   2. Log in and start reading (push progress)
 *   3. "Close the browser" (no cookie)
 *   4. Log back in
 *   5. Resume — verify the exact study point and streak are restored
 *
 * Usage:
 *   BASE_URL="https://ai-engineering-from-scratch-mu-dun.vercel.app" \
 *     node scripts/test-workflow.mjs
 *
 * Defaults to the local function via a tiny static mock if BASE_URL is unset
 * (requires DATABASE_URL). Exits non-zero on the first failure.
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const BASE_URL = (process.env.BASE_URL || 'http://localhost:8787').replace(/\/$/, '');
const PASS = '\u2713';
const FAIL = '\u2717';

let failures = 0;

function assert(cond, label, detail) {
  if (cond) {
    console.log('  ' + PASS + ' ' + label);
  } else {
    failures++;
    console.error('  ' + FAIL + ' ' + label + (detail ? ' — ' + detail : ''));
  }
}

async function request(path, { method = 'GET', cookie = '', body } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (cookie) headers.Cookie = cookie;
  const res = await fetch(BASE_URL + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    redirect: 'manual',
  });
  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    /* no json body */
  }
  const setCookie = res.headers.get('set-cookie') || '';
  const sessionCookie = (setCookie.match(/aifs_session=[^;]+/) || [])[0] || '';
  return { status: res.status, data, setCookie, sessionCookie };
}

function cookieFrom(response) {
  return response.sessionCookie;
}

const email = 'wf-' + Date.now() + '-' + Math.floor(Math.random() * 1e6) + '@example.com';
const password = 'hunter2secret';
const lessonPath = 'phases/00-setup-and-tooling/01-dev-environment';

console.log('Target: ' + BASE_URL);
console.log('Test account: ' + email + '\n');

// 1. Register
console.log('1. Register');
const signup = await request('/api/auth/signup', {
  method: 'POST',
  body: { name: 'Workflow Tester', email, password },
});
assert(signup.status === 201, 'signup returns 201', 'got ' + signup.status);
let cookie = cookieFrom(signup);
assert(!!cookie, 'session cookie issued');

// 2. Start learning
console.log('2. Start learning');
const progress1 = await request('/api/progress', {
  method: 'POST',
  cookie,
  body: {
    items: [
      {
        path: lessonPath,
        deltaSeconds: 120,
        scrollPct: 42,
        sectionId: 'learning-objectives',
        completed: false,
        answers: { 'pre-q0': { picked: 1, correct: true, t: 1 } },
      },
    ],
    deltaMinutes: 4,
    day: new Date().toISOString().slice(0, 10),
  },
});
assert(progress1.status === 200, 'progress saved', 'got ' + progress1.status);

const me1 = await request('/api/auth/me', { cookie });
assert(me1.status === 200, 'me returns account');
const saved = me1.data && me1.data.progress && me1.data.progress[lessonPath];
assert(saved && saved.scrollPct === 42, 'scroll position 42% persisted');
assert(saved && saved.sectionId === 'learning-objectives', 'study point persisted');
assert(saved && saved.answers && saved.answers['pre-q0'], 'quiz answer persisted');
assert(saved && saved.readSeconds === 120, 'read time persisted', 'got ' + (saved && saved.readSeconds));

// 3. Close browser (drop the cookie)
console.log('3. Close browser');
cookie = '';

// 4. Log back in
console.log('4. Log back in');
const login = await request('/api/auth/login', {
  method: 'POST',
  body: { email, password },
});
assert(login.status === 200, 'login returns 200', 'got ' + login.status);
cookie = cookieFrom(login);
assert(!!cookie, 'session cookie re-issued');

// 5. Resume
console.log('5. Resume');
const me2 = await request('/api/auth/me', { cookie });
const resumed = me2.data && me2.data.progress && me2.data.progress[lessonPath];
assert(me2.status === 200, 'me returns account');
assert(resumed && resumed.scrollPct === 42, 'resume restores 42% scroll');
assert(resumed && resumed.sectionId === 'learning-objectives', 'resume restores study point');
assert(resumed && resumed.readSeconds === 120, 'resume restores read time');
assert(resumed && resumed.answers['pre-q0'].correct === true, 'resume restores quiz answers');

// Keep reading on the second session
const progress2 = await request('/api/progress', {
  method: 'POST',
  cookie,
  body: {
    items: [{ path: lessonPath, deltaSeconds: 60, scrollPct: 75, completed: false }],
    deltaMinutes: 2,
    day: new Date().toISOString().slice(0, 10),
  },
});
assert(progress2.status === 200, 'second session saves progress');

const me3 = await request('/api/auth/me', { cookie });
const after = me3.data && me3.data.progress && me3.data.progress[lessonPath];
assert(after && after.scrollPct === 75, 'scroll updated to 75% (max merge)');
assert(after && after.readSeconds === 180, 'read time accumulates across sessions (120+60)');
assert(after && after.answers['pre-q0'], 'answers preserved across sessions');

// 6. Streak
console.log('6. Streak');
const streak = me3.data && me3.data.streak;
assert(streak && streak.totalDays === 1, 'one study day recorded (6 min > 5 threshold)');
assert(streak && streak.currentStreak === 1, 'current streak is 1');
assert(streak && streak.readingDays && streak.readingDays.length === 1, 'reading day listed');

// 7. Logout
console.log('7. Logout');
const logout = await request('/api/auth/logout', { method: 'POST', cookie });
cookie = '';
const meAfterLogout = await request('/api/auth/me');
assert(meAfterLogout.status === 401, 'session revoked after logout');

// 8. Wrong password rejected
console.log('8. Auth guards');
const badLogin = await request('/api/auth/login', { method: 'POST', body: { email, password: 'wrong!' } });
assert(badLogin.status === 401, 'wrong password rejected');

console.log('\n' + (failures ? FAIL + ' ' + failures + ' assertion(s) failed' : PASS + ' all assertions passed'));
process.exit(failures ? 1 : 0);
