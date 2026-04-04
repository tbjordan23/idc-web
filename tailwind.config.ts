import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // dark mode is handled via .light class (dark is :root default)
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Theme-aware (CSS custom properties) ──────────────────────────
        canvas: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        edge: {
          DEFAULT: "var(--border)",
          hover: "var(--border-hover)",
        },
        copy: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          dim: "var(--text-dim)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          glow: "var(--accent-glow)",
          2: "var(--accent-2)",
        },
        // ── Static IDC brand ─────────────────────────────────────────────
        idc: {
          navy: "#2b4171",
          orange: "#f26522",
          gray: "#a0a1a3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display": ["46px", { lineHeight: "1.1", letterSpacing: "-0.075rem", fontWeight: "800" }],
        "heading": ["34px", { lineHeight: "1.15", letterSpacing: "-0.05rem", fontWeight: "800" }],
      },
      boxShadow: {
        card: "var(--shadow)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        card: "12px",
      },
      backdropBlur: {
        nav: "12px",
      },
    },
  },
  plugins: [],
}

export default config
