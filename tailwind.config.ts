import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Wipe the default palette — only our brand colors exist.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",

      // Semantic tokens
      background: "var(--background)",
      foreground: "var(--foreground)",
      border: "var(--border)",
      primary: "var(--primary)",
      "primary-foreground": "var(--primary-foreground)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",

      // Brand tokens
      "brand-black": "var(--brand-black)",
      "brand-charcoal": "var(--brand-charcoal)",
      "brand-gold": "var(--brand-gold)",
      "brand-antique-gold": "var(--brand-antique-gold)",
      "brand-light-gold": "var(--brand-light-gold)",
      "brand-ivory": "var(--brand-ivory)",
    },
    extend: {
      fontFamily: {
        // We'll wire real fonts in layout.tsx
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      // Explicit, restrained shadows — no Tailwind's soft default blobs
      boxShadow: {
        none: "none",
        // A single hairline for cards that need separation without "floating"
        hairline: "0 0 0 1px var(--border)",
      },
      // No gradients in the design, so we don't extend backgroundImage.
      borderRadius: {
        // Flat editorial look — subtle rounding only
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
      },
      letterSpacing: {
        // For editorial headings — applied per-component
        tightest: "-0.03em",
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;