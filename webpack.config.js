const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const ENTRY = path.resolve(__dirname, 'client', 'index');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: ENTRY,

  output: {
    path: OUT_DIR,
    filename: 'reviews-app.js',
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
