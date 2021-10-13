import React from 'react';
import Message from '../Message/Message';
import Sidebar from '../Sidebar/Sidebar';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Message />
    </Wrapper>
  );
};

export default MainTemplate;
