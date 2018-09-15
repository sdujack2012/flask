/* eslint-disable */
const webpack = require("webpack");
const root = require("./root");
const path = require("path");

module.exports = {
  entry: [path.resolve(__dirname, "..", "src")],
  output: {
    path: path.resolve(__dirname, "..", "..", "dist"),
    publicPath: "/purchase/static",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "source-map-loader"
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      Components: root("src", "components"),
      Store: root("src", "store"),
      Models: root("src", "models"),
      Pages: root("src", "components", "pages"),
      UI: root("src", "components", "ui"),
      Actions: root("src", "actions"),
      Reducers: root("src", "reducers")
    },
    extensions: [".js", ".jsx", ".json"],
    modules: ["src", "node_modules"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        TARGET: JSON.stringify("BROWSER")
      }
    })
  ]
};
