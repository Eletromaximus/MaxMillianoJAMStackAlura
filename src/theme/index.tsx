import breakpoints from './breakpoints';

const theme = {
  fontFamily: '\'Lato\', sans-serif',
  breakpoints,
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
