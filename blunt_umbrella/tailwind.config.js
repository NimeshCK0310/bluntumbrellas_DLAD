/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjusted to src-based structure
  ],
  theme: {
    extend: {
      colors: {
        "camo-base": "#475a31",
        "camo-light": "#8a9d6a",
      },
    },
  },
  plugins: [],
};