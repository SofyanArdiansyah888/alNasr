/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-yellow' : 'linear-gradient(180deg, rgba(255, 206, 131, 0.00) 0%, rgba(255, 194, 101, 0.05) 100%);'
      },
      container:{
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors:{
        primary: "rgba(255, 194, 101, 1)",
        lightPrimary:"rgba(255, 255, 255, 1)",
        secondary: "rgba(29, 165, 153, 1)",
        lightSecondary:"#F3FFFE",
        lightBlack: 'rgba(74, 74, 74, 1)'
      }
    },
  },
  plugins: [],
}
