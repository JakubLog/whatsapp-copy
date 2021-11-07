import React from 'react';
import { Wrapper, StyledTitle, Content } from './Error.styles';

interface props {
  message: string;
}

const defaultMessage = 'Sorry, something went wrong. Please try again later or contact with our support!';

const Error: React.FC<props> = ({ message = defaultMessage }) => {
  return (
    <Wrapper>
      <StyledTitle>Upsss!</StyledTitle>
      <Content>{message}</Content>
    </Wrapper>
  );
};

export default Error;
