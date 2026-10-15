import { Link } from 'react-router-dom'

const items = [
  {
    id: 'business-websites',
    title: 'Websites and online shops',
    text: 'A site that opens fast on a phone and makes the next step obvious.',
  },
  {
    id: 'custom-software',
    title: 'Apps and client portals',
    text: 'Software shaped around the way your team already works. You keep the code.',
  },
  {
    id: 'whatsapp-ai',
    title: 'WhatsApp that replies first',
    text: 'Common questions get an answer. A person steps in when the helper is unsure.',
  },
  {
    id: 'ai-docs',
    title: 'Invoices read for you',
    text: 'Bills and forms become fields, instead of another folder nobody opens.',
  },
  {
    id: 'cloud-devops',
    title: 'Hosting you can trust',
    text: 'Move off fragile hosting. An update can be undone if something looks wrong.',
  },
  {
    id: 'lead-growth',
    title: 'Pages for your ads',
    text: 'The page says the same thing as the ad, and you can see which one brought the call.',
  },
]

export default function HomeServices() {
  return (
    <section className="home-block home-services" aria-labelledby="home-services-title">
      <div className="container">
        <div className="home-block-head">
          <h2 id="home-services-title">What we take on</h2>
          <Link to="/services">All services</Link>
        </div>
        <ul className="home-service-list">
          {items.map((service) => (
            <li key={service.id}>
              <Link to={`/services#${service.id}`}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
