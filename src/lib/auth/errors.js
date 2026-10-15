export class AuthConfigError extends Error {
  constructor() {
    super('Sign-in is not available until the site is connected to its account service.')
    this.name = 'AuthConfigError'
  }
}

export function authErrorMessage(error) {
  if (error instanceof AuthConfigError) return error.message
  const code = String(error?.code || '').toLowerCase()
  const message = String(error?.message || '').toLowerCase()
  const status = Number(error?.status || 0)

  if (code === 'sms_send_failed' || message.includes('sending confirmation') || message.includes('sms provider')) {
    if (message.includes('compliance') || message.includes('kyc') || message.includes('trust hub') || message.includes('20003')) {
      return "We couldn't send the text. The messaging account still needs compliance approval before a code can be delivered."
    }
    return "We couldn't send a text to that number. Please try again in a moment."
  }
  if (code === 'otp_expired' || (message.includes('expired') && message.includes('invalid'))) {
    return 'The verification code is incorrect or has expired. Please request a new code.'
  }
  if (message.includes('expired')) {
    return 'This code has expired. Please request a new one.'
  }
  if (code === 'otp_disabled' || (code.includes('otp') && !code.includes('sms')) || message.includes('invalid otp')) {
    return "We couldn't verify that code. Please check it and try again."
  }
  if (
    status === 429
    || code.includes('rate')
    || code.includes('over_request')
    || code.includes('over_sms')
    || message.includes('rate limit')
    || message.includes('too many')
  ) {
    return 'Too many attempts. Please wait a few minutes and try again.'
  }
  if (code.includes('phone') || message.includes('phone number') || message.includes('sms')) {
    return 'Please enter a valid phone number.'
  }
  if (code.includes('oauth') || code.includes('provider') || message.includes('oauth') || message.includes('provider')) {
    return 'Google sign-in could not be completed. Please try again.'
  }
  return 'Something went wrong. Please try again.'
}

export function logAuthEvent(event, detail) {
  if (detail) console.info(event, detail)
  else console.info(event)
}
