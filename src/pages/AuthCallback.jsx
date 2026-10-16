import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { completeSession } from '../lib/auth/actions'
import { takeRedirect } from '../lib/auth/redirect'
import { getSupabase } from '../lib/supabase/client'
import './Auth.css'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function finish() {
      const params = new URLSearchParams(window.location.search)
      if (params.get('error') || params.get('error_description')) {
        if (active) setError('Google sign-in could not be completed. Please try again.')
        return
      }

      const supabase = getSupabase()
      if (!supabase) {
        if (active) setError('Sign-in is not available until the site is connected to its account service.')
        return
      }

      const code = params.get('code')
      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
        if (exchangeError) {
          if (active) setError('Google sign-in could not be completed. Please try again.')
          return
        }
      }

      const { data, error: userError } = await supabase.auth.getUser()
      if (userError || !data.user) {
        if (active) setError('Google sign-in could not be completed. Please try again.')
        return
      }

      try {
        await completeSession(data.user)
      } catch {
        if (active) setError('Your profile could not be saved. Open your profile and try again.')
        return
      }

      if (active) navigate(takeRedirect(), { replace: true })
    }

    finish()
    return () => {
      active = false
    }
  }, [navigate])

  return (
    <div className="ag ag-page">
      <Seo title="Signing in | PixelToCloud" noindex />
      <section className="ag-quiet" aria-live="polite">
        <div className="ag-wrap">
          <div className="ag-quiet-card" role="status">
            <p className="ag-kicker">Sign in</p>
            {error ? (
              <>
                <h1>Sign-in could not finish</h1>
                <p className="auth-error" role="alert">{error}</p>
                <div className="ag-actions">
                  <Link className="ag-btn ag-btn-solid" to="/login">Back to sign in</Link>
                  <Link className="ag-btn ag-btn-line" to="/">Go home</Link>
                </div>
              </>
            ) : (
              <>
                <h1>Signing you in…</h1>
                <p>Finishing Google sign-in and opening your account.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
