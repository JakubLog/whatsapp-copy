import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  border: 0;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Source = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
