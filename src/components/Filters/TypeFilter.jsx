import Select from './Select';

const options = [
  { label: 'Private', value: 'Private' },
  { label: 'Public', value: 'Public' },
];

function TypeFilter() {
  return (
    <div className="grid gap-1">
      <label htmlFor="categories" className="text-sm">
        Type
      </label>
      <Select placeholder="Item type..." options={options} />
    </div>
  );
}

export default TypeFilter;
