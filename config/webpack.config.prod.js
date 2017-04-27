const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  webpackConfig = require("./webpack.config.base"),
  helper = require("./helper");

webpackConfig.entry["main.min"] = helper.root("/src/main.ts");

webpackConfig.plugins = [...webpackConfig.plugins,
  new UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    test: /\.min\.js$/
  })
];

module.exports = webpackConfig;
