import i18n from './config/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'jogarcia' },
      {
        hid: 'description',
        name: 'description',
        content:
          'This is a portfolio website. Where I talk a little about my skills and web presence. If you are looking for developers take a look.'
      },
      { name: 'keywords', content: 'portfolio, jogarcia, web, web development, developer, development, backend, frontend, database' },
      { property: 'og:title', content: 'Portfolio' },
      { property: 'og:site_name', content: 'Portfolio' },
      { property: 'og:description', content: 'This is a portfolio website. Where I talk a little about my skills and web presence. If you are looking for developers take a look.' },
      { property: 'og:keywords', content: 'portfolio, jogarcia, web, web development, developer, development, backend, frontend, database' },
      { property: 'og:author', content: 'jogarcia' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://nuxt-portfolio-jogarcia.netlify.app/' },
      { property: 'og:image', content: process.env.BASE_URL + '/portfolio.png' },
      { property: 'og:image:size', content: '300' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'es_ES' },
      { property: 'og:copyright', content: 'Portfolio jogarcia' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Patua+One&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        /* module options */
      }
    ]
  ],

  i18n,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
