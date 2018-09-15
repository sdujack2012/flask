/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const commonConfigs = require("./common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const devConfigs = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s(a|c)ss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new OpenBrowserPlugin({
      url: "http://localhost:8080/"
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
      filename: "index.html"
    }),
    new DashboardPlugin(),
    new CopyWebpackPlugin([{ from: "frontend/images", to: "images" }])
  ],
  devServer: {
    historyApiFallback: {
      index: "/purchase/static"
    }
  }
};

module.exports = merge(commonConfigs, devConfigs);
