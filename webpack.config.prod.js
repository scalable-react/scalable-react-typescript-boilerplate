const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ManifestPlugin = require('webpack-manifest-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      './src/client/index.tsx'
    ],
    vendor: [
      'react',
      'react-dom',
      'styled-components',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-markdown',
      'redux-connect',
      'redux',
      'rxjs',
      'axios',
      'redux-logic',
      'react-apollo',
      'graphql-tag',
      'apollo-client',
    ]
  },
  output: {
    path: path.resolve(ROOT_PATH, './build/public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  stats: {
    chunks: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'src/client/components'),
      containers: path.resolve(ROOT_PATH, 'src/client/containers'),
      shared: path.resolve(ROOT_PATH, 'src/client/shared'),
      ui: path.resolve(ROOT_PATH, 'packages/ui/src'),
      test: path.resolve(ROOT_PATH, 'src/client/test'),
      root: path.resolve(ROOT_PATH, 'src/client/'),
    },
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: [path.join(__dirname, 'src'), path.resolve(__dirname, 'packages')] },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader'
        }),
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.md$/, loader: 'html!markdown-loader' },
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '/'
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:1338/api'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
      debug: false,
      options: {
        /**
         * Legacy postCSS config
         * @reference https://github.com/azat-io/webpack2-css-modules-demo/blob/master/scripts/webpack.config.babel.js
         */
        postcss: function () {
         return {
           defaults: [precss, autoprefixer],
           cleaner:  [autoprefixer({ browsers: [] })]
         };
        },
      }
    }),
  ]
};
