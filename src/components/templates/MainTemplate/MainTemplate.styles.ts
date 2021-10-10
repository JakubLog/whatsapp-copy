import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 73%;
  height: 95%;
  background: #eee;
  position: absolute;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;
