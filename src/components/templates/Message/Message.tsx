import NotOpenMessage from 'components/organisms/NotOpenMessage/NotOpenMessage';
import OpenMessage from 'components/templates/OpenMessage/OpenMessage';
import React from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { Wrapper } from './Message.styles';

const Message: React.FC = () => {
  const isOpenMessage = useSelector<storeRoot>((store) => store.chat);

  return <Wrapper>{isOpenMessage === null ? <NotOpenMessage /> : <OpenMessage />}</Wrapper>;
};

export default Message;
