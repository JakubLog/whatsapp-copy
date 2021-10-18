/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Wrapper, Information } from './InfoBar.styles';
import ProfileImage from 'components/molecules/ProfileImage/ProfileImage';
import { ContactName } from 'components/atoms/ContactName/ContactName';
import Option from '../../molecules/Option/Option';

const InfoBar: React.FC = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProfileImage src="https://picsum.photos/100" size={40} />
        <Information>
          <ContactName>Jakub Michał Fedoszczak</ContactName>
        </Information>
      </div>
      <div>
        <Option iconSrc="https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png">
          <a href="#">Informacje o kontakcie</a>
          <a href="#">Wybierz wiadomości</a>
          <a href="#">Wycisz powiadomienia</a>
          <a href="#">Wyczyść wiadomości</a>
          <a href="#">Usuń czat</a>
        </Option>
      </div>
    </Wrapper>
  );
};

export default InfoBar;
