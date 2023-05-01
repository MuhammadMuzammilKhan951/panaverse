/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'lll': {'min': '1251px', 'max':'1500px'},
        'll': {'min': '1001px', 'max':'1250px'},
        'l': {'min': '751px', 'max':'1000px'},
        'm': {'min': '551px', 'max':'750px'},
        's': {'min': '401px', 'max':'550px'},
        'ss': {'min': '250px', 'max':'400px'},
      },
      fontFamily:{
        Fasthand:['Fasthand'],
          },
    },
  },
  plugins: [require("daisyui")],
}
