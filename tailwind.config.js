/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/images/businessLarge.svg')",
        "journey-bg": "url('/images/action.svg')",
        "journey1-bg": "url('/images/Calltoaction.svg')",
        "unlock-bg": "url('/images/unlockbg.svg')",
      },
    },
  },
  plugins: [],
};
