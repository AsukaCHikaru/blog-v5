/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [ 'var(--font-jp)'],
        courier: ["Courier New", "Courier", "monospace"],
      },
      colors: {
        'foreground': '#222222',
        'background': '#dddddd'
      }
    },
  },
  plugins: [],
};
