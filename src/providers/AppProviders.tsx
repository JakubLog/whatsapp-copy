import React from 'react';
import { theme } from 'assets/css/theme';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const AppProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
