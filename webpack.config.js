const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "bundled"),
    filename: "bundle.js",
    publicPath: "bundled"
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: "node",
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.BannerPlugin({
      banner: "#! /usr/bin/env node",
      raw: true
    })
  ]
};
