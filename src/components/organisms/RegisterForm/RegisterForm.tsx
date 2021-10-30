import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/atoms/Button/Button';
import { ErrorParagraph } from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { Form } from 'components/atoms/Form/Form';
import FormField from 'components/molecules/FormField/FormField';

const RegisterForm: React.FC = () => {
  const [isError, setError] = useState(false);
  const { loading, createAccount } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const createAccountProcess = async ({
    name,
    newEmail,
    newPassword,
    image
  }: {
    name: string;
    newEmail: string;
    newPassword: string;
    image?: string;
  }) => {
    try {
      await createAccount(name, newEmail, newPassword, image);
      reset();
    } catch (e) {
      setError(true);
      // console.error(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(createAccountProcess)}>
      <FormField placeholder="Imię i nazwisko" label="name" {...register('name', { required: true })} />
      <FormField placeholder="example@mail.com" label="email" {...register('newEmail', { required: true })} />
      <FormField label="password" type="password" {...register('newPassword', { required: true })} />
      <FormField placeholder="Optional: link to photo" label="image" type="url" {...register('image', { required: false })} />
      {(errors.newEmail || errors.newPassword || errors.name) && <ErrorParagraph>Trzy pierwsze pola muszą być uzupełnione!</ErrorParagraph>}
      <Button>{loading ? 'Ładowanie...' : isError ? 'Coś nie tak...' : 'Stwórz konto'}</Button>
    </Form>
  );
};

export default RegisterForm;
