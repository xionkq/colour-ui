import type { Config } from 'tailwindcss'
import theme from './src/theme/index'

const config: Config = {
  darkMode: 'selector',
  important: true,
  content: [{ raw: "" }],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
}
export default config
