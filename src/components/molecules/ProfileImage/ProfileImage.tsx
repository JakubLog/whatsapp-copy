import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ProfileImage.styles';
import { Image } from 'components/atoms/Image/Image';

interface props {
  src: string;
  size?: number;
}

const ProfileImage: React.FC<props> = ({ src, size = 37 }) => {
  return (
    <Wrapper size={size}>
      <Image src={src} />
    </Wrapper>
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default ProfileImage;
