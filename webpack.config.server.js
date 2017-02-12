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
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'build/src/client/components'),
      containers: path.resolve(ROOT_PATH, 'build/src/client/containers'),
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:1338/api'),
    }),
  ]
};
