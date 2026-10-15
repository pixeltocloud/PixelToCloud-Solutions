import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'

export default function AuthError() {
  const [params] = useSearchParams()
  const reason = params.get('reason')

  return (
    <section className="ag-sheet">
      <div className="ag-wrap ag-prose">
        <Seo title={`Sign-in problem | ${brand.name}`} noindex />
        <h1 className="ag-ink">Sign-in could not be completed.</h1>
        <p>
          {reason === 'config'
            ? 'The account service is not configured for this deployment. Add the public Supabase URL and anon key, then try again.'
            : 'The provider returned an error, or the code expired. Start again from the sign-in page.'}
        </p>
        <p><Link to="/login">Back to sign in</Link></p>
      </div>
    </section>
  )
}
