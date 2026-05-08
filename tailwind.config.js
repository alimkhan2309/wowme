
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          alt: '#F5EFE6',
        },
        rosegold: {
          DEFAULT: '#C9A57B',
          light: '#D4AF8C',
          dark: '#A68258',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          light: '#4A4A4A',
          muted: '#71717A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(42, 42, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
