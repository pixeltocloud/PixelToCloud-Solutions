import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { portfolioStudies } from '../../data/portfolioStudies'
import './HeroQuiet.css'

const preview = portfolioStudies.filter((study) => study.featured).slice(0, 3)

export default function Hero() {
  return (
    <section className="hero-quiet" id="home">
      <div className="container hero-quiet-grid">
        <div>
          <p className="section-tag">PixelToCloud</p>
          <h1>Websites and software your team can actually run.</h1>
          <p className="hero-quiet-lead">
            Clinic sites, tax practices, local businesses, and small tools — designed, shipped, and handed over with the code.
          </p>
          <div className="hero-quiet-cta">
            <Button to="/contact">Start a project</Button>
            <Button to="/work" variant="secondary">
              View our work
            </Button>
          </div>
        </div>

        <div className="hero-quiet-stack" aria-label="Recent work">
          {preview.map((study) => (
            <Link key={study.slug} to={`/work/${study.slug}`} className="hero-quiet-card">
              <span style={{ background: study.accent }} />
              <div>
                <strong>{study.shortTitle}</strong>
                <small>{study.tag}</small>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
