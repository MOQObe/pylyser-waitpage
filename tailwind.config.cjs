/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, css, js}"],
  theme: {
    extend: {
      fontFamily: {
        'sohne': ['Sohne Mono', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
  ],
};
