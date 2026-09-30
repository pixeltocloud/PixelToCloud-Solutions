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
        title="Selected work"
        description="Premium brand sites, clinic sites, a CA practice, a security shop, and tools we shipped. Addresses are not listed."
        actions={[
          { label: 'Start a project', to: '/contact' },
          { label: 'Browse services', to: '/services', variant: 'secondary' },
        ]}
        points={[
          { label: 'Clinics', detail: 'Doctor and physiotherapy sites' },
          { label: 'Practices', detail: 'Tax and local businesses' },
          { label: 'Tools', detail: 'Trackers and private apps' },
          { label: 'Ownership', detail: 'You keep the code' },
        ]}
      />
      <FeaturedWork featuredOnly={false} compact hideHeading />
      <FinalCTA />
    </div>
  )
}
