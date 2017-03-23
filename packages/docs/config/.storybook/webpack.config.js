const path = require('path');
const config = require('../../webpack.config.server.js');
const ROOT_PATH = path.resolve(__dirname, '../../');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css'],
    alias: config.resolve.alias,
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ]
  }
}
