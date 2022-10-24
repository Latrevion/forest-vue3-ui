const esbuild = require("rollup-plugin-esbuild");
const vue = require("rollup-plugin-vue");
const scss = require("rollup-plugin-scss");
const dartSass = require( "sass");
const{ terser } = require(  "rollup-plugin-terser");

module.exports = {
  input: "src/lib/index.ts",
  output: {
    globals: {
      vue: "Vue",
    },
    name: "Forest",
    file: "dist/lib/forest.js",
    format: "umd",
    plugins: [terser()],
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    vue({
        include: /\.vue$/,
      }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    })
  ],
};
