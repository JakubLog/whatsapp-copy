import NotOpenMessage from 'components/organisms/NotOpenMessage/NotOpenMessage';
import React from 'react';
import { Wrapper } from './Message.styles';

const Message: React.FC = () => {
  return (
    <Wrapper>
      <NotOpenMessage />
    </Wrapper>
  );
};

export default Message;
