import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const Search = styled.div`
  position: relative;
`;
export const Image = styled.img`
  position: absolute;
  width: 40px !important;
  height: 40px;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%);
`;
export const StyledInput = styled(Input)`
  padding: 6px 10px;
  padding-left: 50px;
`;
export const Wrapper = styled.div`
  padding: 10px 15px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    width: 100%;
  }
`;
