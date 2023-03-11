import Select from './Select';

const options = [
  { label: 'Americas', value: 'americas' },
  { label: 'Asia', value: 'asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Middle East', value: 'middle east' },
  { label: 'Africa', value: 'africa' },
];

function RegionFilter() {
  return (
    <div className="grid gap-2">
      <label htmlFor="categories" className="text-sm">
        Region
      </label>
      <Select options={options} placeholder="select region..." name="region" />
    </div>
  );
}

export default RegionFilter;
