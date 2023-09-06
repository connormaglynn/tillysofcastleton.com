module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#2F302A',
        'accent-2': '#DAB73A',
        'accent-3': '#F6D474',
      },
      backgroundImage: {
        'hero-image': 'url(/assets/background-desktop.jpeg)',
      },
      fontFamily: {
        brand: "'The Girl Next Door', cursive",
        brand2: "'Single Day', cursive",
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
    },
  },
  plugins: [],
}
