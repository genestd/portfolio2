var path = require('path');
var HtmlWebpackPlugin = require('webpack-html-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
  devtool: "source-map",
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    //publicPath: 'https://github.com/genestd/portfolio',
    filename: "index_bundle.js"
  },
  devServer: {
    publicPath: '/',
    contentBase: __dirname + '/dist'
  },
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css/, loader: ExtractTextPlugin.extract("css")},
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new CopyWebpackPlugin([
            { from: './src/icons', to: 'icons' },
            { from: './src/styles/entypo', to: 'styles/entypo'},
            { from: './src/js/', to: 'js'}
        ]),
    new ExtractTextPlugin("styles.css"),
  ]
};
