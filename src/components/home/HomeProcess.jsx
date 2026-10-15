import { processSteps } from '../../data/services'

export default function HomeProcess() {
  return (
    <section className="home-block home-process" aria-labelledby="home-process-title">
      <div className="container">
        <h2 id="home-process-title">How a project runs</h2>
        <ol>
          {processSteps.map((step) => (
            <li key={step.step}>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p className="home-days">{step.days}</p>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
