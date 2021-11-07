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
  const [loading, setLoadingState] = useState(false);
  const { handleSubmit, register } = useForm();

  const process = async ({ email }: { email: string }) => {
    setLoadingState(true);
    const response = await addContact(email);
    if (response?.code === 201) {
      setMessage('Poprawnie dodano!');
    } else {
      setMessage('Spróbuj ponownie!');
    }
    setLoadingState(false);
  };

  return (
    <Wrapper>
      <Title>Utwórz nową konwersację</Title>
      <Form onSubmit={handleSubmit(process)}>
        <Input placeholder="Fullname" {...register('email', { required: true })} />
        <Button>{loading ? 'Loading...' : message}</Button>
      </Form>
    </Wrapper>
  );
};

export default CreateNewMessage;
