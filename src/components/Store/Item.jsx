import PropTypes from 'prop-types';
import { useCurrency } from '../../context/currencyContext';
import { useStoreItems } from '../../context/storeItemsContext';
import useExchangeRate from '../../hooks/useExchangeRate';
import ImageDialogs from '../Items/ImageDialog';
import Itemsearch from '../Items/itemsearch';
import DropdownMenu from './DropdownMenu';
import Tag from './Tag';

function StoreItem({ item }) {
  const { currency } = useCurrency();
  const { data: exchangeRate } = useExchangeRate(currency);
  const { dispatch } = useStoreItems();
  const { images, description, selected, id, quantity, margin, discount, type, isOnSale , name, location, bed, bathtub, dimension} = item;
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
  const shortId = `${id.slice(0, 6)}...${id.slice(-6)}`;

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
        <ImageDialogs images={images} />
      </div>
      <div className="grid h-full grid-rows-1fr-auto gap-2 self-start">
        <div>
          <p>
            <span className="font-bold">{name}</span>
          </p>
          </div>
        <div>
          <p className="text-xs line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-auto-1fr content-center gap-4">
        <div className="flex flex-col">
          <span className="font-bold">{price}</span>
          {/* <span className="">shipping: {shippingCost}</span> */}
          {/* <span>Available Quantity: {quantity}</span> */}
          {/* <span>Profit Margin: {margin}%</span> */}
          {/* <span>Discount: {discount}%</span> */}
          {/* <div className="flex  items-center gap-2">
            <label className="Label" htmlFor="maxWidth">
              Discount
            </label>
            <input id="maxWidth" defaultValue="10%" className="w-10" />
          </div> */}
        </div>

        <DropdownMenu itemId={id} />
      </div>
    </div>
  );
}

// props validation
StoreItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bed: PropTypes.number.isRequired,
    bathtub: PropTypes.number.isRequired,
    dimension: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping_cost: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isOnSale: PropTypes.bool.isRequired,
  }).isRequired,
};
export default StoreItem;
