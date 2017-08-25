const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, '../ng-iso-deploy'),
    filename: 'server.js'
  },
  target: 'node',
  plugins: [
  	new webpack.optimize.UglifyJsPlugin()
  ]
};