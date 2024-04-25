/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      tab: '991px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1681px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#2E4169',
        secondary: '#161C2D',
        gray: '#5C606C',
        burntOrange: '#E6966F',
      },
      boxShadow: {
        grayShadow: '0px 0px 50px 0px rgba(39, 92, 141, 0.08)',
      },
      fontSize: {
        40: '40px',
      },
      lineHeight: {
        11: '44px',
      },
    },
  },
  plugins: [],
};
