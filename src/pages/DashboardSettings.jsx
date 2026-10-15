import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import { useAuth } from '../hooks/useAuth'
import { authErrorMessage } from '../lib/auth/errors'

export default function DashboardSettings() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function logout() {
    if (pending) return
    setPending(true)
    setError('')
    try {
      await signOut()
      navigate('/login', { replace: true })
    } catch (err) {
      setError(authErrorMessage(err))
      setPending(false)
    }
  }

  return (
    <DashboardLayout title="Settings | PixelToCloud" description="Account settings.">
      <h1>Settings</h1>
      <p className="dash-lead">
        Phone and email come from Google or the phone code you used. Update your name, company, and country on your <Link to="/dashboard/profile">profile</Link>.
      </p>
      {error ? <p className="auth-error" role="alert">{error}</p> : null}
      <button className="btn btn-primary" type="button" onClick={logout} disabled={pending}>
        {pending ? 'Signing out...' : 'Log out'}
      </button>
    </DashboardLayout>
  )
}
