/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        '"Noto Sans Thai"',
        'sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        primary: {
          indigo: {
            DEFAULT: "#4f46e5",
            400: '#818cf8',
            200: '#c7d2fe',
            50: '#eef2ff',
          }
        },
        secondary: {
          lightBlue: {
            DEFAULT: '#43c6ff',
            veryLight: '#6ad2ff',
            pale: '#b8eaff',
            veryPale: '#dff6ff',
          },
        },
        neutral: {
          headingsBlack: '#000000',
          textSlate: '#94A3B8',
          gray: {
            800: '#1f2937',
            700: '#374151',
            600: '#4b5563',
            500: '#6b7280',
            400: '#9ca3af',
            300: '#d1d5db',
            200: '#e5e7eb',
            100: '#f3f4f6',
            50: '#f9fafb',
          },
          white: '#FFFFFF',
        },
        system: {
          violet: {
            600: '#962DFF',
            400: '#E0C2FF',
            200: '#F0E3FF',
            100: '#F8F1FF',
          },
          info: {
            blue: {
              600: '#2563eb',
              400: '#60a5fa',
              200: '#bfdbfe',
              50: '#eff6ff',
            },
          },
          success: {
            emerald: {
              500: '#10b981',
              400: '#34d399',
              200: '#a7f3d0',
              50: '#ecfdf5',
            },
          },
          warning: {
            amber: {
              300: '#fcd34d',
            },
            yellow: {
              200: '#fde68a',
              100: '#fef9c3',
              50: '#fefce8',
            },
          },
          error: {
            rose: {
              600: '#e11d48',
              400: '#fb7185',
              200: '#fecdd3',
              50: '#fff1f2',
            },
          },
        },
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      boxShadow: {
        navbar: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
        '3d-blue': '0px 2px 4px 0px rgba(30, 64, 175, 0.25) inset',
        '3d-blue-hover':
          '0px 2px 4px 0px rgba(30, 64, 175, 0.25) inset, 0px 2px 4px 0px rgba(37, 99, 235, 0.25)',
        '3d-red': '0px 2px 4px 0px rgba(153, 27, 27, 0.25) inset',
        '3d-red-hover':
          '0px 2px 4px 0px rgba(153, 27, 27, 0.25) inset, 0px 2px 4px 0px rgba(220, 38, 38, 0.25)',
        '3d-gray': '0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset',
      },
      screens: {
        '2xl': '1920px'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['label-enabled', 'label-disabled'], // you need add new variant to a property you want to extend
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    plugin(({ addVariant, e }) => {
      addVariant('label-enabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-enabled${separator}${className}`) // escape class
          const yourSelector = 'input[type="checkbox"]'
          return `${yourSelector}:enabled ~ .${eClassName}` // ~ - CSS selector for siblings
        })
      })
    }),
    plugin(({ addVariant, e }) => {
      addVariant('label-disabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-disabled${separator}${className}`) // escape class
          const yourSelector = 'input[type="checkbox"]'
          return `${yourSelector}:disabled ~ .${eClassName}` // ~ - CSS selector for siblings
        })
      })
    }),

  ],
}
