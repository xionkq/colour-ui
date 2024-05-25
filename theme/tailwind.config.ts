import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  important: true,
  content: [{ raw: "" }],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'linear-gradient(to right, #007cdf, #54e8a6, #ffe868, #ff6e54, #d72e90)',
      },
    },
  },
  plugins: [],
}
export default config
