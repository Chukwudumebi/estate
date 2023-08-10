import { BsFilter } from 'react-icons/bs';
import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import CategoryFilter from './Category';
import PriceFilter from './Price';
import RegionFilter from './Region';
import TypeFilter from './TypeFilter';
import SaleType from './SaleType';

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
          side="bottom"
          align="start"
          collisionPadding={{ top: 20, left: 20 }}
          collisionBoundary={document.body}
        >
          <div className="flex h-fit w-full flex-col gap-2 rounded bg-white p-6 px-6">
            <CategoryFilter />
            <TypeFilter />
            <RegionFilter />
            <PriceFilter />
            <SaleType />
          </div>

          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Filters;
