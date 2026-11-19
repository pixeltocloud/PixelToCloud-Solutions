import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { serviceGroups } from '../data/offerings'
import { ContactBand, CurrencyToggle, Price } from '../components/site/px'

export default function Services() {
  return (
    <>
      <Seo
        title={`Services and starting prices | ${brand.name}`}
        description="Websites, online stores, Google profiles, SEO, social media, ads, WhatsApp automation, AI chatbots, custom software, apps, logo design and videos, with starting prices."
        path="/services"
      />
      <section className="px-detail-hero">
        <div className="px-wrap">
          <h1>Services</h1>
          <p className="px-hero-lede">
            Everything we build and run for businesses, grouped by what you want to achieve.
            Prices are starting prices; you get a fixed quote before any work starts.
          </p>
          <CurrencyToggle />
        </div>
      </section>
      <section className="px-section">
        <div className="px-wrap px-groups">
          {serviceGroups.map((group) => (
            <div className="px-group" key={group.id} id={group.id}>
              <h2 className="px-group-title">{group.title}</h2>
              <p>{group.text}</p>
              <ul className="px-rows">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/services/${item.slug}`}>
                      <strong>{item.name}</strong>
                      <Price amount={item.from} unit={item.unit} />
                      <span className="px-row-line">{item.line}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="px-group">
            <h2 className="px-group-title">Celebrations</h2>
            <p>Wedding and event invitations, video invites, event websites and memory videos.</p>
            <p><Link className="px-link" to="/celebrations">See celebration designs and prices</Link></p>
          </div>
        </div>
      </section>
      <ContactBand title="Not sure which service you need?" text="Tell us the problem in your own words on WhatsApp. We will suggest the smallest thing that solves it." />
    </>
  )
}
