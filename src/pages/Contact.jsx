import ContactSection from '../components/sections/ContactSection'
import FAQ from '../components/sections/FAQ'
import PageInkHero from '../components/ui/PageInkHero'
import Seo from '../components/seo/Seo'
import { contact } from '../data/founders'
import './ContactPage.css'

export default function Contact() {
  return (
    <div className="page-enter contact-page">
      <Seo />
      <PageInkHero
        title="Let's build something that converts"
        description="Direct 1-on-1 access to the founders. Share goals—we reply with a roadmap and ballpark the same business day."
        actions={[
          {
            label: 'WhatsApp us',
            href: contact.whatsappLink,
            target: '_blank',
            rel: 'noreferrer',
          },
          {
            label: 'Request a 15-min call',
            href: contact.appointmentLink,
            target: '_blank',
            rel: 'noreferrer',
            variant: 'secondary',
          },
        ]}
        points={[
          { label: 'Same-day', detail: 'Typical founder reply (IST)' },
          { label: 'NDA-ready', detail: 'Before detailed tech talk' },
          { label: 'Fixed scope', detail: 'Milestone payments only' },
          { label: 'No sales layer', detail: 'Engineers on the call' },
        ]}
      />
      <ContactSection compactHero />
      <FAQ mode="faq" />
    </div>
  )
}
