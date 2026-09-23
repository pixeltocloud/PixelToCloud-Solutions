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
            title="From concept to cloud launch"
            description="A clear 4-stage pipeline engineered for milestone transparency and 100% intellectual property ownership."
          />
        </Reveal>
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 60} as="li" className="process-step hover-lift">
              <span className="process-num">{step.step}</span>
              <div>
                <p className="process-days">{step.days}</p>
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
