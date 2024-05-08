/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1fb6ff',
      'teal': '#008080',
      'gray': '#808080',
      'red': '#ff0000',
      'light': '#b9e7e7'
    },
    extend: {
    },
  },
  plugins: [],
}