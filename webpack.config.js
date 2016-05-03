var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {
    js: './src/js/app.js'
  },

  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    title: '1boon Admin',
    template: './src/templates/layout.html',
    filename: 'index.html'
  })]
};
