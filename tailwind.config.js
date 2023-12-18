/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-text-dark': '#f4f3ee',
      'secondary-text-dark': '#e0afa0',

      'primary-text-light': '#2d3142',
      'secondary-text-light': '#4f5d75',

      'primary-bg-dark': '#463f3a',
      'secondary-bg-dark': '#8a817c',

      'primary-bg-light': '#f4f3ee',
      'secondary-bg-light': '#eae0d5',

      'primary-accent-dark': '#ffadad',
      'secondary-accent-dark': '#b5838d',

      'primary-accent-light': '#ffadad',
      'secondary-accent-light': '#b5838d',

      'primary-accent-hover-dark': '#ffadad',
      'secondary-accent-hover-dark': '#b5838d',

      'primary-accent-hover-light': '#ffadad',
      'secondary-accent-hover-light': '#b5838d',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Crimson Text', 'serif'],
      cursive: ['Indie Flower', 'cursive'],
    },
    extend: {
      minHeight: {
        'full-svh': '100svh',
      },
    },
  },
  plugins: [],
};
