/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-functions': {
      functions: {
        // 在这里定义您的自定义函数
        darken: (color, amount = '10%') => {
          return `color-mix(in hsl, ${color}, black ${amount})`;
        },
        lighten: (color, amount) => {
          return `color-mix(in hsl, ${color}, white ${amount})`;
        },
        transparentize: (color, amount = '20%') => {
          return `color-mix(in hsl, ${color}, transparent ${amount})`;
        },
        // 可以添加更多自定义函数
      }
    }
  },
}

export default config
