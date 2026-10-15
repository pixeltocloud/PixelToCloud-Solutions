import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ensureProfile } from '../lib/auth/profile'
import { logAuthEvent } from '../lib/auth/errors'
import { getSupabase, isAuthConfigured } from '../lib/supabase/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = getSupabase()
    if (!supabase) {
      setLoading(false)
      return undefined
    }

    let active = true
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setUser(nextSession?.user ?? null)
      setLoading(false)
    })

    return () => {
      active = false
      subscription.subscription.unsubscribe()
    }
  }, [])

  const userRef = useRef(user)
  userRef.current = user

  useEffect(() => {
    if (!user?.id) {
      setProfile(null)
      return undefined
    }
    let active = true
    ensureProfile(userRef.current)
      .then((next) => {
        if (active) setProfile(next)
      })
      .catch(() => {
        if (active) setProfile(null)
      })
    return () => {
      active = false
    }
  }, [user?.id])

  const value = useMemo(
    () => ({
      session,
      user,
      profile,
      loading,
      configured: isAuthConfigured(),
      setProfile,
      async signOut() {
        const supabase = getSupabase()
        if (!supabase) {
          setSession(null)
          setUser(null)
          setProfile(null)
          return
        }
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        logAuthEvent('User logged out')
      },
    }),
    [session, user, profile, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside AuthProvider')
  return value
}
