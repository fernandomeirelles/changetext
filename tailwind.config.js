/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: [],
  //content: ["./src/**/*.{ts,vue,js}"],
  content: [
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    //"./node_modules/flowbite/**/*.js",
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}