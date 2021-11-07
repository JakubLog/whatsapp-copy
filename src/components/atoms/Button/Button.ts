import styled from 'styled-components';

export const Button = styled.button`
  font-size: 18px;
  padding-inline: 15px;
  padding-block: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.tealGreen};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s linear;
  outline: none;
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.tealGreenDark};
  }
`;
