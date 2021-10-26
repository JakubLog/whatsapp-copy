import React from 'react';
import { Wrapper } from './FormField.styles';
import { Label } from 'components/atoms/Label/Label';
import { convertToName } from 'helpers/converters';
import { StyledInput } from './FormField.styles';

interface props {
  label: string;
  type?: string;
}

const FormField = React.forwardRef<HTMLInputElement, props>(({ label, type = 'text', ...rest }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={label}>{convertToName(label)}</Label>
      <StyledInput id={label} type={type} ref={ref} {...rest} />
    </Wrapper>
  );
});

export default FormField;
