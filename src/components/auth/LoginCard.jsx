import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from './GoogleButton'
import PhoneInput from './PhoneInput'
import OTPInput from './OTPInput'
import AuthDivider from './AuthDivider'
import { signInWithGoogle, sendPhoneOtp, verifyPhoneOtp } from '../../lib/auth/actions'
import { authErrorMessage } from '../../lib/auth/errors'
import { maskPhone, readCooldown, startCooldown, toE164 } from '../../lib/auth/phone'
import { rememberRedirect } from '../../lib/auth/redirect'

export default function LoginCard({ redirectTo }) {
  const navigate = useNavigate()
  const [country, setCountry] = useState('IN')
  const [national, setNational] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState('phone')
  const [pending, setPending] = useState('')
  const [error, setError] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const busy = useRef(false)

  useEffect(() => {
    if (cooldown <= 0) return undefined
    const timer = window.setInterval(() => {
      setCooldown((current) => (current > 0 ? current - 1 : 0))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [cooldown])

  async function continueWithGoogle() {
    if (pending) return
    setError('')
    setPending('google')
    rememberRedirect(redirectTo)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(authErrorMessage(err))
      setPending('')
    }
  }

  async function sendCode(event) {
    event?.preventDefault()
    if (pending) return
    const e164 = step === 'code' ? phone : toE164(national, country)
    if (!e164) {
      setError('Please enter a valid phone number.')
      return
    }
    setError('')
    setPending('send')
    rememberRedirect(redirectTo)
    try {
      await sendPhoneOtp(e164)
      setPhone(e164)
      setCode('')
      setStep('code')
      setCooldown(Math.max(readCooldown(e164), startCooldown(e164)))
    } catch (err) {
      setError(authErrorMessage(err))
    } finally {
      setPending('')
    }
  }

  async function verifyCode(nextCode = code) {
    if (busy.current || nextCode.length !== 6) return
    busy.current = true
    setError('')
    setPending('verify')
    try {
      await verifyPhoneOtp(phone, nextCode)
      navigate(redirectTo, { replace: true })
    } catch (err) {
      setError(authErrorMessage(err))
    } finally {
      busy.current = false
      setPending('')
    }
  }

  function onCodeChange(next) {
    setCode(next)
    setError('')
    if (next.length === 6) verifyCode(next)
  }

  function changePhone() {
    setStep('phone')
    setCode('')
    setError('')
  }

  return (
    <div className="login-card">
      <h1>Sign in</h1>
      <p className="auth-lead">Use Google, or a code sent to your phone. A new account is created the first time you continue.</p>

      <GoogleButton pending={pending === 'google'} disabled={Boolean(pending)} onClick={continueWithGoogle} />
      <AuthDivider />

      {step === 'phone' ? (
        <form onSubmit={sendCode}>
          <PhoneInput
            country={country}
            national={national}
            disabled={Boolean(pending)}
            onCountry={setCountry}
            onNational={(value) => {
              setNational(value)
              setError('')
            }}
          />
          {error ? <p className="auth-error" role="alert">{error}</p> : null}
          <button className="btn btn-primary auth-submit" type="submit" disabled={Boolean(pending)}>
            {pending === 'send' ? 'Sending code...' : 'Continue'}
          </button>
        </form>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            verifyCode()
          }}
        >
          <h2>Enter the code</h2>
          <p className="auth-lead">Sent to {maskPhone(phone)}. It expires shortly, so enter it on this screen.</p>
          <OTPInput value={code} onChange={onCodeChange} disabled={pending === 'verify'} invalid={Boolean(error)} />
          {error ? <p className="auth-error" role="alert">{error}</p> : null}
          <button className="btn btn-primary auth-submit" type="submit" disabled={Boolean(pending) || code.length !== 6}>
            {pending === 'verify' ? 'Verifying...' : 'Verify code'}
          </button>
          <div className="auth-code-actions">
            {cooldown > 0 ? (
              <span>Resend code in {cooldown}s</span>
            ) : (
              <button type="button" onClick={sendCode} disabled={Boolean(pending)}>
                Resend code
              </button>
            )}
            <button type="button" onClick={changePhone} disabled={Boolean(pending)}>
              Change phone number
            </button>
          </div>
        </form>
      )}

      <p className="auth-legal">
        By continuing, you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </div>
  )
}
