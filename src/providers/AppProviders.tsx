import React from 'react';
import { theme } from 'assets/css/theme';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';
import MessagesProvider from 'hooks/useMessages';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <MessagesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </MessagesProvider>
    </Provider>
  );
};

export default AppProviders;
