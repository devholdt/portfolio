/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.astro",
    "./src/components/*.astro",
    "./src/layouts/*.astro",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#222831",
      grey: "#393E46",
      teal: "#00ADB5",
      light: "#EEEEEE",
    },
    extend: {},
  },
  plugins: [],
};
