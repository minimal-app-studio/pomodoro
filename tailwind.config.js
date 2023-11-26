/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,ts, jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F87070",
        blue: "#70F3F8",
        purple: "#D881F8",
        grey: "#D7E0FF",
        "dark-blue": {
          500: "#1E213F",
          800: "#161932",
        },
        "light-grey": "#1E213F",
      },
      backgroundImage: {
        "clock-gradient": "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
      },
    },
  },
  plugins: [],
};
