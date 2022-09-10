const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tblue: '#0d559d',
        tblue2: '#0458A0',
        tdarkblue: '#232463',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
