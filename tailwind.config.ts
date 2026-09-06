import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f5f5f7',
        paper: '#0b0c10',
        brand: '#4361ee',
        'brand-soft': '#1b2140',
        line: '#2a2c33',
        grey: '#9a9ca3',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
export default config
