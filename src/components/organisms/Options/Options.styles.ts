import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > * {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
