import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
          subtle: 'rgb(var(--color-primary-subtle) / <alpha-value>)',
        },
        cyan: {
          soft: 'rgb(var(--color-cyan-soft) / <alpha-value>)',
        },
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-subtle':
          'rgb(var(--color-surface-subtle) / <alpha-value>)',
        accent: {
          warm: 'rgb(var(--color-accent-warm) / <alpha-value>)',
          foreground:
            'rgb(var(--color-accent-warm-foreground) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '700' }],
        h1: ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.12', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.18', letterSpacing: '-0.025em', fontWeight: '700' }],
        h3: ['clamp(1.375rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        lead: ['clamp(1.0625rem, 2vw, 1.25rem)', { lineHeight: '1.7' }],
      },
      borderRadius: {
        ui: 'var(--radius-ui)',
        card: 'var(--radius-card)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
    },
  },
  plugins: [],
}
export default config
