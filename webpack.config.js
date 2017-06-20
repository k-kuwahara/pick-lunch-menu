const path = require('path'),
      webpack = require('webpack'),
      glob = require('glob'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
   {
      entry: [
         './src/js/index.js',
         './src/js/onsenui.js'
      ],
      output: {
         path: path.resolve(`${__dirname}/src/build/`),
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
               enforce: 'pre',
               exclude: /node_modules/,
               loader: 'buble-loader'
            },
            {
               test: /\.js$/,
               enforce: 'pre',
               exclude: '/node_modules/',
               loader: 'eslint-loader',
               options: {
                  fix: true,
                  failOnError: true
               }
            }
         ]
      },
      resolve: {
         extensions: ['.js']
      }
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
               enforce: 'post',
               use: ['style-loader', 'css-loader?outputStyle=expanded']
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin({ filename: "libs.css" })
      ]
   }
]
