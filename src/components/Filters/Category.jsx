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
    <div className="grid gap-2">
      <label htmlFor="categories" className="text-sm ring-0 outline-none">
        Category
      </label>
      <Select
        placeholder="categories..."
        options={options}
        name="category"
      ></Select>
    </div>
  );
}

export default Category;
