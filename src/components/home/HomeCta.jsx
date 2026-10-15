import { Link } from 'react-router-dom'

export default function HomeCta() {
  return (
    <section className="home-cta">
      <div className="container home-cta-inner">
        <div>
          <h2>Tell us what you need to build.</h2>
          <p>You speak with Pankaj and Rusmeen. A reply usually comes the same business day.</p>
        </div>
        <Link className="home-btn home-btn-primary" to="/contact">
          Start a project
        </Link>
      </div>
    </section>
  )
}
