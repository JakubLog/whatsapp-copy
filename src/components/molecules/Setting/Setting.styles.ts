import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 60px;
  display: grid;
  grid-template-areas: 'i r r r';
  grid-template-columns: 20% 1fr;
  color: #777;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
  div,
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: i;
  }
  h2 {
    justify-content: flex-start;
    grid-area: r;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    letter-spacing: 1px;
  }
  &:not(:first-child) {
    h2 {
      border-top: 1px solid #eee;
    }
  }
`;

export const Icon = styled.div``;
export const Name = styled.h2`
  margin: 0;
`;
