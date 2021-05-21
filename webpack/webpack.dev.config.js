const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 9000,
    openPage: 'pages/toxin-page/toxin-page.html',
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
