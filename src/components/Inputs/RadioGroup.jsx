import React from 'react';
import PropTypes from 'prop-types';
import { Root, Item, Indicator } from '@radix-ui/react-radio-group';

function RadioGroup({ items, label, name, orientation, required, initialChecked, onChange }) {
  return (
    <Root
      className={`flex gap-2.5 ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
      defaultValue={initialChecked}
      aria-label={label}
      name={name}
      orientation={orientation}
      required={required}
      onValueChange={onChange}
    >
      {items.map(({ value, label }) => (
        <div className="flex items-center" key={label}>
          <Item
            className="h-[25px] w-[25px] cursor-default rounded-full border-2 bg-white outline-none hover:bg-neutral-300 focus:border-neutral-900 data-[state=checked]:border-sky-600"
            value={value}
            id={label}
          >
            <Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-sky-600 after:content-['']" />
          </Item>
          <label className="pl-2 text-[15px] leading-none text-neutral-900" htmlFor={label}>
            {label}
          </label>
        </div>
      ))}
    </Root>
  );
}

RadioGroup.defaultProps = {
  required: false,
  orientation: 'horizontal',
  initialChecked: '',
  onChange: (value) => value,
};

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  required: PropTypes.bool,
  initialChecked: PropTypes.string,
  onChange: PropTypes.func,
};

export default RadioGroup;
