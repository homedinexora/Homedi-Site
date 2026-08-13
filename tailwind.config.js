/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#173E5C",
          dark: "#102c42",
          light: "#1f4f7a",
        },
        teal: {
          DEFAULT: "#1f9e92",
          light: "#2bb6a6",
          dark: "#0d6e63",
        },
        leaf: {
          DEFAULT: "#43a55a",
          light: "#5cbf73",
        },
        slate: {
          muted: "#5e7488",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "nexora-gradient": "linear-gradient(120deg, #1f9e92 0%, #43a55a 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
