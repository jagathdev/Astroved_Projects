/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071A33',
        royal: '#123B8C',
        gold: '#F5A623',
        green: '#059669',
        cream: '#F8FAFC',
        'text-main': '#1E293B',
        'text-muted': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        blob: 'blob 7s infinite',
        'blob-delayed': 'blob 7s infinite 2s',
        'blob-delayed-more': 'blob 7s infinite 4s',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
