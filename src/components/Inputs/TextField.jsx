import { useState } from 'react';
import PropTypes from 'prop-types';

function TextField({ label, name, type, placeholder, required, onChange, initialValue }) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onChange(val);
  };

  return (
    <div>
      <label className="text-sm outline-none ring-0" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        className="h-10 w-full rounded bg-slate-100 px-2"
        id={name}
      />
    </div>
  );
}

TextField.defaultProps = {
  type: 'text',
  required: false,
  onChange: () => null,
  initialValue: '',
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
};

export default TextField;
