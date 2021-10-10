import React from 'react';
import { theme } from 'assets/css/theme';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
