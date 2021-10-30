// const purgecss = require('@fullhuman/postcss-purgecss');
// const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    // require('autoprefixer'),
    // cssnano({
    //   preset: "default"
    // }),
    // purgecss({
    //   content: [
    //     "./contact/index.html",
    //     "./gallery/index.html",
    //     "./about/index.html",
    //     "./index.html"
    //   ],
    //   defaultExtractor:(content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // }),
  ],
};