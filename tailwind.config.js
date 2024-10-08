/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08C192",
        mbg: "#101116",
        mgray: "#9C9C9C",
      },
      
      fontFamily: {
        rblack: ["Raleway-Black", "sans-serif"],
        rextrabold: ["Raleway-ExtraBold", "sans-serif"],
        rbold: ["Raleway-Bold", "sans-serif"],
        rsemibold: ["Raleway-SemiBold", "sans-serif"],
        rregular: ["Raleway-Regular", "sans-serif"],
        rmedium: ["Raleway-Medium", "sans-serif"],
        rextralight: ["Raleway-ExtraLight", "sans-serif"],
        rlight: ["Raleway-Light", "sans-serif"],
        rthin: ["Raleway-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
}
