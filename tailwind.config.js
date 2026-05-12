/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 5.5s ease-in-out infinite",
        cloud: "cloud 24s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        cloud: {
          "0%": { transform: "translateX(-10vw)" },
          "100%": { transform: "translateX(110vw)" },
        },
      },
    },
  },
  plugins: [],
};
