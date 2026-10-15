export function maskPhone(e164) {
  const value = String(e164 || '')
  if (value.length < 6) return 'your phone'
  return `${value.slice(0, 3)} •••• ${value.slice(-2)}`
}
