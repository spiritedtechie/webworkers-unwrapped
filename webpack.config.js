var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/js/main",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: './public' }
    ])
  ]
};
