import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { articles } from '../data/catalog'

export default function Insights() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('All')
  const topics = ['All', ...new Set(articles.map((item) => item.topic))]
  const visible = useMemo(
    () => articles.filter((item) => {
      const matchesTopic = topic === 'All' || item.topic === topic
      const haystack = `${item.title} ${item.summary}`.toLowerCase()
      return matchesTopic && haystack.includes(query.trim().toLowerCase())
    }),
    [query, topic],
  )
  const [featured, ...rest] = visible

  return (
    <div className="ag ag-page">
      <Seo title={`Insights | ${brand.name}`} description="Notes from the studio on delivery, handover, and automation." path="/insights" />
      <section className="ag-hero" aria-labelledby="insights-title">
        <div className="ag-wrap">
          <p className="ag-eye">Studio notes</p>
          <h1 id="insights-title">Insights from the work, not a content mill.</h1>
          <p className="ag-lead">Short notes from the founders. There is no newsletter, because there is no subscription service connected.</p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/work">Explore Our Work</Link>
          </div>
        </div>
      </section>
      <section className="ag-sheet cream">
        <div className="ag-wrap">
          <form className="ag-form" role="search" onSubmit={(event) => event.preventDefault()}>
            <label>
              Search notes
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" />
            </label>
          </form>
          <div className="ag-filters" aria-label="Topics">
            {topics.map((item) => (
              <button key={item} type="button" aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>
            ))}
          </div>
          {featured ? (
            <article className="insight-lead">
              <p className="ag-kicker">{featured.topic} · {featured.minutes} min</p>
              <h2><Link to={`/insights/${featured.slug}`}>{featured.title}</Link></h2>
              <p>{featured.summary}</p>
              <Link className="ag-btn ag-btn-line" to={`/insights/${featured.slug}`} style={{ marginTop: 16 }}>Read the note</Link>
            </article>
          ) : <p className="ag-note">No notes match that search.</p>}
          <ul className="ag-list">
            {rest.map((item) => (
              <li key={item.slug}>
                <Link to={`/insights/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.summary}<b className="ag-meta">{item.author}. {item.minutes} min read.</b></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
