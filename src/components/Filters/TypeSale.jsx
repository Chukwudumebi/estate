import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Select from './Select';
import TextField from '../Inputs/TextField';
import Category from './Category';

const saleOptions = [
  { label: 'Total sale', value: 'total' },
  { label: 'Partial sale', value: 'partial' },
];

const subdivisionOptions = Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }));

const ownershipOptions = [
  { label: 'Owner', value: 'owner' },
  { label: 'Manager', value: 'manager' },
];

const rentOptions = [
  { label: 'Rent (per month)', value: 'month' },
  { label: 'Rent (per year)', value: 'year' },
];

const taxesOptions = [
  { label: 'Taxes (per month)', value: 'month' },
  { label: 'Taxes (per year)', value: 'year' },
];

const ageOptions = [
  { label: 'Years', value: 'years' },
  { label: 'Months', value: 'months' },
];

function SaleType({ className }) {
  const [saleType, setSaleType] = useState('total');
  const [subdivisions, setSubdivisions] = useState(subdivisionOptions[0]);
  const [selectValue, setSelectValue] = useState(subdivisionOptions[0]);
  const [ownership, setOwnership] = useState(ownershipOptions[0]);
  const [rent, setRent] = useState(0);
  const [rentPeriod, setRentPeriod] = useState(rentOptions[0]);
  const [taxes, setTaxes] = useState(0);
  const [taxesPeriod, setTaxesPeriod] = useState(taxesOptions[0]);
  const [age, setAge] = useState(0);
  const [agePeriod, setAgePeriod] = useState(ageOptions[0]);

  useEffect(() => {
    setSelectValue(subdivisions);
  }, [subdivisions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <form onSubmit={handleSubmit} className={`flex flex-row  gap-6 space-y-4 ${className}`}>
      <div className="container mx-auto mt-2 flex flex-col space-y-12 px-4 md:flex-row md:space-x-8 md:space-y-0 ">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <div className="items-center md:items-start">
            <Category className="" />
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
            <div className="flex-grow">
              <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="ownership">
                Ownership
              </label>
              <Select
                id="ownership"
                options={ownershipOptions}
                value={ownership}
                onChange={(value) => setOwnership(value)}
                placeholder="Select an ownership type"
                name="ownership"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-12 md:w-1/2">
          <div className="items-center md:items-end">
            <div className="flex flex-col space-y-1 md:flex-row md:items-center md:space-x-3">
              <label className="text-sm font-medium text-gray-700" htmlFor="rent">
                Rent
              </label>
              <Select
                id="rent"
                options={rentOptions}
                value={rentPeriod}
                onChange={(value) => setRentPeriod(value)}
                placeholder="Select a rent period"
                name="rent"
              />
              <TextField
                type="number"
                id="rentValue"
                placeholder="Enter rent value"
                min={0}
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1 md:flex-row md:items-center md:space-x-3">
              <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="taxes">
                Taxes
              </label>
              <Select
                id="taxes"
                options={taxesOptions}
                value={taxesPeriod}
                onChange={(value) => setTaxesPeriod(value)}
                placeholder="Select a tax period"
                name="taxes"
              />
              <TextField
                type="number"
                id="taxesValue"
                placeholder="Enter taxes value"
                min={0}
                value={taxes}
                onChange={(e) => setTaxes(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1 md:flex-row md:items-center md:space-x-3">
              <label className=" text-sm font-medium text-gray-700" htmlFor="age">
                Age
              </label>
              <Select
                id="age"
                options={ageOptions}
                value={agePeriod}
                onChange={(value) => setAgePeriod(value)}
                placeholder="Select an age period"
                name="age"
              />
              <TextField
                type="number"
                id="ageValue"
                placeholder="Enter age value"
                min={0}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

SaleType.propTypes = {
  className: PropTypes.string,
};

SaleType.defaultProps = {
  className: '',
};

export default SaleType;
