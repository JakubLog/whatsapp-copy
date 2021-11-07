import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const StyledInput = styled(Input)`
  border-radius: 7px;
  border: 2px solid ${({ theme }) => theme.colors.tealGreen};
  background-color: #eee;
  transition: background-color 0.3s ease-in, border 0.2s linear;
  &:focus {
    background-color: white;
    border: 2px solid ${({ theme }) => theme.colors.tealGreenDark};
  }
`;
