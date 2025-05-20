import functions from './src/functions'

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-functions': {
      functions,
    },
    'postcss-mixins': {},
  },
}

export default config
