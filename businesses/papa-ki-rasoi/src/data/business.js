// Only public details from the Google Maps listing (checked 27 Nov 2026).
// Prices are intentionally NOT included: the business shares rates on WhatsApp.

export const business = {
  name: 'Papa Ki Rasoi Home',
  hindi: 'पापा की रसोई होम',
  category: 'Tiffin service',
  area: 'Sector 52, Gurugram',
  rating: 4.7,
  reviews: 411,
  phoneDisplay: '080764 27445',
  phoneTel: '+918076427445',
  whatsapp: '918076427445',
  hours: 'Open until 9 PM (as listed on Google Maps)',
  address:
    '1529 Ground Floor, Sadwa Ram Marg, near I FOOD, Saraswati Kunj II, Wazirabad, Sector 52, Gurugram, Haryana 122003',
  lat: 28.4367151,
  lng: 77.0829094,
  services: ['Delivery', 'In-store pick-up'],
}

export const waLink = (text) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`

export const marquee = [
  'Ghar ka khana',
  'Hygienic packing',
  'Menu you can adjust',
  'Fresh every day',
  'Delivery & pick-up',
  'Home-cooked taste',
]

// Themes paraphrased from public Google reviews.
export const themes = [
  'Home-cooked food',
  'Hygienic',
  'Customizable menu',
  'Good quantity',
  'Polite staff',
  'Fair refund for unused service',
]

export const reviewCards = [
  {
    tag: 'Daily tiffin',
    text: 'A regular customer says the portion is more than enough for one person, and meals arrive fresh and on time.',
  },
  {
    tag: 'Hosting',
    text: 'Another ordered a full home-style lunch for friends and was amazed by the taste and the service.',
  },
  {
    tag: 'Trust',
    text: 'Reviewers mention hygienic packing, friendly staff and a refund for service they did not use.',
  },
]

export const faqs = [
  {
    q: 'How do I order?',
    a: 'Tap any WhatsApp button on this page, or use the Build your tiffin section. Your choices are filled into the message for you.',
  },
  {
    q: 'Can I adjust the menu?',
    a: 'Customers highlight the flexible menu. Share your taste and needs on WhatsApp and the kitchen will confirm what they can do.',
  },
  {
    q: 'Do you deliver?',
    a: 'The listing shows delivery and in-store pick-up. Share your society or sector on WhatsApp to confirm your area.',
  },
  {
    q: 'What are the plans and rates?',
    a: 'Rates are shared directly by the kitchen on WhatsApp, so you always get the latest details.',
  },
  {
    q: 'Can I order for a small get-together?',
    a: 'A customer once ordered a full lunch for friends at home. Ask on WhatsApp about quantities and timing.',
  },
]
