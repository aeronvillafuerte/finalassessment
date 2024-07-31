// src/components/SearchFilter.jsx
import React from 'react'

const SearchFilter = ({ searchQuery, onSearch }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search by name..."
    />
  )
}

export default SearchFilter
