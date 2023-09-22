// // Item.js
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBed, faBath, faHome, faExpand, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { useCurrency } from '../../context/currencyContext';
// import useExchangeRate from '../../hooks/useExchangeRate';
// import { useItems } from '../../context/ItemsContext';
// import ImageDialog from './ImageDialog';

// function Item({ id }) {
//   const { currency } = useCurrency();
//   const [enable, setEnable] = useState(false);
//   const { data: exchangeRate } = useExchangeRate(currency);
//   const { items, dispatch } = useItems();
//   const item = items.find((data) => data.id === id);
//   if (!item) {
//     throw new Error('Asset not found');
//   }

//   const { images, name, location, bed, bathtub, dimension, description, selected, user } = item;
//   let price = '';
//   let shippingCost = '';
//   try {
//     price = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency,
//       currencyDisplay: 'narrowSymbol',
//     }).format(item.price * (exchangeRate || 0));
//   } catch (error) {
//     price = `${currency} ${new Intl.NumberFormat('en-US', {
//       style: 'decimal',
//       maximumFractionDigits: 2,
//     }).format(item.price * (exchangeRate || 0))}`;
//   }
//   try {
//     shippingCost = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency,
//       currencyDisplay: 'narrowSymbol',
//     }).format(item.shipping_cost * (exchangeRate || 0));
//   } catch (error) {
//     shippingCost = `${currency} ${new Intl.NumberFormat('en-US', {
//       style: 'decimal',
//       maximumFractionDigits: 2,
//     }).format(item.shipping_cost * (exchangeRate || 0))}`;
//   }
//   return (
//     <div className="flex w-full h-fit flex-col rounded  border-2 border-b-slate-200">
// <div className="relative flex  h-full sm:h-48 rounded w-full ">
// <button type="button" className="relative h-full w-full">
//     <ImageDialog images={images} name={name} />
//     {images.length > 1 && 
//       <div className="absolute bottom-1 right-1 items-baseline rounded border  p-1 text-sky-600 font-extrabold text-sm" style={{ pointerEvents: 'none', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
//         {` + ${images.length - 1} images`}
//       </div>
//     }
//   </button>
// </div>
//       <div className="mx-5 mt-4">
//         <h2 className="text-2xl font-bold text-">{name}</h2>
//         <p className="mt-2 mb-2 flex flex-row items-center gap-2 line-clamp-2 text-xs font-extrabold text-[#696969]">
//           <FontAwesomeIcon name={location} icon={faMapMarkerAlt} className="text-xs font-bold text-[#696969]" />
//           {location}</p>
//       </div>

//       <hr className="mx-4 mt-2 mb-1 border-t-[1px] border-[#696969]" />

//       <div className="mx-4 flex flex-row items-center space-x-3 justify-between bg-[rgb(244,245,248)] py-2 rounded-b px-3 text-xs font-extrabold text-[#8E97AC]">
//         <p className="flex flex-row items-center gap-2">
//           <FontAwesomeIcon icon={faBed} className="font-bold" />
//           {bed}
//         </p>
//         <p className="flex flex-row items-center gap-1">
//           <FontAwesomeIcon icon={faBath} className="font-bold" />
//           {bathtub}
//         </p>
//         <p className="flex flex-row items-center gap-1">
//          <FontAwesomeIcon icon={faExpand} />
//           {dimension}m²
//         </p>
//       </div>
//       <p className="mx-5 mt-2 mb-5 text-xs font-bold text-gray-700">{price}</p>

//       <div className="mx-5 mb-5 flex flex-row items-center gap-2">
//         <div
//           className="text-md h-fit w-max cursor-pointer rounded border border-sky-600 bg-transparent px-2 py-2
//           text-sky-600 hover:border-transparent hover:bg-sky-600 hover:text-white"
//         >
//           More Details
//         </div>
//       </div>
//     </div>
//   );
// }

// Item.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// export default Item;

// Item.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faExpand, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useCurrency } from '../../context/currencyContext';
import useExchangeRate from '../../hooks/useExchangeRate';
import { useItems } from '../../context/ItemsContext';
import ImageDialog from './ImageDialog';

function Item({ id }) {
  const { currency } = useCurrency();
  const [enable, setEnable] = useState(false);
  const { data: exchangeRate } = useExchangeRate(currency);
  const { items, dispatch } = useItems();
  const item = items.find((data) => data.id === id);

  if (!item) {
    throw new Error('Asset not found');
  }

  const { images, name, location, bed, bathtub, dimension, description, selected, user } = item;
  let price = '';
  let shippingCost = '';

  try {
    price = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      currencyDisplay: 'narrowSymbol',
    }).format(item.price * (exchangeRate || 0));
  } catch (error) {
    price = `${currency} ${new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 2,
    }).format(item.price * (exchangeRate || 0))}`;
  }

  try {
    shippingCost = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      currencyDisplay: 'narrowSymbol',
    }).format(item.shipping_cost * (exchangeRate || 0));
  } catch (error) {
    shippingCost = `${currency} ${new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 2,
    }).format(item.shipping_cost * (exchangeRate || 0))}`;
  }

  return (
    <div className="flex w-full h-fit flex-col rounded border-2 border-b-slate-200">
      <div className="relative flex h-full sm:h-48 rounded w-full ">
        <button type="button" className="relative h-full w-full">
          <ImageDialog images={images} name={name} />
          {images.length > 1 && (
            <div
              className="absolute bottom-1 right-1 items-baseline rounded border p-1 text-sky-600 font-extrabold text-sm"
              style={{ pointerEvents: 'none', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}
            >
              {` + ${images.length - 1} images`}
            </div>
          )}
        </button>
      </div>
      <div className="mx-5 mt-4">
        <h2 className="text-2xl font-bold text-">{name}</h2>
        <p className="mt-2 mb-2 flex flex-row items-center gap-2 line-clamp-2 text-xs font-extrabold text-[#696969]">
          <FontAwesomeIcon name={location} icon={faMapMarkerAlt} className="text-xs font-bold text-[#696969]" />
          {location}
        </p>
      </div>

      <hr className="mx-4 mt-2 mb-1 border-t-[1px] border-[#696969]" />

      <div className="mx-4 flex flex-row items-center space-x-3 justify-between bg-[rgb(244,245,248)] py-2 rounded-b px-3 text-xs font-extrabold text-[#8E97AC]">
        <p className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faBed} className="font-bold" />
          {bed}
        </p>
        <p className="flex flex-row items-center gap-1">
          <FontAwesomeIcon icon={faBath} className="font-bold" />
          {bathtub}
        </p>
        <p className="flex flex-row items-center gap-1">
          <FontAwesomeIcon icon={faExpand} />
          {dimension}m²
        </p>
      </div>
      <p className="mx-5 mt-2 mb-5 text-xs font-bold text-gray-700">{price}</p>

      <div className="mx-5 mb-5 flex flex-row items-center gap-2">
        <div
          className="text-md h-fit w-max cursor-pointer rounded border border-sky-600 bg-transparent px-2 py-2
          text-sky-600 hover:border-transparent hover:bg-sky-600 hover:text-white"
        >
          More Details
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Item;
