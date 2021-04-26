module.exports = {
  mount: {
    src: '/',
  },
  plugins: [
    ['@snowpack/plugin-postcss'],
    ['@jadex/snowpack-plugin-tailwindcss-jit'],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
};
