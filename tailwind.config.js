/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: theme =>({
        'brand-color': '#5d3ebc',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7' ,
        'brand-yellow': '#ffd300'
      })
    },
  },
  plugins: [],
}