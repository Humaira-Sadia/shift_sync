/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading1-bold": ["36px", { lineHeight: "140%", fontWeight: "700" }],
      "heading2-bold": ["30px", { lineHeight: "140%", fontWeight: "700" }],
      "heading3-bold": ["24px", { lineHeight: "140%", fontWeight: "700" }],
      "body-bold": ["18px", { lineHeight: "140%", fontWeight: "700" }],
      "body-regular": ["18px", { lineHeight: "140%", fontWeight: "400" }],
      "base-regular": ["16px", { lineHeight: "140%", fontWeight: "400" }],
      "small-regular": ["14px", { lineHeight: "140%", fontWeight: "400" }],
      "subtle-medium": ["12px", { lineHeight: "16px", fontWeight: "500" }],
    },
    extend: {
      colors: {
        "primary-500": "#B100FF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#DCDFE4",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        "purple": "#B100FF",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      boxShadow: {
        "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
        "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
