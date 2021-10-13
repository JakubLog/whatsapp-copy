import styled from 'styled-components';

export const IconWrapper = styled.div`
  position: absolute;
  top: 65%;
  transition: transform 0.1s ease-out;
  transform: translate(100%, -50%);
  right: 0;
  width: 30px;
  height: 25px;
  background-color: #fff;
`;
export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  width: 60%;
`;
export const Wrapper = styled.div`
  height: 72px;
  display: flex;
  position: relative;
  &:hover,
  &:focus {
    background-color: #eee;
    cursor: pointer;
    ${IconWrapper} {
      transform: translate(0, -50%);
      background-color: #eee;
    }
  }
`;
export const ImageWrapper = styled.div`
  padding: 15px;
  width: fit-content;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  width: 100%;
  position: relative;
  & > h1 {
    margin-bottom: 5px;
  }
`;
export const LastMessage = styled.p`
  margin: 0;
  opacity: 0.7;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
`;
export const Date = styled.p`
  margin: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.6;
  font-size: 12px;
`;
