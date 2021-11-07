import Icon from 'components/atoms/Icon/Icon';
import React from 'react';
import { Wrapper, StyledInput } from './SendPlace.styles';
import { useForm } from 'react-hook-form';
import { useMessages } from 'hooks/useMessages';
import { useError } from 'hooks/useError';

const SendPlace: React.FC = () => {
  const { handleSubmit, register, reset } = useForm();
  const { send } = useMessages();
  const { dispatchError } = useError();

  const process = async ({ value }: { value: string }) => {
    try {
      await send(value);
      reset();
    } catch (e) {
      const user = "Sorry, we can't now send this message. Please try again later or contact with our support!";
      dispatchError(new Error(user), e);
    }
  };

  return (
    <Wrapper>
      <Icon src="https://www.pngfind.com/pngs/m/220-2207946_png-file-svg-white-emoji-icon-png-transparent.png" />
      <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ic_attach_file_48px.svg/1200px-Ic_attach_file_48px.svg.png" />
      <form onSubmit={handleSubmit(process)}>
        <StyledInput placeholder="Wpisz tutaj wiadomość..." {...register('value', { required: true })} />
        <Icon src="https://static.thenounproject.com/png/488906-200.png" />
      </form>
    </Wrapper>
  );
};

export default SendPlace;
