const path = require('path');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist/webpack')
  }
}