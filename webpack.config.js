var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    "./src/app.js"
  ],
  output: {
    path: distPath,
    filename: "bundle.js"
  },
  resolve: {
    root: srcPath,
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
   //   { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.template.html', //outputs to dist/index.html
      title: 'my test title'
    })
  ]
};