/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-10": "rgba(40, 167, 69, 1)",
        "green-20": "rgba(33, 155, 157, 1)",
        "yellow-10": "rgba(255, 191, 0, 1)",
        "purple-10": "rgba(80, 0, 115, 1)",
        "purple-20": "rgba(237, 207, 252, 1)",
        "red-10": "rgba(255, 87, 51, 0.77)",
        "orange-10": "rgba(255, 87, 51, 1)",
        "gray-10": "rgba(224, 238, 249, 1)",


      },
    },
  },
  plugins: [],
};
