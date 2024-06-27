import type { Config } from 'tailwindcss'
import ColourUi from '@colour-ui/theme'

const config: Config = {
  content: ['./**/*.{vue,js,ts,jsx,tsx,md}'],
  plugins: [ColourUi],
}
export default config
