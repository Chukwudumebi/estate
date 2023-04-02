import Select from './Select';

const options = [
  { label: 'Goods', value: 'goods' },
  { label: 'Services', value: 'services' },
  { label: 'Construction', value: 'construction' },
  { label: 'Electronics', value: 'electronics' },
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
