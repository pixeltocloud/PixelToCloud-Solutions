import Seo from '../components/seo/Seo'
import './Legal.css'

export default function Terms() {
  return (
    <article className="legal page-enter">
      <Seo />
      <div className="container legal-inner">
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: September 13, 2026</p>
        <p>
          By using pixeltocloud.com you agree to these terms. If you do not agree, please do not use the site.
        </p>
        <h2>Website content</h2>
        <p>
          Case studies, metrics, and descriptions reflect client engagements and lab prototypes. Lab demos may show
          simulated values for demonstration. Portfolio content is provided for informational purposes.
        </p>
        <h2>No professional advice</h2>
        <p>
          Content on this site does not constitute legal, financial, medical, or other regulated advice. Project scoping
          happens through direct engagement.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Site design, branding, and materials are owned by PixelToCloud Solutions unless otherwise noted. Client work
          remains subject to the agreements executed for those projects.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Do not misuse the site, attempt unauthorized access, submit spam, or use contact channels for unlawful
          purposes.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          The website is provided “as is.” To the fullest extent permitted by law, PixelToCloud is not liable for
          damages arising from use of the site. Project delivery terms are governed by separate written agreements.
        </p>
        <h2>Contact</h2>
        <p>
          <a href="mailto:pixeltocloud@gmail.com">pixeltocloud@gmail.com</a>
        </p>
      </div>
    </article>
  )
}
