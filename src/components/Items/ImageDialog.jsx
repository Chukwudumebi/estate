// import { useState } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import PropTypes from 'prop-types';
// import { FaTimes } from 'react-icons/fa';

// export default function ImageDialog({ images, name }) {
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   const handleClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <Dialog.Root>
//       <div className=" aspect-square h-fit w-full sm:h-48">
//         <Dialog.Trigger asChild>
//           <img src={images[0]} alt={name} className="h-full w-full rounded object-cover" />
//         </Dialog.Trigger>
//       </div>
//       <Dialog.Portal>
//         <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/40" />
//         <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[100] aspect-[16/9] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
//           <div className="grid max-h-max grid-rows-1fr-auto gap-8">
//             <div className="aspect-[16/9] max-w-[650px] overflow-hidden rounded">
//               <img src={selectedImage} alt="" className="h-full w-full object-cover" />
//             </div>
//             <div className="flex flex-row items-center justify-center gap-4">
//               {images.map((image) => (
//                 <div className="aspect-square w-10 overflow-hidden rounded sm:w-16" key={image}>
//                   <button className="h-full w-full" type="button" onClick={() => handleClick(image)} id={image}>
//                     <img src={image} alt="" className="h-full w-full object-cover" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <Dialog.Close asChild className="">
//               <button
//                 type="button"
//                 className="absolute right-2 top-2 rounded-full bg-sky-700/20 p-1 text-blue-600 active:shadow-[0_0_0_2px] active:shadow-blue-600"
//                 aria-label="Close"
//               >
//                 <FaTimes className="" />
//               </button>
//             </Dialog.Close>
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }



// import { useState } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import PropTypes from 'prop-types';
// import { FaTimes } from 'react-icons/fa';

// export default function ImageDialog({ images, name }) {
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   const handleClick = (image) => {
//     setSelectedImage(image);
//   };

//   const maxVisibleImages = 5;
//   const remainingImages = images.slice(maxVisibleImages);
//   const visibleImages = images.slice(0, maxVisibleImages);

//   return (
//     <Dialog.Root>
//       <div className="aspect-square h-fit w-full sm:h-48">
//         <Dialog.Trigger asChild>
//           <img src={images[0]} alt={name} className="h-full w-full rounded object-cover" />
//         </Dialog.Trigger>
//       </div>
//       <Dialog.Portal>
//         <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/40" />
//         <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[100] aspect-[16/9] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
//           <div className="grid max-h-max grid-rows-1fr-auto gap-8">
//             <div className="aspect-[16/9] max-w-[650px] overflow-hidden rounded">
//               <img src={selectedImage} alt="" className="h-full w-full object-cover" />
//             </div>
//             <div className="flex flex-row items-center justify-center gap-4">
//               {visibleImages.map((image) => (
//                 <div className="aspect-square w-10 overflow-hidden rounded sm:w-16" key={image}>
//                   <button className="h-full w-full" type="button" onClick={() => handleClick(image)} id={image}>
//                     <img src={image} alt="" className="h-full w-full object-cover" />
//                   </button>
//                 </div>
//               ))}
//               {remainingImages.length > 0 && (
//                 <div className="aspect-square w-10 overflow-hidden rounded sm:w-16">
//                   <button
//                     className="h-full w-full relative"
//                     type="button"
//                     onClick={() => handleClick(remainingImages[0])}
//                   >
//                     <img src={remainingImages[0]} alt="" className="h-full w-full object-cover" />
//                     {remainingImages.length > 1 && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold">
//                         + {remainingImages.length - 1} images
//                       </div>
//                     )}
//                   </button>
//                 </div>
//               )}
//             </div>
//             <Dialog.Close asChild className="">
//               <button
//                 type="button"
//                 className="absolute right-2 top-2 rounded-full bg-sky-700/20 p-1 text-blue-600 active:shadow-[0_0_0_2px] active:shadow-blue-600"
//                 aria-label="Close"
//               >
//                 <FaTimes className="" />
//               </button>
//             </Dialog.Close>
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }

import React, { useState, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

export default function ImageDialog({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const maxVisibleImages = 5;
  const remainingImages = images.slice(maxVisibleImages);
  const visibleImages = images.slice(0, maxVisibleImages);
  const remainingImagesContainerRef = useRef(null);
  const [showRemainingImages, setShowRemainingImages] = useState(false);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleRemainingImagesClick = () => {
    setShowRemainingImages(true);
  };

  return (
    <Dialog.Root>
      <div className="aspect-square h-fit w-full sm:h-48">
        <Dialog.Trigger asChild>
          <img src={images[0]} alt={name} className="h-full w-full rounded object-cover" />
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[100] aspect-[16/9] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="grid max-h-max grid-rows-1fr-auto gap-8">
            <div className="aspect-[16/9] max-w-[650px] overflow-hidden rounded">
              <img src={selectedImage} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto" ref={remainingImagesContainerRef}>
              {visibleImages.map((image) => (
                <div className="aspect-square w-10 overflow-hidden rounded sm:w-16" key={image}>
                  <button className="h-full w-full" type="button" onClick={() => handleClick(image)} id={image}>
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                </div>
              ))}
              {remainingImages.length > 0 && !showRemainingImages && (
                <div className="aspect-square w-10 overflow-hidden rounded sm:w-16">
                  <button
                    className="h-full w-full relative"
                    type="button"
                    onClick={handleRemainingImagesClick}
                  >
                    <img src={remainingImages[0]} alt="" className="h-full w-full object-cover" />
                    {remainingImages.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold">
                        +{remainingImages.length - 1} images
                      </div>
                    )}
                  </button>
                </div>
              )}
              {showRemainingImages && remainingImages.map((image) => (
                <div className="aspect-square w-10 overflow-hidden rounded sm:w-16" key={image}>
                  <button className="h-full w-full" type="button" onClick={() => handleClick(image)} id={image}>
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                </div>
              ))}
            </div>
            <Dialog.Close asChild className="">
              <button
                type="button"
                className="absolute right-2 top-2 rounded-full bg-sky-700/20 p-1 text-blue-600 active:shadow-[0_0_0_2px] active:shadow-blue-600"
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

ImageDialog.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};
