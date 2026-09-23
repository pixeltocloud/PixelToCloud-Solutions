import Seo from '../components/seo/Seo'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { labs } from '../data/labs'
import './PageHero.css'
import './Labs.css'

export default function Labs() {
  return (
    <div className="page-enter">
      <Seo />
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Engineering Lab</p>
          <h1>Interactive demos &amp; prototypes</h1>
          <p>
            Sandboxes that show how we think about WebGL, deploys, and infrastructure—built by the same team shipping
            client work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container labs-grid">
          {labs.map((lab, index) => (
            <Reveal key={lab.id} delay={index * 70} as="article" className="lab-card hover-lift">
              <div className="lab-top">
                <span className="lab-tag">{lab.tag}</span>
                <span className={`lab-status is-${lab.status}`}>{lab.status}</span>
              </div>
              <h2>{lab.title}</h2>
              <p>{lab.description}</p>
              <Button to="/contact" variant="secondary" className="lab-cta">
                Ask about this capability
              </Button>
            </Reveal>
          ))}
        </div>
        <div className="container" style={{ marginTop: '1.5rem' }}>
          <Button to="/work">See production case studies</Button>
        </div>
      </section>
    </div>
  )
}
