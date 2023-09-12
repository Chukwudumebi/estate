import PropTypes from "prop-types";
import Select from "./Filters/Select";

function Bedrooms({ onBedroomChange }) {
  const options = [
    { label: "All", value: "" },
    { label: "1 - 10", value: "1-10" },
    { label: "10 - 25", value: "10-25" },
    { label: "25 - 50", value: "25 - 50" },
    { label: "50 - 100", value: "50 -100" },
  ];

  const handleBedroomChange = (selectedValue) => {
    onBedroomChange(selectedValue);
  };

  return (
    <div className="grid gap-1">
      <Select
        placeholder="Bed"
        options={options}
        name="bed"
        onChange={handleBedroomChange}
      />
    </div>
  );
}

Bedrooms.propTypes = {
  onBedroomChange: PropTypes.func.isRequired, 
};

export default Bedrooms;


