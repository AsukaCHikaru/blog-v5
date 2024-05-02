const size = {
  fb1: '7px',
  fb2: '14px',
  fb3: '21px',
  fb5: '35px',
  fb8: '56px',
  fb13: '91px',
};

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
        'noto-sans': ['var(--font-noto-sans)'],
        'abhaya-libre': ['var(--font-abhaya-libre)'],
        'gentium-basic': ['var(--font-gentium-basic)'],
        alegreya: ['var(--font-alegreya)', 'var(--font-jp)'],
        abril: ['var(--font-abril)', 'var(--font-jp)'],
        courier: ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        dark: '#27221F',
        light: '#F5F2E8',
        light50: 'rgba(245, 242, 232, 0.5)',
        light75: 'rgba(245, 242, 232, 0.75)',
        secondDark: '#5B4F49',
        secondLight: '#C4C2BA',
      },
      textWrap: {
        balance: 'balance',
      },
      spacing: { ...size },
      fontSize: { ...size },
      lineHeight: { ...size },
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
