const { colors, fontFamily } = require('./styles/theme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors,
    fontFamily,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
