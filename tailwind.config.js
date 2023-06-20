/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "767px",
        lg: "1100px",
        xl: "1400px",
      },
      colors: {
        main: "#171F2D",
        secondary: "#326EAC",
        "light-text": "#91A2AB",
        "medium-text": "#91A2AB",
        "dark-text": "#6E8A94",
        "robin-egg-blue": "#9398A5",
        "gray-600": "#E2E3E8",
        denim: "#1487C5",
        jade: "#00C171",
        "dodger-blue": "#1DA9F4",
        silver: "#BFBFBF",
        "yellow-orange": "#FFBC3D",
      },
      width: {
        "max-app": "1000px",
        "image-portfolio": "125px",
        "halo-1": "150px",
        "halo-2": "135px",
      },
      height: {
        "image-portfolio": "125px",
        "halo-1": "150px",
        "halo-2": "135px",
      },
    },
  },
  plugins: [],
};
