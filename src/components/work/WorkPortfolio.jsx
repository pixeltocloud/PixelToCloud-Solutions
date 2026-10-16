import Reveal from '../ui/Reveal'
import { clientSites } from '../../data/clientSites'
import './WorkPortfolio.css'

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function padIndex(n) {
  return String(n).padStart(2, '0')
}

function WorkProject({ site, index, total, variant = 'support', delay = 0 }) {
  return (
    <Reveal className={`work-project-reveal work-project-reveal--${variant}`} delay={delay}>
      <a
        className={`work-project work-project--${variant}`}
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="work-project-media">
          <img
            src={site.image}
            width="1440"
            height="900"
            alt={`Homepage of ${site.name}`}
            loading={index === 1 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <div className="work-project-body">
          <div className="work-project-meta">
            <span className="work-project-index" aria-label={`Project ${index} of ${total}`}>
              {padIndex(index)}
              <span aria-hidden="true"> / </span>
              {padIndex(total)}
            </span>
            <span className="work-project-cat">{site.category}</span>
          </div>
          <h3>{site.name}</h3>
          <p>{site.description}</p>
          <span className="work-project-go">
            Explore website
            <Arrow />
          </span>
        </div>
      </a>
    </Reveal>
  )
}

export default function WorkPortfolio({ className = '' }) {
  const total = clientSites.length
  const [featured, ...rest] = clientSites

  return (
    <div className={`work-folio ${className}`.trim()}>
      <WorkProject site={featured} index={1} total={total} variant="feature" delay={40} />
      <div className="work-folio-grid">
        {rest.map((site, i) => {
          const isLastWide = rest.length % 2 === 1 && i === rest.length - 1
          return (
            <WorkProject
              key={site.id}
              site={site}
              index={i + 2}
              total={total}
              variant={isLastWide ? 'wide' : 'support'}
              delay={80 + i * 60}
            />
          )
        })}
      </div>
    </div>
  )
}

export { padIndex, Arrow }
