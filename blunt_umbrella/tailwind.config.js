/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan all files inside src
  ],
  theme: {
    extend: {
      colors: {
        "camo-base": "#475a31",
        "camo-light": "#8a9d6a",
      },
      // fontFamily: {
      //   blunt: ["Blunt", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kids: ["Kids", "sans-serif"], // new font
      },
    },
  },
  plugins: [],
};
