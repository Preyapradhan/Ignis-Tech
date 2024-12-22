/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}", // Custom component folder
  "./pages/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all relevant files
  theme: {
    extend: {},
  },
  plugins: [],
};
