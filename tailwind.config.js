/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
      },
      screens: {
        xs: "480px", // Custom extra small breakpoint
        sm: "750px", // Override default sm = 600px (change sm=750px)
        md: "900px", // Default md=768 ( change md:900)
        lg: "1050px", // Default lg=1080 (change lg=1050)
        xl: "1280px", // Default xl (no change)
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
