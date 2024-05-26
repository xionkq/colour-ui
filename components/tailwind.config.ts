import type { Config } from 'tailwindcss'
import theme from '@colour-ui/theme'

const config: Config = {
  // content: ['./src/**/*.{vue,js,ts,html}'],
  content: ['**/*.{vue,js,ts,html}'],
  plugins: [theme],
}
export default config
