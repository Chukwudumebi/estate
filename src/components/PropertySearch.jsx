import React, { useState } from 'react';
import Item from './Items/item';
import { useItems } from '../context/ItemsContext';
import Search from './Search';
import ActionsBar from './Actions/actionButtons';
import Bedrooms from './Bedrooms';
import Bathrooms from './Bathrooms';
import User from './User';

export default function PropertySearch() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState(""); 
  const [selectedBathrooms, setSelectedBathrooms] = useState(""); 
  const { items } = useItems();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBedroomChange = (selectedValue) => {
    setSelectedBedrooms(selectedValue); 
  };
  const handleBathroomChange = (selectedValue) => {
    setSelectedBathrooms(selectedValue); 
  };

  function filteredData(items, selected, query, selectedRegion, selectedCategory) {
    let filteredProducts = items;

    if (query) {
      const queryWords = query.toLowerCase().split('');

      filteredProducts = filteredProducts.filter((item) =>
        queryWords.some((word) =>
          item.name.toLowerCase().includes(word) ||
          item.location.toLowerCase().includes(word) ||
          item.region.toLowerCase().includes(word) ||
          item.category.toLowerCase().includes(word)
        )
      );
    }

    if (selectedRegion) {
      filteredProducts = filteredProducts.filter(
        ({ region }) => region.toLowerCase() === selectedRegion.toLowerCase()
      );
    }
    
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

 
    if (selectedBedrooms) {
      const [min, max] = selectedBedrooms.split("-"); 
      filteredProducts = filteredProducts.filter(({ bed }) => {
        const bedCount = parseInt(bed, 10); 
        const minCount = parseInt(min, 10);
        const maxCount = parseInt(max, 10);
        return bedCount >= minCount && bedCount <= maxCount;
      });
    }
    
    if (selectedBathrooms) {
      const [min, max] = selectedBathrooms.split("-"); 
      filteredProducts = filteredProducts.filter(({ bathtub }) => {
        const bathCount = parseInt(bathtub, 10); 
        const minCount = parseInt(min, 10);
        const maxCount = parseInt(max, 10);
        return bathCount >= minCount && bathCount <= maxCount;
      });
    }
    

    return (
      <div>
      <div className="relative flex flex-wrap justify-center gap-4 font-grotesk text-sm mb-20">
        {filteredProducts.map(({ id, name, location, bed, bathtub, dimension, price }) => (
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
    );
  }

  const result = filteredData(items, selectedCategory, query);

  return (
    <div className="min-h-screen m-48">
        <User />
      <div className="flex flex-col gap-6 p-4">
        <div className="max-h-3xl lg:max-h-xl mx-auto h-full w-full max-w-6xl overflow-hidden rounded-lg bg-white ">
          <ActionsBar displayHome  />
          <div className=" flex-container flex flex-row justify-center space-x-3 items-center mb-2">
            <Search query={query} handleInputChange={handleInputChange} />
            <Bedrooms onBedroomChange={handleBedroomChange} /> 
            <Bathrooms onBathroomChange={handleBathroomChange} /> 
          </div>
          {result}
        </div>
      </div>
    </div>
  );
}

