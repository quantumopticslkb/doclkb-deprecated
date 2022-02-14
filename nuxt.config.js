import theme from './theme-docs'

export default theme({
  docs: {
    primaryColor: '#638eca'
  },
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
})