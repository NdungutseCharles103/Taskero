/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '280px',
      'sm': '320px',
      'msm': '380px',
      'phone': '450px',
      'five': '500px',
      'tab': '960px',
      'ltab': '780px',
      'xtab': '960px',
      'desktop': '1280px'
    }
  },
  plugins: [],
}