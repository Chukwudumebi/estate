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
    <div className="flex flex-col gap-2">
      <label htmlFor="price" className="text-sm">
        Price{' '}
      </label>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={[min, max]}
        onValueChange={handleValueChange}
        value={[min, max]}
        max={1000}
        min={1}
        step={10}
        minStepsBetweenThumbs={1}
        aria-label="Volume"
      >
        <Slider.Track className="bg-slate-200 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-blue-700 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-blue-600 shadow-lg rounded-[10px] hover:bg-sky-700 focus:outline-none" />
        <Slider.Thumb className="block w-5 h-5 bg-blue-600 shadow-lg rounded-[10px] hover:bg-sky-700 focus:outline-none" />
      </Slider.Root>
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-neutral-500 text-xs">Min Price</label>
          <input
            type="text"
            name="min"
            id="min"
            className="w-20 justify-self-start rounded focus:ring-0 h-8 focus:border-2 focus:border-neutral-900 focus:outline-none"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="grid">
          <label htmlFor="max" className="text-neutral-500 text-xs text-right">
            Max Price
          </label>
          <input
            type="text"
            name="max"
            id="max"
            className="w-20 justify-self-end rounded focus:ring-0 h-8 focus:border-2 focus:outline-none focus:border-neutral-900"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
