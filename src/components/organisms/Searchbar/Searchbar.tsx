import React from 'react';
import { Wrapper, Search, StyledInput, Image } from './Searchbar.styles';

const Searchbar: React.FC = () => {
  return (
    <Wrapper>
      <Search>
        <StyledInput placeholder="Wyszukaj lub rozpocznij nowy czat" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/1024px-VisualEditor_-_Icon_-_Search.svg.png" />
      </Search>
    </Wrapper>
  );
};

export default Searchbar;
