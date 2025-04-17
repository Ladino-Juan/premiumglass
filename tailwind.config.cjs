/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Frank Ruhl Libre', 'serif'], // optional
    },
  },
  plugins: [],
}
