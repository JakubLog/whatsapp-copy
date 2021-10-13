import styled from 'styled-components';

export const Wrapper = styled.div<{ size?: number }>`
  overflow: hidden;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;
