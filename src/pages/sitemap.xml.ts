import type { APIRoute } from 'astro';
import { projects, services } from '../data/site';

const paths = [
  '/',
  '/soluciones/',
  '/proyectos/',
  ...services.map(({ slug }) => `/soluciones/${slug}/`),
  ...projects.map(({ slug }) => `/proyectos/${slug}/`),
];

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Define site in astro.config.mjs to generate the sitemap.');

  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
