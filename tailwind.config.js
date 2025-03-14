/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
      ],
    theme: {
        extend: {},
        screens: {
            xl: {max: "1279px"},
            lg: {max: "1023px"},
            md: {max: "767px"},
            sm: {max: "639px"},
        }
    },
    plugins: [],
}