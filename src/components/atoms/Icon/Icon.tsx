import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Source } from './Icon.styles';

interface props {
  src: string;
}

const Icon: React.FC<props> = ({ src, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Source src={src} />
    </Wrapper>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired
};

export default Icon;
