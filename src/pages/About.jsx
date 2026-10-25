import { Link } from 'react-router-dom'
import IndustrySlider from '../components/about/IndustrySlider'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { founders, contact } from '../data/founders'

const studioFlow = [
  {
    title: 'Conversation',
    text: `You talk with Pankaj and Rusmeen. Offices in ${contact.location}. Calls follow India time, including for clients in the US and the UAE.`,
    kind: 'people',
  },
  {
    title: 'Scope',
    text: 'Pankaj leads systems, security, and infrastructure. The scope is written down, and you approve it before the build starts.',
    kind: 'scope',
  },
  {
    title: 'Staging',
    text: 'Rusmeen leads full-stack delivery. You review working software on a private link at each milestone.',
    kind: 'shot',
    image: '/image/work/shridaa-arts.jpg',
    alt: 'Shridaa Arts, a client site shipped by the studio',
  },
  {
    title: 'Handover',
    text: 'You keep the repository, domain, and server credentials. A focused website launches in 7 days, or that payment is returned, with a 30-day warranty.',
    kind: 'handover',
  },
]

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
      <section className="ag-sheet cream" aria-labelledby="studio-flow-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <h2 id="studio-flow-title">How the studio works</h2>
            <p>Four stops, with the same two people on the work from the first call to the code in your name.</p>
          </header>
          <ol className="studio-flow">
            {studioFlow.map((step, index) => (
              <li key={step.title}>
                <div className="studio-flow-media">
                  {step.kind === 'people' ? (
                    <div className="studio-flow-people">
                      {founders.map((person) => (
                        <img
                          key={person.name}
                          src={person.image}
                          alt={person.name}
                          width="480"
                          height="640"
                          style={{ objectPosition: person.frame }}
                        />
                      ))}
                    </div>
                  ) : null}
                  {step.kind === 'shot' ? (
                    <img src={step.image} alt={step.alt} width="960" height="640" />
                  ) : null}
                  {step.kind === 'scope' ? (
                    <div className="studio-flow-board">
                      <p>You approve</p>
                      <ul>
                        <li>Pages and data</li>
                        <li>Milestone dates</li>
                        <li>What stays out of scope</li>
                      </ul>
                    </div>
                  ) : null}
                  {step.kind === 'handover' ? (
                    <div className="studio-flow-board">
                      <p>You receive</p>
                      <ul>
                        <li>Repository</li>
                        <li>Domain</li>
                        <li>Server access</li>
                      </ul>
                    </div>
                  ) : null}
                </div>
                <span className="studio-flow-mark">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="studio-flow-more"><Link to="/work#engagement">See every stage of an engagement</Link></p>
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
      <section className="ag-sheet" aria-labelledby="about-industries-title">
        <div className="ag-wrap">
          <IndustrySlider titleId="about-industries-title" />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
