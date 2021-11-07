import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    to {
        transform: scaleX(1);
    }
`;

export const Wrapper = styled.div`
  background-color: #fff;
  height: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0.7;
`;

export const Bar = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: top left;
  animation: ${slide} 3s 0.1s forwards 1;
  background-color: ${({ theme }) => theme.colors.tealGreen};
`;
