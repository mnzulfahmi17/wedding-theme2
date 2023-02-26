/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        openInvitation: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(-2500px)", display: "none" },
        },
        zoomInOut: {
          "0%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.05, 1.05)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      animation: {
        openInvitation: "openInvitation 3s linear forwards",
        zoomInOut: "zoomInOut 1s ease infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cormorantInfant: ["CormorantInfant", "serif"],
      },
      colors: {
        customPink: "#F59D9D",
        customDarkGrey: "#848484",
        customLightGrey: "#D9D9D9",
        customDarkGrey2: "#efefef",
        customWhite: "#F6FAF7",
        customBlack: "#5a5a5a",
      },
    },
    // Aspect Ratio Custom
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
