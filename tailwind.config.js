/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        big: ["Big Shoulders Text", "cursive"],
        p: ["Inter", "sans-serif"],
        head: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        'login': "url('../public/img/home1.jpg')"
      }
    },
  },
  plugins: [],
};
