const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [
    './server/index.js',
  ],
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
}
