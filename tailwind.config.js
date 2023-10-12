module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    animation: {
      move: 'slide 5s linear infinite',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#e4e4e7',
          300: '#d1d1d6',
          400: '#a0a0ab',
          500: '#70707b',
          600: '#51525c',
          700: '#3f3f46',
          800: '#26272b',
          900: '#18181b',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        grotensk: ['FamiljenGrotesk', 'regular'],
      },
      lineHeight: {
        hero: '3.5rem',
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '250% 250%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
