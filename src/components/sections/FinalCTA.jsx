import Button from '../ui/Button'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <h2>Ready to discuss your project?</h2>
          <p>Share what you need. We’ll respond with a practical plan, timeline, and fixed-scope estimate.</p>
        </div>
        <Button to="/contact">Start a project</Button>
      </div>
    </section>
  )
}
