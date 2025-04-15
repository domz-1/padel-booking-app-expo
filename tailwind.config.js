/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Poppins_400Regular'],
        medium: ['Poppins_500Medium'],
        semibold: ['Poppins_600SemiBold'],
        bold: ['Poppins_700Bold'],
      },
    },
  },
  plugins: [],
};
