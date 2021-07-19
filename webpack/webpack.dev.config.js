const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 9000,
    openPage: 'pages/toxin-page/toxin-page.html',
  },
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
