import { useRef } from 'react'
import { Link } from 'react-router-dom'

function ProjectVisual({ kind }) {
  if (kind === 'book') {
    return (
      <div className="pv pv-book" aria-hidden="true">
        <p>Appointment</p>
        <strong>Choose a time</strong>
        <span>Morning</span>
        <span className="on">Afternoon</span>
        <b>Confirm</b>
      </div>
    )
  }
  if (kind === 'catalog') {
    return (
      <div className="pv pv-catalog" aria-hidden="true">
        <i /><i className="alt" /><i />
        <p>Catalog · Inquire</p>
      </div>
    )
  }
  if (kind === 'config') {
    return (
      <div className="pv pv-config" aria-hidden="true">
        <div className="pv-orb" />
        <ul>
          <li>Material</li>
          <li>Angle</li>
          <li>Light</li>
        </ul>
      </div>
    )
  }
  return (
    <div className="pv pv-flow" aria-hidden="true">
      <header>Client vault</header>
      <ul>
        <li>Returns <b>Ready</b></li>
        <li>Documents <b>Shared</b></li>
        <li>Billing <b>Open</b></li>
      </ul>
    </div>
  )
}

const projects = [
  {
    slug: 'easy-my-tax',
    kind: 'vault',
    name: 'Easy My Tax',
    category: 'Client project · Application',
    text: 'A client vault for a chartered accountancy practice. Files stay out of the inbox.',
    meta: '3–4 weeks',
  },
  {
    slug: 'harish-renova',
    kind: 'book',
    name: 'Harish Renova',
    category: 'Client project · Clinic website',
    text: 'Patients request a visit and get a WhatsApp confirmation.',
    meta: '2–4 weeks',
  },
  {
    slug: 'saini-handicrafts',
    kind: 'catalog',
    name: 'Saini Handicrafts',
    category: 'Client project · Catalog',
    text: 'Handmade work, shown clearly, with a way to inquire.',
    meta: '3–5 weeks',
  },
  {
    slug: 'nebula-3d',
    kind: 'config',
    name: 'Nebula3D',
    category: 'Lab project, not a client engagement',
    text: 'A browser tool from the lab. It is not a client engagement.',
    meta: '4–8 weeks',
  },
]

export default function WorkCarousel() {
  const track = useRef(null)

  const move = (direction) => {
    const node = track.current
    if (!node) return
    const card = node.querySelector('article')
    const distance = card ? card.getBoundingClientRect().width + 16 : node.clientWidth
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    node.scrollBy({ left: direction * distance, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="home-band" aria-labelledby="work-title">
      <div className="home-wrap">
        <div className="home-head">
          <div>
            <p className="home-kicker">Selected work</p>
            <h2 id="work-title">Projects we have published</h2>
          </div>
          <div className="home-pager">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects">Prev</button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects">Next</button>
          </div>
        </div>
        <div className="work-track" ref={track} tabIndex={0} aria-label="Case studies">
          {projects.map((project) => (
            <article key={project.slug} className="work-slide">
              <ProjectVisual kind={project.kind} />
              <div>
                <p className="home-kicker">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <p className="work-meta">{project.meta}. Composed study, not a screenshot of the live product.</p>
                <Link to={`/work/${project.slug}`}>View case study</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
