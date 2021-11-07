import ProfileImage from 'components/molecules/ProfileImage/ProfileImage';
import React from 'react';
import Options from '../Options/Options';
import { Wrapper } from './Profile.styles';
import { useAuth } from 'hooks/useAuth';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      <ProfileImage src={currentUser?.image} />
      <Options />
    </Wrapper>
  );
};

export default Profile;
