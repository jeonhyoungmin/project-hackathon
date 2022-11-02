const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './src/index.min.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|pages)/,
        use: {loader: 'babel-loader'},
      },
      {test: /\.png$/, use: {loader: 'file-loader'}},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {test: /\.(eot|svg|ttf|woff|woff2?)$/, use: {loader: 'file-loader'}},
    ],
  },
};
