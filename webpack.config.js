const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // para extraer el css en /build
const devMode = false
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer:{
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
}
