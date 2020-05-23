var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');


module.exports = {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    contentBase: './dist',
    compress: true
  },

  devtool : 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.htm",
        filename: "./index.htm"
      }),
    new CleanWebpackPlugin(
      {
        cleanStaleWebpackAssets: false 
      })
  ],
  

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

};