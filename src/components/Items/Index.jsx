import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useItems } from '../../context/ItemsContext';
import ActionsBar from '../Actions/Index';
import Item from './item';

function Items() {
  const { items } = useItems();

  return (
    <ScrollArea.Root
      className="mx-auto max-h-3xl lg:max-h-xl h-full w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
      type="auto"
    >
      <ScrollArea.Viewport className="grid h-full w-full">
        <ActionsBar />
        <div className="relative grid h-full w-full border-separate grid-cols-3 gap-4 bg-white font-grotesk text-sm">
          {items?.map(({ id }) => (
            <Item key={id} id={id} />
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

// import * as ScrollArea from '@radix-ui/react-scroll-area';

// import { useItems } from '../../context/ItemsContext';
// import ActionsBar from '../Actions/Index';
// import Item from './item';

// function Items() {
//   const { items } = useItems();

//   return (
//     <ScrollArea.Root
//       className="mx-auto max-h-full w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg"
//       type="auto"
//     >
//       <ScrollArea.Viewport className="grid h-full w-full">
//         <ActionsBar />
//         <div className="relative h-full w-full border-collapse bg-white font-grotesk text-sm">
//           {items?.map(({ id }) => (
//             <Item key={id} id={id} />
//           ))}
//         </div>
//       </ScrollArea.Viewport>
//       <ScrollArea.Scrollbar
//         className="flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
//         orientation="horizontal"
//       >
//         <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
//       </ScrollArea.Scrollbar>
//       <ScrollArea.Scrollbar
//         className="z-20 flex touch-none select-none rounded-[12px] bg-neutral-200 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-neutral-300 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
//         orientation="vertical"
//       >
//         <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
//       </ScrollArea.Scrollbar>
//       <ScrollArea.Corner />
//     </ScrollArea.Root>
//   );
// }

// export default Items;
