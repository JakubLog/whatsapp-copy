import React, { useEffect } from 'react';
import { Wrapper, Message } from './Messages.styles';
import { useMessages } from 'hooks/useMessages';
import Loading from 'components/molecules/Loading/Loading';

const Messages: React.FC = () => {
  const { messages, loading } = useMessages();

  useEffect(() => console.log(loading), [loading]);

  return (
    <Wrapper tabIndex={0}>
      {loading ? (
        <Loading />
      ) : (
        messages.map(({ value, date, stream }) => (
          <Message key={`key-${Math.round(Math.random() * 1000)}`} data-time={date} Outgoing={stream === 'outgoing'}>
            {value}
          </Message>
        ))
      )}
    </Wrapper>
  );
};

export default Messages;