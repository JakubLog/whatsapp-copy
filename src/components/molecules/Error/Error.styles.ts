import styled, { keyframes } from 'styled-components';
import { Title } from 'components/organisms/NotOpenMessage/NotOpenMessage.styles';

const slideIn = keyframes`
    from {
        transform: translateY(100%);
    }
`;
const slideOut = keyframes`
    to {
        transform: translateY(110%);
    }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  box-shadow: 0 -5px 20px -15px #aaa;
  padding: 15px 30px;
  animation: ${slideIn} 1.5s ease-in forwards 1, ${slideOut} 1s 6s ease-in forwards 1;
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.tealGreenDark};
  margin-bottom: 10px;
  letter-spacing: 1px;
`;
export const Content = styled.div`
  padding-inline: 10px;
`;
