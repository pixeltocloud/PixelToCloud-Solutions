import { createClient } from '@supabase/supabase-js'

let browserClient = null

function publicEnv(name) {
  const value = import.meta.env[name]
  if (!value || String(value).startsWith('your_')) return ''
  return value
}

export function isAuthConfigured() {
  return Boolean(publicEnv('NEXT_PUBLIC_SUPABASE_URL') && publicEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'))
}

export function getSupabase() {
  if (browserClient) return browserClient
  const url = publicEnv('NEXT_PUBLIC_SUPABASE_URL')
  const key = publicEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
  if (!url || !key) return null
  browserClient = createClient(url, key, {
    auth: {
      flowType: 'pkce',
      detectSessionInUrl: false,
      persistSession: true,
      autoRefreshToken: true,
    },
  })
  return browserClient
}
