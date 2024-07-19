
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-input-container">
      <SearchIcon />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search patient..."
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
