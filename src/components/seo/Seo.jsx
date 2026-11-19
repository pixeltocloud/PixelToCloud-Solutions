import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { defaultSeo, routeSeo } from '../../data/seo'

const site = defaultSeo.siteUrl

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

/** The business itself. Every page links its own schema back to this @id. */
export const organization = {
  '@type': ['ProfessionalService', 'Organization'],
  '@id': `${site}/#organization`,
  name: 'PixelToCloud Solutions',
  alternateName: 'PixelToCloud',
  url: `${site}/`,
  logo: `${site}/logo-pixeltocloud.png`,
  image: `${site}/social/post1-intro.jpg`,
  description:
    'Web and software studio from India. Websites, custom software, mobile apps, WhatsApp automation, AI chatbots, SEO, Google Business Profile, social media, branding, videos and digital invitations for businesses in India and worldwide.',
  email: 'contact@pixeltocloud.com',
  telephone: '+91-82193-52124',
  vatID: '08CSRPA1400M1ZS',
  taxID: '08CSRPA1400M1ZS',
  priceRange: '₹₹',
  currenciesAccepted: 'INR, USD',
  openingHours: 'Mo-Su 09:00-19:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ram Mandir, 30 Beegha, Shalimar',
    addressLocality: 'Alwar',
    addressRegion: 'Rajasthan',
    postalCode: '301001',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'State', name: 'Rajasthan' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
  ],
  knowsAbout: [
    'Website design', 'Web development', 'E-commerce', 'Custom software', 'Mobile apps', 'WhatsApp automation',
    'AI chatbots', 'Search engine optimisation', 'Google Business Profile', 'Social media management',
    'Google Ads', 'Meta Ads', 'Logo design', 'Video editing', 'Digital wedding invitations',
  ],
  sameAs: [
    'https://www.linkedin.com/company/pixeltocloud',
    'https://www.instagram.com/pixel_to_cloud/',
    'https://www.google.com/maps/place/?q=place_id:ChIJgWDeheqZcjkR-gejDcWiqUE',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-82193-52124',
    email: 'contact@pixeltocloud.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'Worldwide',
  },
}

const website = {
  '@type': 'WebSite',
  '@id': `${site}/#website`,
  url: `${site}/`,
  name: 'PixelToCloud',
  publisher: { '@id': `${site}/#organization` },
  inLanguage: 'en-IN',
}

export function breadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site}${item.path}`,
    })),
  }
}

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export default function Seo({ title, description, path, image, noindex = false, schema }) {
  const location = useLocation()
  const matched = routeSeo[location.pathname] || routeSeo[`/${location.pathname.split('/')[1]}`] || {}
  const finalTitle = title || matched.title || defaultSeo.title
  const finalDescription = description || matched.description || defaultSeo.description
  const finalPath = path || matched.path || location.pathname
  const url = `${site}${finalPath === '/' ? '/' : finalPath}`
  const ogImage = image || defaultSeo.image
  const extra = schema ? (Array.isArray(schema) ? schema : [schema]) : []
  const schemaKey = JSON.stringify(extra)

  useEffect(() => {
    document.title = finalTitle
    upsertMeta('name', 'description', finalDescription)
    upsertMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', finalTitle)
    upsertMeta('property', 'og:description', finalDescription)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:site_name', 'PixelToCloud')
    upsertMeta('property', 'og:locale', 'en_IN')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', finalTitle)
    upsertMeta('name', 'twitter:description', finalDescription)
    upsertMeta('name', 'twitter:image', ogImage)
    upsertLink('canonical', url)
    const webpage = {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: finalTitle,
      description: finalDescription,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      inLanguage: 'en-IN',
    }
    upsertJsonLd({
      '@context': 'https://schema.org',
      '@graph': [organization, website, webpage, ...JSON.parse(schemaKey)],
    })
  }, [finalTitle, finalDescription, url, ogImage, noindex, schemaKey])

  return null
}
