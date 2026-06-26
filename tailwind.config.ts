import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f6f2ea",
          50: "#fbf9f4",
          100: "#f6f2ea",
          200: "#ece3d2",
        },
        charcoal: {
          DEFAULT: "#1c1c1a",
          800: "#2a2a27",
          700: "#3a3a36",
        },
        gold: {
          DEFAULT: "#c19a5b",
          light: "#d4b783",
          dark: "#a37f44",
        },
        forest: {
          DEFAULT: "#1f3b34",
          light: "#2c5249",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
