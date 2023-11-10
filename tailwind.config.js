/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Extra-small screens
        sm: "576px", // Small screens
        md: "768px", // Medium screens
        lg: "1200px", // Large screens
        xl: "2560px", // Extra-large screens
      },
    },
  },
  plugins: [],
}