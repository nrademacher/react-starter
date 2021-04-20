module.exports = {
  mount: {
    src: "/",
  },
  plugins: [["@snowpack/plugin-postcss"]],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020",
  },
};
