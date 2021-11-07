import Icon from 'components/atoms/Icon/Icon';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, List } from './Option.styles';

interface props {
  iconSrc: string;
}

const Option: React.FC<props> = ({ children, iconSrc }) => {
  const [isOpen, setOpenState] = useState(false);

  return (
    <Wrapper onClick={() => setOpenState((prev) => !prev)}>
      <Icon src={iconSrc} />
      {isOpen && <List>{children}</List>}
    </Wrapper>
  );
};

Option.propTypes = {
  iconSrc: PropTypes.string.isRequired
};

export default Option;
