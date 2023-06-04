/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /col-(span|start|end)-\d+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#ffedd8",
        },
        secondary: {
          1: "#ffcb69",
        },
        dark: {
          1: "#201523",
        },
      },
    },
  },
  plugins: [],
};
