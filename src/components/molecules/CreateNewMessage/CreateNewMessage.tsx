import React, { useState } from 'react';
import { Form } from 'components/atoms/Form/Form';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper, Title } from './CreateNewMessage.styles';
import { Button } from 'components/atoms/Button/Button';
import { useContacts } from 'hooks/useContacts';
import { useForm } from 'react-hook-form';

const CreateNewMessage: React.FC = () => {
  const { addContact } = useContacts();
  const [message, setMessage] = useState("Let's talk!");
  const { handleSubmit, register } = useForm();

  const process = async ({ email }: { email: string }) => {
    const response = await addContact(email);
    if (response?.code === 201) {
      setMessage('Poprawnie dodano!');
    } else {
      setMessage('Nie ma takiego użytkownika!');
    }
  };

  return (
    <Wrapper>
      <Title>Utwórz nową konwersację</Title>
      <Form onSubmit={handleSubmit(process)}>
        <Input placeholder="example@mail.com" {...register('email', { required: true })} />
        <Button>{message}</Button>
      </Form>
    </Wrapper>
  );
};

export default CreateNewMessage;
