/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-text-light': '#2E2836',
        'primary-text-dark': '#FFFCFB',

        'secondary-text-light': '#63586E',
        'secondary-text-dark': '#FFF1EA',

        'primary-bg-light': '#FFFCFB',
        'primary-bg-dark': '#2E2836',

        'secondary-bg-light': '#FFF1EA',
        'secondary-bg-dark': '#63586E',

        'primary-accent-light': '#59C9A5',
        'primary-accent-dark': '#37A985',

        'primary-accent-hover-light': '#84D7BD',
        'primary-accent-hover-dark': '#3CB991',

        'secondary-accent-light': '#FF6663',
        'secondary-accent-dark': '#FF6663',

        'secondary-accent-hover-light': '#FF8785',
        'secondary-accent-hover-dark': '#FF8785',

        'disabled-light': '#E5E5E5',
        'disabled-dark': '#333745',

        'disabled-text-light': '#BDBDBD',
        'disabled-text-dark': '#666666',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
        cursive: ['Indie Flower', 'cursive'],
      },
      minHeight: {
        'full-svh': '100svh',
      },
    },
  },
  plugins: [],
};
