import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const StyledInput = styled(Input)`
  width: 100%;
  background-color: #fff;
  margin-left: 15px;
  font-size: 16px;
  color: #222;
  padding-left: 15px;
`;
export const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-inline: 15px;
  justify-content: space-evenly;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    & > button {
      margin-left: 15px;
    }
  }
`;
