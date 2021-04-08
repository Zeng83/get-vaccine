const path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
};