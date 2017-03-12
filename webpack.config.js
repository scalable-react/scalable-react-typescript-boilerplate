const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'src/client/components'),
      containers: path.resolve(ROOT_PATH, 'src/client/containers'),
      ui: path.resolve(ROOT_PATH, 'packages/ui/src'),
      test: path.resolve(ROOT_PATH, 'src/client/test'),
      shared: path.resolve(ROOT_PATH, 'src/client/shared'),
      root: path.resolve(ROOT_PATH, 'src/client/'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: [path.join(__dirname, 'src'), path.resolve(__dirname, 'packages')] },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.md$/, loader: 'html!markdown-loader' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
