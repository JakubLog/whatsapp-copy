/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Wrapper } from './Options.styles';
import Option from 'components/molecules/Option/Option';
import { useAuth } from 'hooks/useAuth';
import { changeChat } from 'store';
import { useDispatch } from 'react-redux';

const Options: React.FC = () => {
  const { logout } = useAuth();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Option iconSrc="https://cdn3.iconfinder.com/data/icons/project-management-32/48/11-512.png">
        <a href="#">Stwórz wiadomość</a>
      </Option>
      <Option iconSrc="https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png">
        <a href="#">Nowa grupa</a>
        <a href="#">Zarchiwizowane</a>
        <a href="#">Oznaczone gwiazdką</a>
        <a href="#">Ustawienia</a>
        <a
          href="#"
          onClick={() => {
            dispatch(changeChat(null));
            logout();
          }}
        >
          Wyloguj
        </a>
      </Option>
    </Wrapper>
  );
};

export default Options;
