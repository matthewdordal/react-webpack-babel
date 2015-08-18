var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: {
    javascript: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app.js'
    ]
  },
  output: {
    filename: 'src/bundle.js',
    path: distPath
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: srcPath,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: srcPath,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  resolve: {
    root: srcPath,
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.template.html', //outputs to dist/index.template.html
      title: 'my test title'
    })
  ]
};