import * as ScrollArea from '@radix-ui/react-scroll-area';
// import Asset from './Asset';

import { useItems } from '../context/ItemsContext';
import Action from './Action';
// import { useAssets } from '../../contexts/AssetsContext';
function Items() {
  const {Items}= useItems()
  return (
    <ScrollArea.Root
      className="mx-auto max-h-full w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg"
      type="auto"
    >
      <ScrollArea.Viewport className="grid h-full w-full">
        <Action/>

        <div className="relative table h-full w-full table-auto border-collapse bg-white font-grotesk text-sm">
          {/* <div className="sticky top-0 table-header-group  w-full border-b-2 border-slate-100 bg-white">
            <div className="table-row font-bold text-neutral-800">
              <div className="table-cell px-2 py-3 text-left " aria-label="select" />
              <div className="table-cell px-2 py-3 text-left">Image</div>
              <div className="table-cell px-2 py-3 text-left text-neutral-800">Description</div>
              <div className="table-cell px-2 py-3 text-left text-neutral-800">Value</div>
              <div className="table-cell px-2 py-3 text-left text-neutral-800" aria-label="details" />
            </div>
          </div> */}

          <div className="table-row-group">
            {Items?.map(({ id }) => (
                <></>
            //   <Asset key={id} id={id} />
            ))}
          </div>
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
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}

export default Items;
