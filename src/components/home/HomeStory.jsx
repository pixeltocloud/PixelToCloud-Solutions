import { Link } from 'react-router-dom'
import { contact } from '../../data/founders'
import { testimonials } from '../../data/testimonials'
import WorkPortfolio, { Arrow, padIndex } from '../work/WorkPortfolio'
import { clientSites } from '../../data/clientSites'

const journey = [
  ['01', 'Discover', 'Understand the business, the people using it, the constraints, and the outcome you need.'],
  ['02', 'Plan and design', 'Define the solution, the experience, the architecture, and what is in scope.'],
  ['03', 'Build and integrate', 'Develop the solution, connect the systems that are in scope, and check the workflows that matter.'],
  ['04', 'Launch and improve', 'Deploy, verify, hand over the project, and note what is worth improving next.'],
]

const why = [
  ['01', 'Ownership', 'Repository, domain, and server credentials at handover. No seat license on our stack.'],
  ['02', 'Direct collaboration', 'You work with Pankaj Gupta and Rusmeen. A reply usually comes the same business day, India time.'],
  ['03', 'Practical delivery', 'A focused website, once the scope is fixed, can launch in 7 days. Applications use their own milestone plan.'],
  ['04', 'Transparent engagement', 'A typical split is 30% to start, 40% at staging, and 30% at handover. A focused launch includes 30 days of warranty.'],
]

const studies = [
  {
    title: 'Easy My Tax',
    problem: 'Tax return review depended on multi-day email chains.',
    built: 'A portal for GST and tax calculations, an encrypted document vault, return tracking, and billing.',
    outcome: 'Documented outcome: review of client returns moved to same-day turnaround.',
    note: 'Composed study preview, not a live screenshot.',
    to: '/work/easy-my-tax',
  },
  {
    title: 'Harish Renova',
    problem: 'Patients needed a clear path to book a consultation on a clinical site.',
    built: 'A clinical site with booking, WhatsApp confirmation, and emergency routing.',
    outcome: 'Documented outcome: sub-second mobile loading, with a confirmed consultation requested in under a minute.',
    note: 'Composed study preview, not a live screenshot.',
    to: '/work/harish-renova',
  },
  {
    title: 'Saini Handicrafts',
    problem: 'Handmade work needed an editorial catalog that could reach overseas buyers.',
    built: 'An editorial catalog with multi-currency pricing and commission inquiries.',
    outcome: 'Commission inquiries from overseas jumped after launch.',
    note: 'Composed study preview, not a live screenshot.',
    to: '/work/saini-handicrafts',
  },
]

const quote = testimonials[0]

export function SelectedWork() {
  const total = clientSites.length

  return (
    <section className="home-sheet home-work" aria-labelledby="work-title">
      <div className="home-wrap home-work-wrap">
        <header className="work-intro">
          <div className="work-intro-copy">
            <p className="home-kicker">
              Selected work
              <span className="work-intro-range" aria-hidden="true">
                {' '}
                /
                {' '}
                {padIndex(1)}
                —
                {padIndex(total)}
              </span>
              <span className="sr-only">
                , projects
                {' '}
                {padIndex(1)}
                {' '}
                through
                {' '}
                {padIndex(total)}
              </span>
            </p>
            <h2 id="work-title">
              Good work starts with
              <span className="work-intro-break"> understanding the business.</span>
            </h2>
            <p className="work-intro-lead">
              From specialist practices and handcrafted brands to security and technology businesses,
              we create digital experiences that make what you do easier to discover, understand, and choose.
            </p>
            <p className="work-intro-aside">
              Real businesses. Distinct challenges. Thoughtful digital solutions.
            </p>
          </div>
          <Link className="home-text-link work-intro-link" to="/work">
            All projects <Arrow />
          </Link>
        </header>

        <WorkPortfolio />

        <div className="study-block">
          <div className="study-intro">
            <p className="home-kicker">Documented studies</p>
            <h3>Evidence from shipped client work</h3>
            <p>These studies use composed interface previews. Outcomes below are only the ones already documented for each engagement.</p>
          </div>
          <ul className="study-list">
            {studies.map((study) => (
              <li key={study.to}>
                <div>
                  <h4>{study.title}</h4>
                  <p><b>Problem</b> {study.problem}</p>
                  <p><b>Built</b> {study.built}</p>
                  <p><b>Outcome</b> {study.outcome}</p>
                  <p className="project-note">{study.note}</p>
                </div>
                <Link className="home-text-link" to={study.to}>View case study <Arrow /></Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="work-lab">
          Nebula3D is a browser tool from the lab, not a client engagement.
          {' '}
          <Link to="/labs">See the lab</Link>
        </p>
      </div>
    </section>
  )
}

export function Journey() {
  return (
    <section className="home-sheet home-journey" aria-labelledby="journey-title">
      <div className="home-wrap">
        <div className="home-head">
          <div>
            <p className="home-kicker">How an engagement runs</p>
            <h2 id="journey-title">From the first conversation to a solution that works.</h2>
          </div>
          <Link className="home-text-link" to="/process">See the process</Link>
        </div>
        <ol className="journey-line">
          {journey.map(([num, title, text], index) => (
            <li key={num}>
              <span className="journey-mark" aria-hidden="true">
                <i>{num}</i>
                {index < journey.length - 1 ? <b /> : null}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="home-sheet home-why" aria-labelledby="why-title">
      <div className="home-wrap why-edit">
        <div className="why-copy">
          <p className="home-kicker">Why PixelToCloud</p>
          <h2 id="why-title">Built around your business, not a vendor lock-in.</h2>
          <p className="why-lead">The engagement is scoped with you. The code is yours when it ships.</p>
        </div>
        <ol className="why-rows">
          {why.map(([num, title, text]) => (
            <li key={num}>
              <span aria-hidden="true">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ClientQuote() {
  return (
    <section className="home-sheet home-quote" aria-labelledby="quote-title">
      <div className="home-wrap quote-edit">
        <p className="quote-mark" aria-hidden="true">“</p>
        <blockquote>
          <h2 id="quote-title" className="sr-only">What a client said</h2>
          <p>{quote.text}</p>
          <footer>
            <strong>{quote.name}</strong>
            <span>{quote.role}</span>
          </footer>
          <Link className="home-text-link" to="/work/easy-my-tax">Read the Easy My Tax case study <Arrow /></Link>
        </blockquote>
      </div>
    </section>
  )
}

export function Close() {
  return (
    <section className="home-close" aria-labelledby="close-title">
      <div className="home-wrap home-close-inner">
        <p className="home-eye">Next step</p>
        <h2 id="close-title">Have a challenge worth solving?</h2>
        <p>Let&apos;s explore what the right website, software, or automation could do for your business.</p>
        <div className="home-actions">
          <a className="home-btn home-btn-light" href={contact.appointmentLink} target="_blank" rel="noreferrer">Book an intro call</a>
          <a className="home-btn home-btn-ghost" href={contact.whatsappLink} target="_blank" rel="noreferrer">Talk to us on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
