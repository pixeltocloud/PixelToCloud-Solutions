import { Link, useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services'
import { contact } from '../data/founders'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'
import FinalCTA from '../components/sections/FinalCTA'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <div className="page-enter service-detail-page">
      <Seo
        title={`${service.title} | PixelToCloud Solutions`}
        description={service.heroSub}
      />

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{service.title}</span>
          </nav>

          <div className="service-hero-badge">
            <span className="badge-dot" style={{ backgroundColor: service.accent }} />
            <span>{service.category} · {service.pillar}</span>
          </div>

          <h1 className="service-hero-title">{service.heroHeadline}</h1>
          <p className="service-hero-desc">{service.heroSub}</p>

          <div className="service-hero-ctas">
            <Button to="/contact" className="hero-btn-primary">
              Book a call for {service.title}
            </Button>
            <Button
              href={contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="service-wa-btn"
            >
              WhatsApp Us Directly
            </Button>
          </div>

          <div className="service-guarantees-grid">
            <div className="service-guarantee-card">
              <span className="guarantee-val">10–14 Days</span>
              <span className="guarantee-lbl">Sprint MVP delivery</span>
            </div>
            <div className="service-guarantee-card">
              <span className="guarantee-val">100% IP</span>
              <span className="guarantee-lbl">Code, assets & repos yours</span>
            </div>
            <div className="service-guarantee-card">
              <span className="guarantee-val">Founder-Led</span>
              <span className="guarantee-lbl">Engineers directly on your project</span>
            </div>
            <div className="service-guarantee-card">
              <span className="guarantee-val">30-Day</span>
              <span className="guarantee-lbl">Post-launch warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Deliverables */}
      <section className="section service-deliverables">
        <div className="container">
          <div className="section-head">
            <span className="micro-badge">✦ Scope & Specifications</span>
            <h2 className="section-title">What We Build & Deliver</h2>
            <p className="section-desc">
              Every deliverable is written into your milestone contract before work begins. No vague estimates.
            </p>
          </div>

          <div className="deliverables-grid">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="deliverable-card">
                <span className="deliverable-check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="deliverable-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Tech Stack */}
      <section className="section service-outcomes-section">
        <div className="container">
          <div className="outcomes-split-grid">
            <div className="outcomes-col">
              <span className="micro-badge">✦ Business Outcomes</span>
              <h3>Expected Results for Your Team</h3>
              <ul className="outcomes-list">
                {service.outcomes.map((outcome, idx) => (
                  <li key={idx} className="outcome-item">
                    <span className="outcome-bullet">➔</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stack-col">
              <span className="micro-badge">✦ Architecture</span>
              <h3>Modern Technology Stack</h3>
              <div className="stack-pills">
                {service.stack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="stack-note-box">
                <p>
                  <strong>No legacy lock-in:</strong> We avoid proprietary site-builder locks. Your stack is modern, lightweight, fully containerized or edge-hosted, and standard across top software engineering teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Delivery Process */}
      {service.process && (
        <section className="section service-process-section">
          <div className="container">
            <div className="section-head">
              <span className="micro-badge">✦ Timeline</span>
              <h2 className="section-title">How We Deliver {service.title}</h2>
              <p className="section-desc">
                From initial scoping call to production deployment in clear, structured milestones.
              </p>
            </div>

            <div className="service-process-grid">
              {service.process.map((step) => (
                <div key={step.step} className="service-step-card">
                  <div className="service-step-top">
                    <span className="service-step-num">{step.step}</span>
                    <span className="service-step-days">{step.days}</span>
                  </div>
                  <h4 className="service-step-title">{step.title}</h4>
                  <p className="service-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section service-faq-section">
          <div className="container service-faq-container">
            <div className="section-head">
              <span className="micro-badge">✦ Questions</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="service-faq-list">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="service-faq-item">
                  <h4 className="service-faq-q">{faq.q}</h4>
                  <p className="service-faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Action CTA */}
      <FinalCTA />
    </div>
  )
}
