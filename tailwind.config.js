/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        school: {
          navy: '#0b2a4a',
          blue: '#174b7a',
          light: '#eef4f8',
          gold: '#b9892f',
          red: '#a63a3a',
        },
      },
      boxShadow: {
        soft: '0 14px 36px rgba(11, 42, 74, 0.10)',
      },
    },
  },
  plugins: [],
};
