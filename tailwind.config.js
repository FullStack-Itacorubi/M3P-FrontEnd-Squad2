/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {

      colors: {
        'labmedication-red': '#ff1251',
      },

      keyframes: {
        showInAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        'showIn': 'showInAnimation 1s linear',
      }

    },
    plugins: [],
    safelist: [
      {
        pattern: /(via|text|bg)-(zinc)-(50|100|200|700|800|900)/,
      },
    ],
  },
};
