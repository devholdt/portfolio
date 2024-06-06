/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["Public Sans", "sans-serif"],
      heading: ["Rubik", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "430px",
      },
      colors: {
        gray: {
          100: "#222831",
          200: "#303338",
          300: "#A7A7A7",
          400: "#EEEEEE",
          500: "#FFFFFF",
        },
        black: "#000000",
        white: "#FFFFFF",
        shade: "#00000040",
        primary: {
          lightest: "#01A8B1",
          lighter: "#00838A",
          light: "#006F75",
          regular: "#005C61",
          dark: "#004245",
          darker: "#002A2C",
          lightTransparent: "#01A8B120",
          darkTransparent: "#005C6140",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".grid-area-title": {
          "grid-area": "1 / 1 / 2 / 2",
        },
        ".grid-area-image": {
          "grid-area": "1 / 1 / 3 / 3",
        },
        ".clip-rect": {
          clip: "rect(0, 0, 0, 0)",
        },
        ".before-light::before": {
          content: '""',
          "z-index": "-1",
          position: "absolute",
          inset: "0",
          "border-radius": "999rem",
          "transition-property": "transform, color",
          "transition-duration": "200ms",
          "transition-timing-function": "ease-in-out",
        },
        ".dark .before-light::before": {
          transform: "translateX(100%)",
        },
        '.dark .icon-dark, .not-dark .icon-light, button[aria-pressed="false"] .icon-light':
          {
            color: "#EEEEEE",
          },
        "@media (prefers-reduced-motion: no-preference)": {
          ".icon, .before-light::before": {
            transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
          },
        },
        "@media (forced-colors: active)": {
          ".before-light::before": {
            "background-color": "SelectedItem",
          },
        },
        ".before-list::before": {
          content: '""',
          "z-index": "-1",
          position: "absolute",
          inset: "0",
          "border-radius": "999rem",
          "transition-property": "transform, color",
          "transition-duration": "200ms",
          "transition-timing-function": "ease-in-out",
        },
        ".grid .before-list::before": {
          transform: "translateX(100%)",
        },
        '.grid .icon-grid, .not-grid .icon-list, button[aria-pressed="false"] .icon-list':
          {
            color: "#EEEEEE",
          },
        "@media (prefers-reduced-motion: no-preference)": {
          ".icon, .before-list::before": {
            transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
          },
        },
      });
    },
    function ({ addVariant, e }) {
      addVariant("grid", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.grid .${e(`grid${separator}${className}`)}`;
        });
      });
      addVariant("list", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.list .${e(`list${separator}${className}`)}`;
        });
      });
    },
  ],
};
