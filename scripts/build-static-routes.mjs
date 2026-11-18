import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { servicePages, industries } from '../src/data/catalog.js'
import { caseStudies } from '../src/data/caseStudies.js'
import { routeSeo, defaultSeo } from '../src/data/seo.js'
import { businessPages } from '../src/data/businessPages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const siteUrl = defaultSeo.siteUrl

if (!fs.existsSync(distDir)) {
  console.error('dist/ does not exist. Run "npx vite build" first.')
  process.exit(1)
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// Root index.html and 404.html (GitHub Pages serves 404.html for unknown paths -> SPA fallback)
fs.writeFileSync(path.join(rootDir, 'index.html'), templateHtml, 'utf-8')
fs.writeFileSync(path.join(rootDir, '404.html'), templateHtml, 'utf-8')

// Sync dist/assets to root assets cleanly (removes stale hashed bundles)
const distAssetsDir = path.join(distDir, 'assets')
const rootAssetsDir = path.join(rootDir, 'assets')
if (fs.existsSync(distAssetsDir)) {
  if (fs.existsSync(rootAssetsDir)) {
    fs.rmSync(rootAssetsDir, { recursive: true, force: true })
  }
  fs.cpSync(distAssetsDir, rootAssetsDir, { recursive: true })
}

// Sync every other file Vite copied from public/ (images, /connect, logos, QR codes, robots...)
// so the deployed root never drifts from public/.
for (const entry of fs.readdirSync(distDir)) {
  if (entry === 'assets' || entry === 'index.html') continue
  fs.cpSync(path.join(distDir, entry), path.join(rootDir, entry), { recursive: true })
}

const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escapeText = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')

// Build map of all routes and their metadata
const routes = new Map()

// 1. Core routes from routeSeo
for (const [routePath, seo] of Object.entries(routeSeo)) {
  if (routePath === '/') continue
  routes.set(routePath, {
    title: seo.title || defaultSeo.title,
    description: seo.description || defaultSeo.description,
    sitemap: routePath !== '/login',
    noindex: routePath === '/login',
  })
}

// Additional core routes
const additionalCore = [
  { path: '/start-project', title: 'Start a Project | PixelToCloud', description: 'Tell us about your project. Clear scope, fair pricing, and direct founder collaboration.' },
  { path: '/faq', title: 'Frequently Asked Questions | PixelToCloud', description: 'Answers about our process, 7-day website delivery, pricing, and project scope.' },
  { path: '/cookies', title: 'Cookie Policy | PixelToCloud', description: 'How cookies and local storage are used on pixeltocloud.com.' },
]
for (const r of additionalCore) {
  if (!routes.has(r.path)) routes.set(r.path, { title: r.title, description: r.description, sitemap: true })
}

// Landing pages for each kind of business (/restaurants, /ca-firms, ...)
for (const page of businessPages) {
  routes.set(`/${page.slug}`, { title: page.seoTitle, description: page.seoDescription, sitemap: true })
}

// 2. Services
for (const s of servicePages) {
  routes.set(`/services/${s.slug}`, { title: `${s.title} | PixelToCloud`, description: s.lede, sitemap: true })
}

// 3. Work / Case Studies (unlisted studies render "not found" in the app, so skip them)
for (const c of caseStudies) {
  if (c.listed === false) continue
  routes.set(`/work/${c.slug}`, {
    title: `${c.title} — Case Study | PixelToCloud`,
    description: c.summary || c.outcome || `${c.client} project by PixelToCloud.`,
    sitemap: true,
  })
}

// 4. Industries
for (const ind of industries) {
  routes.set(`/industries/${ind.slug}`, { title: `${ind.title} Solutions | PixelToCloud`, description: ind.lede, sitemap: true })
}

// 5. Legacy routes that the app redirects client-side. Served with HTTP 200 so old links work,
//    but marked noindex with a canonical pointing at the destination, and kept out of the sitemap.
const redirectRoutes = [
  { path: '/process', to: '/work#engagement' },
  { path: '/labs', to: '/work/nebula-3d' },
  { path: '/work/easy-my-tax', to: '/work/easy-my-taxes' },
  { path: '/insights', to: '/work#engagement' },
  { path: '/insights/what-a-7-day-launch-includes', to: '/work#engagement' },
  { path: '/insights/what-you-receive-at-handover', to: '/work#engagement' },
  { path: '/insights/when-whatsapp-should-hand-off', to: '/work#engagement' },
]
for (const r of redirectRoutes) {
  routes.set(r.path, {
    title: defaultSeo.title,
    description: defaultSeo.description,
    canonical: `${siteUrl}${r.to.split('#')[0]}`,
    noindex: true,
    sitemap: false,
  })
}

let generatedCount = 0

for (const [routePath, meta] of routes.entries()) {
  const targetDir = path.join(rootDir, routePath.replace(/^\//, ''))
  fs.mkdirSync(targetDir, { recursive: true })

  const canonicalUrl = meta.canonical || `${siteUrl}${routePath}`
  const rawTitle = meta.title.includes('PixelToCloud') ? meta.title : `${meta.title} | PixelToCloud`
  const pageTitle = escapeAttr(rawTitle)
  const pageDesc = escapeAttr(meta.description)

  let html = templateHtml
    .replace(/<title>.*?<\/title>/s, () => `<title>${escapeText(rawTitle)}</title>`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/>/s, () => `<meta name="description" content="${pageDesc}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/>/s, () => `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/s, () => `<meta property="og:title" content="${pageTitle}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/>/s, () => `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/>/s, () => `<meta property="og:description" content="${pageDesc}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s, () => `<meta name="twitter:title" content="${pageTitle}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s, () => `<meta name="twitter:description" content="${pageDesc}" />`)

  if (meta.noindex) {
    html = html.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <meta name="robots" content="noindex,follow" />')
  }

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8')
  generatedCount++
}

// Sitemap generated from the same route list so it can never drift from the real pages.
const sitemapPaths = ['/', ...[...routes.entries()].filter(([, m]) => m.sitemap).map(([p]) => p), '/connect']
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((p) => `  <url><loc>${siteUrl}${p}</loc></url>`).join('\n')}
</urlset>
`
for (const dir of [rootDir, path.join(rootDir, 'public'), distDir]) {
  fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemap, 'utf-8')
}

console.log(`Generated static index.html for ${generatedCount} routes and a sitemap with ${sitemapPaths.length} URLs.`)
