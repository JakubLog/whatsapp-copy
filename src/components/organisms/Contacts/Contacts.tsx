import { nanoid } from '@reduxjs/toolkit';
import Contact from 'components/molecules/Contact/Contact';
import Error from 'components/molecules/Error/Error';
import { format } from 'date-fns';
import { useContacts } from 'hooks/useContacts';
import { useError } from 'hooks/useError';
import React from 'react';
import { Wrapper } from './Contacts.styles';

const Contacts: React.FC = () => {
  const { error } = useError();
  const { contacts } = useContacts();

  return (
    <Wrapper>
      {contacts.map(({ name, image, lastMsg: { value, date } }) => (
        <Contact key={nanoid()} date={format(Number(date.toDate()), 'dd-MM-yyyy')} lastMsg={value} name={name} img={image} />
      ))}
      {error && <Error message={error} />}
    </Wrapper>
  );
};

export default Contacts;
