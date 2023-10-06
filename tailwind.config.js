/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#22c55e',
        "primaryBg": "#0f172a",
        "lightBg": "#151920",
        "darkBg": "#080c0e",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}