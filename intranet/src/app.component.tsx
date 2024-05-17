import '@fontsource-variable/oswald';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppRouter } from '#core/router';
import { mainTheme } from '#core/theme';

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};
