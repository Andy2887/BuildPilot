/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'french-violet': '#7400b8',
        'grape': '#6930c3',
        'slate-blue': '#5e60ce',
        'united-nations-blue': '#5390d9',
        'picton-blue': '#4ea8de',
        'aero': '#48bfe3',
        'sky-blue': '#56cfe1',
        'tiffany-blue': '#64dfdf',
        'turquoise': '#72efdd',
        'aquamarine': '#80ffdb',
      }
    },
  },
  plugins: [],
};
