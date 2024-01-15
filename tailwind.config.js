/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['poppins' , 'sans-serif'],

        'Roboto' : ['Roboto' , 'sans-serif']

      }
    },
  },
  plugins: [],
}


