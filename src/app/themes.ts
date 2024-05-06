import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e77827',
    },
    secondary: {
      main: '#4160b6',
      light: '#e9eeff',
      "300": '#9aabdd'
    },
    info: {
      main: '#1eba5c',
      light: '#e9f9ef',
      dark: '#555555',
      "500":"#88dba9"
    },
    text: {
      primary: '#3d3d3d',
      secondary: '#989898',
      disabled: '#a0a0a0',
    },
    warning: {
      main: '#db9e00',
      light: '#fffae9',
      "300": '#f0d387'
    },
  },
});
