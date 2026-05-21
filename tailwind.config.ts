import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        green: "#111111",
        gold: "#B8894A",
        dark: "#141C18",
        cream: "#F6F1E8",
        whatsapp: "#25D366",
        background: "#FFFFFF",
        foreground: "#141C18",
      },
      fontFamily: {
        display: ["var(--font-playfair-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
