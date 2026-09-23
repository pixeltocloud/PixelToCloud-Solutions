import Button from '../ui/Button'
import { caseStudies } from '../../data/caseStudies'
import { founders } from '../../data/founders'
import './Hero.css'

export default function Hero() {
  const primary = caseStudies.find((c) => c.slug === 'easy-my-tax')

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Websites & custom software</p>
          <h1>Digital products built around the way your business works</h1>
          <p className="hero-sub">
            PixelToCloud designs and builds professional websites, client portals, and custom applications for
            startups and growing businesses—with full source-code ownership and direct access to the engineers.
          </p>
          <div className="hero-cta">
            <Button to="/contact">Start a project</Button>
            <Button to="/work" variant="secondary">
              View our work
            </Button>
          </div>
          <div className="hero-proof">
            <div className="hero-faces" aria-hidden="true">
              {founders.map((person) => (
                <picture key={person.name}>
                  <source srcSet={person.image} type="image/webp" />
                  <img src={person.imageFallback} alt="" width="40" height="40" loading="eager" decoding="async" />
                </picture>
              ))}
            </div>
            <p>
              <strong>Pankaj Gupta & Tushar Singhal</strong>
              <span>Founders · You work directly with the team building your product</span>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured project preview">
          <figure className="hero-frame">
            <div className="hero-frame-top">
              <span className="hero-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="hero-url">{primary?.mockup?.url}</span>
            </div>
            <img
              src={primary?.coverImage}
              alt={`${primary?.shortTitle} product interface`}
              width="960"
              height="640"
              loading="eager"
              decoding="async"
            />
            <figcaption>
              <span>{primary?.tag}</span>
              <strong>{primary?.shortTitle}</strong>
            </figcaption>
          </figure>
          <ul className="hero-points">
            <li>Fixed-scope milestones</li>
            <li>Full IP handover</li>
            <li>Post-launch support</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
