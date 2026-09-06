import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0f14',
        paper: '#f7f7f5',
        brand: '#4361ee',
        'brand-soft': '#eef1ff',
        line: '#e3e3e0',
        grey: '#6b6f76',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
export default config
