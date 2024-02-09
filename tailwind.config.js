/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    safelist: ['animate-[fade-in-left]']
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")],
  darkMode:'class'
}