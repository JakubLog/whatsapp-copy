import React, { useState, useContext, createContext } from 'react';

interface errorTypes {
  error: string | null;
  dispatchError: (userError: Error, adminError: Error | unknown) => void;
}

const initialObject: errorTypes = {
  error: null,
  dispatchError: (userError: Error, adminError: Error | unknown) => console.error(userError.message)
};

const ErrorContext = createContext<errorTypes>(initialObject);
const ErrorProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const dispatchError = (userError: Error, adminError: Error | unknown) => {
    if (adminError instanceof Error)
      console.error(`!ERROR | ${adminError.name}${adminError?.stack ? ` - ${adminError?.stack}` : null} | ${adminError.message}`);
    setError(userError.message);
    setTimeout(() => {
      setError(null);
    }, 6000);
  };

  const object: errorTypes = {
    error,
    dispatchError
  };
  return <ErrorContext.Provider value={object}>{children}</ErrorContext.Provider>;
};

export const useError = (): errorTypes => {
  const error = useContext(ErrorContext);
  if (!error) console.error('Error handling is broken. Please contact with administration.');
  return error;
};

export default ErrorProvider;
