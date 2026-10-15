import { Link } from 'react-router-dom'
import './ExpertiseHoneycomb.css'

export const expertiseOfferings = [
  { label: 'Websites', detail: 'Sites and stores', to: '/services/web-development' },
  { label: 'Software', detail: 'Billing and CRM', to: '/services/web-applications' },
  { label: 'WhatsApp', detail: 'AI booking flows', to: '/services/ai-automation' },
  { label: 'Cloud', detail: 'Speed and security', to: '/services/cloud-devops' },
  { label: 'Funnels', detail: 'Pages and ads', to: '/start-project' },
  { label: 'Documents', detail: 'Invoices and PDFs', to: '/services/ai-automation' },
]

export default function ExpertiseHoneycomb({
  kicker = 'Our expertise',
  title = 'The work we take on',
  titleId = 'expertise-title',
  className = '',
}) {
  return (
    <section className={`expertise-honeycomb ${className}`.trim()} aria-labelledby={titleId}>
      <div className="expertise-honeycomb-inner">
        <header className="expertise-head">
          <p className="expertise-kicker">{kicker}</p>
          <h2 id={titleId}>{title}</h2>
        </header>

        <ul className="hex-board">
          {expertiseOfferings.map((item) => (
            <li key={item.label}>
              <Link className="hex" to={item.to}>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
