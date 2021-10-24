import React from 'react';
import { Wrapper, Message } from './Messages.styles';
import { useMessages } from 'hooks/useMessages';
import Loading from 'components/molecules/Loading/Loading';
import { format } from 'date-fns';

const currentUser = {
  name: 'Jakub Michał Fedoszczak'
};

const Messages: React.FC = () => {
  const { messages, loading } = useMessages();

  return (
    <Wrapper tabIndex={0}>
      {loading ? (
        <Loading />
      ) : !messages.length ? (
        <p>
          Nie ma tutaj żadnych wiadomości! <br /> Napisz nową, aby coś tutaj się pojawiło. Czekamy!
        </p>
      ) : (
        messages.map(({ value, date, owner }) => {
          return (
            <Message
              key={`key-${Math.round(Math.random() * 1000)}`}
              data-time={format(Number(date.toDate()), 'HH:mm')}
              Outgoing={owner === currentUser.name}
            >
              {value}
            </Message>
          );
        })
      )}
    </Wrapper>
  );
};

export default Messages;
