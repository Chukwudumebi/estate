import { BsFilter } from 'react-icons/bs';
import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import CategoryFilter from './Category';
import PriceFilter from './Price';
import RegionFilter from './Region';
import TypeFilter from './TypeFilter';

function Filters() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="border-grey-600 group relative grid grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100"
        >
          <span className="text-xs">Filter</span>
          <BsFilter className="ml-1 cursor-pointer text-2xl text-sky-700 group-hover:text-neutral-100" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_hsla(206,22%,7%,.45))] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-50 w-[320px] rounded bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity]"
          sideOffset={5}
        >
          <ScrollArea.Root className="h-[360px] w-full  overflow-auto rounded bg-white px-8 md:overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full rounded">
              <div className="my-5 flex w-full flex-col gap-3">
                <CategoryFilter />
                <TypeFilter />
                <RegionFilter />
                <PriceFilter />
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="z-20 flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-300 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA8" />
          </ScrollArea.Root>

          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Filters;
