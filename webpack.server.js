const path = require('path');
const merge = require('webpack-merge');
const baseConifg = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building a bundle for nodeJS
  // rather than for the browser
  target: 'node',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = merge(baseConifg, config);
