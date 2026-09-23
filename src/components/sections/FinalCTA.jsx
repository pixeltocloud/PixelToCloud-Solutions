import Button from '../ui/Button'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-glow" aria-hidden="true" />
      <div className="container final-cta-inner">
        <div>
          <p className="final-cta-kicker">Ready when you are</p>
          <h2>Your next website should feel this intentional</h2>
          <p>
            Share what you need. We&apos;ll respond with a practical plan, timeline, and fixed-scope estimate—founder to
            founder.
          </p>
        </div>
        <div className="final-cta-actions">
          <Button to="/contact">Start a project</Button>
          <Button to="/work" variant="secondary">
            Browse work
          </Button>
        </div>
      </div>
    </section>
  )
}
