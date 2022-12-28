/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      courier: ["Courier New", "Courier", "Noto Sans JP", "monospace"],
    },
    extend: {
      colors: {
        'foreground': '#222222',
        'background': '#dddddd'
      }
    },
  },
  plugins: [],
};
