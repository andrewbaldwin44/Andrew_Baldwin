const tailwindcolors = require('tailwindcss/colors');

const colors = {
  white: '#fff',
  black: {
    500: '#3a2e2c',
    DEFAULT: '#000',
  },

  gray: tailwindcolors.gray,

  red: {
    DEFAULT: '#b30f00',
  },
};

const fontFamily = {
  sans: ['Rubik', 'sans-serif'],
};

module.exports = { colors, fontFamily };
