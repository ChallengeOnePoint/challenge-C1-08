const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux', 'underscore'],
    app: './public/scripts/Router.jsx',
  },
  output: {
    path: __dirname,
    filename: 'dist/js/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'uglify',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"production"'},
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'dist/js/vendor.js'),
  ],
};
