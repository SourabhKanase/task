// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className='w-[100%] p-2 rounded-md '
        />
    );
};

export default SearchBar;
