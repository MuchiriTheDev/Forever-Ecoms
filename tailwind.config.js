/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        celticBlue: '#4972B7',
        seasalt: '#fafaf8',
        earthYellow: '#ebad65',
        powderBlue: '#98abcb',
        aliceBlue: '#ecf0f7',
      }
    },
  },
  plugins: [],
}