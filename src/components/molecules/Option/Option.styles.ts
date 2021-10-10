import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  width: max-content;
  border-radius: 5px;
  z-index: 10000;
  height: auto;
  overflow: hidden;
  background-color: white;
  top: 100%;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  right: 0;
  display: flex;
  flex-direction: column;
  a,
  li {
    cursor: pointer;
    text-decoration: none !important;
    color: black;
    padding: 15px;
    padding-right: 30px;
    &:hover {
      background-color: #eee;
    }
    &:focus {
      background-color: #ddd;
    }
  }
`;
