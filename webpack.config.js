const path = require('path'),
      webpack = require('webpack'),
      glob = require('glob'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
   {
      entry: glob.sync('./src/js/*.js'),
      output: {
         path: path.resolve(__dirname + '/src/build/'),
         filename: 'bundle.js'
      },
      devServer: {
         contentBase: 'src',
         port: 8000,
         open: true,
         hot: true,
         inline: true
      },
      module: {
         rules: [
            {
               test: /\.js$/,
               enforce: 'post',
               exclude: /node_modules/,
               loader: 'buble-loader'
            }
         ]
      }
   },
   {
      entry: glob.sync('./src/scss/*.css'),
      output: {
         path: path.resolve(__dirname + '/src/build'),
         filename: 'libs.css'
      },
      module: {
         rules: [
            {
               test: /\.css$/,
               use: ['style-loader', 'css-loader?outputStyle=expanded']

            },
            {
               test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
               enforce: 'pre',
               use: ['url-loader', 'file-loader']
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin({ filename: "libs.css" })
      ]
   },
   {
      entry: glob.sync('./src/scss/*.scss'),
      output: {
         path: path.resolve(__dirname + '/src/build'),
         filename: 'style.css'
      },
      module: {
         rules: [
            {
               test: /\.scss$/,
               enforce: 'pre',
               use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader?outputStyle=expanded']
               })
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin({ filename: "style.css" })
      ]
   }
]
