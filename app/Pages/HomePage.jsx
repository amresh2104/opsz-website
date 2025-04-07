import React from 'react';
import HomeHero from '../Components/Home Components/HomeHero';
import { ThemeProvider, createTheme } from '@mui/material';
import UnifiedPage from '../Components/UnifiedPage';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
    },
  },
});


const HomePage = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HomeHero />
        <UnifiedPage />
      </ThemeProvider>
    </div>
  )
}

export default HomePage