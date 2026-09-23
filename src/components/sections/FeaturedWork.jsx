import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import ProjectVisual from '../ui/ProjectVisual'
import { caseStudies } from '../../data/caseStudies'
import './FeaturedWork.css'

function Cover({ study }) {
  const usePhoto = study.coverImage && !study.coverImage.endsWith('.svg')
  return (
    <div className="cover-media">
      {usePhoto ? (
        <img
          src={study.coverImage}
          alt={`${study.shortTitle} product preview`}
          width="960"
          height="640"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <ProjectVisual study={study} />
      )}
    </div>
  )
}

export default function FeaturedWork({ featuredOnly = true, compact = false, home = false, hideHeading = false }) {
  const items = home
    ? caseStudies.filter((c) => c.featured || c.slug === 'easy-my-tax').slice(0, 2)
    : featuredOnly
      ? caseStudies.filter((c) => c.slug !== 'nebula-3d').slice(0, 4)
      : caseStudies
  const [featured, ...rest] = items

  if (!compact) {
    return (
      <section className="section featured-work" id="selected-work">
        <div className="container">
          {!hideHeading ? (
            <Reveal>
              <SectionHeading
                title="Projects built for real operations"
                description="Finance, healthcare, and commerce systems shaped around day-to-day workflows—not templates."
              />
            </Reveal>
          ) : null}
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
                  <Cover study={study} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`section featured-work ${home ? 'surface-alt' : ''}`} id="selected-work">
      <div className="container">
        {hideHeading ? (
          <Reveal className="work-intro">
            <div>
              <h2 className="section-title">Selected case studies</h2>
              <p className="section-desc">
                Start with our own agency site, then explore client systems we designed, built, and handed over with full
                ownership.
              </p>
            </div>
            <p className="work-intro-meta">{items.length} projects · production proof</p>
          </Reveal>
        ) : (
          <Reveal className="work-intro">
            <SectionHeading
              title={home ? 'Proof—starting with this site' : 'Projects that look finished—and this site proves it'}
              description={
                home
                  ? 'pixeltocloud.com is our live agency proof. Browse more client systems when you are ready.'
                  : 'Start with our own agency site, then explore client systems we designed, built, and handed over with full ownership.'
              }
            />
            {home ? (
              <Button to="/work" variant="secondary">
                Browse all work
              </Button>
            ) : null}
          </Reveal>
        )}

        {featured ? (
          <Reveal as="article" className="work-feature">
            <Link to={`/work/${featured.slug}`} className="work-feature-link">
              <div className="work-feature-media">
                <Cover study={featured} />
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

        {!home && rest.length ? (
          <div className="work-secondary">
            {rest.map((study, index) => (
              <Reveal key={study.slug} delay={index * 60} as="article" className="work-secondary-card hover-lift">
                <Link to={`/work/${study.slug}`}>
                  <div className="work-secondary-media">
                    <Cover study={study} />
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
        ) : null}
      </div>
    </section>
  )
}
