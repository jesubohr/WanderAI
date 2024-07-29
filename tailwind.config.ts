import type { Config } from "tailwindcss"

const config = {
  darkMode: "media",
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        malibu: {
          "50": "#eff9ff",
          "100": "#dff2ff",
          "200": "#b8e7ff",
          "300": "#78d6ff",
          "400": "#42c6ff",
          "500": "#06a9f1",
          "600": "#0087ce",
          "700": "#006ca7",
          "800": "#025b8a",
          "900": "#084c72",
          "950": "#062f4b"
        },
        keppel: {
          "50": "#f0fdfa",
          "100": "#ccfbf2",
          "200": "#9af5e7",
          "300": "#5fe9d7",
          "400": "#2ed3c3",
          "500": "#14aca0",
          "600": "#0e938b",
          "700": "#107570",
          "800": "#125d5a",
          "900": "#134e4c",
          "950": "#042f2f"
        },
        bondi: {
          "50": "#ecfeff",
          "100": "#cffafe",
          "200": "#a6f2fb",
          "300": "#68e7f8",
          "400": "#24d3ec",
          "500": "#08b6d2",
          "600": "#0988a6",
          "700": "#0f738f",
          "800": "#165e74",
          "900": "#174e62",
          "950": "#093343"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config

export default config
