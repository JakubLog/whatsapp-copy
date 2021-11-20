import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/atoms/Button/Button';
import { ErrorParagraph } from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { Form } from 'components/atoms/Form/Form';
import FormField from 'components/molecules/FormField/FormField';
import { logEvent } from '@firebase/analytics';
import { analytics } from 'firebase';

const LoginForm: React.FC = () => {
  const { loading, signIn } = useAuth();
  const [isError, setError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const loginInProcess = async ({ email, password }: { email: string; password: string }) => {
    try {
      setError(false);
      await signIn(email, password);
      reset();
    } catch (e) {
      logEvent(analytics, 'login_error');
      setError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(loginInProcess)}>
      <FormField placeholder="your@mail.com" label="email" {...register('email', { required: true })} />
      <FormField label="password" type="password" {...register('password', { required: true })} />
      {(errors.email || errors.password) && <ErrorParagraph>Wszystkie pola muszą być uzupełnione!</ErrorParagraph>}
      <Button>{loading ? 'Ładowanie...' : isError ? 'Spróbuj ponownie!' : 'Zaloguj się'}</Button>
    </Form>
  );
};

export default LoginForm;
