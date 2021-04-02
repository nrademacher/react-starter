const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
<<<<<<< HEAD
  // Uncomment line below for source maps in production
=======
>>>>>>> 618446c3b0f4b87481f468bd0b133953965aeefd
  // devtool: "source-map",
  plugins: [
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
