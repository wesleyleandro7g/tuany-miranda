/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violet-web": "#FF84E4",
        "magenta-crayola": "#DF599A",
        claret: "#740D29",
        "dark-sienna": "#31080F",
        vermilion: "#E64223",
        "rick-black": "#030305",
        primary: "#C19992",
      },
    },
  },
  plugins: [],
};
