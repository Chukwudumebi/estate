import Select from './Select';

const options = [
  { label: 'Total sale', value: 'TotalSale' },
  { label: 'Partial sale', value: 'PartialSale' },
];

function SaleType() {
  return (
    <div className="grid gap-1">
      <label htmlFor="categories" className="text-sm outline-none ring-0">
        Sale Type
      </label>
      <Select placeholder="Type of Sale..." options={options} name="category" />
    </div>
  );
}

export default SaleType;