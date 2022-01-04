const tailwindcolors = require('tailwindcss/colors');

const colors = {
  transparent: 'transparent',
  white: '#fff',
  black: {
    500: '#3a2e2c',
    DEFAULT: '#000',
    600: '#181717',
  },
  black05: 'rgba(0, 0, 0, 0.5)',

  gray: tailwindcolors.gray,

  red: {
    DEFAULT: '#b30f00',
  },
};

const fontFamily = {
  sans: ['Rubik', 'sans-serif'],
};

module.exports = { colors, fontFamily };
