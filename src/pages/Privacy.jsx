import Seo from '../components/seo/Seo'
import { LegalNotice } from '../components/site/blocks'
import { brand } from '../config/brand'

export default function Privacy() {
  return (
    <article className="ag ag-page">
      <Seo title={`Privacy | ${brand.name}`} description="How PixelToCloud collects and uses information on this site." path="/privacy" />
      <section className="ag-hero-light">
        <div className="ag-wrap ag-prose">
          <p className="ag-eye">Legal</p>
          <h1 className="ag-ink">Privacy Policy</h1>
          <LegalNotice />
          <p className="ag-lead">Last updated: October 3, 2026</p>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap ag-prose">
          <p>
            PixelToCloud Solutions (“we”, “us”) operates pixeltocloud.com. This policy explains what information we collect
            when you use the site or contact us, and how we use it.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Contact details you submit (name, email, phone) via the project inquiry form</li>
            <li>Account details you save: name, company, country, and the phone or email used to sign in</li>
            <li>Project details you choose to share in the message fields</li>
            <li>Basic technical data such as browser type and pages visited (if analytics is enabled)</li>
          </ul>
          <h2>How we use information</h2>
          <ul>
            <li>To respond to project inquiries and provide proposals</li>
            <li>To keep your account, sign you in, and call registered customers back</li>
            <li>To improve the website and fix technical issues</li>
            <li>To comply with legal obligations when required</li>
          </ul>
          <h2>Accounts</h2>
          <p>
            Account records are stored in Supabase. We do not store passwords. Phone sign-in uses a short-lived code sent by text,
            and Google sign-in shares the name and verified email Google provides. You can update your profile after you
            sign in. Each person can read and update only their own profile.
          </p>
          <h2>Form processing</h2>
          <p>
            Inquiry forms are delivered via FormSubmit to pixeltocloud@gmail.com. Do not submit passwords or highly
            sensitive secrets through the public form—we can execute an NDA before detailed technical discussion.
          </p>
          <h2>Cookies & analytics</h2>
          <p>
            We may use privacy-respecting analytics that does not sell personal data. You can request that we disable
            analytics for your visit by contacting us. Theme preference may be stored in localStorage on your device.
            Sign-in keeps a session in the browser so you stay signed in.
          </p>
          <h2>Data retention</h2>
          <p>
            Inquiry emails are retained as needed to manage conversations and business records, then deleted or archived
            according to our internal practices.
          </p>
          <h2>Contact</h2>
          <p>
            Questions: <a href="mailto:pixeltocloud@gmail.com">pixeltocloud@gmail.com</a>
          </p>
        </div>
      </section>
    </article>
  )
}
