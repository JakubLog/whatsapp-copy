import Icon from 'components/atoms/Icon/Icon';
import React from 'react';
import { Wrapper, StyledInput } from './SendPlace.styles';

const SendPlace: React.FC = () => {
  return (
    <Wrapper>
      <Icon src="https://www.pngfind.com/pngs/m/220-2207946_png-file-svg-white-emoji-icon-png-transparent.png" />
      <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ic_attach_file_48px.svg/1200px-Ic_attach_file_48px.svg.png" />
      <form>
        <StyledInput placeholder="Wpisz tutaj wiadomość..." />
        <Icon src="https://static.thenounproject.com/png/488906-200.png" />
      </form>
    </Wrapper>
  );
};

export default SendPlace;
