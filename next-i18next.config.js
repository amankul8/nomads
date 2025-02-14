/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr', 'de-AT', 'de-DE', 'de-CH'],
      },
      fallbackLng: {
        default: ['en'],
        'de-CH': ['fr'],
      },
      nonExplicitSupportedLngs: true,
  }