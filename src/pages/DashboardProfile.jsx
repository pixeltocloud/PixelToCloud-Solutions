import { useEffect, useState } from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import { useAuth } from '../hooks/useAuth'
import CountrySelect from '../components/auth/CountrySelect'
import { countries } from '../lib/auth/phone'
import { saveProfile } from '../lib/auth/profile'
import { authErrorMessage } from '../lib/auth/errors'

export default function DashboardProfile() {
  const { user, profile, setProfile } = useAuth()
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setFullName(profile?.full_name || '')
    setCompany(profile?.company_name || '')
    setCountry(profile?.country || '')
  }, [profile])

  async function onSubmit(event) {
    event.preventDefault()
    if (pending || !user) return
    setPending(true)
    setError('')
    setSaved(false)
    try {
      const next = await saveProfile(user.id, {
        full_name: fullName,
        company_name: company,
        country,
      })
      setProfile(next)
      setSaved(true)
    } catch (err) {
      setError(authErrorMessage(err))
    } finally {
      setPending(false)
    }
  }

  return (
    <DashboardLayout title="Profile | PixelToCloud" description="Update your PixelToCloud profile.">
      <h1>Profile</h1>
      <p className="dash-lead">Your name, company, and country. Phone and email stay tied to the way you sign in.</p>
      <form className="profile-form" onSubmit={onSubmit}>
        <label>
          <span>Full name</span>
          <input value={fullName} onChange={(event) => setFullName(event.target.value)} autoComplete="name" maxLength={120} />
        </label>
        <label>
          <span>Company</span>
          <input value={company} onChange={(event) => setCompany(event.target.value)} autoComplete="organization" maxLength={160} />
        </label>
        <CountrySelect
          id="profile-country"
          value={country}
          options={countries}
          getValue={(item) => item.name}
          getLabel={(item) => item.name}
          onChange={setCountry}
        />
        <fieldset className="profile-locked">
          <legend>Tied to the way you sign in</legend>
          <label>
            <span>Phone</span>
            <input value={user?.phone || 'Not provided'} readOnly />
          </label>
          <label>
            <span>Email</span>
            <input value={user?.email || 'Not provided'} readOnly />
          </label>
        </fieldset>
        {error ? <p className="auth-error" role="alert">{error}</p> : null}
        {saved ? <p className="auth-ok" role="status">Changes saved.</p> : null}
        <button className="btn btn-primary auth-submit" type="submit" disabled={pending}>
          {pending ? 'Saving...' : 'Save changes'}
        </button>
      </form>
    </DashboardLayout>
  )
}
