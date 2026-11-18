import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import PricingTable from '../components/pricing/PricingTable'
import GoogleCheckForm from '../components/forms/GoogleCheckForm'
import NotFound from './NotFound'
import { businessPages, businessSteps, getBusinessPage } from '../data/businessPages'
import { clientSites } from '../data/clientSites'
import { contact } from '../data/founders'
import '../components/work/WorkPortfolio.css'
import './Contact.css'
import './Clinics.css'

export default function BusinessLanding({ slug }) {
  const page = getBusinessPage(slug)
  if (!page) return <NotFound />

  const askLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hi PixelToCloud, I run a ${page.businessType.toLowerCase()} and would like the free Google check.`,
  )}`
  const others = [
    { slug: 'clinics', navLabel: 'Clinics & doctors' },
    ...businessPages.filter((item) => item.slug !== slug),
  ]

  return (
    <div className="ag ag-page clinics-page">
      <Seo title={page.seoTitle} description={page.seoDescription} path={`/${page.slug}`} />

      <section className="ag-hero" aria-labelledby="biz-title">
        <div className="ag-wrap">
          <p className="ag-eye">{page.eyebrow}</p>
          <h1 id="biz-title">{page.title}</h1>
          <p className="ag-lead">{page.lead}</p>
          <p className="biz-service">
            We build websites, software, apps and AI automation to fit each business’s needs, and do SEO so more customers find you on Google.
          </p>
          <div className="ag-actions">
            <a className="ag-btn ag-btn-light" href="#google-check">Get a free Google check</a>
            <a className="ag-btn ag-btn-ghost" href={askLink} target="_blank" rel="noopener noreferrer">
              Ask on WhatsApp
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="ag-sheet" id="google-check" aria-labelledby="biz-check-title">
        <div className="ag-wrap clinics-check">
          <header className="ag-section-head">
            <p className="ag-kicker">Free, no obligation</p>
            <h2 id="biz-check-title">See what customers find when they search for you</h2>
            <p>
              We check where you appear on Google for searches like &quot;{page.searchExample}&quot;, how your listing and
              reviews compare with nearby competitors, and what is missing. You get a one-page report within one working day.
            </p>
          </header>
          <GoogleCheckForm
            businessLabel={page.formLabel}
            businessPlaceholder={page.formPlaceholder}
            businessType={page.businessType}
          />
        </div>
      </section>

      <section className="ag-sheet cream" aria-labelledby="biz-included-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">What we can do for you</p>
            <h2 id="biz-included-title">Built around how your customers decide</h2>
            <p>Pick what you need. Every project is scoped to your business, with a fixed price before we start.</p>
          </header>
          <ul className="clinics-included">
            {page.included.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ag-sheet" aria-labelledby="biz-proof-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Recent work</p>
            <h2 id="biz-proof-title">Businesses we have already put online</h2>
            <p>Live sites. Open any of them on your phone.</p>
          </header>
          <ul className="clinics-proof">
            {clientSites.map((site) => (
              <li key={site.id}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <img src={site.image} alt={`Homepage of ${site.name}`} width="1440" height="960" loading="lazy" decoding="async" />
                  <strong>{site.name}</strong>
                  <span>{site.category} · {site.host}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ag-sheet alt" aria-labelledby="biz-steps-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">How it works</p>
            <h2 id="biz-steps-title">From free check to launch</h2>
          </header>
          <ol className="ag-steps">
            {businessSteps.map((step) => (
              <li key={step.b}>
                <b>{step.b}</b>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ag-sheet" id="pricing" aria-labelledby="biz-pricing-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Website packages</p>
            <h2 id="biz-pricing-title">Clear, one-time prices</h2>
            <p>Software, apps and ongoing SEO are quoted after a short call, once we understand what you need.</p>
          </header>
          <PricingTable names={{ business: page.tierName }} />
          <p className="clinics-more">
            Based in Shalimar, Alwar, with an office in Gurugram. GSTIN 08CSRPA1400M1ZS.
          </p>
        </div>
      </section>

      <section className="ag-sheet cream" aria-labelledby="biz-others-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Also for</p>
            <h2 id="biz-others-title">Other businesses we help</h2>
          </header>
          <ul className="biz-others">
            {others.map((item) => (
              <li key={item.slug}><Link to={`/${item.slug}`}>{item.navLabel}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
