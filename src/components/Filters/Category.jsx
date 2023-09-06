import PropTypes from 'prop-types';
import Select from './Select';

const options = [
  { label: 'Apartment', value: 'apartment' },
  { label: 'Family Home', value: 'familyHome' },
  { label: 'Townhouse', value: 'townHouse' },
  { label: 'Hotel', value: 'hotel' },
  { label: 'Resort Villas', value: 'resortVillas' },
  { label: 'Office Building', value: 'officeBuilding' },
];

function Category( ) {
  return (
    <div className="grid gap-1">
      <label htmlFor="categories" className="text-sm outline-none ring-0">
        Category
      </label>
      <Select placeholder="categories..." options={options} name="category"  />
    </div>
  );
  }
export default Category;
