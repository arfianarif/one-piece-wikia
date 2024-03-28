/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      maxWidth: '768px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '768px',
        xl: '768px',
        '2xl': '768px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
