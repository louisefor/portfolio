import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        beige: "#fcf7e8",
        "beige-dark": "#ebe3d0",
        brown: "#eecfaa",
        "brown-dark": "#d1b08e",
        maroon: "#6e2a36",
        "maroon-dark": "#57292c",
        orange: "#f4664a",
        "orange-dark": "#c7513c",
        primary: {
          DEFAULT: "#eecfaa",
          50: "#ffffff",
          100: "#ffffff",
          200: "#fcf7e8",
          300: "#f9efd2",
          400: "#fbd3ab",
          500: "#eecfaa",
          600: "#c8a37f",
          700: "#a17a55",
          800: "#7a4e2a",
          900: "#532503",
        },
        secondary: {
          DEFAULT: "#6e2936",
          50: "#f7f2f3",
          100: "#f0e6e9",
          200: "#dab3be",
          300: "#c37f93",
          400: "#ad4c68",
          500: "#97293d",
          600: "#7a1f30",
          700: "#5d1724",
          800: "#400e17",
          900: "#23060b",
        },
        accent: {
          DEFAULT: "#f4664a",
          50: "#fdf6f4",
          100: "#fceee9",
          200: "#f9d0c8",
          300: "#f6b2a7",
          400: "#f27a65",
          500: "#ee4223",
          600: "#d63d20",
          700: "#b1331a",
          800: "#8e2915",
          900: "#6c1f10",
        },
      },
    },
  },
  plugins: [],
};

export default config;
