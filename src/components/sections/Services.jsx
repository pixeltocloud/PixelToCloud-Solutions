import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { services, homepageServices } from '../../data/services'
import './Services.css'

export default function Services({ limit, detailed = false, homepage = false }) {
  let items = homepage ? homepageServices : services
  if (limit) items = items.slice(0, limit)

  const showAdvanced = homepage

  return (
    <section className="section services" id="capabilities">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Services"
            title={homepage ? 'What we can build for your business' : 'What we build'}
            description={
              homepage
                ? 'Start with the outcome you need. Advanced capabilities sit underneath when a project requires them.'
                : 'Clear offerings for websites, applications, commerce, and the infrastructure that keeps them reliable.'
            }
          />
        </Reveal>

        <div className={`services-grid ${homepage ? 'is-home' : ''}`}>
          {items.map((service, index) => (
            <Reveal key={service.id} delay={index * 60} as="article" className="service-panel" id={service.id}>
              <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p className="service-positioning">{service.positioning}</p>
              <p className="service-desc">{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {detailed ? (
                <>
                  <p className="service-label">Typical stack</p>
                  <div className="service-chips">
                    {service.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <p className="service-label">How we deliver</p>
                  <ol className="service-process">
                    {service.process.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="service-label">Outcomes</p>
                  <ul>
                    {service.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={`/services#${service.id}`} className="text-link">
                  {service.cta}
                </Link>
              )}
            </Reveal>
          ))}
        </div>

        {showAdvanced ? (
          <Reveal className="services-advanced" delay={120}>
            <p>
              <strong>Also available:</strong> interactive 2D/3D product experiences, automation & integrations, and
              cloud infrastructure with ongoing maintenance.
            </p>
            <Button to="/services" variant="secondary">
              Explore all services
            </Button>
          </Reveal>
        ) : null}

        {limit ? (
          <div className="services-more">
            <Button to="/services" variant="secondary">
              Explore all services
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
