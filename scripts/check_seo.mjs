import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve('dist');
const origin = 'https://www.efienergetica.com';
const pages = [];
const errors = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) pages.push(file);
  }
}

walk(root);
const paths = new Set();

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const pathname = '/' + relative(root, file).replace(/index\.html$/, '');
  paths.add(pathname);

  const canonical = `${origin}${pathname}`;
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) errors.push(`${pathname}: canonical incorrecta`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${pathname}: falta descripción`);
  if (!/<h1\b/.test(html)) errors.push(`${pathname}: falta H1`);

  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    try { JSON.parse(json); } catch { errors.push(`${pathname}: JSON-LD inválido`); }
  }

  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"]+)"/g)) {
    const targetPath = href.split(/[?#]/)[0];
    if (!targetPath) continue;
    const target = join(root, targetPath);
    if (!existsSync(target) && !existsSync(join(target, 'index.html'))) errors.push(`${pathname}: recurso ausente ${targetPath}`);
  }
}

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
for (const pathname of paths) if (!urls.includes(`${origin}${pathname}`)) errors.push(`${pathname}: falta en sitemap`);
if (urls.length !== paths.size) errors.push(`Sitemap: ${urls.length} URLs para ${paths.size} páginas`);
if (!readFileSync(join(root, 'robots.txt'), 'utf8').includes(`${origin}/sitemap.xml`)) errors.push('robots.txt: sitemap incorrecto');
if (!readFileSync(join(root, 'llms.txt'), 'utf8').includes(`${origin}/`)) errors.push('llms.txt: dominio incorrecto');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO verificado: ${pages.length} páginas, ${urls.length} URLs, recursos y datos estructurados válidos.`);
}
