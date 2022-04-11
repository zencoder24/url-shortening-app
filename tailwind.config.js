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
        'search-bg': "url('/src/assets/images/bg-shorten-desktop.svg')",
        'search-mobile': "url('/src/assets/images/bg-shorten-mobile.svg')",
      },
      spacing: {
        'x-98': '40rem',
        'x-92': '32rem',
        'x-90': '25.5rem',
        'x-5': '5%',
        'x-6': '',
      },
      backgroundSize: {
        'x-size': '620px',
        'x-size-2': '650px',
        'x-size-3': '900px',
      },
    },
  },
  plugins: [],
};
