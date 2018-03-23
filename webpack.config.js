const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(['dist']),
  new ExtractTextPlugin({
    filename: 'main.bundle.css',
    allChunks: true
  })
];

module.exports = {
  entry: [
    './js/index.js',
    './scss/main.scss'
  ],
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[name].js'
  },

  module: {
    rules: [{
          test: /\.(sass|scss)$/,
          include: path.resolve(__dirname, 'src/scss'),
          use: ExtractTextPlugin.extract({
            use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
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
