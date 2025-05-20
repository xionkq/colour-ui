import type { Config } from 'tailwindcss'
import theme from './src/theme.css'

const config: Config = {
  darkMode: 'selector',
  important: true,
  content: [{ raw: '' }],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
}
export default config
