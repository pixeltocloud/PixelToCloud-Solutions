import { Navigate, useSearchParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import LoginCard from '../components/auth/LoginCard'
import { useAuth } from '../hooks/useAuth'
import { safeRedirect } from '../lib/auth/redirect'
import './Studio.css'
import './Auth.css'

export default function Login() {
  const [params] = useSearchParams()
  const redirectTo = safeRedirect(params.get('redirect') || params.get('next'))
  const { user, loading } = useAuth()

  if (!loading && user) return <Navigate to={redirectTo} replace />

  return (
    <div className="studio login-split">
      <Seo title="Sign in | PixelToCloud" description="Sign in with Google or a phone code." noindex />
      <aside className="login-visual">
        <div className="login-visual-copy">
          <p className="login-brand">PixelToCloud</p>
          <h2>The work, kept in one place.</h2>
          <p>Follow a project from the first enquiry through launch. You keep the code when it is done.</p>
        </div>
        <div className="login-notes">
          <p>Launch within 7 days, or the payment is returned.</p>
          <p>Offices in Gurugram and Alwar.</p>
          <p className="login-clients">Easy My Tax, Harish Renova, Saini Handicrafts, Revital Physiocare</p>
        </div>
      </aside>
      <div className="login-panel">
        <LoginCard redirectTo={redirectTo} />
      </div>
    </div>
  )
}

export function LegacyAuthRedirect() {
  const [params] = useSearchParams()
  const redirectTo = safeRedirect(params.get('redirect') || params.get('next'))
  return <Navigate to={`/login?redirect=${encodeURIComponent(redirectTo)}`} replace />
}
