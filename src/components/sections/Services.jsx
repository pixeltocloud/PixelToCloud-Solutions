import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { services, homepageServices } from '../../data/services'
import './Services.css'

export default function Services({ limit, detailed = false, homepage = false, hideHeading = false }) {
  let items = homepage ? homepageServices : services
  if (limit) items = items.slice(0, limit)

  const { hash } = useLocation()
  const hashId = hash.replace('#', '')
  const [openId, setOpenId] = useState(null)
  const showAdvanced = homepage

  useEffect(() => {
    if (!detailed) return
    if (hashId && items.some((service) => service.id === hashId)) {
      setOpenId(hashId)
    }
  }, [detailed, hashId])

  return (
    <section className="section services" id="capabilities">
      <div className="container">
        {!hideHeading ? (
          <Reveal>
            <SectionHeading
              title={homepage ? 'What we build for your business' : 'Website & product engineering services'}
              description={
                homepage
                  ? 'Start with the outcome you need. Advanced automation and 3D sit underneath when a project requires them.'
                  : 'Website development agency offerings—plus custom software, growth, and automation with 100% source-code ownership.'
              }
            />
          </Reveal>
        ) : (
          <Reveal className="services-intro">
            <div>
              <h2 className="section-title">Capabilities we ship</h2>
              <p className="section-desc">
                Expand any card for stack, delivery process, and outcomes. Everything ships with full source ownership.
              </p>
            </div>
            <p className="services-intro-meta">7 capabilities · expand for detail</p>
          </Reveal>
        )}

        <div className={`services-grid ${homepage ? 'is-home' : ''} ${detailed ? 'is-detailed' : ''}`}>
          {items.map((service, index) => {
            const open = detailed ? openId === service.id : true
            return (
              <Reveal
                key={service.id}
                delay={index * 45}
                as="article"
                className={`service-panel hover-lift ${open ? 'is-open' : ''}`}
                id={service.id}
              >
                <div className="service-top">
                  <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                  {service.pillar ? <span className="service-pillar">{service.pillar}</span> : null}
                </div>
                <h3>{service.title}</h3>
                <p className="service-positioning">{service.positioning}</p>
                <p className="service-desc">{service.description}</p>
                <ul>
                  {service.deliverables.slice(0, detailed && !open ? 3 : undefined).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {detailed ? (
                  <>
                    <button
                      type="button"
                      className="service-toggle"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : service.id)}
                    >
                      {open ? 'Hide details' : 'Show stack & process'}
                    </button>
                    {open ? (
                      <div className="service-details">
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
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link to={`/services#${service.id}`} className="text-link">
                    {service.cta}
                  </Link>
                )}
              </Reveal>
            )
          })}
        </div>

        {showAdvanced ? (
          <Reveal className="services-advanced" delay={100}>
            <p>
              <strong>Also available:</strong> WhatsApp automation, AI document extraction, interactive 2D/3D, and cloud
              maintenance.
            </p>
            <Button to="/services" variant="secondary">
              Explore all services
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
