import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'

export default function AuthError() {
  const [params] = useSearchParams()
  const reason = params.get('reason')

  return (
    <div className="ag ag-page">
      <Seo title={`Sign-in problem | ${brand.name}`} noindex />
      <section className="ag-quiet" aria-labelledby="auth-error-title">
        <div className="ag-wrap">
          <div className="ag-quiet-card">
            <p className="ag-kicker">Sign in</p>
            <h1 id="auth-error-title">Sign-in could not be completed.</h1>
            <p>
              {reason === 'config'
                ? 'The account service is not configured for this deployment. Add the public Supabase URL and anon key, then try again.'
                : 'The provider returned an error, or the code expired. Start again from the sign-in page.'}
            </p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-solid" to="/login">Back to sign in</Link>
              <Link className="ag-btn ag-btn-line" to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
