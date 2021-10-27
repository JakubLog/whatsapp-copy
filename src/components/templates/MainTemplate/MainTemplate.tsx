import React, { useState } from 'react';
import Message from '../Message/Message';
import Sidebar from '../Sidebar/Sidebar';
import { Wrapper, AuthWrapper } from './MainTemplate.styles';
import { useAuth } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { Form } from 'components/atoms/Form/Form';
import { Button } from 'components/atoms/Button/Button';

const MainTemplate: React.FC = () => {
  const { currentUser, signIn, loading, createAccount } = useAuth();
  const [isError, setError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const {
    register: registerTwo,
    formState: { errors: errorsTwo },
    handleSubmit: handleSubmitTwo,
    reset: resetTwo
  } = useForm();

  const loginInProcess = async ({ email, password }: { email: string; password: string }) => {
    try {
      setError(false);
      await signIn(email, password);
      reset();
    } catch (e) {
      setError(true);
    }
  };

  const createAccountProcess = ({ name, newEmail, newPassword, image }: { name: string; newEmail: string; newPassword: string; image?: string }) => {
    createAccount(name, newEmail, newPassword, image);
    resetTwo();
  };

  return (
    <Wrapper>
      {currentUser ? (
        <>
          <Sidebar />
          <Message />
        </>
      ) : (
        <AuthWrapper>
          <Form onSubmit={handleSubmit(loginInProcess)}>
            <FormField placeholder="your@mail.com" label="email" {...register('email', { required: true })} />
            <FormField label="password" type="password" {...register('password', { required: true })} />
            {(errors.email || errors.password) && <p>Wszystkie pola muszą być uzupełnione!</p>}
            <Button>{loading ? 'Ładowanie...' : isError ? 'Spróbuj ponownie!' : 'Zaloguj się'}</Button>
          </Form>
          <Form onSubmit={handleSubmitTwo(createAccountProcess)}>
            <FormField placeholder="Imię i nazwisko" label="name" {...registerTwo('name', { required: true })} />
            <FormField placeholder="example@mail.com" label="email" {...registerTwo('newEmail', { required: true })} />
            <FormField label="password" type="password" {...registerTwo('newPassword', { required: true })} />
            <FormField placeholder="Optional: link to photo" label="image" type="url" {...registerTwo('image', { required: false })} />
            {(errorsTwo.newEmail || errorsTwo.newPassword || errorsTwo.name) && <p>Trzy pierwsze pola muszą być uzupełnione!</p>}
            <Button>{loading ? 'Ładowanie...' : 'Stwórz konto'}</Button>
          </Form>
        </AuthWrapper>
      )}
    </Wrapper>
  );
};

export default MainTemplate;
