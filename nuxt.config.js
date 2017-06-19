module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Includes CSS vendor
  */
  css: ['~/node_modules/tachyons/css/tachyons.min.css', '~/assets/main.css'],
  /*
  ** Modules
  */
  modules: [
    {
      src: '@nuxtjs/pwa',
      options: {
        // you can provide preset customizations here
      }
    }
  ]
}
