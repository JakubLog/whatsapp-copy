import React from 'react';
import { Wrapper, Message } from './Messages.styles';
import { useMessages } from 'hooks/useMessages';

const Messages: React.FC = () => {
  const { messages } = useMessages();

  return (
    <Wrapper tabIndex={0}>
      {messages.map(({ value, date, stream }) => (
        <Message key={`key-${Math.round(Math.random() * 1000)}`} data-time={date} Outgoing={stream === 'outgoing'}>
          {value}
        </Message>
      ))}
    </Wrapper>
  );
};

export default Messages;
