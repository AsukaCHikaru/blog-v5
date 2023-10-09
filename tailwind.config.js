/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-jp)'],
        courier: ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        foreground: '#222222',
        background: '#dddddd',
      },
      textWrap: {
        balance: 'balance',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-wrap-balance': {
          textWrap: 'balance',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
