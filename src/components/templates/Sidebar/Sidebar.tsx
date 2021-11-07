import Contacts from 'components/organisms/Contacts/Contacts';
import InformationSlider from 'components/templates/InfromationSlider/InformationSlider';
import Profile from 'components/organisms/Profile/Profile';
import Searchbar from 'components/organisms/Searchbar/Searchbar';
import React from 'react';
import { Wrapper } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <Profile />
      <Searchbar />
      <Contacts />
      <InformationSlider />
    </Wrapper>
  );
};

export default Sidebar;
