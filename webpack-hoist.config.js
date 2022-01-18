const path = require('path');
const webpack = require('webpack');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist/webpack-hoist')
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
}