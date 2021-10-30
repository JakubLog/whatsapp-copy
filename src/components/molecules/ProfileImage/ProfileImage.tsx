import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ProfileImage.styles';
import { Image } from 'components/atoms/Image/Image';

interface props {
  src?: string;
  size?: number;
}

const ProfileImage: React.FC<props> = ({
  src = 'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
  size = 37
}) => {
  return (
    <Wrapper size={size}>
      <Image src={src} />
    </Wrapper>
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number
};

export default ProfileImage;
