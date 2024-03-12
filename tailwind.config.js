/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FAF9F6",
        primaryBlack: "#28282B",
      },
    },
  },
  plugins: [],
};
