module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(2000%)' },
        },
      },
      animation: {
        slide: 'slide 1.5s ease-in infinite',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Josefin: ['Josefin Sans'],
      Nunito: ['Nunito'],
    },
  },
  plugins: [],
};
