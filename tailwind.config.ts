/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-axiforma)', 'sans-serif'],
        serif: ['var(--font-axiforma)', 'serif'],
        mono: ['var(--font-axiforma)', 'monospace'],
        thin: ['var(--font-axiforma)', { fontWeight: '100' }],
        light: ['var(--font-axiforma)', { fontWeight: '300' }],
        medium: ['var(--font-axiforma)', { fontWeight: '500' }],
        semibold: ['var(--font-axiforma)', { fontWeight: '600' }],
        bold: ['var(--font-axiforma)', { fontWeight: '700' }],
        extrabold: ['var(--font-axiforma)', { fontWeight: '800' }],
        black: ['var(--font-axiforma)', { fontWeight: '900' }],
      },
    },
  },
  plugins: [],
};
