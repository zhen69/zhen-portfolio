/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        "primary-white": "#f3f3f3",
        card: "#1d1836",
      },
      screens: {
        tablet: "800px",
      },
    },
  },
  plugins: [],
};
