const title = 'Nomad Travel — Travel with Comfort'
const description = 'Welcome to Nomad Travel — your guide to amazing trips, tips, and unique routes around the world.'
const url = 'http://localhost:3000'

module.exports = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    site_name: title,
    title,
    description,
    images: [
      {
        url: `${url}/images/bg/skirt_block_bg.png`,
        width: 1200,
        height: 630,
        alt: 'Nomad Travel — Explore the world with us',
        type: 'image/png',
      },
    ],
  },
//   twitter: {
//     handle: '@NomadTravel', 
//     site: '@NomadTravel',
//     cardType: 'summary_large_image',
//   },
}
