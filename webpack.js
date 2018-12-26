

const path = require('path');
const webpack = require('webpack');
// const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const fs = require('fs');


const srcPath = path.resolve(__dirname, 'src');

const dir = {
  js: `${srcPath}/scripts`,
  style: `${srcPath}/styles`,
  imgs: `${srcPath}/images`,
  pages: `${srcPath}/pages`,
};
const commonChunks = ['manifest', 'common', 'vendor'];

module.exports = {
  entry: {
    a: ['./src/scripts/a.js', './src/scripts/a2'],
    b: './src/scripts/b.js',
    index: './src/scripts/index.js',
    // vendor: ['jquery', 'dayjs'],
    vendor: ['jquery'],
    // vendor: ['common', 'manifest'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },


  plugins: [
    new CommonsChunkPlugin({
      names: 'manifest',
      minChunks: Infinity,
    }),
    new CommonsChunkPlugin({
      names: 'common',
      minChunks: 2,
    }),

    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index', ...commonChunks],
    }),
    new HtmlWebpackPlugin({
      filename: 'a.html',
      template: './src/a.html',
      chunks: ['a', ...commonChunks],
    }),
    new HtmlWebpackPlugin({
      filename: 'b.html',
      template: './src/b.html',
      chunks: ['b', ...commonChunks],
    }),

  ],
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
};
