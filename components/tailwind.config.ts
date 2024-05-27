import type { Config } from 'tailwindcss'
import theme from '@colour-ui/theme'

const config: Config = {
  // content: ['./src/**/*.{vue,js,ts,html}'],
  content: ['**/*.{vue,js,ts,html}'],
  plugins: [theme],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #007cdf, #54e8a6, #ffe868, #ff6e54, #d72e90)',
      },
    },
  }
}
export default config
