import Seo from '../components/seo/Seo'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import FinalCTA from '../components/sections/FinalCTA'
import { labs } from '../data/labs'
import './PageHero.css'
import './Labs.css'

export default function Labs() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Labs</p>
          <h1>Engineering prototypes</h1>
          <p>
            Interactive sandboxes and demos that show how we think about WebGL, deployments, performance, and
            infrastructure. Metrics inside prototypes are simulated.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
            Featured sandboxes
          </h2>
          <div className="labs-grid">
            {labs.map((lab, i) => (
              <Reveal key={lab.id} delay={i * 80} as="article" className="lab-card interactive-card">
                <div className="lab-accent" style={{ background: lab.accent }} />
                <div className="lab-top">
                  <span className="lab-tag">{lab.tag}</span>
                  <span className={`lab-status is-${lab.status}`}>{lab.status}</span>
                </div>
                <h3>{lab.title}</h3>
                <p>{lab.description}</p>
                <div className="lab-visual" style={{ '--lab': lab.accent }} aria-hidden="true">
                  <span className="lab-pulse" />
                  <span className="lab-pulse delay" />
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Button to="/contact">Build a production system with us</Button>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  )
}
