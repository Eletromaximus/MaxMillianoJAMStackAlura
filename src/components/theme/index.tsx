import typographyVariants from './typographyVariants';
import breakpoints from './breakpoints';

const theme = {
  fontFamily: '\'Lato\', sans-serif',
  typographyVariants,
  breakpoints,
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
