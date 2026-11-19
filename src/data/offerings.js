/**
 * Everything we sell, in one place.
 * Prices are "starting from" amounts. India sees rupees, everyone else sees US dollars.
 * unit: '' for one-time, '/month' for monthly.
 * The home page, services page, pricing page, celebrations page and nav read from this file.
 */

export const serviceGroups = [
  {
    id: 'online',
    title: 'Websites and online stores',
    text: 'A website that loads fast on a phone and makes it easy to call, WhatsApp or book.',
    items: [
      { slug: 'web-development', name: 'Business websites', line: 'For shops, clinics, firms and service businesses.', from: { INR: 9999, USD: 299 } },
      { slug: 'ecommerce', name: 'Online stores', line: 'Sell products with a catalogue, cart and payments.', from: { INR: 24999, USD: 799 } },
      { slug: 'cloud-devops', name: 'Hosting and website care', line: 'Hosting, backups, security and small changes every month.', from: { INR: 1499, USD: 49 }, unit: '/month' },
    ],
  },
  {
    id: 'found',
    title: 'Get found and get customers',
    text: 'Show up when people nearby search on Google, and keep your social pages active.',
    items: [
      { slug: 'google-business-profile', name: 'Google profile and reviews', line: 'Set up your Google listing, photos, posts and a review system.', from: { INR: 2999, USD: 99 } },
      { slug: 'seo', name: 'Search engine optimisation', line: 'Rank for the searches your customers actually make.', from: { INR: 4999, USD: 199 }, unit: '/month' },
      { slug: 'social-media-management', name: 'Social media management', line: 'Posts and reels for Instagram and Facebook, every week.', from: { INR: 6999, USD: 249 }, unit: '/month' },
      { slug: 'digital-marketing', name: 'Google and Meta ads', line: 'Ads that send enquiries, with clear monthly reports.', from: { INR: 4999, USD: 199 }, unit: '/month' },
      { slug: 'ai-marketing-automation', name: 'Content planning with AI', line: 'A month of posts planned, written and scheduled for approval.', from: { INR: 3999, USD: 149 }, unit: '/month' },
    ],
  },
  {
    id: 'time',
    title: 'WhatsApp, AI and software',
    text: 'Stop doing the same work by hand. Let software reply, remind and keep records.',
    items: [
      { slug: 'whatsapp-automation', name: 'WhatsApp automation', line: 'Instant replies, bookings, reminders and broadcasts.', from: { INR: 2999, USD: 99 } },
      { slug: 'ai-automation', name: 'AI chatbots and assistants', line: 'Answer common questions and collect leads, day and night.', from: { INR: 14999, USD: 499 } },
      { slug: 'web-applications', name: 'Custom software', line: 'Billing, bookings, stock, fees or a client portal, built for you.', from: { INR: 49999, USD: 1499 } },
      { slug: 'mobile-app-development', name: 'Mobile apps', line: 'Android and iPhone apps when a website is not enough.', from: { INR: 79999, USD: 2499 } },
    ],
  },
  {
    id: 'design',
    title: 'Design and video',
    text: 'Everything your business needs to look the same everywhere.',
    items: [
      { slug: 'branding', name: 'Logo and brand design', line: 'Logo, visiting cards, letterhead, menus and brochures.', from: { INR: 2499, USD: 89 } },
      { slug: 'video-production', name: 'Business videos and reels', line: 'Reels from ₹799 each. Intro and product videos with voice-over.', from: { INR: 799, USD: 29 }, unit: '/reel' },
      { slug: 'festival-designs', name: 'Festival and offer posters', line: 'Diwali, Holi, Eid and sale designs with your logo.', from: { INR: 999, USD: 39 } },
    ],
  },
]

export const celebrationItems = [
  {
    id: 'digital-invites',
    name: 'Digital invitation cards',
    line: 'Card and PDF invites to share on WhatsApp, in Hindi or English.',
    includes: ['Your choice of design style', 'Main card plus one function card', 'Two rounds of changes', 'Delivered in 2 days'],
    from: { INR: 499, USD: 19 },
  },
  {
    id: 'video-invites',
    name: 'Video invitations',
    line: 'A 30 to 60 second invite with your photos, music and event details.',
    includes: ['Photos or illustrated couple', 'Music of your choice', 'Event schedule and venue map', 'Delivered in 3 days'],
    from: { INR: 999, USD: 39 },
  },
  {
    id: 'caricature-invites',
    name: 'Caricature and illustrated invites',
    line: 'Hand-drawn style portraits of the couple or family on the card.',
    includes: ['Illustration from your photos', 'Card and video versions', 'Save-the-date included'],
    from: { INR: 1999, USD: 69 },
  },
  {
    id: 'event-websites',
    name: 'Wedding and event websites',
    line: 'One page with your story, schedule, venue map, RSVP and photos.',
    includes: ['Your own web address', 'RSVP answers sent to WhatsApp', 'Photo gallery after the event', 'Online for 12 months'],
    from: { INR: 4999, USD: 149 },
  },
  {
    id: 'memory-videos',
    name: 'Highlight and memory videos',
    line: 'Short films from your photos and clips, for weddings, birthdays and anniversaries.',
    includes: ['Up to 150 photos or clips', 'Music and titles', 'Square and wide versions'],
    from: { INR: 2499, USD: 79 },
  },
  {
    id: 'festival-greetings',
    name: 'Festival greetings for businesses',
    line: 'A pack of greeting designs with your logo for Diwali, Holi, Eid and New Year.',
    includes: ['10 designs per pack', 'Post and WhatsApp status sizes', 'Your logo and contact on each'],
    from: { INR: 999, USD: 39 },
  },
]

export const celebrationOccasions = [
  'Weddings', 'Engagement', 'Haldi and Mehndi', 'Birthdays', 'Griha pravesh', 'Anniversaries',
  'Baby shower', 'Mundan and naming', 'Retirement', 'Shop openings', 'Corporate events',
]

export const monthlyPlans = [
  {
    id: 'care',
    name: 'Website care',
    price: { INR: 1499, USD: 49 },
    text: 'Hosting, backups, security updates and up to one hour of small changes every month.',
  },
  {
    id: 'google',
    name: 'Google growth',
    price: { INR: 2499, USD: 99 },
    text: 'Weekly Google posts, photo updates, a review-request QR card and a monthly report.',
  },
  {
    id: 'social',
    name: 'Social media',
    price: { INR: 6999, USD: 249 },
    text: '12 posts and 4 reels a month for Instagram and Facebook, approved by you before they go live.',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp assistant',
    price: { INR: 1999, USD: 49 },
    text: 'Running cost for your WhatsApp bot after setup: hosting, replies, reminders and monthly tuning. WhatsApp’s own message charges are billed at cost.',
    note: 'Setup from ₹14,999 or $499.',
  },
]

/** Plain-language needs shown on the home page, each linking to the right service. */
export const needs = [
  { text: 'Customers cannot find us on Google', to: '/services/google-business-profile' },
  { text: 'We need a website, or a better one', to: '/services/web-development' },
  { text: 'Too many WhatsApp messages to answer', to: '/services/whatsapp-automation' },
  { text: 'Our Instagram needs regular posts', to: '/services/social-media-management' },
  { text: 'We still keep records on paper or Excel', to: '/services/web-applications' },
  { text: 'We need an invitation for a wedding or event', to: '/celebrations' },
]

export function findOffering(slug) {
  for (const group of serviceGroups) {
    const item = group.items.find((entry) => entry.slug === slug)
    if (item) return { ...item, group }
  }
  return null
}
