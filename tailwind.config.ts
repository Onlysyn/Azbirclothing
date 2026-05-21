import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        green: "#1A5C38",
        gold: "#C9A84C",
        dark: "#0D1F17",
        cream: "#F8F4EC",
        background: "#FFFFFF",
        foreground: "#0D1F17",
      },
      fontFamily: {
        display: ["var(--font-playfair-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
