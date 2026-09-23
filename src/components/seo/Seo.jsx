import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { defaultSeo, routeSeo } from '../../data/seo'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(data) {
  let el = document.getElementById('ptc-jsonld')
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = 'ptc-jsonld'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function Seo({ title, description, path, image, noindex = false }) {
  const location = useLocation()
  const matched = routeSeo[location.pathname] || routeSeo[`/${location.pathname.split('/')[1]}`] || {}
  const finalTitle = title || matched.title || defaultSeo.title
  const finalDescription = description || matched.description || defaultSeo.description
  const finalPath = path || matched.path || location.pathname
  const url = `${defaultSeo.siteUrl}${finalPath === '/' ? '/' : finalPath}`
  const ogImage = image || defaultSeo.image

  useEffect(() => {
    document.title = finalTitle
    upsertMeta('name', 'description', finalDescription)
    upsertMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', finalTitle)
    upsertMeta('property', 'og:description', finalDescription)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:site_name', 'PixelToCloud')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', finalTitle)
    upsertMeta('name', 'twitter:description', finalDescription)
    upsertMeta('name', 'twitter:image', ogImage)
    upsertLink('canonical', url)
    upsertJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${defaultSeo.siteUrl}/#organization`,
      name: 'PixelToCloud Solutions',
      url: defaultSeo.siteUrl,
      logo: `${defaultSeo.siteUrl}/favicon.svg`,
      image: ogImage,
      email: 'pixeltocloud@gmail.com',
      telephone: ['+918219352124', '+919928196424'],
      priceRange: '$$',
      areaServed: ['IN', 'US', 'GB', 'AE', 'CA', 'DE', 'FR'],
      founders: [
        { '@type': 'Person', name: 'Pankaj Gupta', jobTitle: 'Founder & Principal Systems Architect' },
        { '@type': 'Person', name: 'Tushar Singhal', jobTitle: 'Co-Founder & Senior Software Developer' },
      ],
    })
  }, [finalTitle, finalDescription, url, ogImage, noindex])

  return null
}
