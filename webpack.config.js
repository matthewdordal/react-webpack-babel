var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: ['react']
  },
  output: {
    path: distPath, // This is where files will go
    filename: '[name].bundle.js'
  },
  resolve: {
    root: srcPath,
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'), // http://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.template.html', //outputs to dist/index.html
      title: 'my test title'
    })
  ]
};