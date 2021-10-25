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
  const { currentUser, signIn, loading } = useAuth();
  const [isError, setError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const process = async ({ email, password }: { email: string; password: string }) => {
    try {
      setError(false);
      await signIn(email, password);
    } catch (e) {
      setError(true);
    }
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
          <Form onSubmit={handleSubmit(process)}>
            <FormField label="email" {...register('email', { required: true })} />
            <FormField label="password" type="password" {...register('password', { required: true })} />
            {isError && <p>Niestety błąd!</p>}
            {(errors.email || errors.password) && <p>Wszystkie pola muszą być uzupełnione!</p>}
            <Button>Zaloguj się</Button>
          </Form>
          {loading && <p>Pobieranie informacji...</p>}
        </AuthWrapper>
      )}
    </Wrapper>
  );
};

export default MainTemplate;
