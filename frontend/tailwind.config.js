/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "my-rows": "auto 1fr auto",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gluten: ["Gluten", "sans-serif"],
      },
    },
  },
  plugins: [],
};
