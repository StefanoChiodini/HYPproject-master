export default {
  ssr: true,
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/api.js'
    }
  ], 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Comune di Bologna',
    htmlAttrs: {
      lang: 'it',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Il portale ufficiale per la città di Bologna, per avere informazioni su i punti di interesse più conosciuti, gli itinerari disponibili, gli eventi più importanti e i servizi offerti.' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'keywords', content: 'Bologna, Italia, Monumenti Bologna, Eventi Bologna, Servizi Bologna, Punti interesse Bologna, Itinerari Bologna'},
      { name: 'telephone', content: '+39051203040' },
    ],
    link: [
      { 
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v3' 
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  layouts: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://hypwebsite2022.herokuapp.com'
    // baseURL: 'http://localhost:3000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
