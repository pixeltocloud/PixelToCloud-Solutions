import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { founders, contact } from '../data/founders'
import { whyUs } from '../data/services'
import IndustrySlider from '../components/about/IndustrySlider'

export default function About() {
  return (
    <div className="ag ag-page">
      <Seo title={`About | ${brand.name}`} description="Pankaj Gupta and Rusmeen build websites and software from Gurugram and Alwar." path="/about" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">About PixelToCloud</p>
          <h1>A studio you can call.</h1>
          <p className="ag-lead">Every small business we take on should be findable, able to scale, and able to convert. Pankaj Gupta and Rusmeen do the work themselves.</p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
      <section className="ag-sheet cream">
        <div className="ag-wrap ag-split">
          <div className="ag-prose">
            <h2>How the studio works</h2>
            <p>Pankaj leads systems, security, and infrastructure, with more than eight years in the field. Rusmeen leads full-stack delivery, with more than six years across cloud, DevOps, AI, React, and databases.</p>
            <p>Offices in {contact.location}. We work with clients in India, the United States, the United Arab Emirates, and elsewhere. Calls are set against India time.</p>
          </div>
          <ul className="ag-list">
            {whyUs.map((item) => (
              <li key={item.title} className="ag-row"><strong>{item.title}</strong><span>{item.description}</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ag-sheet alt founder-sheet">
        <div className="ag-wrap">
          <h2>Founders</h2>
          <div className="portrait-grid">
            {founders.map((person) => (
              <article key={person.name} className="founder-card">
                <div className="founder-card-media">
                  <img
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    width="960"
                    height="640"
                    style={{ objectPosition: person.frame }}
                  />
                </div>
                <div className="founder-card-body">
                  <div className="founder-card-meta">
                    <span className="founder-card-role">{person.label}</span>
                    <span className="founder-card-exp">{person.experience.replace(' Experience', '')}</span>
                  </div>
                  <h3>{person.name}</h3>
                  <p>{person.role}. {person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <IndustrySlider />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
