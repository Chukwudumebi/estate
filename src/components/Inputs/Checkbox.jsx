import React from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Checkbox({ children, name, required }) {
  return (
    <div className="flex items-center">
      <Root
        className="flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border-2 border-neutral-300 bg-white outline-none hover:bg-neutral-100 focus:border-black"
        name={name}
        required={required}
        defaultChecked={false}
        id={name}
      >
        <Indicator className="text-sky-500">
          <FaCheck />
        </Indicator>
      </Root>
      <label className="cursor-pointer pl-2" htmlFor={name}>
        {children}
      </label>
    </div>
  );
}

Checkbox.defaultProps = {
  required: false,
  children: '',
};

Checkbox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Checkbox;
