module.exports = {
  purge: {
    enabled: true,
    content: [
        './**/*.html',
        './src/*.js',
        './src/*.jsx'
    ]
},
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }