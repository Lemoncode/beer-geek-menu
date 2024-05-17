import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3a2e23',
      contrastText: '#ffcf20',
    },
    secondary: {
      main: '#ffcf20',
      contrastText: '#3a2e23',
    },
    success: {
      main: '#22c14b',
    },
    error: {
      main: '#f32400',
    },
    background: {
      default: '#fffbf3',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Oswald',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Oswald',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Oswald',
      fontWeight: 600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 3,
  },
});
