
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

// const SearchInput = ({ value, onChange, onSearch }) => {
//   return (
//     <div className="search-input-container">
//       <SearchIcon />
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         placeholder="Search patient..."
//         className="search-input"
//       />
//     </div>
//   );
// };

// export default SearchInput;


const SearchInput = ({ value, onChange, onSearch }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue); // Update the search query in LabDashboard
    onSearch(newValue); // Call the onSearch function to filter the patients
  };

  return (
    <div className="search-input-container">
      <SearchIcon />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search patient..."
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
