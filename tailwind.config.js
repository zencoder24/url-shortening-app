module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'x-cyan': '#2CD0CF',
        'x-dark-violet': '#353042',
        'x-red': '#ab1616',
        'x-gray': '#bfbfbf',
        'x-gray-violet': '#9995a1',
        'x-dark-blue': '#333238',
        'x-very-dark-violet': '#222124',
      },
      fontSize: {
        'x-base': '18px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-img': "url('/src/assets/images/illustration-working.svg')",
      },
      spacing: {
        'x-98': '40rem',
        'x-92': '32rem',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      backgroundSize: {
        'x-size': '773px',
        'x-size-2': '650px',
        'x-size-3': '900px',
      },
    },
  },
  plugins: [],
};
