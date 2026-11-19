import { contact } from '../data/founders'
import { brand } from '../config/brand'

/**
 * Sends a website enquiry by email through Web3Forms.
 * Throws unless the service confirms it accepted the message, so the form never
 * tells a visitor "sent" when it was not.
 */
export async function submitInquiry(fields) {
  const { _subject, ...rest } = fields
  const response = await fetch(contact.formEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: contact.formAccessKey,
      subject: _subject || `${brand.name} inquiry from ${fields.name || 'a visitor'}`,
      from_name: 'PixelToCloud website',
      replyto: fields.email || undefined,
      botcheck: '',
      page: typeof window === 'undefined' ? '' : window.location.href,
      ...rest,
    }),
  })

  let result = null
  try {
    result = await response.json()
  } catch {
    // fall through to the error below
  }
  if (!response.ok || !result || result.success !== true) {
    throw new Error(result?.message || 'Submission failed')
  }
}
