/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#215273',
        secondary: '#FDFDFD',
        bgcolor: '#55C595',
        btncolor: '#FFFFFF',
        txtcolor: '#282828'
      }
    },
  },
  plugins: [],
}

