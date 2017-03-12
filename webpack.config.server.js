const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  target: 'node',
  entry: [
    './src/server/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '../build/server.js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    alias: {
      components: path.resolve(ROOT_PATH, 'build/src/client/components'),
      containers: path.resolve(ROOT_PATH, 'build/src/client/containers'),
      ui: path.resolve(ROOT_PATH, 'packages/ui/dist'),
      test: path.resolve(ROOT_PATH, 'build/src/client/test'),
      shared: path.resolve(ROOT_PATH, 'build/src/client/shared'),
      root: path.resolve(ROOT_PATH, 'build/src/client/'),
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:1338/api'),
    }),
  ]
};
