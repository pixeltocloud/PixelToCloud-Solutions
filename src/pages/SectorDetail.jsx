import { Link, Navigate, useParams } from 'react-router-dom'
import { getSector, sectors } from '../data/sectors'
import Button from '../components/ui/Button'
import Stage from '../components/ui/Stage'
import Seo from '../components/seo/Seo'
import FinalCTA from '../components/sections/FinalCTA'
import CloserLook from '../components/sections/CloserLook'
import { getSectorLook } from '../data/closerLooks'
import './SectorPages.css'

export default function SectorDetail() {
  const { id } = useParams()
  const sector = getSector(id)

  if (!sector) {
    return <Navigate to="/serve" replace />
  }

  const look = getSectorLook(sector.id)
  const index = sectors.findIndex((item) => item.id === sector.id)
  const prev = sectors[(index - 1 + sectors.length) % sectors.length]
  const next = sectors[(index + 1) % sectors.length]

  return (
    <div className="page-enter sector-page">
      <Seo
        title={`${sector.title} | PixelToCloud`}
        description={sector.lede}
        path={`/serve/${sector.id}`}
        image={`https://pixeltocloud.com${sector.image}`}
      />

      <section className="sector-hero">
        <div className="container sector-hero-grid">
          <div>
            <nav className="service-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="crumb-sep">/</span>
              <Link to="/serve">Who we serve</Link>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{sector.title}</span>
            </nav>
            <p className="sector-kicker">{sector.kicker}</p>
            <h1>{sector.headline}</h1>
            <p className="sector-lede">{sector.lede}</p>
            <div className="sector-ctas">
              <Button to="/contact">Talk about this work</Button>
              <Button to="/services" variant="secondary">See services</Button>
            </div>
          </div>
          <Stage
            image={sector.image}
            imageAlt={sector.imageAlt}
            scene={sector.scene}
            accent={sector.accent}
            caption={sector.title}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">What this usually includes</h2>
          </div>
          <div className="sector-ideas">
            {sector.ideas.map((idea, idx) => (
              <article key={idea.title} className="sector-idea">
                <span>0{idx + 1}</span>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CloserLook
        look={look}
        image={sector.image}
        imageAlt={sector.imageAlt}
        accent={sector.accent}
      />

      <section className="section sector-beats-wrap">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">What a normal day looks like</h2>
          </div>
          <ol className="sector-beats">
            {sector.beats.map((beat) => (
              <li key={beat.label}>
                <strong>{beat.label}</strong>
                <p>{beat.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container sector-audiences">
          {sector.audiences.map((audience) => (
            <article key={audience.label}>
              <h3>{audience.label}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Pages that go with this</h2>
          </div>
          <div className="sector-services">
            {sector.services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="sector-note">
            These are starting points. What you get depends on your business and the people using it.
          </p>
        </div>
      </section>

      <nav className="container sector-pager" aria-label="More industries">
        <Link to={`/serve/${prev.id}`}>
          <span>Previous</span>
          {prev.title}
        </Link>
        <Link to={`/serve/${next.id}`}>
          <span>Next</span>
          {next.title}
        </Link>
      </nav>

      <FinalCTA />
    </div>
  )
}
