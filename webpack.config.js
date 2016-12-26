const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'src/components'),
      containers: path.resolve(ROOT_PATH, 'src/containers'),
    },
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
