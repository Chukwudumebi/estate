import React from 'react'
import PropTypes from 'prop-types'; 

function Search({ handleInputChange, query }) {
  return (
  
        <div className="nav-container">
        <input
          className="search-input px-2 py-1 border border-gray-300 bg-gray-100 outline-none rounded-md relative w-48 placeholder-center"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search properties..."
        />
      </div>
  )
}
Search.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
};
export default Search;
