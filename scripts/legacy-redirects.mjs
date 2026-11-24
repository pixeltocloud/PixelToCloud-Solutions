// Writes small redirect pages for URLs from the old static site (e.g. /services/erp-solutions.html)
// so links still in Google or shared elsewhere land on the closest current page instead of a 404.
// GitHub Pages can't send server redirects; Google treats an instant meta refresh as a permanent redirect.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://pixeltocloud.com'

export const LEGACY_REDIRECTS = {
  'about.html': '/about/',
  'brand-assets.html': '/',
  'connect.html': '/connect/',
  'contact.html': '/contact/',
  'labs.html': '/labs/',
  'logo_showcase.html': '/',
  'pankaj-card.html': '/about/',
  'portfolio.html': '/work/',
  'services.html': '/services/',
  'services/artificial-intelligence.html': '/services/ai-automation/',
  'services/cloud-devops.html': '/services/cloud-devops/',
  'services/digital-products.html': '/services/web-applications/',
  'services/erp-solutions.html': '/services/web-applications/',
  'services/interactive-3d-spatial.html': '/work/nebula-3d/',
  'services/user-experience-design.html': '/services/web-development/',
  'work/apex-cloud.html': '/work/',
  'work/easy-my-tax.html': '/work/easy-my-taxes/',
  'work/harish-renova.html': '/work/harish-renova/',
  'work/nebula-3d.html': '/work/nebula-3d/',
  'work/nexure-saas.html': '/work/',
  'work/saini-handicrafts.html': '/work/saini-handicrafts/',
}

function page(target) {
  const url = SITE + target
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved | PixelToCloud</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
</head>
<body><p>This page has moved to <a href="${target}">${url}</a>.</p></body>
</html>
`
}

for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
  const file = path.join(rootDir, from)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(to), 'utf-8')
}
console.log(`Wrote ${Object.keys(LEGACY_REDIRECTS).length} legacy redirect pages.`)
