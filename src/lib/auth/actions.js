import { ensureProfile } from './profile'
import { AuthConfigError, logAuthEvent } from './errors'
import { getSupabase } from '../supabase/client'

function requireClient() {
  const supabase = getSupabase()
  if (!supabase) throw new AuthConfigError()
  return supabase
}

export async function signInWithGoogle() {
  const supabase = requireClient()
  logAuthEvent('Google OAuth started')
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: { prompt: 'select_account' },
    },
  })
  if (error) throw error
}

export async function sendPhoneOtp(phone) {
  const supabase = requireClient()
  logAuthEvent('OTP request initiated')
  const { error } = await supabase.auth.signInWithOtp({ phone })
  if (error) throw error
}

export async function verifyPhoneOtp(phone, token) {
  const supabase = requireClient()
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token,
    type: 'sms',
  })
  if (error) {
    logAuthEvent('OTP verification failed', error.code || 'unknown')
    throw error
  }
  logAuthEvent('User authenticated')
  if (data.user) await ensureProfile(data.user)
  return data
}

export async function completeSession(user) {
  if (!user) return null
  logAuthEvent('User authenticated')
  return ensureProfile(user)
}
