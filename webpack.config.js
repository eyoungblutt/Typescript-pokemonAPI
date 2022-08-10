const path = require('path');

module.exports = {

  entry: './app/pokemonAPI.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  mode: 'development'
};