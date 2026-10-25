import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import './ExpertiseHoneycomb.css'

export const expertiseOfferings = [
  { label: 'Websites', detail: 'Sites and stores', to: '/services/web-development' },
  { label: 'Software', detail: 'Portals and tools', to: '/services/web-applications' },
  { label: 'WhatsApp', detail: 'Booking, then a person', to: '/services/ai-automation' },
  { label: 'Cloud', detail: 'Deploys you can undo', to: '/services/cloud-devops' },
  { label: 'Commerce', detail: 'Catalogs and checkout', to: '/services/ecommerce' },
  { label: 'Mobile', detail: 'When a phone app is the product', to: '/services/mobile-app-development' },
  { label: 'Digital marketing', detail: 'Ads tied to inquiries', to: '/services/digital-marketing' },
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
        <Reveal as="header" className="expertise-head">
          <p className="expertise-kicker">{kicker}</p>
          <h2 id={titleId}>{title}</h2>
          <p className="expertise-lead">
            Websites, software, commerce, and automation. Open a tile to see what that work includes and what you receive.
          </p>
        </Reveal>

        <ul className="hex-board">
          {expertiseOfferings.map((item, index) => (
            <Reveal key={item.label} as="li" delay={index * 50}>
              <Link className="hex" to={item.to}>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
