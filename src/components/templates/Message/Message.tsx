import NotOpenMessage from 'components/organisms/NotOpenMessage/NotOpenMessage';
import OpenMessage from 'components/templates/OpenMessage/OpenMessage';
import React from 'react';
import { Wrapper } from './Message.styles';

const Message: React.FC = () => {
  return (
    <Wrapper>
      {/* <NotOpenMessage /> */}
      <OpenMessage />
    </Wrapper>
  );
};

export default Message;
