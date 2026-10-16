import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { articles, getArticle } from '../data/catalog'

export default function InsightArticle() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) {
    return (
      <div className="ag ag-page">
        <Seo title={`Article not found | ${brand.name}`} noindex />
        <section className="ag-hero">
          <div className="ag-wrap ag-empty">
            <p className="ag-eye">Insights</p>
            <h1>That note is not published.</h1>
            <p className="ag-lead">It may have moved, or the link is outdated.</p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-light" to="/insights">All notes</Link>
              <Link className="ag-btn ag-btn-ghost" to="/">Go home</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const related = articles.filter((item) => item.slug !== article.slug)
  const share = encodeURIComponent(`https://pixeltocloud.com/insights/${article.slug}`)

  return (
    <div className="ag ag-page">
      <Seo title={`${article.title} | ${brand.name}`} description={article.summary} path={`/insights/${article.slug}`} />
      <section className="ag-hero-light">
        <div className="ag-wrap ag-prose">
          <nav className="ag-crumbs" aria-label="Breadcrumb">
            <Link to="/insights">Insights</Link>
            <span aria-hidden="true">/</span>
            <span>{article.title}</span>
          </nav>
          <p className="ag-eye">{article.topic}</p>
          <h1 className="ag-ink">{article.title}</h1>
          <p className="ag-lead">{article.author} · {article.date} · {article.minutes} min</p>
          <p className="ag-lead">{article.summary}</p>
        </div>
      </section>
      <article className="ag-sheet cream">
        <div className="ag-wrap ag-prose">
          <h2>On this page</h2>
          <ul>
            {article.sections.map((section) => (
              <li key={section.heading}><a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{section.heading}</a></li>
            ))}
          </ul>
          {article.sections.map((section) => {
            const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            return (
              <section key={section.heading} id={id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            )
          })}
          <p>
            Share: <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`}>LinkedIn</a>
          </p>
        </div>
      </article>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <h2>Related notes</h2>
          <ul className="ag-list">
            {related.map((item) => (
              <li key={item.slug}><Link to={`/insights/${item.slug}`}><strong>{item.title}</strong><span>{item.summary}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
