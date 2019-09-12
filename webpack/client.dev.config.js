const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '../public/js'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
    }),
  ],
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
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
