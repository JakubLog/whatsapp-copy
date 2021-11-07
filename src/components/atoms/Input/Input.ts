import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: 15px;
  border: 0;
  padding: 10px 10px;
  outline: none;
  background-color: #eee;
  border-radius: 20px;
  &::placeholder {
    opacity: 0.6;
    font-size: 14px;
  }
`;
