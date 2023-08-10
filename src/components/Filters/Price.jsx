import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

function PriceFilter() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000);

  const handleValueChange = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm">Price </span>
      <Slider.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        defaultValue={[min, max]}
        onValueChange={handleValueChange}
        value={[min, max]}
        max={1000}
        min={1}
        step={10}
        minStepsBetweenThumbs={1}
        aria-label="Volume"
      >
        <Slider.Track className="relative h-[2px] grow rounded-full bg-slate-200">
          <Slider.Range className="absolute h-full rounded-full bg-blue-700" />
        </Slider.Track>
        <Slider.Thumb className="block h-5 w-5 rounded-[10px] bg-blue-600 shadow-lg hover:bg-sky-700 focus:outline-none" />
        <Slider.Thumb className="block h-5 w-5 rounded-[10px] bg-blue-600 shadow-lg hover:bg-sky-700 focus:outline-none" />
      </Slider.Root>
      <div className="grid w-full grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-neutral-500" htmlFor="min">
            Min Price
          </label>
          <input
            type="text"
            name="min"
            id="min"
            className="h-8 w-20 justify-self-start rounded border border-neutral-300 px-2 focus:border-2 focus:border-neutral-900 focus:outline-none focus:ring-0"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="grid">
          <label htmlFor="max" className="text-right text-xs text-neutral-500">
            Max Price
          </label>
          <input
            type="text"
            name="max"
            id="max"
            className="h-8 w-20 justify-self-end rounded border border-neutral-300 px-2 focus:border-2 focus:border-neutral-900 focus:outline-none focus:ring-0"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
