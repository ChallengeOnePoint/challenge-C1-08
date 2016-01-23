var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8081',
    'webpack/hot/only-dev-server',
    './public/scripts/specs/config.js',
    'mocha!./public/scripts/actions/_tests_/ApplicationAction.spec.js',
    'mocha!./public/scripts/pages/_tests_/Index.spec.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  devtool: 'source-map',
  module: {
    noParse: [
      /node_modules\/sinon/,
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?importLoaders=1',
          'sass',
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  devServer: {
    contentBase: 'public/scripts/specs',
    stats: {colors: true},
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
