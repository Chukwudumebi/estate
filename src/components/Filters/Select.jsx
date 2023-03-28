import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Select.Item
    className={classnames(
      'relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-neutral-900 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-500 data-[disabled]:text-neutral-300 data-[highlighted]:text-neutral-900 data-[highlighted]:outline-none',
      className
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    ref={forwardedRef}
  >
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
));

SelectItem.displayName = 'SelectItem';
SelectItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectItem.defaultProps = {
  className: '',
};

function SelectInput({ options, placeholder, name }) {
  return (
    <Select.Root name={name}>
      <Select.Trigger
        className="text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 grid h-[35px] grid-cols-auto-1fr items-center gap-[5px] rounded border border-neutral-200 bg-white px-[15px] text-[13px] leading-none outline-none focus:border-neutral-900"
        aria-label="Food"
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="justify-self-end text-neutral-900">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-[100] overflow-hidden rounded-md bg-neutral-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-neutral-900">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-neutral-900">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })).isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectInput;
