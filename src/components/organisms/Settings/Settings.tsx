import ProfileImage from 'components/molecules/ProfileImage/ProfileImage';
import Setting from 'components/molecules/Setting/Setting';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, Profile, Fullname } from './Settings.styles';

const Settings: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      <Profile>
        <ProfileImage src={currentUser.image} size={82} />
        <Fullname>{currentUser.name}</Fullname>
      </Profile>
      <Setting
        icon={
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"
            ></path>
          </svg>
        }
        name="Powiadomienia"
      />
    </Wrapper>
  );
};

export default Settings;
