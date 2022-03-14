

const generate = count => {
  const config = {};
  for (let i = 0; i < count; i++) {
    Object.assign(config, {
      [i]: i + 'px',
    })
  }
  return config;
}



tailwind.config = {
  theme: {
    extend: {
      fontSize: {
        ...generate(100),
      },
      spacing: {
        ...generate(1000),
        wrapper: '1920px',
        container: '1200px',
      },
      maxWidth: {
        ...generate(1000),
        wrapper: '1920px',
        container: '1200px',
      },
      colors: {
        'black-primary': '#393939',
        'purple': '#87509c',
        'orange': '#eb7d4b',
        'purple-dark': '#643a79',
        'green': '#17c2a4',
        'green-dark': '#14a58c',
        'grey-light': '#e7f1f8',
        'grey': '#bdd1df',
        'grey-dark': '#878787',
        'yellow': '#ffdd99',
        'yellow-dark': '#e5c37f',
        'pink': '#d74680',
        'pink-dark': '#b73c6d',
        'blue': '#3c5499',
        'blue-dark': '#344b8e',
        'blue-darkest': '#273a71',
        'sky-blue': '#30bae7',
      },
      fontFamily: {
        primary: 'Titillium Web, sans-serif'
      },
      borderWidth: {
        ...generate(100),
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s linear forwards',
        fadeOut: 'fadeOut 0.4s linear forwards',
      }
    }
  }
}