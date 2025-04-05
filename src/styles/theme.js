import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // Asegúrate de incluir la fuente que estamos usando
    fontWeightBold: 700, // Asegúrate de que esta propiedad esté definida
  },
  palette: {
    mode: 'light', // o 'dark'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;
