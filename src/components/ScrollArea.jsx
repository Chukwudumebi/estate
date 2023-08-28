import { Root, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';
import PropTypes from 'prop-types';

function ScrollArea({ children }) {
  return (
    <Root
      className="mx-auto h-full max-h-full w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-lg"
      type="auto"
    >
      <Viewport className="grid h-full w-full bg-white">{children}</Viewport>
      <Scrollbar
        className="flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </Scrollbar>
      <Scrollbar
        className="z-20 flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-300 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </Scrollbar>
      <Corner />
    </Root>
  );
}

ScrollArea.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollArea;
