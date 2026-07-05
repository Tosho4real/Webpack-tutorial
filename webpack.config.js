const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src", "main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.png|.svg|.jpg|.jpeg|.gif$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Practice",
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
