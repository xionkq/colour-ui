import functions from './src/functions'

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-functions': {
      functions,
    },
    'postcss-mixins': {},
  },
}

export default config
