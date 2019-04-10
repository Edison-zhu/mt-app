const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/reset.css',
    '~assets/css/main.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: "~plugins/axios.js", ssr: true },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios", "@nuxtjs/proxy"
  ],
  axios: {
    prefix: '/api/',
    proxy: true // Can be also an object with default options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor:['axios'],

    /*2
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      cache:false
    }
  }
}
