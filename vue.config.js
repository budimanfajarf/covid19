require('./src/toIsoString');
const routes = require('./src/routes');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  pluginOptions: {
    sitemap: {
        baseURL: 'https://covid19.budidev.com',
        routes,
        pretty: true,
        defaults: {
          lastmod: new Date().toIsoString(),
      },        
    }
  }
}