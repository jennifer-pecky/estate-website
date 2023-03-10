/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {

        "two": "20%"
      },

      screens: {
        'mobile': '640px',

        'laptop': '1453px',

        'desktop': '1280px'
      }
    },
  },
  plugins: [],
}
