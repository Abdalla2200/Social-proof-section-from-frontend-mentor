/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        veryDarkMagenta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",
        darkMagenta: "hsl(303, 10%, 53%)",
        lightMagenta: "hsl(300, 24%, 96%)",
      },
      fontSize: {
        mainFont: "15px",
      },
      fontFamily: {
        mainFont: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
