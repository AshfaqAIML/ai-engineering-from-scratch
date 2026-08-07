/**
 * Local API server for developing/testing the backend functions.
 *
 * Serves the same route -> module mapping Vercel uses, on plain HTTP so the
 * workflow test can run against a real database before deploy:
 *
 *   DATABASE_URL="postgres://..." node scripts/dev-server.mjs
 *   BASE_URL="http://localhost:8787" node scripts/test-workflow.mjs
 */
import { createServer } from 'http';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const routes = {
  '/api/auth/signup': require('../api/auth/signup.js'),
  '/api/auth/login': require('../api/auth/login.js'),
  '/api/auth/logout': require('../api/auth/logout.js'),
  '/api/auth/me': require('../api/auth/me.js'),
  '/api/auth/google': require('../api/auth/google.js'),
  '/api/progress': require('../api/progress.js'),
};

const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const handler = routes[url.pathname];
  if (handler) return handler(req, res);
  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: false, error: 'Not found: ' + url.pathname }));
});

const port = Number(process.env.PORT || 8787);
server.listen(port, () => {
  console.log('AI Engineering from Scratch API listening on http://localhost:' + port);
});
