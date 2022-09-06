const path = require('path');
const {entry, externals} = require('./preBuild');

module.exports = {
  entry,
  externals,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.svg$/,
        // include: [path.resolve(__dirname, 'declarations.d.ts')],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
};
