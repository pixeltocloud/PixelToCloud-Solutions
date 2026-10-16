import { Link, Navigate, useSearchParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import LoginCard from '../components/auth/LoginCard'
import { useAuth } from '../hooks/useAuth'
import { brand } from '../config/brand'
import { safeRedirect } from '../lib/auth/redirect'
import './Auth.css'

export default function Login() {
  const [params] = useSearchParams()
  const redirectTo = safeRedirect(params.get('redirect') || params.get('next'))
  const { user, loading } = useAuth()

  if (!loading && user) return <Navigate to={redirectTo} replace />

  return (
    <div className="ag ag-page login-page">
      <Seo title="Sign in | PixelToCloud" description="Sign in with Google or a phone code." noindex />
      <section className="ag-hero login-hero" aria-labelledby="login-title">
        <div className="ag-wrap login-hero-grid">
          <div className="login-visual-copy">
            <p className="ag-eye">Client access</p>
            <h1 id="login-title">The work, kept in one place.</h1>
            <p className="ag-lead">
              Follow a project from the first enquiry through launch. You keep the code when it is done.
            </p>
            <ul className="login-notes" aria-label="Why sign in">
              <li>Launch within 7 days, or the payment is returned.</li>
              <li>Offices in Gurugram and Alwar.</li>
              <li>Easy My Tax · Harish Renova · Saini Handicrafts · Revital Physiocare</li>
            </ul>
            <p className="login-home-link">
              <Link to="/">← Back to {brand.name}</Link>
            </p>
          </div>
          <div className="login-panel">
            <LoginCard redirectTo={redirectTo} />
          </div>
        </div>
      </section>
    </div>
  )
}

export function LegacyAuthRedirect() {
  const [params] = useSearchParams()
  const redirectTo = safeRedirect(params.get('redirect') || params.get('next'))
  return <Navigate to={`/login?redirect=${encodeURIComponent(redirectTo)}`} replace />
}
