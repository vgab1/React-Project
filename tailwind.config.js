/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Titillium Web",
      },
      colors: {
        'f1-red': '#E10600',
        'bg-color': '#F6F4F0'
      },
    },
  },
  plugins: [],
};
