/** Writes public/llms.txt, a plain summary of the business for AI assistants, from the site data. */
import fs from 'node:fs'
import { serviceGroups, celebrationItems, monthlyPlans } from '../src/data/offerings.js'
import { packages } from '../src/data/pricing.js'
import { rajasthanDistricts, indianStates, countries } from '../src/data/places.js'
import { products } from '../src/data/products.js'
import { clientSites } from '../src/data/clientSites.js'

const inr = (n) => '₹' + n.toLocaleString('en-IN')
let t = '# PixelToCloud Solutions\n\n> Web and software studio in Alwar, Rajasthan, India (GSTIN 08CSRPA1400M1ZS). We build websites, online stores, custom software and mobile apps, set up WhatsApp automation and AI chatbots, and handle SEO, Google Business Profile, social media, ads, logo design, videos and digital wedding invitations for businesses in all of India and abroad. Fixed written quotes, websites launched in 7 days, and the client owns the website and domain.\n\n'
t += 'Contact: WhatsApp or call +91 82193 52124, email contact@pixeltocloud.com. Hours: Monday to Sunday, 9 am to 7 pm IST. Address: Ram Mandir, 30 Beegha, Shalimar, Alwar, Rajasthan 301001, India.\n\n'
t += '## Website packages (one-time)\n\n' + packages.map((p) => `- ${p.name}: ${inr(p.price.INR)} in India, $${p.price.USD} outside India. ${p.summary.replace('{business}', 'Business')}`).join('\n') + '\n\n'
t += '## Monthly plans\n\n' + monthlyPlans.map((p) => `- ${p.name}: ${inr(p.price.INR)} a month. ${p.text}`).join('\n') + '\n\n'
t += '## Services and starting prices\n\n'
for (const g of serviceGroups) {
  t += `### ${g.title}\n\n` + g.items.map((i) => `- [${i.name}](https://pixeltocloud.com/services/${i.slug}): from ${inr(i.from.INR)}${i.unit || ''}. ${i.line}`).join('\n') + '\n\n'
}
t += '### Celebrations\n\n' + celebrationItems.map((i) => `- ${i.name}: from ${inr(i.from.INR)}. ${i.line}`).join('\n') + '\n\nMore: https://pixeltocloud.com/celebrations\n\n'
t += '## Software we have built\n\n' + products.map((p) => `- [${p.name}](https://pixeltocloud.com/work/${p.slug}): ${p.kind}. ${p.text} Status: ${p.status}.`).join('\n') + '\n\n'
t += '## Live client websites\n\n' + clientSites.map((s) => `- ${s.name} (${s.category}): ${s.url}`).join('\n') + '\n\n'
t += '## Where we work\n\n'
t += `All 41 districts of Rajasthan: ${rajasthanDistricts.map((p) => p.name).join(', ')}.\n\n`
t += `Every Indian state and union territory: ${indianStates.map((p) => p.name).join(', ')}.\n\n`
t += `Other countries: ${countries.map((p) => p.name).join(', ')}.\n\n`
t += 'Each place has its own page, for example https://pixeltocloud.com/locations/jaipur or https://pixeltocloud.com/locations/uae.\n\n'
t += '## Key pages\n\n- [Home](https://pixeltocloud.com/)\n- [All services](https://pixeltocloud.com/services)\n- [Prices](https://pixeltocloud.com/pricing)\n- [Our work](https://pixeltocloud.com/work)\n- [Locations](https://pixeltocloud.com/locations)\n- [Questions and answers](https://pixeltocloud.com/faq)\n- [Contact](https://pixeltocloud.com/contact)\n'
fs.writeFileSync(new URL('../public/llms.txt', import.meta.url), t)
console.log('Wrote llms.txt')
