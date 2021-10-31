import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  &.active {
    transform: translateX(0);
  }
`;
export const Header = styled.div`
  height: 103px;
  color: white;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  background-color: #00bfa5;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    &:first-child {
      padding-right: 20px;
      cursor: pointer;
    }
  }
`;
