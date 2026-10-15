import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'

const featured = [
  {
    slug: 'easy-my-tax',
    text: 'Clients file and share documents without an email chain.',
  },
  {
    slug: 'harish-renova',
    text: 'Patients request a visit and get a WhatsApp confirmation.',
  },
  {
    slug: 'saini-handicrafts',
    text: 'Handmade work, shown clearly, with a way to inquire.',
  },
]

export default function HomeWork() {
  const items = featured
    .map((item) => {
      const study = caseStudies.find((entry) => entry.slug === item.slug)
      return study ? { ...item, title: study.shortTitle } : null
    })
    .filter(Boolean)

  return (
    <section className="home-block" aria-labelledby="home-work-title">
      <div className="container">
        <div className="home-block-head">
          <h2 id="home-work-title">Work we have shipped</h2>
          <Link to="/work">All work</Link>
        </div>
        <ul className="home-work-list">
          {items.map((item) => (
            <li key={item.slug}>
              <Link to={`/work/${item.slug}`}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
