const webconfig = require('./webconfig')
const fs = require('fs')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))

module.exports = {
  entry: path.join(__dirname, '/src/build/index.js'),
  output: {
    path: path.join(__dirname, '/src/build/scripts/'),
    filename: webconfig.bundleName
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass']) },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: babelrc.presets, plugins: babelrc.plugins } }
    ]
  },
  plugins: [
    new ExtractTextPlugin(webconfig.endpoints.styles + webconfig.cssName)
  ]
}
