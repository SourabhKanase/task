// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-sky-blue': '#e0f7fa', // Custom color for background
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // If using line-clamp
  ],
};
