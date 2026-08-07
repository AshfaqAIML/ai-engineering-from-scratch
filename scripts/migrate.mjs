/**
 * Idempotent schema setup for the learning site backend.
 *
 * Usage:
 *   DATABASE_URL="postgres://..." node scripts/migrate.mjs
 *
 * The same DDL also runs lazily inside api/lib/db.js ensureSchema(), so cold
 * starts are self-healing; this script just gives you a deterministic way to
 * create the tables before the first deploy.
 */
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { getPool, ensureSchema } = require('../api/lib/db.js');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set.');
  process.exit(1);
}

try {
  await ensureSchema();
  const res = await getPool().query(
    "SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename"
  );
  console.log('Schema ensured. Tables: ' + res.rows.map((r) => r.tablename).join(', '));
  await getPool().end();
} catch (err) {
  console.error('Migration failed:', err);
  process.exit(1);
}
