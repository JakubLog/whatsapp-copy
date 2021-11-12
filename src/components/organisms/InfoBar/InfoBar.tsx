/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Wrapper, Information } from './InfoBar.styles';
import ProfileImage from 'components/molecules/ProfileImage/ProfileImage';
import { ContactName } from 'components/atoms/ContactName/ContactName';
import Option from '../../molecules/Option/Option';
import { storeResponse, storeRoot } from 'store';
import { useSelector } from 'react-redux';
import { useContacts } from 'hooks/useContacts';

const defaultProfileImage =
  'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg';

const InfoBar: React.FC = () => {
  const state = useSelector<storeRoot, storeResponse | null>((store) => store.chat);
  const { removeContact } = useContacts();

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProfileImage src={state?.img || defaultProfileImage} size={40} />
        <Information>
          <ContactName>{state?.name}</ContactName>
        </Information>
      </div>
      <div>
        <Option data-testid="optionsForContact" iconSrc="https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png">
          <a href="#">Informacje o kontakcie</a>
          <a href="#">Wybierz wiadomości</a>
          <a href="#">Wycisz powiadomienia</a>
          <a href="#">Wyczyść wiadomości</a>
          <a href="#" data-testid="removeContact" onClick={removeContact}>
            Usuń czat
          </a>
        </Option>
      </div>
    </Wrapper>
  );
};

export default InfoBar;
