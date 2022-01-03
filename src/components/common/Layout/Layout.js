import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as DeprecateThisThemeProvider } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#5050d2',
    },
    background: {
      paper: '#fff',
    },
    action: {
      main: '#1bb71f',
    },
    text: {
      main: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const Layout = ({ children }) => (
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
