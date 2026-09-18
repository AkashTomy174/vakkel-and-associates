// Build-time sitemap generator.
//
// This is a client-side-only React SPA (Vite) with no SSR, so the sitemap
// cannot be produced at request time. It is generated here and emitted into
// `public/sitemap.xml`, which Vite copies to the deploy root.
//
// Run automatically via the "prebuild" npm script; can also be run directly:
//   node scripts/generate-sitemap.mjs
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Change this to the canonical production origin before deploying.
const SITE_URL = process.env.SITE_URL || "https://www.vakkeelandassociates.com";

// --- Static public routes -------------------------------------------------
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/insights", priority: "0.8", changefreq: "weekly" },
  {
    path: "/government-approvals-compliance",
    priority: "0.8",
    changefreq: "monthly",
  },
  { path: "/join", priority: "0.6", changefreq: "monthly" },
];

// --- Blog / insight post slugs -------------------------------------------
// blog.js is plain data (no imports), so we can extract slugs without a build.
const blogSource = readFileSync(join(root, "src/data/blog.js"), "utf8");
const slugMatches = [...blogSource.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
const postRoutes = slugMatches.map(([, slug]) => ({
  path: `/insights/${slug}`,
  priority: "0.6",
  changefreq: "yearly",
}));

// --- lastmod ---------------------------------------------------------------
// Use the newest source mtime as a coarse "last modified" signal.
const sourceFiles = [
  "src/App.jsx",
  "src/data/blog.js",
  "src/GlassLandingPage.jsx",
];
let lastmod = new Date(0);
for (const file of sourceFiles) {
  try {
    const mtime = statSync(join(root, file)).mtime;
    if (mtime > lastmod) lastmod = mtime;
  } catch {
    /* ignore missing files */
  }
}
const lastmodIso = lastmod.toISOString().split("T")[0];

const routes = [...staticRoutes, ...postRoutes];

const urlEntries = routes
  .map(
    ({ path, priority, changefreq }) =>
      ` <url>\n` +
      `    <loc>${SITE_URL}${path}</loc>\n` +
      `    <lastmod>${lastmodIso}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      ` </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const outPath = join(root, "public/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(
  `sitemap.xml written with ${routes.length} URLs (lastmod ${lastmodIso}) -> ${outPath}`,
);
