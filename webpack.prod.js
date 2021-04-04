const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { DefinePlugin } = require("webpack");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = merge(common, {
  mode: "production",
  // devtool: "source-map", // Uncomment for source maps in production
  plugins: [
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015",
      }),
    ],
  },
});

