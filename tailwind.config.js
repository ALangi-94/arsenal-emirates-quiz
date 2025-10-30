/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arsenal: {
          red: '#EF0107',
          white: '#FFFFFF',
          navy: '#023474',
          gold: '#9C824A'
        },
        emirates: {
          red: '#D71921',
          gold: '#D4AF37'
        }
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
