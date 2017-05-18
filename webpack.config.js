var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/js/main",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: 'public' },
        { from: 'src/js/webworker.js'},
        { from: 'src/js/filter.js'}
    ])
  ]
};
