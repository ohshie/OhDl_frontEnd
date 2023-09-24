/** @type {import('tailwindcss').Config} */
export default {
  mode: ["jit"],
  purge: ["./*.html", "./*.js"],
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        textBlack: "#1c1c1c",
      },
    },
  },
  plugins: [],
};
