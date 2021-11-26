const path = require('path')


module.exports = {
  entry: './src/app.js',
  output: {
    path: '/dist',
    filename: 'cubic-bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
}
