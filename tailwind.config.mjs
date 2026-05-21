/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        green: "#000000",
        gold: "#D4AF37",
        dark: "#000000",
        cream: "#F6F1E8",
        whatsapp: "#25D366",
        background: "#FFFFFF",
        foreground: "#000000",
      },
      fontFamily: {
        display: [
          "var(--font-playfair-display)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
};

export default config;
