const DefinePlugin      = require('webpack/lib/DefinePlugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      helper            = require('./helper');

let config = {
  entry: {
    "main": helper.root("/src/main.ts")
  },
  output: {
    path: helper.root("/dist/js"),
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".html"],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {test: /\.ts$/, exclude: /node_modules/, enforce: 'pre', loader: 'tslint-loader'},
      {test: /\.ts$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {test: /\.html$/, loader: 'raw-loader', exclude: ['./src/index.html']}
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets', to: '../assets' },
      { from: 'src/css', to: '../css' },
    ]),
    new DefinePlugin({
      'process.env': {
        'ENV': process.env.NODE_ENV,
        'NODE_ENV': process.env.NODE_ENV
      }
    })
  ]
};

module.exports = config;

