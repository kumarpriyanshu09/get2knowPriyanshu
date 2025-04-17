/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Base Palette Colors
        'emerald-green': '#317039',
        'maximum-yellow': '#F1BE49',
        'antique-white': '#F8EDD9',
        'dark-pastel-red': '#CC4B24',
        'papaya-whip': '#FFF1D4',
        'cosmic-latte': '#FFFBEB',

        // Updated Semantic Palette (Light Mode uses new palette)
        'page-bg': 'var(--color-page-bg)',                 // '#FFFBEB' (Cosmic Latte)
        'section-bg': 'var(--color-section-bg)',           // '#FFF1D4' (Papaya Whip)
        'card-bg': 'var(--color-card-bg)',                 // '#F8EDD9' (Antique White)
        'button-primary-bg': 'var(--color-button-primary-bg)', // '#317039' (Emerald Green)
        'button-primary-text': 'var(--color-button-primary-text)',// '#FFFBEB' (Cosmic Latte)
        'tag-bg': 'var(--color-tag-bg)',                   // '#CC4B24' (Dark Pastel Red)
        'tag-text': 'var(--color-tag-text)',               // '#FFFBEB' (Cosmic Latte)
        'progress-fill': 'var(--color-progress-fill)',     // '#CC4B24' (Dark Pastel Red)
        'text-primary': 'var(--color-text-primary)',       // '#111827' (Dark Gray/Black)
        'text-secondary': 'var(--color-text-secondary)',   // '#374151' (Medium Gray)
        'text-accent': 'var(--color-text-accent)',         // '#317039' (Emerald Green for headings/links)
        'text-rotating-accent': 'var(--color-text-rotating-accent)', // '#CC4B24' (Dark Pastel Red) - Keep specific for rotator
        'highlight-subtle': 'var(--color-highlight-subtle)', // '#F1BE49' (Maximum Yellow) - For subtle hover/focus
        'navbar-text': 'var(--color-navbar-text)',           // Specific light color for dark navbar background

        // Dark Mode Palette (Keeping existing structure, adjust values as needed)
        'page-bg-dark': 'var(--color-page-bg-dark)',             // '#111827' (gray-900)
        'section-bg-dark': 'var(--color-section-bg-dark)',       // '#1F2937' (gray-800)
        'card-bg-dark': 'var(--color-card-bg-dark)',             // '#374151' (gray-700)
        'button-primary-bg-dark': 'var(--color-button-primary-bg-dark)', // '#317039' (Emerald Green - might need adjustment for dark)
        'button-primary-text-dark': 'var(--color-button-primary-text-dark)',// '#FFFBEB' (Cosmic Latte)
        'tag-bg-dark': 'var(--color-tag-bg-dark)',               // '#CC4B24' (Dark Pastel Red - might need adjustment for dark)
        'tag-text-dark': 'var(--color-tag-text-dark)',           // '#FFFBEB' (Cosmic Latte)
        'progress-fill-dark': 'var(--color-progress-fill-dark)', // '#CC4B24' (Dark Pastel Red - might need adjustment for dark)
        'text-primary-dark': 'var(--color-text-primary-dark)',   // '#FFFFFF' (White)
        'text-secondary-dark': 'var(--color-text-secondary-dark)',// '#D1D5DB' (gray-300)
        'text-accent-dark': 'var(--color-text-accent-dark)',     // '#6EE7B7' (Emerald-300 - example, lighter green for dark)
        'text-rotating-accent-dark': 'var(--color-text-rotating-accent-dark)', // '#F59E0B' (Amber-500 - example)
        'highlight-subtle-dark': 'var(--color-highlight-subtle-dark)', // '#FBBF24' (Amber-400 - example)
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
