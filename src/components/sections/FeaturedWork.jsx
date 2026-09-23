import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { caseStudies } from '../../data/caseStudies'
import './FeaturedWork.css'

export default function FeaturedWork({ featuredOnly = true, compact = false }) {
  const items = featuredOnly ? caseStudies.filter((c) => c.slug !== 'nebula-3d').slice(0, 4) : caseStudies
  const [featured, ...rest] = items

  if (!compact) {
    return (
      <section className="section featured-work" id="selected-work">
        <div className="container">
          <Reveal>
            <SectionHeading
              tag="Selected work"
              title="Projects built for real operations"
              description="Finance, healthcare, and commerce systems shaped around day-to-day workflows—not templates."
            />
          </Reveal>
          <div className="cs-list">
            {items.map((study, index) => (
              <Reveal key={study.slug} delay={index * 50} as="article" className="cs-card">
                <div className="cs-copy">
                  <div className="cs-meta">
                    <span>{study.tag}</span>
                    <span>{study.timeline}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p className="cs-label">The challenge</p>
                  <p>{study.challenge}</p>
                  <p className="cs-label">What we built</p>
                  <p>{study.built}</p>
                  <div className="cs-outcome">
                    <strong>Outcome</strong>
                    <p>{study.outcome}</p>
                  </div>
                  <Link to={`/work/${study.slug}`} className="text-link">
                    Read case study
                  </Link>
                </div>
                <div className="cs-media">
                  <img
                    src={study.coverImage}
                    alt={`${study.shortTitle} product preview`}
                    width="640"
                    height="427"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          {featuredOnly ? (
            <div className="cs-more">
              <Button to="/work" variant="secondary">
                Browse all work
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section className="section featured-work surface-alt" id="selected-work">
      <div className="container">
        <Reveal className="work-intro">
          <SectionHeading
            tag="Selected work"
            title="Projects that look finished—and this site proves it"
            description="Start with our own agency site, then explore client systems we designed, built, and handed over with full ownership."
          />
          <Button to="/work" variant="secondary">
            Browse all work
          </Button>
        </Reveal>

        {featured ? (
          <Reveal as="article" className="work-feature">
            <Link to={`/work/${featured.slug}`} className="work-feature-link">
              <div className="work-feature-media">
                <img
                  src={featured.coverImage}
                  alt={`${featured.shortTitle} interface`}
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="work-feature-body">
                <p className="work-meta">
                  <span>{featured.tag}</span>
                  <span>{featured.timeline}</span>
                </p>
                <h3>{featured.shortTitle}</h3>
                <p>{featured.outcome}</p>
                <span className="text-link">View case study</span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="work-secondary">
          {rest.map((study, index) => (
            <Reveal key={study.slug} delay={index * 60} as="article" className="work-secondary-card">
              <Link to={`/work/${study.slug}`}>
                <div className="work-secondary-media">
                  <img
                    src={study.coverImage}
                    alt={`${study.shortTitle} interface`}
                    width="640"
                    height="427"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="work-secondary-body">
                  <p className="work-meta">
                    <span>{study.tag}</span>
                    <span>{study.timeline}</span>
                  </p>
                  <h3>{study.shortTitle}</h3>
                  <p>{study.outcome}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
