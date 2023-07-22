/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        round:
          "0 0px 15px 0px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
