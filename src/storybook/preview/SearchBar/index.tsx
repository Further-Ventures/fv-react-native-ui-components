import React, { useRef } from 'react';
import SearchBar from '../../../components/SearchBar';

const SearchBarPreview = (props) => {
  const menuRef = useRef(null);
  const handleChange = () => {
    menuRef.current.open();
  };
  return <SearchBar ref={menuRef} onChangeText={handleChange} {...props} />;
};

export default SearchBarPreview;
