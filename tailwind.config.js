/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#1C1F26", // Dark slate for navigation with a subtle blue tint
        page: "#121417", // Deep dark gray for the page background
        card: "#1E222A", // Slightly lighter dark gray for cards
        "card-hover": "#2A2F38", // A medium-dark gray for hover effects
        "default-text": "#F5F5F5", // Off-white text for readability
        "blue-accent": "#4F8CC9", // Muted blue for accents
        "blue-accent-hover": "#3A6FA1", // Slightly darker blue for hover
        "green-accent": "#3BAF75", // Soft green for success
        "red-accent": "#D65A5A", // Muted red for errors
        "yellow-accent": "#E3B341", // Warm yellow for warnings
        "gray-accent": "#6C757D", // Neutral gray for subtle elements
        "light-overlay": "#2E3440", // Semi-dark overlay for modals or highlights
        "border-light": "#3B4048", // Subtle light border for separation
      },
    },
  },
  plugins: [],
};
