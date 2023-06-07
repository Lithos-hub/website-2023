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
    {
      pattern:
        /^(bg|text|border)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
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
