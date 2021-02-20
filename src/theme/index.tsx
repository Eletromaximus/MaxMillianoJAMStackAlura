import breakpoints from './breakpoints';
import { darkTheme, lightTheme } from './colors'

const theme = {
  fontFamily: '\'Lato\', sans-serif',
  breakpoints,
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
