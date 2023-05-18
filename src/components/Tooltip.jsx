import React from 'react';
import PropTypes from 'prop-types';

import * as Tooltip from '@radix-ui/react-tooltip';

function ToolTip({ children, text }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="z-40 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none text-neutral-900 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
          sideOffset={5}
        >
          {text}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default ToolTip;
