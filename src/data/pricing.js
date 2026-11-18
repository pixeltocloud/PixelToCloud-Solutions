/**
 * Website packages. India sees rupees, everyone else sees US dollars.
 * The pricing table, offer popup and clinics page read from this file.
 * The pricing FAQ answer in catalog.js repeats the starting prices: update it too.
 */
export const packages = [
  {
    id: 'starter',
    name: 'Starter',
    price: { INR: 9999, USD: 299 },
    summary: 'A one-page site that gets you found and contacted.',
    features: [
      'One-page website, mobile first',
      'Google Business Profile clean-up',
      'WhatsApp and call buttons',
      'Launch within 7 days',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    badge: 'Most chosen',
    price: { INR: 19999, USD: 699 },
    summary: 'A full site built to rank on Google and be quoted by AI assistants.',
    features: [
      '5–7 pages: team, services, gallery, FAQ, contact',
      'Enquiry or appointment form with WhatsApp confirmation',
      'Google Business Profile set-up and review-request QR card',
      'Search and AI-answer basics: clear service pages, FAQ answers, structured data',
      'Consent checkbox and privacy notice on forms',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: { INR: 34999, USD: 1199 },
    summary: '{business}, plus pages and campaigns that bring in new enquiries.',
    features: [
      'Everything in {business}',
      'Dedicated pages for your main services',
      'WhatsApp reminders set up',
      'Google or Meta ads campaign set-up (ad spend extra)',
      'Monthly results report',
    ],
  },
]

export const carePlan = {
  price: { INR: 1499, USD: 49 },
  text: 'Optional care plan: hosting, backups and small updates every month.',
}

export const currencies = {
  INR: { locale: 'en-IN', code: 'INR', label: '₹ INR' },
  USD: { locale: 'en-US', code: 'USD', label: '$ USD' },
}

export function formatPrice(amount, currency) {
  const { locale, code } = currencies[currency] || currencies.USD
  return new Intl.NumberFormat(locale, { style: 'currency', currency: code, maximumFractionDigits: 0 }).format(amount)
}

export function startingPrice(currency) {
  return formatPrice(Math.min(...packages.map((item) => item.price[currency])), currency)
}
