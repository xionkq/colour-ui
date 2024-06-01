import type { Config } from 'tailwindcss'
import theme from '@colour-ui/theme/src/theme'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
}
export default config
