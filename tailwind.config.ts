import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          primary: "#ffd700",
          secondary: "#ffed4e",
        },
        black: {
          primary: "#0a0a0a",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
        "golden-pulse": "golden-pulse 2s ease-in-out infinite",
        "energy-wave": "energy-wave 2s ease-out infinite",
        "particle-float": "particle-float 4s ease-in-out infinite",
        "golden-shimmer": "golden-shimmer 2s linear infinite",
        "siri-flow": "siri-flow 6s ease-in-out infinite",
        "siri-inner-flow": "siri-inner-flow 4s ease-in-out infinite reverse",
        "siri-particle": "siri-particle 3s ease-in-out infinite",
        "siri-pulse": "siri-pulse 2s ease-out infinite",
        "siri-core-glow": "siri-core-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "golden-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)" },
        },
        "energy-wave": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(120deg)" },
          "66%": { transform: "translateY(5px) rotate(240deg)" },
        },
        "golden-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "siri-flow": {
          "0%, 100%": {
            background: "conic-gradient(from 0deg, #ff6b6b, #ffd93d, #6bcf7f, #4d96ff, #9c88ff, #ff6b6b)",
            filter: "hue-rotate(0deg) saturate(1.2) brightness(1.1)",
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
          },
          "25%": {
            background: "conic-gradient(from 90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d96ff, #9c88ff, #ff6b6b)",
            filter: "hue-rotate(45deg) saturate(1.4) brightness(1.2)",
            boxShadow: "0 0 40px rgba(255, 107, 107, 0.5)",
          },
          "50%": {
            background: "conic-gradient(from 180deg, #ff6b6b, #ffd93d, #6bcf7f, #4d96ff, #9c88ff, #ff6b6b)",
            filter: "hue-rotate(90deg) saturate(1.3) brightness(1.3)",
            boxShadow: "0 0 50px rgba(107, 207, 127, 0.6)",
          },
          "75%": {
            background: "conic-gradient(from 270deg, #ff6b6b, #ffd93d, #6bcf7f, #4d96ff, #9c88ff, #ff6b6b)",
            filter: "hue-rotate(135deg) saturate(1.5) brightness(1.1)",
            boxShadow: "0 0 35px rgba(77, 150, 255, 0.5)",
          },
        },
        "siri-inner-flow": {
          "0%, 100%": {
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 215, 0, 0.6), rgba(255, 107, 107, 0.4))",
            filter: "blur(0.5px) saturate(1.5)",
          },
          "25%": {
            background: "radial-gradient(circle, rgba(255, 107, 107, 0.8), rgba(255, 255, 255, 0.6), rgba(107, 207, 127, 0.4))",
            filter: "blur(1px) saturate(1.3)",
          },
          "50%": {
            background: "radial-gradient(circle, rgba(107, 207, 127, 0.8), rgba(77, 150, 255, 0.6), rgba(156, 136, 255, 0.4))",
            filter: "blur(0.8px) saturate(1.7)",
          },
          "75%": {
            background: "radial-gradient(circle, rgba(77, 150, 255, 0.8), rgba(156, 136, 255, 0.6), rgba(255, 215, 0, 0.4))",
            filter: "blur(0.3px) saturate(1.4)",
          },
        },
        "siri-particle": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.8" },
          "25%": { transform: "translate(10px, -15px) scale(1.2)", opacity: "1" },
          "50%": { transform: "translate(-8px, -25px) scale(0.8)", opacity: "0.6" },
          "75%": { transform: "translate(-12px, 10px) scale(1.1)", opacity: "0.9" },
        },
        "siri-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
        "siri-core-glow": {
          "0%, 100%": {
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 215, 0, 0.7) 30%, rgba(255, 165, 0, 0.5) 60%, transparent 100%)",
            filter: "blur(2px)",
          },
          "50%": {
            background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 107, 107, 0.8) 25%, rgba(107, 207, 127, 0.6) 50%, transparent 100%)",
            filter: "blur(1px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
