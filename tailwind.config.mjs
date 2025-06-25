/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' , transform: 'translateY(-10px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        scaleFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation:{
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        scaleFade: 'scaleFade 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
};


