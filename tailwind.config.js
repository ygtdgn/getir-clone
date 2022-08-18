/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme =>({
        'brand-color': '#5d3ebc'
      })
    },
  },
  plugins: [],
}