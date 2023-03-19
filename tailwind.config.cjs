/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    screens: {
      'xs': '300px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {},
  },
  plugins: [],
}