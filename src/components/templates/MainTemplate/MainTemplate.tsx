import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar />
    </Wrapper>
  );
};

export default MainTemplate;
