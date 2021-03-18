import typographyVariants from './typographyVariants'
import breakpoints from './breakpoints'
import { colors } from './colors'

const theme = {
  fontFamily: '\'Lato\', sans-serif',
  typographyVariants,
  breakpoints,
  colors
}

type ThemeType = typeof theme;

export type { ThemeType }
export default theme
