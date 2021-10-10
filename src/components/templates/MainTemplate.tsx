import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  background: #eee;
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;

const MainTemplate: React.FC = () => {
  return <Wrapper></Wrapper>;
};

export default MainTemplate;
