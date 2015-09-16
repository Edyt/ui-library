var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    "./app/app.js"
  ],
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      loaders: [
          { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
          { test: /\.md$/, loader: "html-loader!markdown-loader" }
      ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css") //, { allChunks: true })
  ]

};
