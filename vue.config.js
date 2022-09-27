const path = require('path')

module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@assets': path.join(__dirname, './src/assets'),
        '@views': path.join(__dirname, './src/views')
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/SHOPPINGPROJECT/'
    : '/'
}
