import FeaturedWork from '../components/sections/FeaturedWork'
import FinalCTA from '../components/sections/FinalCTA'
import PageInkHero from '../components/ui/PageInkHero'
import Seo from '../components/seo/Seo'
import './WorkPage.css'

export default function Work() {
  return (
    <div className="page-enter work-page">
      <Seo />
      <PageInkHero
        title="Proof from production—including this site"
        description="Case studies from finance, healthcare, commerce, and interactive 3D. pixeltocloud.com is our own agency proof of craft."
        actions={[
          { label: 'Start a project', to: '/contact' },
          { label: 'Browse services', to: '/services', variant: 'secondary' },
        ]}
        points={[
          { label: 'Live agency site', detail: 'This site is client zero' },
          { label: 'Finance & CA', detail: 'Portals with real ownership' },
          { label: 'Healthcare', detail: 'Booking that converts patients' },
          { label: 'Commerce & 3D', detail: 'Storefronts to WebGL tools' },
        ]}
      />
      <FeaturedWork featuredOnly={false} compact hideHeading />
      <FinalCTA />
    </div>
  )
}
