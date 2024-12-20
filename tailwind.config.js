/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'MY':"url(/src/bg_img.jpg)",
      }
    },
  },
  plugins: [],
}

