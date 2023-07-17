import Select from './Select';

const options = [
  { label: 'Apartment for rent', value: 'apartment for rent' },
  { label: 'Family Home', value: 'family home' },
  { label: 'Resort Villas', value: 'resort villas' },
  { label: 'Office Building', value: 'office building' },
  { label: 'Recreational', value: 'recreational' },
  { label: 'Automotives', value: 'automotives' },
];

function Category() {
  return (
    <div className="grid gap-1">
      <label htmlFor="categories" className="text-sm outline-none ring-0">
        Category
      </label>
      <Select placeholder="categories..." options={options} name="category" />
    </div>
  );
}

export default Category;
