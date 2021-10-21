import Contact from 'components/molecules/Contact/Contact';
import Error from 'components/molecules/Error/Error';
import { useError } from 'hooks/useError';
import React from 'react';
import { Wrapper } from './Contacts.styles';

const Contacts: React.FC = () => {
  const { error } = useError();

  return (
    <Wrapper>
      <Contact
        date="18.01.2007"
        lastMsg="Siema ziomek, to idziemy na tą impreze czy nie?"
        name="Jakub Michał Fedoszczak"
        img="https://picsum.photos/100"
      />
      <Contact date="18.01.2007" lastMsg="Siema ziomek, to idziemy na tą impreze czy nie?" name="Mariusz Pudzianowski" />
      {error && <Error message={error} />}
    </Wrapper>
  );
};

export default Contacts;
