/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C47FF', // Figma blue
        secondary: '#1DE9B6', // Figma teal
        accent: '#F7B500', // Figma yellow
        purple: '#2B185A', // Figma deep purple
        'purple-dark': '#1a1033',
        'background-main': '#23113D', // Main background
        'background-section': '#2B185A',
        'background-card': '#2D184A',
        'background-gradient-from': '#2B185A',
        'background-gradient-to': '#1a1033',
        'cta': '#1DE9B6',
        'cta-hover': '#10b981',
        'header-bg': '#1B0F3B',
        'card-bg': '#23113D',
        'input-bg': '#2D184A',
        'border-color': '#3B2A5A',
        'text-main': '#FFFFFF',
        'text-muted': '#B0A8C9',
        'solana-outline': '#1DE9B6',
        'solana-blue': '#00FFA3',
        'solana-purple': '#9945FF',
        'solana-pink': '#F7B5FF',
        'solana-gradient-from': '#00FFA3',
        'solana-gradient-to': '#9945FF',
        'cta-pink': '#F72585',
        'cta-green': '#43E97B',
        'cta-blue': '#38BDF8',
        'cta-purple': '#7C3AED',
        'footer-bg': '#6C47FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Sora', 'ui-sans-serif', 'system-ui'],
        solana: ['"Archivo Black"', 'Impact', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // Add Rubik Scribble font
        'rubik-scribble': ['"Rubik Scribble"', 'cursive'],
        // Or if you want to replace one of your existing fonts, for example:
        // heading: ['"Rubik Scribble"', 'Sora', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
    },
  },
  plugins: [],
}