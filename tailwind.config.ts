import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3EEE4",
        "paper-deep": "#E9E2D4",
        ink: "#17140F",
        "ink-soft": "#5B554B",
        rule: "#D6CDBB",
        vermilion: "#B5361E",
        "vermilion-deep": "#8F2814",
        sage: "#5F7358",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
