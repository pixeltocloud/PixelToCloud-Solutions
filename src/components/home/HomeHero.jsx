import { Link } from 'react-router-dom'

const clients = ['Easy My Tax', 'Harish Renova', 'Saini Handicrafts', 'Revital Physiocare']

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container home-hero-layout">
        <div className="home-hero-copy">
          <h1>Websites and software your team can run.</h1>
          <p className="home-lead">
            We design it, ship it, and hand over the code. A focused build launches within 7 days, or the payment is returned.
          </p>
          <div className="home-actions">
            <Link className="home-btn home-btn-primary" to="/contact">
              Start a project
            </Link>
            <Link className="home-btn home-btn-secondary" to="/work">
              See the work
            </Link>
          </div>
        </div>
      </div>
      <div className="home-trust">
        <div className="container home-trust-row">
          <p>Built for</p>
          <ul>
            {clients.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
