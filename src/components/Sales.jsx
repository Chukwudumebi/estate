import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Select from './Filters/Select';
import TextField from './Inputs/TextField';

const saleOptions = [
    { label: 'Total sale', value: 'total' },
    { label: 'Partial sale', value: 'partial' },
  ];
  const subdivisionOptions = Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }));

function Sale({className}) {
    const [saleType, setSaleType] = useState('total');
    const [subdivisions, setSubdivisions] = useState(subdivisionOptions[0]);
    const [selectValue, setSelectValue] = useState(subdivisionOptions[0]);

    useEffect(() => {
        setSelectValue(subdivisions);
      }, [subdivisions]);

    const handleSubmit = (e) => {
        e.preventDefault();
     
      };
    return (
        <form onSubmit={handleSubmit} className={`flex flex-row  gap-6 space-y-4 ${className}`}>
        <div>
        <div className="flex-grow">
        <label htmlFor="saleType" className="flex-grow text-sm font-medium text-gray-700 ">
          Sale Type
        </label>
        <Select
          id="saleType"
          options={saleOptions}
          value={saleType}
          onChange={(value) => setSaleType(value)}
          placeholder="Select a sale type"
          name="saleType"
        />
      </div>
      {saleType === 'partial' && (
        <div className="flex-grow">
          <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="subdivisions">
            Subdivisions
          </label>
          <Select
            id="subdivisions"
            options={subdivisionOptions}
            value={selectValue}
            onChange={(value) => {
              setSubdivisions(value);
              setSelectValue(value);
            }}
            placeholder="Set a subdivision"
            name="subdivisions"
          />
        </div>
      )}
      </div>
      </form>
    )
    }
    Sale.propTypes = {
        className: PropTypes.string,
      };
      
    Sale.defaultProps = {
        className: '',
    }
    export default Sale;