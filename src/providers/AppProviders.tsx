import React from 'react';
import { theme } from 'assets/css/theme';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';
import MessagesProvider from 'hooks/useMessages';
import ErrorProvider from 'hooks/useError';
import ContactsProvider from 'hooks/useContacts';
import AuthProvider from 'hooks/useAuth';
import SearchProvider from 'hooks/useSearch';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ErrorProvider>
        <AuthProvider>
          <MessagesProvider>
            <ContactsProvider>
              <SearchProvider>
                <ThemeProvider theme={theme}>
                  <GlobalStyles />
                  {children}
                </ThemeProvider>
              </SearchProvider>
            </ContactsProvider>
          </MessagesProvider>
        </AuthProvider>
      </ErrorProvider>
    </Provider>
  );
};

export default AppProviders;
