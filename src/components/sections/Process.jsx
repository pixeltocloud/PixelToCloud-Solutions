import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { processSteps } from '../../data/services'
import './Process.css'

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Process"
            title="How a project typically moves"
            description="From the first conversation to a live system you own—without vague timelines or surprise scope."
          />
        </Reveal>
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 50} as="li" className="process-step">
              <span className="process-num">{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
