import { getSupabase } from '../supabase/client'

function httpsUrl(value) {
  return typeof value === 'string' && value.startsWith('https://') ? value : null
}

function googleName(user) {
  const meta = user?.user_metadata || {}
  return meta.full_name || meta.name || null
}

function googleAvatar(user) {
  const meta = user?.user_metadata || {}
  return httpsUrl(meta.avatar_url) || httpsUrl(meta.picture)
}

export async function ensureProfile(user) {
  const supabase = getSupabase()
  if (!supabase || !user?.id) return null

  const { data: existing, error } = await supabase
    .from('profiles')
    .select('id, full_name, company_name, country, avatar_url, phone')
    .eq('id', user.id)
    .maybeSingle()

  if (error) throw error

  const name = googleName(user)
  const avatar = googleAvatar(user)
  const phone = user.phone || null

  if (!existing) {
    const { error: insertError } = await supabase.from('profiles').insert({
      id: user.id,
      full_name: name,
      avatar_url: avatar,
      phone,
    })
    if (insertError && insertError.code !== '23505') throw insertError
  } else {
    const patch = {}
    if (!existing.full_name && name) patch.full_name = name
    if (!existing.avatar_url && avatar) patch.avatar_url = avatar
    if (Object.keys(patch).length) {
      const { error: updateError } = await supabase.from('profiles').update(patch).eq('id', user.id)
      if (updateError) throw updateError
    }
  }

  const { data, error: readError } = await supabase
    .from('profiles')
    .select('id, full_name, company_name, country, avatar_url, phone, created_at, updated_at')
    .eq('id', user.id)
    .maybeSingle()
  if (readError) throw readError
  return data
}

export async function saveProfile(userId, fields) {
  const supabase = getSupabase()
  if (!supabase) throw new Error('config')
  const payload = {
    full_name: fields.full_name.trim() || null,
    company_name: fields.company_name.trim() || null,
    country: fields.country.trim() || null,
  }
  const { data, error } = await supabase
    .from('profiles')
    .update(payload)
    .eq('id', userId)
    .select('id, full_name, company_name, country, avatar_url, phone, created_at, updated_at')
    .maybeSingle()
  if (error) throw error
  return data
}
