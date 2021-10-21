import React from 'react';
import { theme } from 'assets/css/theme';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';
import MessagesProvider from 'hooks/useMessages';
import ErrorProvider from 'hooks/useError';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ErrorProvider>
        <MessagesProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </MessagesProvider>
      </ErrorProvider>
    </Provider>
  );
};

export default AppProviders;
