import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#C85C2D',
          'secondary': '#1E293B',
          'background': '#FFF8F1',
          'input-bg': '#F3B183',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
        }
      },
    },
    plugins:[],
} satisfies Config