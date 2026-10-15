import Button from '../ui/Button'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <h2>Tell us what you need to build.</h2>
          <p>You speak with Pankaj and Rusmeen. A reply usually comes the same business day.</p>
        </div>
        <Button to="/contact">Start a project</Button>
      </div>
    </section>
  )
}
