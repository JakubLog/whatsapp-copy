/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useSearch } from 'hooks/useSearch';
import { Wrapper, Search, StyledInput, Image } from './Searchbar.styles';

const Searchbar: React.FC = () => {
  const { searchByPhrase } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchingEvent = (e: any) => {
    searchByPhrase(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.addEventListener('keyup', searchingEvent);
    return () => inputRef.current?.removeEventListener('keyup', searchingEvent);
  }, []);

  return (
    <Wrapper>
      <Search>
        <StyledInput ref={inputRef} placeholder="Wyszukaj lub rozpocznij nowy czat" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/1024px-VisualEditor_-_Icon_-_Search.svg.png" />
      </Search>
    </Wrapper>
  );
};

export default Searchbar;
