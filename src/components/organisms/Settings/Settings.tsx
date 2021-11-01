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
      <Setting
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 1l3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1zm0 5v12c3.31 0 6-2.69 6-6a6.005 6.005 0 0 0-5.775-5.996L12 6z"
              fill="currentColor"
            ></path>
          </svg>
        }
        name="Motyw"
      />
      <Setting
        icon={
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8l-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"
            ></path>
          </svg>
        }
        name="Tapeta czatu"
      />
      <Setting
        icon={
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"
            ></path>
          </svg>
        }
        name="Zablokowani"
      />
      <Setting
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10.852 12.648h2.296L12 9zM20 8.691V6c0-1.102-.898-2-2-2h-2.691L13.41 2.102a2 2 0 0 0-2.828 0L8.692 4H6c-1.102 0-2 .898-2 2v2.691L2.102 10.59a2.004 2.004 0 0 0 0 2.832L4 15.32V18c0 1.102.898 2 2 2h2.691l1.899 1.898c.781.782 2.05.782 2.832 0L15.32 20H18c1.102 0 2-.898 2-2v-2.691l1.898-1.899a2.004 2.004 0 0 0 0-2.832zm-5.91 6.707L13.602 14h-3.204l-.488 1.398a.89.89 0 0 1-.84.602.888.888 0 0 1-.84-1.191l2.442-6.86C10.872 7.38 11.398 7 12 7c.602 0 1.129.379 1.34.941l2.441 6.86a.89.89 0 0 1-.84 1.187.868.868 0 0 1-.851-.59zm0 0"
            ></path>
          </svg>
        }
        name="Skróty klawiaturowe"
      />
      <Setting
        icon={
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 4.7c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm.8 13.9h-1.6V17h1.6v1.6zm1.7-6.3l-.7.7c-.7.6-1 1.1-1 2.3h-1.6v-.4c0-.9.3-1.7 1-2.3l1-1.1c.3-.2.5-.7.5-1.1 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6H8.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3c0 .8-.4 1.4-.8 1.9z"
            ></path>
          </svg>
        }
        name="Pomoc"
      />
    </Wrapper>
  );
};

export default Settings;
