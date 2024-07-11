/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: "#A9C2C9",
        buttonCustomColor: "#ED2127",
        textColor: "#B9B9B9",
        gradColor: "#50505080",
        circleColor: "#F3F5F6",
        footerColor: "#181E20",
        emailColor: "#2D373A",
        bodyColor: "#212525",
        white60: "rgba(255, 255, 255, 0.6)",
        NavColor: "#B9B9B9",
        EventPartner: "#EFEDED",
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        helvetica: ["Helvetica"],
        inter: ["Inter"],
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      boxShadow: {
        "custom-black-25": "20px 20px 20px 20px #00000040",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents }) {
      addComponents({
        ".slick-dots": {
          "li button:before": {
            "@apply bg-gray-300 w-3 h-3 rounded-full": {},
            content: '""',
          },
          "li.slick-active button:before": {
            "@apply bg-buttonCustomColor": {},
          },
          "li:nth-child(2) button:before": {
            "@apply bg-buttonCustomColor": {}, // Assuming the second dot is the middle one
          },
        },
      });
    },
  ],
};
