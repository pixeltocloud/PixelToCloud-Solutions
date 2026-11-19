/**
 * Prerender: opens every page in headless Chrome and saves the finished HTML into the
 * deployed index.html files. Search engines and AI crawlers (ChatGPT, Claude, Perplexity),
 * which do not run JavaScript, then see the real page content and structured data.
 *
 * Runs after build-static-routes.mjs. If Chrome is not installed, it prints a warning and
 * leaves the pages as they are, so the build never fails because of it.
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { countries } from '../src/data/places.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const port = 4391
const base = `http://127.0.0.1:${port}`

let puppeteer
let chromePath
try {
  puppeteer = (await import('puppeteer-core')).default
  const { Launcher } = await import('chrome-launcher')
  chromePath = Launcher.getInstallations()[0]
} catch {
  // handled below
}
if (!puppeteer || !chromePath) {
  console.warn('Prerender skipped: Chrome or puppeteer-core not found. Pages still work, but crawlers see less content.')
  process.exit(0)
}

const sitemap = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf-8')
const paths = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)]
  .map((m) => m[1] || '/')
  .filter((p) => p !== '/connect')

const server = spawn(process.execPath, [path.join(rootDir, 'node_modules/vite/bin/vite.js'), 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], {
  cwd: rootDir,
  stdio: 'ignore',
})

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(base + '/')
      if (res.ok) return
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 250))
  }
  throw new Error('Preview server did not start')
}

const escapeAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escapeText = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;')

function setMeta(html, attr, key, value) {
  if (!value) return html
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content=".*?"\\s*/?>`, 's')
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`
  return re.test(html) ? html.replace(re, () => tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

let done = 0
let failed = 0

try {
  await waitForServer()
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ['--no-sandbox', '--disable-gpu'] })

  async function render(routePath) {
    const page = await browser.newPage()
    try {
      await page.emulateTimezone(routePath.startsWith('/locations/') && isCountry(routePath) ? 'America/New_York' : 'Asia/Kolkata')
      await page.setViewport({ width: 1366, height: 900 })
      await page.goto(base + routePath, { waitUntil: 'networkidle0', timeout: 30000 })
      await new Promise((r) => setTimeout(r, 250))
      const data = await page.evaluate(() => {
        const meta = (sel) => document.head.querySelector(sel)?.getAttribute('content') || ''
        return {
          root: document.getElementById('root')?.innerHTML || '',
          title: document.title,
          description: meta('meta[name="description"]'),
          robots: meta('meta[name="robots"]'),
          canonical: document.head.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
          ogTitle: meta('meta[property="og:title"]'),
          ogDescription: meta('meta[property="og:description"]'),
          ogUrl: meta('meta[property="og:url"]'),
          ogImage: meta('meta[property="og:image"]'),
          jsonld: document.getElementById('ptc-jsonld')?.textContent || '',
        }
      })
      if (!data.root || data.root.length < 500) throw new Error('page rendered almost nothing')

      const file = path.join(rootDir, routePath.replace(/^\//, ''), 'index.html')
      let html = fs.readFileSync(file, 'utf-8')
      html = html.replace(/<title>.*?<\/title>/s, () => `<title>${escapeText(data.title)}</title>`)
      html = setMeta(html, 'name', 'description', data.description)
      html = setMeta(html, 'name', 'robots', data.robots)
      html = setMeta(html, 'property', 'og:title', data.ogTitle)
      html = setMeta(html, 'property', 'og:description', data.ogDescription)
      html = setMeta(html, 'property', 'og:url', data.ogUrl)
      html = setMeta(html, 'property', 'og:image', data.ogImage)
      html = setMeta(html, 'name', 'twitter:title', data.ogTitle)
      html = setMeta(html, 'name', 'twitter:description', data.ogDescription)
      if (data.canonical) html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/>/s, () => `<link rel="canonical" href="${escapeAttr(data.canonical)}" />`)
      if (data.jsonld) {
        html = html.replace(/<script type="application\/ld\+json" id="ptc-jsonld">.*?<\/script>/s, () => `<script type="application/ld+json" id="ptc-jsonld">${data.jsonld.replace(/</g, '\\u003c')}</script>`)
      }
      html = html.replace(/<noscript>.*?<\/noscript>/s, '')
      html = html.replace(/<div id="root">.*?<\/div>(\s*<\/body>)/s, (m, tail) => `<div id="root">${data.root}</div>${tail}`)
      if (!html.includes(data.root.slice(0, 80))) html = html.replace('<div id="root"></div>', () => `<div id="root">${data.root}</div>`)
      fs.writeFileSync(file, html, 'utf-8')
      if (routePath === '/') fs.writeFileSync(path.join(rootDir, 'index.html'), html, 'utf-8')
      done++
    } catch (error) {
      failed++
      console.warn(`Prerender failed for ${routePath}: ${error.message}`)
    } finally {
      await page.close()
    }
  }

  const queue = [...paths]
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) await render(queue.shift())
  }))
  await browser.close()
} finally {
  server.kill()
}

function isCountry(routePath) {
  const slug = routePath.split('/')[2]
  return countries.some((place) => place.slug === slug)
}

console.log(`Prerendered ${done} pages${failed ? `, ${failed} failed` : ''}.`)
