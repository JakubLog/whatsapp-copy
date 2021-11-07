import React from 'react';
import { Wrapper, Icon, Name } from './Setting.styles';

interface props {
  icon: JSX.Element;
  name: string;
}

const Setting: React.FC<props> = ({ icon, name }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default Setting;
