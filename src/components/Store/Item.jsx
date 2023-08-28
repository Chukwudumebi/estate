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

return(
<div className="flex flex-col md:flex-row mx-4 p-1 bg-[rgb(244,245,248)] bg-opacity-40 rounded-md md:pl-10 md:mx-8 md:space-y-0 space-y-3 md:space-x-8 my-3">
  <div className="flex flex-col md:flex-row justify-center items-center gap-3">
    <input
      type="checkbox"
      name="select"
      checked={selected}
      onChange={() => {
        dispatch({ type: 'TOGGLE_ITEM', payload: id });
      }}
      id=""
      className="h-6 w-6 cursor-pointer items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden after:aspect-square  after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c']"
    />
    <ImageDialogs images={images} />
  </div>
    <div className="flex h-min md:max-w-screen-md flex-col items-center md:items-start rounded-lg bg-white">
      <div className="flex flex-col ml-0 md:mb-6 md:ml-4 md:items-start space-y-1 items-center mt-3 bg-white justify-center">
        <p className="text-md text-gray-700">
      <span className="text-md text-gray-700">
      {name}
      </span>
      </p>
      <p className="text-md text-gray-700 flex flex-col">Description
  <span className="line-clamp-4 md:w-10/12 bg-blue-200" rows={4}>{description}</span>
</p> </div>
<div className="flex md:flex-row flex-col sm:flex-grow items-center py-2 md:py-1 px-16 md:px-0 rounded-b-lg bg-[rgb(244,245,248)] justify-center md:space-x-20 sm:w-full">
      <span className="font-bold sm:flex-grow flex text-[#8E97AC]">{price}</span>
      <span className="text-[#8E97AC]">Bedromms: {bed}</span>
      <span className="text-[#8E97AC]">Bathtub:{bathtub}</span>
      <span className="text-[#8E97AC]">Dimension:{dimension}</span>
      <DropdownMenu  itemId={id} />
</div>
    
   
    </div>
  </div>
)      }

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
