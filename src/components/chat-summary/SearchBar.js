import React from 'react';
import "../../css/search-bar.css";

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="search customer"
      onChange={handleChange}
      className="chat-search-bar"
    />
  );
}

export default SearchBar;
