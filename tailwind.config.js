/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        paper: 'var(--paper)',
        black: 'var(--black)',
        dark: 'var(--dark)',
        lime: 'var(--lime)',
        muted: 'var(--muted)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
}
