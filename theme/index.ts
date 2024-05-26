import plugin from 'tailwindcss/plugin'
import styled from './dist/styled'
import utilities from './dist/utilities'

const ColourUiTheme = plugin(
  ({ addUtilities, addComponents }) => {
    addUtilities(utilities)
    addComponents(styled)
  },
)

export default ColourUiTheme
