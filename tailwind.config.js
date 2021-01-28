/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.2rem',
      center: true
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        roboto: 'Roboto, sans-serif'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')]
}
