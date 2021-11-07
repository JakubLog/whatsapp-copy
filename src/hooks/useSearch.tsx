/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from 'react';
import { useContacts } from './useContacts';
import { useError } from './useError';

interface searchTypes {
  isSearching: boolean;
  loading: boolean;
  response: any[];
  searchByPhrase: (phrase: string) => Promise<void>;
}
const initialObject: searchTypes = {
  isSearching: false,
  loading: true,
  response: [],
  searchByPhrase: (phrase: string) => Promise.resolve(console.log(phrase))
};

const SearchContext = createContext<searchTypes>(initialObject);
const SearchProvider: React.FC = ({ children }) => {
  const [isSearching, setSearchingState] = useState(false);
  const [loading, setLoadingState] = useState(true);
  const [response, setResponse] = useState<any[]>([]);
  const { dispatchError } = useError();
  const { getCurrentContacts } = useContacts();

  const searchByPhrase = async (phrase: string) => {
    if (phrase.length === 0) setSearchingState(false);
    else {
      try {
        setLoadingState(true);
        setSearchingState(true);
        const contacts = await getCurrentContacts(true);
        if (contacts instanceof Array) {
          const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().indexOf(phrase.toLowerCase()) === 0);
          setResponse(filteredContacts);
        }
        setLoadingState(false);
      } catch (e) {
        const userError = new Error('Something went wrong with searching. Please try again or contact with our support!');
        dispatchError(userError, e);
      }
    }
  };

  const object: searchTypes = {
    isSearching,
    searchByPhrase,
    response,
    loading
  };
  return <SearchContext.Provider value={object}>{children}</SearchContext.Provider>;
};

export const useSearch = (): searchTypes => {
  const { dispatchError } = useError();

  const result = useContext(SearchContext);
  if (!result) dispatchError(new Error('Something went wrong with searching!'), new Error('Missing context in useSearch hook!'));
  return result;
};

export default SearchProvider;
