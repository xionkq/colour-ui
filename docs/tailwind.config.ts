import type { Config } from 'tailwindcss'
import plugin from "tailwindcss";
import styled from "@colour-ui/theme/dist/styled.js";
import utilities from "@colour-ui/theme/dist/utilities.js";

const config: Config = {
  content: ['./component/*.{vue,js,ts,jsx,tsx,md}'],
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addComponents(styled)
      addUtilities(utilities)
    }),
  ],
}
export default config
