import PropTypes from 'prop-types';
import Select from './Select';


const options = [
  { label: 'America', value: 'america' },
  { label: 'Asia', value: 'asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Middle East', value: 'middle east' },
  { label: 'Africa', value: 'africa' },
];

function RegionFilter({ handleRegionChange }) {
  const handleSelectChange = (selectedValue) => {
    handleRegionChange(selectedValue);
  };
  return (
    <div className="grid gap-1">
      <label htmlFor="categories" className="text-sm">
        Region
      </label>
      <Select options={options} placeholder="select region..." name="region" onChange={handleSelectChange} />
    </div>
  );
}
RegionFilter.propTypes = {
  handleRegionChange: PropTypes.func.isRequired,
};

export default RegionFilter;
