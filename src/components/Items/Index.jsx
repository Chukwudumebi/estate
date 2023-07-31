import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useItems } from '../../context/ItemsContext';
import ActionsBar from '../Actions/Index';
import Item from './item';

function Items() {
  const { items } = useItems();

  return (
    <ScrollArea.Root
      className="max-h-3xl lg:max-h-xl mx-auto mt-20 h-full w-full  max-w-6xl overflow-hidden rounded-lg bg-slate-200"
      type="auto"
    >
      <ScrollArea.Viewport className="flex h-full w-full flex-col">
        {/* <ActionsBar /> */}
        <div className="relative flex flex-wrap justify-center gap-4 font-grotesk text-sm">
          {items?.map(({ id }) => (
            <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Item id={id} />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="z-20 flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-300 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}

export default Items;