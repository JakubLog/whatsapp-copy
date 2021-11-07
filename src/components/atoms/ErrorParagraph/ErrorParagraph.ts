import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-15px);
    }
`;

export const ErrorParagraph = styled.p`
  color: ${({ theme }) => theme.colors.tealGreenDark};
  opacity: 0.6;
  margin: 0;
  animation: ${fadeIn} 0.4s ease-in 1;
  margin-bottom: 10px;
`;
