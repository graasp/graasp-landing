import React from 'react';
import { ThemeProvider as DeprecateThisThemeProvider } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactGA from 'react-ga4';
import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import { hasAcceptedCookies } from '@graasp/sdk';
import { GA_MEASUREMENT_ID, NODE_ENV } from '@config/env';

if (GA_MEASUREMENT_ID && hasAcceptedCookies() && NODE_ENV !== 'test') {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send('pageview');
}

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#5050d2',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
    },
    secondary: {
      main: '#1bb71f',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const Layout = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={muiTheme}>
    <DeprecateThisThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyles />
        {children}
      </>
    </DeprecateThisThemeProvider>
  </ThemeProvider>
);

export default Layout;
