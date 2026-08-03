/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cambria:['Cambria', 'Georgia', 'Times New Roman', 'serif'],
        //  cormorant: ['"Cormorant Garamond"', "serif"],
      }
    },
    // colors:{
    //   salman:'#e8cccc'
    // }
  },
  plugins: [],
}