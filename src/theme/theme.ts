import { createTheme, ThemeOptions } from '@mui/material/styles';

const sharedTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Noto Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    h1: {
      fontFamily: '"Roboto Slab Variable", serif',
    },
    h2: {
      fontFamily: '"Roboto Slab Variable", serif',
    },
    h3: {
      fontFamily: '"Roboto Slab Variable", serif',
    },
    h4: {
      fontFamily: '"Roboto Slab Variable", serif',
    },
    h5: {
      fontFamily: '"Roboto Slab Variable", serif',
    },
    h6: {
      fontFamily: '"Roboto Slab Variable", serif',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

export const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#b7916a',
      light: '#c9a882',
      dark: '#8f6a47',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6F8466',
      light: '#8fa485',
      dark: '#4e5f47',
      contrastText: '#ffffff',
    },
    background: {
      default: '#faf8f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2420',
      secondary: '#6b5e54',
    },
  },
});

export const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9a882',
      light: '#dbbf9a',
      dark: '#b7916a',
      contrastText: '#1a120b',
    },
    secondary: {
      main: '#8fa485',
      light: '#a8bc9e',
      dark: '#6F8466',
      contrastText: '#1a120b',
    },
    background: {
      default: '#1a120b',
      paper: '#241a12',
    },
    text: {
      primary: '#f5ede4',
      secondary: '#c4a98d',
    },
  },
});
