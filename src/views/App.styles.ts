import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dddbd1;
  height: 100vh;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 127px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tealGreen};
  }
`;
