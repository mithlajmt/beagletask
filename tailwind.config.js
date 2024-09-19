/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'texter': '#443FDE', 
      },
      fontWeights: {
        '450': {
          fontWeight: 450
        }
      },
    },
  },
  plugins: [],
}