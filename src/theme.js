import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
    },
    secondary: {
      main: '#f48fb1', // Pink
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Card background
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: '#ffffff', // ensure text is visible in dark mode
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#90caf9",
          border: "1px solid #90caf9",
          '&:hover': {
            backgroundColor: "#1565c0",
            color: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          border: '1px solid #333',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#90caf9',
          '&:hover': {
            textDecoration: 'underline',
            color: '#64b5f6',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
  },
});

export default darkTheme;
