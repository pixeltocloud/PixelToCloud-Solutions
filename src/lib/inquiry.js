import { contact } from '../data/founders'
import { brand } from '../config/brand'

export async function submitInquiry(fields) {
  const response = await fetch(contact.formEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...fields,
      _subject: `${brand.name} inquiry from ${fields.name || 'a visitor'}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  if (!response.ok) {
    throw new Error('Submission failed')
  }
}
