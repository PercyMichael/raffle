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
        txtcolor: '#282828',
        bglight: '#55C59566',
        darkbg: '#028374',
        actionbtn: '#F1F2F7',
        inactivebtn: "#B7B7B7",
      },
      fontFamily: {
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pextra: ["Poppins-ExtraLight", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
      }
    },
  },
  plugins: [],
}

