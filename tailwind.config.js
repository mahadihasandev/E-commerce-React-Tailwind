/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container":"1604px",
      },
      fontFamily:{
        'DMs':"DM Sans",
      },
      colors:{
        'lightDark':"#767676",
        "deepDark":"#262626",
        'lightGray':"#F5F5F3",
      },
    },
  },
  plugins: [],
}

