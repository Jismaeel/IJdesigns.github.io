/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")],
  darkMode:'class'
}