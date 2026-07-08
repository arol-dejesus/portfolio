/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Arol Dejesus brand palette (from the AD hexagon logo)
        brand: {
          // Neon orange – hexagon outline & glow
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#feccaa',
          300: '#fdac74',
          400: '#fb8039',
          500: '#f95d17',
          600: '#ea4405',
          orange: '#f95d17',
          glow: '#ff5a1f',
          // Deep green – the AD monogram
          green: '#1f7a3d',
          'green-dark': '#14532d',
          'green-light': '#2e9e52',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: '500',
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            code: {
              color: 'inherit',
              fontWeight: '400',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
            },
            hr: {
              borderColor: 'inherit',
            },
            ol: {
              color: 'inherit',
            },
            ul: {
              color: 'inherit',
            },
            li: {
              color: 'inherit',
            },
            thead: {
              color: 'inherit',
            },
            tbody: {
              color: 'inherit',
            },
            tr: {
              borderBottomColor: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 