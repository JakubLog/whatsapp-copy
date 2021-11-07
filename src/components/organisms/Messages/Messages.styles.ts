import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: auto;
  background-color: #e5ddd5;
  padding-block: 30px;
  padding-inline: 90px;
  & > * {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  p {
    text-align: center;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 1px;
    opacity: 0.4;
    width: fit-content;
    margin: 0 auto;
    padding-inline: 30px;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
  }
  ::-webkit-scrollbar {
    width: 7px;
    background-color: #eee;
    overflow: hidden;
  }
  ::-webkit-scrollbar-thumb {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Message = styled.div<{ Outgoing?: boolean }>`
  width: fit-content;
  max-width: 60%;
  background-color: white;
  padding: 15px;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  border-radius: 0 7px 7px 7px;
  position: relative;
  padding-right: 40px;
  padding-bottom: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -15px;
    border-top: 15px solid white;
    border-left: 15px solid transparent;
  }
  &::after {
    content: attr(data-time);
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0.7;
    font-size: 12px;
  }
  ${({ Outgoing, theme }) =>
    Outgoing
      ? `
      background-color: ${theme.colors.lightGreen};
      margin-left: auto;
      padding-right: 15px;
      padding-left: 45px;
      border-radius: 7px 0 7px 7px;
      &::before {
        right: -15px;
        left: auto;
        border-top: 15px solid ${theme.colors.lightGreen};
        border-right: 15px solid transparent;
        border-left: 0;
      }
      &::after {
        right: auto;
        left: 5px;
      }
  `
      : null}
`;
