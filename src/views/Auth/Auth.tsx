import React from 'react';
import LoginForm from 'components/organisms/LoginForm/LoginForm';
import RegisterForm from 'components/organisms/RegisterForm/RegisterForm';
import { Wrapper } from './Auth.styles';

const Auth: React.FC = () => {
  return (
    <Wrapper>
      <LoginForm />
      <RegisterForm />
    </Wrapper>
  );
};

export default Auth;
