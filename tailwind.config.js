/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#C2B280",
        terracotta: "#E2725B",
        beige: "#F5F5DC"
      }
    }
  },
  plugins: [],
}