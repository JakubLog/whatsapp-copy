import React from 'react';
import Message from '../Message/Message';
import Sidebar from '../Sidebar/Sidebar';
import { Wrapper } from './MainTemplate.styles';
import { useAuth } from 'hooks/useAuth';
import Auth from 'views/Auth/Auth';

const MainTemplate: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      {currentUser ? (
        <>
          <Sidebar />
          <Message />
        </>
      ) : (
        <Auth />
      )}
    </Wrapper>
  );
};

export default MainTemplate;
