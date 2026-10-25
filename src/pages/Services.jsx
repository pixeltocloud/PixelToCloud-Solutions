import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { serviceMedia } from '../data/media'
import '../components/work/WorkPortfolio.css'
import './Services.css'

const serviceCards = [
  {
    slug: 'web-development',
    tag: 'Websites',
    title: 'Business websites that make the next step obvious',
    text: 'Marketing sites and storefronts that load on a phone, explain the offer clearly, and guide visitors to enquire, book, or buy.',
    image: serviceMedia['web-development'].image,
    alt: serviceMedia['web-development'].alt,
  },
  {
    slug: 'web-applications',
    tag: 'Software',
    title: 'Custom software for how your team already works',
    text: 'Portals, billing flows, and CRM-style tools shaped around real operations—not another seat-licensed product that almost fits.',
    image: serviceMedia['web-applications'].image,
    alt: serviceMedia['web-applications'].alt,
  },
  {
    slug: 'ai-automation',
    tag: 'WhatsApp & AI',
    title: 'WhatsApp booking and support with a human handoff',
    text: 'Routine replies and booking flows first. When the answer is not standard, the conversation goes to a person on your team.',
    image: serviceMedia['ai-automation'].image,
    alt: serviceMedia['ai-automation'].alt,
  },
  {
    slug: 'cloud-devops',
    tag: 'Cloud',
    title: 'Cloud delivery, speed, and a path to undo a release',
    text: 'Deploys you can reverse, monitoring that shows what slowed down, and credentials that stay with you after handover.',
    image: serviceMedia['cloud-devops'].image,
    alt: serviceMedia['cloud-devops'].alt,
  },
  {
    slug: 'ecommerce',
    tag: 'Growth',
    title: 'Landing pages and storefronts that turn attention into a conversation',
    text: 'Campaign pages, catalogs, and inquiry or checkout paths designed so ad spend and organic traffic have a clear place to go.',
    image: serviceMedia.ecommerce.image,
    alt: serviceMedia.ecommerce.alt,
  },
  {
    slug: 'digital-marketing',
    tag: 'Marketing',
    title: 'Digital marketing that ties campaigns to real inquiries',
    text: 'Search and social campaigns, fast landing pages, and conversion tracking—so you know which spend produces conversations, not just clicks.',
    image: serviceMedia['digital-marketing'].image,
    alt: serviceMedia['digital-marketing'].alt,
  },
  {
    slug: 'mobile-app-development',
    tag: 'Mobile',
    title: 'Mobile apps when a phone product is the right surface',
    text: 'iOS, Android, or cross-platform builds with a backend plan—scoped when a responsive website is not enough for the workflow.',
    image: serviceMedia['mobile-app-development'].image,
    alt: serviceMedia['mobile-app-development'].alt,
  },
]

export default function Services() {
  return (
    <div className="ag ag-page">
      <Seo
        title={`Services | ${brand.name}`}
        description="Websites, applications, mobile, e-commerce, AI workflows, and cloud delivery."
        path="/services"
      />

      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">Build · Grow · Automate</p>
          <h1>Technology should solve problems, not create more of them.</h1>
          <p className="ag-lead">
            From high-performing websites to custom software and intelligent automation,
            we build digital tools a business can own, run, and improve.
          </p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/work">See the work</Link>
          </div>
        </div>
      </section>

      <section className="ag-sheet cream services-cards-section" aria-labelledby="services-cards-title">
        <div className="ag-wrap">
          <header className="services-cards-head">
            <p className="ag-kicker">Service detail</p>
            <h2 id="services-cards-title">Seven ways an engagement usually starts</h2>
            <p className="ag-lead">
              Each card opens a full service page with scope, deliverables, and how we work together.
            </p>
          </header>

          <div className="work-folio services-folio">
            {serviceCards.map((card) => (
              <Link
                key={`${card.slug}-${card.tag}`}
                to={card.to || `/services/${card.slug}`}
                className="work-project work-project--support"
              >
                <div className="work-project-media">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width="1440"
                    height="960"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="work-project-body">
                  <div className="work-project-meta">
                    <span className="work-project-cat">{card.tag}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
