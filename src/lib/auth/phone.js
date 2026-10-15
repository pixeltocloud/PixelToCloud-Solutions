import { getCountries, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js'

export { maskPhone } from './mask.js'

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

function flagEmoji(iso) {
  return iso.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}

export const countries = getCountries()
  .map((iso) => {
    let name = iso
    try {
      name = regionNames.of(iso) || iso
    } catch {
      name = iso
    }
    return { iso, name, dial: getCountryCallingCode(iso), flag: flagEmoji(iso) }
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'en'))

export function toE164(national, iso) {
  const digits = String(national || '').replace(/[^\d]/g, '')
  if (!digits) return null
  const parsed = parsePhoneNumberFromString(digits, iso)
  if (!parsed || !parsed.isValid()) return null
  return parsed.number
}

export function cooldownKey(e164) {
  let hash = 0
  for (const char of String(e164 || '')) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return `ptc-otp-cool-${hash.toString(16)}`
}

export function readCooldown(e164) {
  const raw = sessionStorage.getItem(cooldownKey(e164))
  const until = Number(raw || 0)
  return Math.max(0, Math.ceil((until - Date.now()) / 1000))
}

export function startCooldown(e164, seconds = 30) {
  sessionStorage.setItem(cooldownKey(e164), String(Date.now() + seconds * 1000))
  return seconds
}
