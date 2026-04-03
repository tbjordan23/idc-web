import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        idc: {
          primary: {
            DEFAULT: "#1a3a5c",
            50: "#edf2f7",
            100: "#d3e0ed",
            200: "#a8c2db",
            300: "#7da3c9",
            400: "#5285b7",
            500: "#2e6699",
            600: "#1a3a5c",
            700: "#142d47",
            800: "#0e2133",
            900: "#07141f",
          },
          accent: {
            DEFAULT: "#0d9488",
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
