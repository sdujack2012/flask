const merge = require("webpack-merge");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const prodConfigs = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s(a|c)ss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: "vendors"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
      filename: "index.html"
    }),
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new CopyWebpackPlugin([{ from: "frontend/images", to: "images" }])
  ]
};

module.exports = merge(common, prodConfigs);
