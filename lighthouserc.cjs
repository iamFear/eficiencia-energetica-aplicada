const { readdirSync } = require("node:fs");
const { join, relative, sep } = require("node:path");

const distDir = join(__dirname, "dist");

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  });
}

const urls = htmlFiles(distDir)
  .map(
    (path) =>
      `http://localhost/${relative(distDir, path).split(sep).join("/")}`,
  )
  .sort();

if (urls.length === 0) {
  throw new Error(
    "No se encontraron páginas HTML en dist/. Ejecuta npm run build primero.",
  );
}

module.exports = {
  ci: {
    collect: {
      staticDistDir: distDir,
      url: urls,
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
  },
};
