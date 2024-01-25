/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nanito": ['Nunito', "sans-serif"],
        "ptsans": ['PT Sans', "sans-serif"],
        "bebas": ['Bebas Neue', "cursive"],
      },
    },
  },
  plugins: [],
};
