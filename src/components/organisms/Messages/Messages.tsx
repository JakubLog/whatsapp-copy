import React from 'react';
import { Wrapper, Message } from './Messages.styles';

const Messages: React.FC = () => {
  return (
    <Wrapper tabIndex={0}>
      <Message data-time="12:00">Bla bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure!</Message>
      <Message data-time="12:00" Outgoing>
        Bla bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure!
      </Message>
      <Message data-time="12:00">Bla bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure!</Message>
      <Message data-time="12:00" Outgoing>
        Bla bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure! Bla bla bla Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Necessitatibus, iure!
      </Message>
    </Wrapper>
  );
};

export default Messages;
