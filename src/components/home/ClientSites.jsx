import { clientSites } from '../../data/clientSites'
import './ClientSites.css'

function SiteLink({ site }) {
  return (
    <a className="folio-link" href={site.url} target="_blank" rel="noreferrer">
      <span className="folio-frame">
        <span className="folio-chrome" aria-hidden="true">
          <i /><i /><i />
          <span>{site.host}</span>
        </span>
        <img src={site.image} width="1440" height="900" alt="" />
      </span>
      <span className="folio-kicker">{site.category}</span>
      <span className="folio-title">{site.name}</span>
      <span className="folio-copy">{site.description}</span>
      <span className="folio-go">Visit website</span>
    </a>
  )
}

export default function ClientSites() {
  const [feature, second, third, fourth, ...rest] = clientSites
  return (
    <div className="folio">
      <article className="folio-feature">
        <SiteLink site={feature} />
      </article>
      <div className="folio-pair">
        <article><SiteLink site={second} /></article>
        <article><SiteLink site={third} /></article>
      </div>
      <article className="folio-wide">
        <SiteLink site={fourth} />
      </article>
      {rest.length > 0 && (
        <div className="folio-pair">
          {rest.map((site) => (
            <article key={site.id}>
              <SiteLink site={site} />
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
