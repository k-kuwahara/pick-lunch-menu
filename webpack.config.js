const path = require('path'),
      webpack = require('webpack'),
      glob = require('glob'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
   {
      entry: [
         './www/src/js/index.js',
         './www/src/js/onsenui.js'
      ],
      output: {
         path: path.resolve(`${__dirname}/www/js/`),
         filename: 'bundle.js'
      },
      devServer: {
         contentBase: 'www',
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
   },
   {
      entry: glob.sync('./www/src/scss/*.scss'),
      output: {
         path: path.resolve(`${__dirname}/www/css/`),
         filename: 'app.bundle.css'
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
            },
            {
               test: /\.woff(?:2)?(?:\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
               loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
               test: /\.(?:ttf|eot|svg)(?:\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
               loader: 'file-loader'
            },
            {
               test: /\.css$/,
               loader: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader?sourceMap=true'
               })
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin('app.bundle.css')
      ]
   }
]

