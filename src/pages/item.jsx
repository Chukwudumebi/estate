import { Link } from 'react-router-dom';
import { useCurrency } from '../context/currencyContext';
import useExchangeRate from '../hooks/useExchangeRate';

import { useItems } from '../context/ItemsContext';
import ImageDialog from '../components/imageDialog';


function Item({ id }) {
  const { currency } = useCurrency();
  const { data: exchangeRate } = useExchangeRate(currency);
  console.log(exchangeRate)
  const { items, dispatch } = useItems();
  const item = items.find((data) => data.id === id);
  if (!item) {
    throw new Error('Asset not found');
  }
  console.log(items)
  const { images, description, price, selected} = item;
  const name="images"
  return (
    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
          checked={selected}
          onChange={() => {
            dispatch({ type: 'TOGGLE_ASSET', payload: id });
          }}
          id=""
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-4 table-cell border-b border-b-slate-100 align-middle">
        <ImageDialog images={images} name={name} />
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-4 align-middle text-xs">
        <p className="line-clamp-3 break-words ">{description}</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency,
          currencyDisplay: 'narrowSymbol',
        }).format(price * (exchangeRate || 0))}
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-4 text-end align-middle">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-2 py-[3px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600 sm:px-2 sm:text-sm"
          >
            Details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Item;
