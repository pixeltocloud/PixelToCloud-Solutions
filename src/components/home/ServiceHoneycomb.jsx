import { useState } from 'react'
import { Link } from 'react-router-dom'

const tiles = [
  {
    id: 'web',
    short: 'Websites',
    title: 'Websites and online stores',
    text: 'Marketing sites and storefronts that load on a phone and make the next step obvious.',
    points: ['Custom layout', 'Phone-first pages', 'Inquiry or checkout'],
    to: '/services/web-development',
  },
  {
    id: 'software',
    short: 'Software',
    title: 'Custom software, billing and CRM',
    text: 'Portals and dashboards shaped around the way the team already works. You keep the code.',
    points: ['Roles and logins', 'Billing workflows', 'Staging you can click'],
    to: '/services/web-applications',
  },
  {
    id: 'leads',
    short: 'Lead funnels',
    title: 'Google Ads and lead funnels',
    text: 'Landing pages and tracking so ad spend turns into a conversation.',
    points: ['Landing pages', 'Conversion tracking', 'A clear next step'],
    to: '/start-project',
  },
  {
    id: 'cloud',
    short: 'Cloud',
    title: 'Cloud performance and security',
    text: 'Deploys you can undo, backups, and credentials that stay with you.',
    points: ['CI and rollback', 'Monitoring', 'Access handed over'],
    to: '/services/cloud-devops',
  },
  {
    id: 'whatsapp',
    short: 'WhatsApp',
    title: 'WhatsApp AI booking and support',
    text: 'The common reply first. A person when the answer is not routine.',
    points: ['Booking flows', 'Reminders', 'Human handoff'],
    to: '/services/ai-automation',
  },
  {
    id: 'docs',
    short: 'Documents',
    title: 'AI document and invoice extraction',
    text: 'Structured data from paperwork, with a review step before anything is filed.',
    points: ['Field extraction', 'A review step', 'Export into your system'],
    to: '/services/ai-automation',
  },
]

export default function ServiceHoneycomb() {
  const [active, setActive] = useState(tiles[0].id)
  const current = tiles.find((tile) => tile.id === active) || tiles[0]
  const top = tiles.slice(0, 2)
  const mid = tiles.slice(2, 4)
  const bottom = tiles.slice(4)

  const tileButton = (tile) => (
    <button
      key={tile.id}
      type="button"
      className={`hex ${active === tile.id ? 'is-on' : ''}`}
      aria-pressed={active === tile.id}
      onClick={() => setActive(tile.id)}
    >
      {tile.short}
    </button>
  )

  return (
    <section className="home-band alt" aria-labelledby="services-title">
      <div className="home-wrap">
        <div className="home-head">
          <p className="home-kicker">Services</p>
          <h2 id="services-title">Six ways a build usually starts</h2>
        </div>
        <div className="comb-layout">
          <div className="comb" aria-label="Services">
            <div className="comb-row">{top.map(tileButton)}</div>
            <div className="comb-row">
              {tileButton(mid[0])}
              <div className="hex hex-core" aria-hidden="true">PTC</div>
              {tileButton(mid[1])}
            </div>
            <div className="comb-row">{bottom.map(tileButton)}</div>
          </div>
          <ul className="hex-list">
            {tiles.map((tile) => (
              <li key={tile.id}>
                <button type="button" aria-pressed={active === tile.id} onClick={() => setActive(tile.id)}>
                  {tile.short}
                </button>
              </li>
            ))}
          </ul>
          <article className="comb-detail" aria-live="polite">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <ul>
              {current.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <Link to={current.to}>Learn more</Link>
          </article>
        </div>
      </div>
    </section>
  )
}
