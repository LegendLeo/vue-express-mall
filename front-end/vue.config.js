const path = require('path')

module.exports = {
  outputDir: '../dist',
  devServer: {
    proxy: 'http://localhost:3000'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/variables.less')
      ]
    }
  },
  productionSourceMap: false
}
