/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Merriweather, ui-serif, Georgia, serif',
            },
            h2: {
              fontFamily: 'Merriweather, ui-serif, Georgia, serif',
            },
            h3: {
              fontFamily: 'Merriweather, ui-serif, Georgia, serif',
            },
            h4: {
              fontFamily: 'Merriweather, ui-serif, Georgia, serif',
            },
            maxWidth: '65ch',
            color: '#1F2937',
            lineHeight: '1.8',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'ul > li': {
              paddingLeft: '1.5em',
              position: 'relative',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.5em',
              height: '0.5em',
              backgroundColor: '#3B82F6',
              borderRadius: '50%',
              position: 'absolute',
              left: 0,
              top: '0.6em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};