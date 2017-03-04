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
      containers: path.resolve(ROOT_PATH, 'src/client/containers')
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'], include: path.join(__dirname, 'src') },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md$/, loader: 'html!markdown' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
