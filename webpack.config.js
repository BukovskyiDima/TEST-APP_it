const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  })
];

module.exports = {
  entry: './index.js',
  context: path.resolve('src/js'),
  output: {
    filename: 'bundle-[name].js'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]
        })
      }
    ]
  },

  plugins,


  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devServer: {
    contentBase: path.resolve('./'),
    publicPath: '/',
    port: 9000,
    hot: true
  }
};
