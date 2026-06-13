import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // === DOOBER AI FULL BRAND PALETTE ===
        doober: {
          // Core logo letter colors
          blue:    '#2563EB',  // 'd' letter — Royal Blue
          red:     '#EF4444',  // 'b' letter — Vivid Red
          purple:  '#8B5CF6',  // 'e' letter — Electric Purple
          green:   '#22C55E',  // 'r' letter — Neon Green
          gold:    '#F59E0B',  // 'AI' text  — Golden Amber
          cyan:    '#06B6D4',  // circuit lines — Electric Cyan
          pink:    '#EC4899',  // accent/AI — Hot Pink
          chrome:  '#71717A',  // robot face — Metallic
          // Semantic colors
          accept:  '#22C55E',
          decline: '#EF4444',
          maybe:   '#F59E0B',
          insight: '#8B5CF6',  // alias purple
          primary: '#06B6D4',  // alias cyan
          premium: '#F59E0B',  // alias gold
          // Dark surfaces
          surface: '#09090B',
          panel:   '#111113',
          border:  '#27272A',
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #000000 0%, #09090b 50%, #0c0c14 100%)',
        'neon-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(6, 182, 212, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(245, 158, 11, 0.15) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(37, 99, 235, 0.2) 0px, transparent 50%), radial-gradient(at 20% 80%, rgba(34, 197, 94, 0.15) 0px, transparent 50%)',
        'logo-gradient': 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 25%, #06B6D4 50%, #22C55E 75%, #F59E0B 100%)',
        'cockpit-bg': 'radial-gradient(ellipse at top, rgba(6,182,212,0.08) 0%, transparent 60%), radial-gradient(ellipse at bottom, rgba(139,92,246,0.05) 0%, transparent 60%)',
        'accept-gradient': 'linear-gradient(135deg, #16a34a, #22c55e)',
        'decline-gradient': 'linear-gradient(135deg, #dc2626, #ef4444)',
        'maybe-gradient': 'linear-gradient(135deg, #d97706, #f59e0b)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'neon-cyan':   '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)',
        'neon-purple': '0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.2)',
        'neon-blue':   '0 0 20px rgba(37,99,235,0.5), 0 0 40px rgba(37,99,235,0.2)',
        'neon-green':  '0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.2)',
        'neon-red':    '0 0 20px rgba(239,68,68,0.5), 0 0 40px rgba(239,68,68,0.2)',
        'neon-gold':   '0 0 20px rgba(245,158,11,0.5), 0 0 40px rgba(245,158,11,0.2)',
        'card-dark':   '0 4px 24px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05) inset',
        'cockpit':     '0 0 0 1px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.8)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Original animations
        "glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "pulse-border": {
          "0%, 100%": { borderColor: "rgba(6, 182, 212, 0.1)" },
          "50%": { borderColor: "rgba(6, 182, 212, 0.6)" },
        },
        // === NEW PREMIUM ANIMATIONS ===
        "neon-pulse": {
          "0%":   { boxShadow: "0 0 5px #06b6d4, 0 0 10px #06b6d4" },
          "25%":  { boxShadow: "0 0 5px #8b5cf6, 0 0 10px #8b5cf6" },
          "50%":  { boxShadow: "0 0 5px #22c55e, 0 0 10px #22c55e" },
          "75%":  { boxShadow: "0 0 5px #f59e0b, 0 0 10px #f59e0b" },
          "100%": { boxShadow: "0 0 5px #06b6d4, 0 0 10px #06b6d4" },
        },
        "gradient-shift": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "shimmer-slide": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "float-up": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "radar-sweep": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "hologram-flicker": {
          "0%, 95%, 100%": { opacity: "1" },
          "96%":           { opacity: "0.8" },
          "97%":           { opacity: "1" },
          "98%":           { opacity: "0.6" },
          "99%":           { opacity: "1" },
        },
        "circuit-trace": {
          "0%":   { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "count-up": {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up-fade": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "ping-once": {
          "0%":   { transform: "scale(1)", opacity: "1" },
          "75%":  { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        "typing-cursor": {
          "0%, 100%": { borderColor: "transparent" },
          "50%":      { borderColor: "currentColor" },
        },
        "session-bar-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(34,197,94,0.3)" },
          "50%":      { boxShadow: "0 0 20px rgba(34,197,94,0.6)" },
        },
        "score-flash": {
          "0%":   { transform: "scale(1)" },
          "50%":  { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "tab-slide": {
          "0%":   { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "marquee": {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "border-rainbow": {
          "0%":   { borderColor: "#06b6d4" },
          "20%":  { borderColor: "#8b5cf6" },
          "40%":  { borderColor: "#2563eb" },
          "60%":  { borderColor: "#22c55e" },
          "80%":  { borderColor: "#f59e0b" },
          "100%": { borderColor: "#06b6d4" },
        },
      },
      animation: {
        // Original
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-border": "pulse-border 3s ease-in-out infinite",
        // New premium
        "neon-pulse":         "neon-pulse 4s linear infinite",
        "gradient-shift":     "gradient-shift 5s ease infinite",
        "shimmer-slide":      "shimmer-slide 3s linear infinite",
        "float-up":           "float-up 4s ease-in-out infinite",
        "radar-sweep":        "radar-sweep 3s linear infinite",
        "hologram-flicker":   "hologram-flicker 8s linear infinite",
        "circuit-trace":      "circuit-trace 3s ease-in-out forwards",
        "count-up":           "count-up 0.5s ease-out forwards",
        "slide-up-fade":      "slide-up-fade 0.6s ease-out forwards",
        "spin-slow":          "spin-slow 8s linear infinite",
        "ping-once":          "ping-once 1s ease-out forwards",
        "typing-cursor":      "typing-cursor 1s step-end infinite",
        "session-bar-glow":   "session-bar-glow 2s ease-in-out infinite",
        "score-flash":        "score-flash 0.5s ease-out",
        "marquee":            "marquee 30s linear infinite",
        "border-rainbow":     "border-rainbow 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
