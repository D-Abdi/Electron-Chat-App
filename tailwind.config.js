import colors from 'tailwindcss/colors';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        emerald: colors.emerald
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
