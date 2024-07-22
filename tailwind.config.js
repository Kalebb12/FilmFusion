/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans:"Roboto Slab , serif"
    },
    
    container: {
      center: true,
      padding: '1rem',
      screens:[""]
    },
    maxWidth: {
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      // Add a new max-width value
      'custom': '90rem',
    },
  },
  plugins: [],
}