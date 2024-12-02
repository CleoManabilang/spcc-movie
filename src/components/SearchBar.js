// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State to manage the search query

  // Handle the input change event
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the query to the parent component
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
