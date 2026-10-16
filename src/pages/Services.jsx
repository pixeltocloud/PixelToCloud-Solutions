import { Link } from 'react-router-dom'
import ExpertiseHoneycomb from '../components/home/ExpertiseHoneycomb'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { deliveryStages } from '../data/catalog'
import './Services.css'

const serviceCards = [
  {
    slug: 'web-development',
    tag: 'Websites',
    title: 'Business websites that make the next step obvious',
    text: 'Marketing sites and storefronts that load on a phone, explain the offer clearly, and guide visitors to enquire, book, or buy.',
    image: '/image/home/business-websites.svg',
    alt: 'Illustration of a business website interface',
  },
  {
    slug: 'web-applications',
    tag: 'Software',
    title: 'Custom software for how your team already works',
    text: 'Portals, billing flows, and CRM-style tools shaped around real operations—not another seat-licensed product that almost fits.',
    image: '/image/home/custom-software.svg',
    alt: 'Illustration of a custom software dashboard',
  },
  {
    slug: 'ai-automation',
    tag: 'WhatsApp & AI',
    title: 'WhatsApp booking and support with a human handoff',
    text: 'Routine replies and booking flows first. When the answer is not standard, the conversation goes to a person on your team.',
    image: '/image/home/whatsapp-ai.svg',
    alt: 'Illustration of a WhatsApp booking conversation',
  },
  {
    slug: 'cloud-devops',
    tag: 'Cloud',
    title: 'Cloud delivery, speed, and a path to undo a release',
    text: 'Deploys you can reverse, monitoring that shows what slowed down, and credentials that stay with you after handover.',
    image: '/image/home/cloud-devops.svg',
    alt: 'Illustration of cloud deployment status cards',
  },
  {
    slug: 'ecommerce',
    tag: 'Growth',
    title: 'Landing pages and storefronts that turn attention into a conversation',
    text: 'Campaign pages, catalogs, and inquiry or checkout paths designed so ad spend and organic traffic have a clear place to go.',
    image: '/image/home/lead-growth.svg',
    alt: 'Illustration of a conversion-focused landing page',
  },
  {
    slug: 'digital-marketing',
    tag: 'Marketing',
    title: 'Digital marketing that ties campaigns to real inquiries',
    text: 'Search and social campaigns, fast landing pages, and conversion tracking—so you know which spend produces conversations, not just clicks.',
    image: '/image/home/lead-growth.svg',
    alt: 'Illustration of digital marketing funnels and campaign performance',
  },
  {
    slug: 'mobile-app-development',
    tag: 'Mobile',
    title: 'Mobile apps when a phone product is the right surface',
    text: 'iOS, Android, or cross-platform builds with a backend plan—scoped when a responsive website is not enough for the workflow.',
    image: '/image/home/ai-docs.svg',
    alt: 'Illustration of a product interface suited to mobile workflows',
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

      <ExpertiseHoneycomb
        className="expertise-honeycomb--page"
        kicker="Our expertise"
        title="The work we take on"
        titleId="services-expertise-title"
      />

      <section className="ag-sheet cream services-cards-section" aria-labelledby="services-cards-title">
        <div className="ag-wrap">
          <header className="services-cards-head">
            <p className="ag-kicker">Service detail</p>
            <h2 id="services-cards-title">Seven ways an engagement usually starts</h2>
            <p className="ag-lead">
              Each card opens a full service page with scope, deliverables, and how we work together.
            </p>
          </header>

          <div className="services-card-grid">
            {serviceCards.map((card) => {
              const href = card.to || `/services/${card.slug}`
              return (
                <article key={`${card.slug}-${card.tag}`} className="svc-media-card">
                  <Link to={href} className="svc-media-card-link">
                    <div className="svc-media-card-media">
                      <img
                        src={card.image}
                        alt={card.alt}
                        width="640"
                        height="360"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="svc-media-card-body">
                      <p className="svc-media-card-tag">{card.tag}</p>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <span className="ag-text-link">Explore service</span>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ag-sheet" aria-labelledby="services-delivery-title">
        <div className="ag-wrap">
          <p className="ag-kicker">Delivery</p>
          <h2 id="services-delivery-title">How a project moves from brief to handover</h2>
          <ol className="ag-steps">
            {deliveryStages.map((stage, index) => (
              <li key={stage.id}>
                <b>0{index + 1}</b>
                <h3>{stage.id}</h3>
                <p>{stage.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
