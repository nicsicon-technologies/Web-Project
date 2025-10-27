module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Circuit Board Harmony
        primary: {
          DEFAULT: "#2E8B57", // sea-green
          50: "#F0F9F4", // green-50
          100: "#DCF2E3", // green-100
          200: "#BBE5C7", // green-200
          300: "#86D4A0", // green-300
          400: "#4ABA6F", // green-400
          500: "#2E8B57", // sea-green
          600: "#237A4A", // green-600
          700: "#1D653D", // green-700
          800: "#1A5233", // green-800
          900: "#16432B", // green-900
        },
        // Secondary Colors - Technical Depth
        secondary: {
          DEFAULT: "#4682B4", // steel-blue
          50: "#F0F4F8", // blue-50
          100: "#E1E9F0", // blue-100
          200: "#C3D3E1", // blue-200
          300: "#9BB8D0", // blue-300
          400: "#6D9BC4", // blue-400
          500: "#4682B4", // steel-blue
          600: "#3A6F9A", // blue-600
          700: "#2F5C80", // blue-700
          800: "#264A66", // blue-800
          900: "#1F3C54", // blue-900
        },
        // Accent Colors - Success Moments
        accent: {
          DEFAULT: "#32CD32", // lime-green
          50: "#F0FDF0", // lime-50
          100: "#DCFCE7", // lime-100
          200: "#BBF7D0", // lime-200
          300: "#86EFAC", // lime-300
          400: "#4ADE80", // lime-400
          500: "#32CD32", // lime-green
          600: "#16A34A", // lime-600
          700: "#15803D", // lime-700
          800: "#166534", // lime-800
          900: "#14532D", // lime-900
        },
        // Background and Surface
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#7F8C8D", // gray-500
        },
        // Status Colors
        success: "#27AE60", // emerald-600
        warning: "#F39C12", // amber-500
        error: "#E74C3C", // red-500
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'circuit-flow': 'circuit-flow 400ms cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 300ms cubic-bezier(0, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 300ms cubic-bezier(0, 0, 0.2, 1) forwards',
      },
      keyframes: {
        'circuit-flow': {
          '0%': {
            opacity: '0.3',
            transform: 'translateX(-10px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0.3',
            transform: 'translateX(10px)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}