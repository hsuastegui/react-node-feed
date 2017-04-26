var webpack = require("webpack");
var path = require("path");
var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, "src");

process.env.NODE_ENV = "development";

module.exports = {
  devtool: "source-map",
  context: APP_DIR,
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        include: APP_DIR,
        use: ["babel-loader"]
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
