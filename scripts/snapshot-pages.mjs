// Refresh the prebuilt snapshot used by the existing main/root Pages source.
// Run npm run build:pages first. Never copy the SSR server bundle.
import { cpSync, existsSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

execFileSync(process.execPath, ['scripts/verify-pages.mjs'], { stdio: 'inherit' });
for (const entry of readdirSync('.output/public')) {
  if (existsSync(entry) && !['assets', 'images', 'about', 'contact', 'patients', 'referrals', 'services', 'updates', 'index.html', '.nojekyll', 'favicon.ico', 'robots.txt'].includes(entry)) {
    throw new Error(`Refusing to overwrite source: ${entry}`);
  }
  cpSync(`.output/public/${entry}`, entry, { recursive: true });
}
console.log('Updated main/root GitHub Pages snapshot.');
