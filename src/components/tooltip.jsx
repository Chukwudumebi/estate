import React from 'react';
import PropTypes from 'prop-types';

import * as Tooltip from '@radix-ui/react-tooltip';

function Tooltips({ children, text }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="TooltipContent rounded-md bg-white px-2 py-2 font-grotesk text-sm text-gray-600 shadow"
          sideOffset={5}
        >
          {text}
          <Tooltip.Arrow className="TooltipArrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

Tooltips.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Tooltips;
