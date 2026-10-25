export const serviceMedia = {
  'web-development': {
    image: '/image/services/websites.jpg',
    alt: 'A laptop open to a business website with a photo, short copy, and a button',
  },
  'web-applications': {
    image: '/image/services/software.jpg',
    alt: 'A laptop showing an operations dashboard with charts on a dark desk',
  },
  'ai-automation': {
    image: '/image/services/whatsapp.jpg',
    alt: 'Hands holding a phone with a messaging conversation on the screen',
  },
  'cloud-devops': {
    image: '/image/services/cloud.jpg',
    alt: 'A quiet server aisle with blue status lights',
  },
  ecommerce: {
    image: '/image/services/storefront.jpg',
    alt: 'A phone showing a product photo beside a shopping bag and folded linen',
  },
  'digital-marketing': {
    image: '/image/services/marketing.jpg',
    alt: 'A laptop and phone showing the same landing page beside a printed chart',
  },
  'mobile-app-development': {
    image: '/image/services/mobile.jpg',
    alt: 'A hand holding a phone with a mobile app on the screen',
  },
}

const studyPhotos = {
  'shridaa-arts': {
    src: '/image/work/shridaa-arts.jpg?v=3',
    alt: 'Homepage of Shridaa Arts',
  },
  'dr-archit-joshi': {
    src: '/image/work/dr-archit-joshi.jpg?v=3',
    alt: 'Homepage of Dr. Archit Joshi',
  },
  'dr-janki-choudhary': {
    src: '/image/work/dr-janki-choudhary.jpg?v=3',
    alt: 'Homepage of Dr. Janki Choudhary',
  },
  'dr-neeraj-rathee': {
    src: '/image/work/dr-neeraj-rathee.jpg?v=3',
    alt: 'Homepage of Dr. Neeraj Rathee',
  },
  'harish-renova': {
    src: '/image/work/dr-neeraj-rathee.jpg?v=3',
    alt: 'Homepage of Dr. Neeraj Rathee, Harish Renova Cancer Center',
  },
  'akns-cctv': {
    src: '/image/work/akns-cctv.jpg?v=3',
    alt: 'Homepage of AKNS CCTV Hub',
  },
  'dr-geetanand-rao': {
    src: '/image/work/dr-geetanand-rao.jpg?v=3',
    alt: 'Homepage of Dr. Geetanand Rao',
  },
}

export function studyPhoto(slug) {
  return studyPhotos[slug] || null
}
