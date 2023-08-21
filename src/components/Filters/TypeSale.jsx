import React, { useState, useEffect } from 'react';
import Select from './Select';
import TextField from '../Inputs/TextField';

const saleOptions = [
  { label: 'Total sale', value: 'total' },
  { label: 'Partial sale', value: 'partial' },
];

// Assuming subdivisions can range from 1 to 10
const subdivisionOptions = Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1}`, value: i + 1 }));

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

  function SaleType() {
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
    const [tenants, setTenants] = useState([]);
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState([]);
  useEffect(() => {
    setSelectValue(subdivisions);
  }, [subdivisions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Form submitted');
  };

  const handleAddTenant = () => {
    console.log('Tenant added');
  };

  const handleAddImage = () => {
    console.log('Image added');
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-1">
        <label htmlFor="saleType" className="text-sm font-medium text-gray-700 ">
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
        <div className="mb-3">
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
      <div className="mb-3">
        <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="ownership">
          Ownership
        </label>
        <Select
          id="ownership"
          options={ownershipOptions}
          value={ownership.label}
          onChange={(value) => setOwnership(value)}
          placeholder="Select an ownership type"
          name="ownership"
        />
      </div>
      <div className="mb-3 space-y-1">
        <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="rent">
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
          placeholder='Enter rent value'
          min={0}
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="w-full bg-slate-100"
        />
      </div>

      <div className="mb-3 space-y-1">
        <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="taxes">
          Taxes
        </label>
        <Select
          id="taxes"
          options={taxesOptions}
          value={taxesPeriod}
          onChange={(value) => setTaxesPeriod(value)}
          placeholder="Select a taxes period"
          name="taxes"
        />
        <TextField
          type="number"
          id="taxes"
          min={0}
          value={taxes}
          placeholder='Enter taxes value'
          onChange={(e) => setTaxes(e.target.value)}
          className="w-full"
        />
      </div>
      <div className='space-y-1'>
        <label className="mb-1 text-sm font-medium text-gray-700" htmlFor="age">
          Age (in years)
        </label>
        <Select
        id="age"
        options={ageOptions}
        value={agePeriod}
        onChange={(value) => setAgePeriod(value)}
        placeholder="Select an age period"
        name="age"
        />
        <TextField type="number" id="age" min={0} value={age} placeholder='Enter value for age' onChange={(e) => setAge(e.target.value)} className="w-full" />
      </div>
      {/* <div> */}
        {/* <label className="text-sm font-medium mb-1" htmlFor="tenants"> */}
          {/* Tenants */}
        {/* </label> */}
        {/* <input */}
          {/* // type="text" */}
          {/* // id="tenants" */}
          {/* // placeholder="Enter tenant name" */}
          {/* // className="w-full" */}
          {/* // TODO: add your logic to get the input value from the user */}
        {/* // /> */}
        {/* <button  */}
  {/*  type="button"  */}
  {/*  onClick={handleAddTenant}  */}
  {/*  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded" */}
{/* > */}
  {/* Add Tenant */}
{/* </button> */}
      {/* <ul className="mt-2 space-y-1"> */}
  {/* {tenants.map((tenant) => ( */}
    {/* // <li key={tenant}>{tenant}</li> */}
  {/* // ))} */}
{/* </ul> */}

      {/* </div>  */}
    </form>
  );
}

export default SaleType;
