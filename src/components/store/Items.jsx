import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopyOutline } from 'react-icons/io5';
import { useCurrency } from '../../context/currencyContext';
import useExchangeRate from '../../hooks/useExchangeRate';
// import { useItems } from '../../context/ItemsContext';
import ImageDialogs from '../Items/ImageDialog';
import { useStoreItems } from '../../context/storeItemContext';

function StoreItem({ id }) {
  const { currency } = useCurrency();
  const [enable, setEnable] = useState(false);
  const { data: exchangeRate } = useExchangeRate(currency);

  const { StoreItems, dispatch } = useStoreItems();
  const item = StoreItems.find((data) => data.id === id);
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
    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-10 border-b border-b-slate-100 px-2 py-4 text-center align-middle">
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
      </div>
      <div className=" table-cell border-b border-b-slate-100 pr-2 align-middle">
        <ImageDialogs images={images} />
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-2 align-middle text-xs">
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="table-cell w-max border-b border-b-slate-100 px-2 align-middle text-xs md:text-base">
        <div className="flex w-max flex-col text-xs">
          <span>
            {/* Price:{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency,
              currencyDisplay: 'narrowSymbol',
            }).format(price * (exchangeRate || 0))} */}
            Price: {price}
          </span>

          <span>Shipping Cost: {shippingCost}</span>
          <span>Available Quantity :1</span>
          <span>Profit Margin : 1%</span>
          <div className="flex flex-row items-center gap-1">
            <span>Public id: {shortId.toUpperCase()}</span>
            <CopyToClipboard text={user.id}>
              <button
                className="grid aspect-square rounded-full border border-transparent p-1 active:border-sky-500 active:text-sky-500"
                type="button"
              >
                <IoCopyOutline className="text-xl" />
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>

      <div className="table-cell max-h-24 border-b border-b-slate-100 pl-2 pr-4 pb-5 text-end align-bottom">
        <div className="flex gap-2">
          <div className="mt-1">
            <div className="flex items-center gap-2">
              <input type="checkbox" />

              <span>Add to mailing list</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />

              <span>Place item on sale</span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <input type="radio" />
              New
              <input type="radio" />
              Refurbished
            </div>

            <div className="flex  items-center gap-2">
              <label className="Label" htmlFor="maxWidth">
                Discount
              </label>
              <input id="maxWidth" defaultValue="10%" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// props validation
StoreItem.propTypes = {
  id: PropTypes.string.isRequired,
};
export default StoreItem;
