import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { maskPhone } from '../../lib/auth/mask'
import { authErrorMessage } from '../../lib/auth/errors'

function safeAvatar(url) {
  return typeof url === 'string' && url.startsWith('https://') ? url : ''
}

export default function UserMenu({ variant = 'desktop', onNavigate }) {
  const { user, profile, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef(null)
  const navigate = useNavigate()

  const name = profile?.full_name || user?.user_metadata?.full_name || user?.user_metadata?.name || 'Your account'
  const email = user?.email || ''
  const detail = email || (user?.phone ? maskPhone(user.phone) : 'Signed in')
  const avatar = safeAvatar(profile?.avatar_url || user?.user_metadata?.avatar_url || user?.user_metadata?.picture)

  useEffect(() => {
    if (!open || variant !== 'desktop') return undefined
    const onPointer = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, variant])

  async function logout() {
    if (pending) return
    setPending(true)
    setError('')
    try {
      await signOut()
      onNavigate?.()
      navigate('/login', { replace: true })
    } catch (err) {
      setError(authErrorMessage(err))
      setPending(false)
    }
  }

  const links = [
    ['/dashboard', 'Dashboard'],
    ['/dashboard/profile', 'Profile'],
    ['/dashboard/settings', 'Settings'],
  ]

  if (variant === 'drawer') {
    return (
      <div className="drawer-account">
        <p className="drawer-account-id">
          <strong>{name}</strong>
          <span>{detail}</span>
        </p>
        {links.map(([to, label]) => (
          <Link key={to} to={to} onClick={onNavigate}>
            {label}
          </Link>
        ))}
        <button type="button" onClick={logout} disabled={pending}>
          {pending ? 'Signing out...' : 'Log out'}
        </button>
        {error ? <p className="auth-error">{error}</p> : null}
      </div>
    )
  }

  return (
    <div className="nav-user" ref={ref}>
      <button
        type="button"
        className="nav-user-btn"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        {avatar ? <img src={avatar} alt="" /> : <span className="nav-user-fallback" aria-hidden="true">{name.slice(0, 1).toUpperCase()}</span>}
        <span className="nav-user-label">{name.split(' ')[0]}</span>
      </button>
      {open ? (
        <div className="nav-user-menu" role="menu">
          <div className="nav-user-id">
            <strong>{name}</strong>
            <span>{detail}</span>
          </div>
          {links.map(([to, label]) => (
            <Link key={to} to={to} role="menuitem" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <button type="button" role="menuitem" onClick={logout} disabled={pending}>
            {pending ? 'Signing out...' : 'Log out'}
          </button>
          {error ? <p className="auth-error">{error}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
