/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   white: "#ffffff",
    //   black: "#000000",
    //   blue: {
    //     200: "#2fbaed",
    //     400: "#2F80ED",
    //     800: "#322fed",
    //   },
    //   gray: {
    //     100: "#E0E0E0",
    //     300: "#D0D5DD",
    //     400: "#828282",
    //     500: "#333333",
    //     700: "#101828",
    //     800: "#010F1C",
    //   },
    // },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik", "san-serif"],
      poppins: ["Poppins", "san-serif"],
      crimson_pro: ["Crimson Pro", "serif"],
      lobster_two: ["Lobster Two", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
