module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'x-cyan': '#2CD0CF',
        'x-dark-violet': '#353042',
        'x-red': '#ab1616',
        'x-gray': '#f2f2f2',
        'x-medium-gray': '#bfbfbf',
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
        'brand-icon': "url('/src/assets/images/icon-brand-recognition.svg')",
        'detailed-icon': "url('/src/assets/images/icon-detailed-records.svg')",
        'customize-icon':
          "url('/src/assets/images/icon-fully-customizable.svg')",
        boost: "url('/src/assets/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('/src/assets/images/bg-boost-mobile.svg')",
      },
      spacing: {
        'x-98': '40rem',
        'x-92': '32rem',
        'x-90': '25.5rem',
        'x-50': '12rem',
        'x-24': '6.2rem',
        'x-5': '5%',
        'x-10': '5%',
        'x-125': '125%',
      },
      backgroundSize: {
        'x-size': '620px',
        'x-size-2': '650px',
        'x-size-3': '900px',
      },
      maxWidth: {
        'x-1': '26rem',
      },
      flex: {
        'x-auto': '1 0 auto',
      },
    },
  },
  plugins: [],
};
