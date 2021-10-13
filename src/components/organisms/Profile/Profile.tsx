import ProfileImage from 'components/molecules/ProfileImage/ProfileImage';
import React from 'react';
import Options from '../Options/Options';
import { Wrapper } from './Profile.styles';

const Profile: React.FC = () => {
  return (
    <Wrapper>
      <ProfileImage src="https://picsum.photos/100" />
      <Options />
    </Wrapper>
  );
};

export default Profile;
