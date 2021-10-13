import Contact from 'components/molecules/Contact/Contact';
import React from 'react';
import { Wrapper } from './Contacts.styles';

const Contacts: React.FC = () => {
  return (
    <Wrapper>
      <Contact
        date="18.01.2007"
        lastMsg="Siema ziomek, to idziemy na tą impreze czy nie?"
        name="Jakub Michał Fedoszczak"
        img="https://picsum.photos/100"
      />
      <Contact date="18.01.2007" lastMsg="Siema ziomek, to idziemy na tą impreze czy nie?" name="Jakub Michał Fedoszczak" />
    </Wrapper>
  );
};

export default Contacts;
