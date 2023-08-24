/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Inter",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      content: {
        about: 'url("/images/outline-text/about.svg")',
        portfolio: 'url("/images/outline-text/portfolio.svg")',
        services: 'url("/images/outline-text/services.svg")',
        testimonials: 'url("/images/outline-text/testimonials.svg")',
        contact: 'url("/images/outline-text/contact.svg")',
      },

      colors: {
        primary: "#040a2b",
        secondary: "#262b47",
        tertiary: "#111530",
        accent: {
          DEFAULT: "#f4254e",
          hover: "#e8505b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
