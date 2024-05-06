import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { theme } from './themes';
import { router } from './config/rounters';
import './config/interceptor';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="#eaecef" p={0}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
