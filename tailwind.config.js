module.exports = {
  enabled: true,
  mode: 'all',
  purge: [
    "src/tailwind.css", 
    "contact/index.html",
    "gallery/index.html",
    "about/index.html",
    "index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "screen-plus": "120vh",
      },
      borderWidth: {
        "30": "30px",
        "60": "60px",
        "90": "90px",
        "120": "120px"
      },
      backgroundImage: theme => ({
        'hero-pattern-1': "url('./images/slide2.jpg')",
        'hero-pattern-2': "url('https://source.unsplash.com/ggeZ9oyI-PE/1600x900')",
        'hero-pattern-3': "url('https://source.unsplash.com/EJ4qfFp1g8Q/1600x900')",
        // 'footer-texture': "url('/img/footer-texture.png')",
       }),
      colors: {
        "primary": "#00a843",
        "secondary": "#340e71",
        "accent": "#fff700",
        "background": "#fdfcfa",
        "startgradient": "#5200ae",
        "endgradient": "#4062bb"
      },
      zIndex: {
        'n1': -1,
        'n2': -2,
        'n3': -3,
      },
      transitionProperty: ['hover'],
      transitionDuration: ['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
