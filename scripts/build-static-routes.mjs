import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { servicePages, industries } from '../src/data/catalog.js'
import { caseStudies } from '../src/data/caseStudies.js'
import { routeSeo, defaultSeo } from '../src/data/seo.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

if (!fs.existsSync(distDir)) {
  console.error('dist/ does not exist. Run "npx vite build" first.')
  process.exit(1)
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// Copy dist/index.html to root index.html and 404.html
fs.writeFileSync(path.join(rootDir, 'index.html'), templateHtml, 'utf-8')
fs.writeFileSync(path.join(rootDir, '404.html'), templateHtml, 'utf-8')

// Sync dist/assets to root assets cleanly
const distAssetsDir = path.join(distDir, 'assets')
const rootAssetsDir = path.join(rootDir, 'assets')
if (fs.existsSync(distAssetsDir)) {
  if (fs.existsSync(rootAssetsDir)) {
    fs.rmSync(rootAssetsDir, { recursive: true, force: true })
  }
  fs.mkdirSync(rootAssetsDir, { recursive: true })
  const files = fs.readdirSync(distAssetsDir)
  for (const file of files) {
    fs.copyFileSync(path.join(distAssetsDir, file), path.join(rootAssetsDir, file))
  }
}

// Build map of all routes and their metadata
const routes = new Map()

// 1. Core routes from routeSeo
for (const [routePath, seo] of Object.entries(routeSeo)) {
  if (routePath === '/') continue
  routes.set(routePath, {
    title: seo.title || defaultSeo.title,
    description: seo.description || defaultSeo.description,
  })
}

// Additional core routes
const additionalCore = [
  { path: '/start-project', title: 'Start a Project | PixelToCloud', description: 'Tell us about your project. Clear scope, fair pricing, and direct founder collaboration.' },
  { path: 'https://pixeltocloud.com/connect' }, // handled separately
  { path: '/faq', title: 'Frequently Asked Questions | PixelToCloud', description: 'Answers about our process, 7-day website delivery, pricing, and project scope.' },
  { path: '/cookies', title: 'Cookie Policy | PixelToCloud', description: 'How cookies and local storage are used on pixeltocloud.com.' },
]
for (const r of additionalCore) {
  if (r.path.startsWith('/')) {
    routes.set(r.path, { title: r.title, description: r.description })
  }
}

// 2. Services
for (const s of servicePages) {
  routes.set(`/services/${s.slug}`, {
    title: `${s.title} | PixelToCloud`,
    description: s.lede,
  })
}

// 3. Work / Case Studies
for (const c of caseStudies) {
  routes.set(`/work/${c.slug}`, {
    title: `${c.title} — Case Study | PixelToCloud`,
    description: c.summary || `${c.client} project by PixelToCloud.`,
  })
}

// 4. Industries
for (const ind of industries) {
  routes.set(`/industries/${ind.slug}`, {
    title: `${ind.title} Solutions | PixelToCloud`,
    description: ind.lede,
  })
}

// 5. Redirect/Legacy routes (support HTTP 200 SPA entry)
const redirectRoutes = [
  { path: '/process', title: 'Our Process | PixelToCloud', description: 'How we plan, design, build, and launch.' },
  { path: '/labs', title: 'Labs & Experiments | PixelToCloud', description: 'Interactive experiments and prototypes.' },
  { path: '/insights', title: 'Insights & Articles | PixelToCloud', description: 'Practical guides and articles on web architecture and automation.' },
  { path: '/insights/what-a-7-day-launch-includes', title: 'What a 7-Day Launch Includes | PixelToCloud', description: 'Details on our rapid 7-day launch scope.' },
  { path: '/insights/what-you-receive-at-handover', title: 'What You Receive at Handover | PixelToCloud', description: 'Code ownership and documentation checklist.' },
  { path: '/insights/when-whatsapp-should-hand-off', title: 'When WhatsApp Should Hand Off | PixelToCloud', description: 'Human vs automation guidelines.' },
]
for (const r of redirectRoutes) {
  routes.set(r.path, { title: r.title, description: r.description })
}

let generatedCount = 0

for (const [routePath, meta] of routes.entries()) {
  const relDir = routePath.replace(/^\//, '')
  const targetDir = path.join(rootDir, relDir)
  fs.mkdirSync(targetDir, { recursive: true })

  const canonicalUrl = `https://pixeltocloud.com${routePath}`
  const pageTitle = meta.title.includes('PixelToCloud') ? meta.title : `${meta.title} | PixelToCloud`
  const pageDesc = meta.description.replace(/"/g, '&quot;')

  let html = templateHtml
    // Title
    .replace(/<title>.*?<\/title>/s, `<title>${pageTitle}</title>`)
    // Meta description
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/>/s, `<meta name="description" content="${pageDesc}" />`)
    // Canonical
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/>/s, `<link rel="canonical" href="${canonicalUrl}" />`)
    // OpenGraph Title & Url & Description
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/s, `<meta property="og:title" content="${pageTitle}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/>/s, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/>/s, `<meta property="og:description" content="${pageDesc}" />`)
    // Twitter Title & Description
    .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${pageTitle}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s, `<meta name="twitter:description" content="${pageDesc}" />`)

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8')
  generatedCount++
}

console.log(`Successfully generated static index.html for ${generatedCount} routes across pixeltocloud.com!`)
