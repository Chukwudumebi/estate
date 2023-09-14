import React from 'react';
import PropTypes from 'prop-types';

const filterOptions = [
  { label: 'Name', value: 'name' },
  { label: 'Location', value: 'location' },
  { label: 'Category', value: 'category' },
  { label: 'Region', value: 'region' },
  { label: 'Bedrooms', value: 'bed' },
  { label: 'Washrooms', value: 'bathtub' },
];

const regionOptions = [
  { label: 'Select Region', value: '' },
  { label: 'America', value: 'america' },
  { label: 'Asia', value: 'asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Middle East', value: 'middle east' },
  { label: 'Africa', value: 'africa' },
];

const categoryOptions = [
  { label: 'Select Category', value: '' }, 
  { label: 'Apartment', value: 'apartment' },
  { label: 'Family Home', value: 'familyHome' },
  { label: 'Townhouse', value: 'townHouse' },
  { label: 'Hotel', value: 'hotel' },
  { label: 'Resort Villas', value: 'resortVillas' },
  { label: 'Office Building', value: 'officeBuilding' },
];

function Search({ selectedFilter, query, handleInputChange, handleFilterChange, region, handleRegionChange, category, handleCategoryChange}) {
let inputElement;

if (selectedFilter === 'region') {
  inputElement = (
    <select
      name="region"
      id="region"
      className="border border-gray-300 bg-gray-100 outline-none rounded-md px-2 py-1"
      onChange={handleRegionChange}
      value={region}
    >
      {regionOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
} else if (selectedFilter === 'category') {
  inputElement = (
    <select
      name="category"
      id="category"
      className="border border-gray-300 bg-gray-100 outline-none rounded-md px-2 py-1"
      onChange={handleCategoryChange}
      value={category}
    >
      {categoryOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
} else {
  inputElement = (
    <input
      className="search-input px-2 py-1 border border-gray-300 bg-gray-100 outline-none rounded-md relative w-48 placeholder-center"
      type="text"
      name="query"
      onChange={handleInputChange}
      value={query}
      placeholder={`Search by ${selectedFilter}...`}
    />
  );
}

return (
  <div className="nav-container">
    <div className="flex gap-2">
      <select
        name="filter"
        id="filter"
        className="border border-gray-300 bg-gray-100 outline-none rounded-md px-2 py-1"
        onChange={handleFilterChange}
        value={selectedFilter}
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {inputElement}
    </div>
  </div>
);
}

Search.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired, 
  category: PropTypes.string.isRequired, 
  handleRegionChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Search;
