const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2015", // default, or 'es20XX', 'esnext'
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015", // default, or 'es20XX', 'esnext'
        },
      },
      {
        test: /\.(css|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
