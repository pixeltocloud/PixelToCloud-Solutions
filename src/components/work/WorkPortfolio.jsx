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
            height="960"
            alt={`Homepage of ${site.name}`}
            loading={index === 1 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <div className="work-project-body">
          <div className="work-project-meta">
            <span className="sr-only">Project {index} of {total}</span>
            <span className="work-project-cat">{site.category}</span>
            <span className="work-project-type">{site.deliverable || 'Website'}</span>
          </div>
          <h3>{site.name}</h3>
          <p>{site.description}</p>
          <span className="sr-only">Opens in a new tab.</span>
        </div>
      </a>
    </Reveal>
  )
}

export default function WorkPortfolio({ className = '', limit }) {
  const sites = typeof limit === 'number' ? clientSites.slice(0, limit) : clientSites
  const total = clientSites.length

  return (
    <div className={`work-folio ${className}`.trim()}>
      <div className="work-folio-grid">
        {sites.map((site, i) => (
          <WorkProject
            key={site.id}
            site={site}
            index={i + 1}
            total={total}
            variant="support"
            delay={40 + i * 50}
          />
        ))}
      </div>
    </div>
  )
}

export { padIndex, Arrow }
