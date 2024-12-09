/** @type {import('tailwindcss').Config} */
import tailwindcssRtl from 'tailwindcss-rtl';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF9EB', 
        backbutton: '#EF5B6B',
        backbutton2: '#CDEE2D'

        
      },
    },
  },
  plugins: [tailwindcssRtl],
}