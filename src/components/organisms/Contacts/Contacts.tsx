import { nanoid } from '@reduxjs/toolkit';
import { InfoBlock } from 'components/atoms/InfoBlock/InfoBlock';
import Contact from 'components/molecules/Contact/Contact';
import CreateNewMessage from 'components/molecules/CreateNewMessage/CreateNewMessage';
import Error from 'components/molecules/Error/Error';
import Loading from 'components/molecules/Loading/Loading';
import { format } from 'date-fns';
import { useContacts } from 'hooks/useContacts';
import { useError } from 'hooks/useError';
import { useSearch } from 'hooks/useSearch';
import React from 'react';
import { Wrapper } from './Contacts.styles';

const Contacts: React.FC = () => {
  const { error } = useError();
  const { contacts, loading } = useContacts();
  const { isSearching, response, loading: searchLoading } = useSearch();

  if (isSearching)
    return (
      <Wrapper>
        {searchLoading ? (
          <Loading />
        ) : (
          <>
            {response.length !== 0 ? (
              response.map(({ name, image, lastMsg: { value, date } }) => (
                <Contact
                  key={nanoid()}
                  date={typeof date !== 'string' ? format(Number(date.toDate()), 'dd-MM-yyyy') : ''}
                  lastMsg={value}
                  name={name}
                  img={image}
                />
              ))
            ) : (
              <InfoBlock>Nie znaleziono!</InfoBlock>
            )}
            <CreateNewMessage />
          </>
        )}
      </Wrapper>
    );
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : contacts.length <= 0 ? (
        <CreateNewMessage />
      ) : (
        contacts.map(({ name, image, lastMsg: { value, date } }) => (
          <Contact
            key={nanoid()}
            date={typeof date !== 'string' ? format(Number(date.toDate()), 'dd-MM-yyyy') : ''}
            lastMsg={value}
            name={name}
            img={image}
          />
        ))
      )}
      {error && <Error message={error} />}
    </Wrapper>
  );
};

export default Contacts;
