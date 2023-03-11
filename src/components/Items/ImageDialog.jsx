import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FaTimes } from 'react-icons/fa';

export default function ImageDialog({ images, name }) {
  const [selectedImage, setSelectedImage] = useState (images[0]);
  return (
    <Dialog.Root>
      {images.length === 1 && (
        <div className="grid aspect-square h-12 grid-cols-1 sm:h-20">
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="aspect-square h-full"
              onClick={() => setSelectedImage(images[0])}
            >
              <img
                src={images[0]}
                alt={name}
                className="h-full w-full rounded object-cover"
              />
            </button>
          </Dialog.Trigger>
        </div>
      )}
      {images.length === 2 && (
        <div className="grid aspect-square h-12 grid-cols-2 gap-[3px] sm:h-20">
          {images.map((image) => (
            <Dialog.Trigger key={image} asChild>
              <button
                type="button"
                className="h-full w-full"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full rounded object-cover"
                />
              </button>
            </Dialog.Trigger>
          ))}
        </div>
      )}
      {images.length === 3 && (
        <div className="grid aspect-square h-12 grid-cols-2 grid-rows-2 gap-[3px] sm:h-20">
          {images.map((image, index) => (
            <Dialog.Trigger
              key={image}
              className={`${index === 0 ? 'row-span-2' : ''}`}
              asChild
            >
              <button
                type="button"
                className="h-full w-full"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full rounded object-cover"
                />
              </button>
            </Dialog.Trigger>
          ))}
        </div>
      )}
      {images.length > 3 && (
        <div className="grid aspect-square h-12 grid-cols-2 grid-rows-2 gap-[3px] sm:h-20">
          {images.slice(0, 4).map((image) => (
            <Dialog.Trigger key={image} className="h-full w-full" asChild>
              <button
                type="button"
                className="h-full w-full"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full rounded object-cover"
                />
              </button>
            </Dialog.Trigger>
          ))}
        </div>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] aspect-[16/9] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="grid max-h-max grid-rows-1fr-auto gap-8">
            <div className="aspect-[16/9] max-w-[650px] overflow-hidden rounded">
              <img
                src={selectedImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              {images.slice(0, 4).map((image) => (
                <div
                  className="aspect-square w-10 overflow-hidden rounded sm:w-16"
                  key={image}
                >
                  <button
                    className="h-full w-full"
                    type="button"
                    onClick={() => {
                      setSelectedImage(image);
                    }}
                    id={image}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              ))}
            </div>
            <Dialog.Close asChild className="">
              <button
                type="button"
                className="absolute top-2 right-2 rounded-full bg-sky-700/20 p-1 text-blue-600 active:shadow-[0_0_0_2px] active:shadow-blue-600"
                aria-label="Close"
              >
                <FaTimes className="" />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
