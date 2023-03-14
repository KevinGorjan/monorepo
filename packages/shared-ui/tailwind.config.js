/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/components/**/*.{js,vue,ts}",
    "./lib/pages/**/*.vue",
    "./lib/layouts/**/*.vue",
    "./lib/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
