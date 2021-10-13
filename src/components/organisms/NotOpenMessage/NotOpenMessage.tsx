import React from 'react';
import WhatsappSrc from 'assets/img/whatsapp.jpg';
import { Wrapper, Image, Title, Subtitle } from './NotOpenMessage.styles';

const NotOpenMessage: React.FC = () => {
  return (
    <Wrapper>
      <Image src={WhatsappSrc} />
      <Title>Telefon musi być stale połączony</Title>
      <Subtitle>
        WhatsApp łączy się z Twoim telefonem w celu synchronizacji wiadomości. Aby zmniejszyć użycie danych komórkowych, połącz telefon z siecią
        Wi-Fi.
      </Subtitle>
    </Wrapper>
  );
};

export default NotOpenMessage;
