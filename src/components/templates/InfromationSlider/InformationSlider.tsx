import { useSlider } from 'hooks/useSlider';
import React from 'react';
import { Wrapper, Header } from './InformationSlider.styles';

const InformationSlider: React.FC = () => {
  const { closeSlider, isOpen, informations } = useSlider();

  return (
    <Wrapper className={isOpen ? 'active' : 'inactive'}>
      <Header>
        <span data-testid="closeSlider" onClick={closeSlider}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
          </svg>
        </span>
        <span>{informations.header}</span>
      </Header>
      {informations.body}
    </Wrapper>
  );
};

export default InformationSlider;
