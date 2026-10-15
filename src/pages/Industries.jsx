import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { WorkFrame, frameKind } from '../components/site/Stage'
import { brand } from '../config/brand'
import { industries } from '../data/catalog'

export default function Industries() {
  return (
    <div className="ag ag-page">
      <Seo title={`Industries | ${brand.name}`} description="Industries we have shipped for, and industries we will scope without claiming a specialty." path="/industries" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">Industries</p>
          <h1>Where we have shipped, and where we will scope carefully.</h1>
          <p className="ag-lead">Healthcare, professional services, and makers have published work. The other pages do not claim a specialty.</p>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          {industries.map((item, index) => (
            <article key={item.slug} className={index % 2 ? 'show reverse' : 'show'}>
              <WorkFrame kind={frameKind(item.slug)} />
              <div>
                <h3><Link to={`/industries/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.lede}</p>
                <p className="ag-meta">{item.experience}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
