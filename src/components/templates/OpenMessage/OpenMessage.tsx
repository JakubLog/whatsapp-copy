/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import InfoBar from 'components/organisms/InfoBar/InfoBar';
import { Wrapper } from './OpenMessage.styles';
import Messages from 'components/organisms/Messages/Messages';
import SendPlace from 'components/organisms/SendPlace/SendPlace';

const OpenMessage: React.FC = () => {
  return (
    <Wrapper>
      <InfoBar />
      <Messages />
      <SendPlace />
    </Wrapper>
  );
};

export default OpenMessage;
