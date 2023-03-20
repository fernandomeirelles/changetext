/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  //darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}