import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { founders, contact } from '../data/founders'
import { whyUs } from '../data/services'
import { industries } from '../data/catalog'

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
      <section className="ag-sheet">
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
      <section className="ag-sheet alt">
        <div className="ag-wrap">
          <h2>Founders</h2>
          <div className="portrait-grid">
            {founders.map((person) => (
              <article key={person.name}>
                <img src={person.image} alt={`${person.name}, ${person.role}`} width="640" height="800" />
                <h3>{person.name}</h3>
                <p>{person.role}. {person.experience}.</p>
                <p>{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <h2>Industries</h2>
          <p className="ag-lead">We name a specialty only where a project is published. The other pages describe the kind of work, not a track record.</p>
          <ul className="ag-list">
            {industries.map((item) => (
              <li key={item.slug}>
                <Link to={`/industries/${item.slug}`}><strong>{item.title}</strong><span>{item.experience}</span></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
