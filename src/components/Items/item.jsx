import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { IoCopyOutline } from 'react-icons/io5';
import { IoMdPaperPlane } from 'react-icons/io';
import { useCurrency } from '../../context/currencyContext';
import useExchangeRate from '../../hooks/useExchangeRate';
import { useItems } from '../../context/ItemsContext';

import ImageDialog from './ImageDialog';
import Itemsearch from './itemsearch';

function Item({ id }) {
  const { currency } = useCurrency();
  const [enable, setEnable] = useState(false);
  const { data: exchangeRate } = useExchangeRate(currency);
  const { items, dispatch } = useItems();
  const item = items.find((data) => data.id === id);
  if (!item) {
    throw new Error('Asset not found');
  }

  const { images, description, selected, user } = item;
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
  const shortId = `${user.id.slice(0, 6)}...${user.id.slice(-6)}`;

  return (
    <div className="grid w-full cursor-pointer grid-cols-auto-1fr-auto gap-4 border-b border-b-slate-200 p-4 hover:bg-slate-300">
      <div className="justify-content-center grid grid-cols-auto-1fr items-center gap-3">
        <input
          type="checkbox"
          name="select"
          checked={selected}
          onChange={() => {
            dispatch({ type: 'TOGGLE_ITEM', payload: id });
          }}
          id=""
          className="flex h-6 w-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden after:aspect-square  after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500 focus:ring-0"
        />

        <ImageDialog images={images} />
      </div>
      <div className="self-center">
        <p className="text-xs line-clamp-3">{description}</p>
      </div>
      <div className="grid grid-cols-1fr-auto content-center gap-4">
        <div className="flex flex-col">
          <span className="font-semibold">{price}</span>
          <span>shipping: {shippingCost}</span>
          <div className="flex flex-row items-end gap-1">
            <span>{shortId.toUpperCase()}</span>
            <Itemsearch />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Link
            to={`buy/${id}`}
            className="h-fit w-max cursor-pointer rounded border border-transparent bg-sky-600 px-1 py-1 text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Buy 
          </Link>

          <Link
            to={`buy/${id}`}
            className="h-fit w-max cursor-pointer rounded border border-transparent bg-sky-600 px-1 py-1 text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Rent
          </Link>

          <Link
            to={`buy/${id}`}
            className="h-fit w-max cursor-pointer rounded border border-transparent bg-sky-600 px-1 py-1 text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Contact Agent
          </Link>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Item;
