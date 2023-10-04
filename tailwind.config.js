/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "labmedication-red": "#ff1251",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /via-(zinc)-(50|100|900)/,
    },
  ],
};
