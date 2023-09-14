/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['righteous', 'sans'],
        subheading: ['poor richard', 'serif'],
        normal: ['poppins', 'sans'],
        'tiny-text': ['poppins', 'sans'],
      },
      fontSize: {
 
        'heading': '45px',
        'subheading': '40px',
        'normal': '18px',
        'tiny-text': '12px',
      },
      colors: {
        'light-pink': '#F6E8EA',
        'red': '#EF626C',
        'black': '#22181C',
        'greenish-black': '#312F2F',
        'green': '#84DCCF',
        'soft': '#FFEDE1',
        'classic': '#F9FBF2',
        'light-blue': '#D7F9FF',
        'purple': '#AFCBFF',
        'dark-blue': '#0E1C36',
        'pink': '#F32E7D',
        'orange': '#FB7A5A',
      },
      "spacing": {},
      
      "borderRadius": {
        "31xl": "50px",
        "71xl-5": "90.5px",
        "10xs": "3px",
        "87xl": "106px",
        "xl": "20px"
      }
    },
    "corePlugins": {
      "preflight": false
    }
  },
  plugins: [],
};
