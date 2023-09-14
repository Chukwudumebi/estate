import React, { useState } from 'react';
import Item from './Items/item';
import { useItems } from '../context/ItemsContext';
import Search from './Search';
import ActionsBar from './Actions/actionButtons';
import User from './User';

function PropertySearch() {
  const [selectedFilter, setSelectedFilter] = useState('name');
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState(''); 
  const [category, setCategory] = useState(''); 

  const { items } = useItems();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleRegionChange = (event) => {
    const { value } = event.target;
    setRegion(value);
  };

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  function filteredData(items, selectedFilter, query, region, category) {
    let filteredProducts = items;
  
    if (query && selectedFilter !== 'region' && selectedFilter !== 'category') {
      const queryWords = query.toLowerCase().split(' ');
      filteredProducts = filteredProducts.filter((item) =>
        queryWords.some((word) => {
          const value = item[selectedFilter];
          if (typeof value === 'string') {
            return value.toLowerCase().includes(word);
          }
          return false;
        })
      );
    }
    if (region && selectedFilter === 'region') {
      filteredProducts = filteredProducts.filter((item) => item.region.toLowerCase() === region.toLowerCase());
    }

    if (category && selectedFilter === 'category') {
      filteredProducts = filteredProducts.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    }
  
    return filteredProducts;
  }
  
  const result = filteredData(items, selectedFilter, query, region, category);

  return (
    <div className="min-h-screen m-48">
      <User />
      <div className="flex flex-col gap-6 p-4">
        <div className="max-h-3xl lg:max-h-xl mx-auto h-full w-full max-w-6xl overflow-hidden rounded-lg bg-white ">
          <ActionsBar displayHome />
          <div className="flex-container flex flex-row justify-center space-x-3 items-center mb-2">
            <Search
              selectedFilter={selectedFilter}
              query={query}
              handleInputChange={handleInputChange}
              handleFilterChange={handleFilterChange}
              region={region}
              handleRegionChange={handleRegionChange} 
              category={region}
              handleCategoryChange={handleCategoryChange} 
            />
          </div>
          <div className="relative flex flex-wrap justify-center gap-4 font-grotesk text-sm mb-20">
            {result.map(({ id, name, location, bed, bathtub, dimension, price }) => (
              <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                  <Item
                    key={id}
                    id={id}
                    name={name}
                    location={location}
                    bed={bed}
                    bathtub={bathtub}
                    dimension={dimension}
                    price={price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySearch;
