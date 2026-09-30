import { clientStrip } from '../../data/portfolioStudies'
import './ClientMarquee.css'

export default function ClientMarquee() {
  const loop = [...clientStrip, ...clientStrip]

  return (
    <section className="client-marquee" aria-label="Clients">
      <p className="client-marquee-label">Clients we have built for</p>
      <div className="client-marquee-mask">
        <ul className="client-marquee-track">
          {loop.map((client, index) => (
            <li key={`${client.name}-${index}`}>
              <span>{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
