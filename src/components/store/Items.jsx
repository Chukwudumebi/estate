import {useState} from "react"
import { Link } from 'react-router-dom';
import { useCurrency } from '../../context/currencyContext';
import useExchangeRate from '../../hooks/useExchangeRate';
import { useItems } from '../../context/ItemsContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopyOutline } from 'react-icons/io5';
import ImageDialogs from "./imageDialog";


function Items({ id }) {
  const { currency } = useCurrency();
  const[enable,setEnable]=useState(false)
  const { data: exchangeRate } = useExchangeRate(currency);
  
  const { items, dispatch } = useItems();
  const item = items.find((data) => data.id === id);
  if (!item) {
    throw new Error('Asset not found');
  }
  
  const { images, description,  selected, shipping_cost, user } = item;
  let price="";
  let shippingCost="";
  try{
    price=new Intl.NumberFormat('en-US',{
      style:"currency",
      currency,
      currencyDisplay:'narrowSymbol'
    }).format(item.price * (exchangeRate || 0));
  }catch (error){
    price=`${currency} ${new Intl.NumberFormat('en-US',{
      style:'decimal',
      maximumFractionDigits:2
    }).format(item.price * (exchangeRate || 0))}`
  }
  try{
    shippingCost=new Intl.NumberFormat('en-US',{
      style:"currency",
      currency,
      currencyDisplay:'narrowSymbol'
    }).format(item.shipping_cost * (exchangeRate || 0));
  }catch (error){
    shippingCost=`${currency} ${new Intl.NumberFormat('en-US',{
      style:'decimal',
      maximumFractionDigits:2
    }).format(item.shipping_cost * (exchangeRate || 0))}`
  }
  const shortId = `${user.id.slice(0, 6)}...${user.id.slice(-6)}`;


  return (
    <div className="table-row w-full max-h-24 cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-10 border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
          checked={selected}
          onChange={() => {
            dispatch({ type: 'TOGGLE_ITEM', payload: id });
          }}
          id=""
          className="flex w-6 focus:ring-0 h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" table-cell border-b border-b-slate-100 align-middle pr-2">
        <ImageDialogs images={images} />
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-2 align-middle text-xs">
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-2 align-middle text-xs md:text-base w-max">
        <div className="flex flex-col w-max text-xs">
          <span>
            {/* Price:{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency,
              currencyDisplay: 'narrowSymbol',
            }).format(price * (exchangeRate || 0))} */}
          Price: {price}
          </span>

          <span>
        
          Shipping Cost: {shippingCost}
          </span>
          <span>Available Quantity :1</span>
          <span>Profit Margin : 1%</span>
          <div className="flex flex-row gap-1 items-center">
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

      <div className="table-cell max-h-24 border-b border-b-slate-100 pl-2 pr-4 text-end align-bottom pb-5">
        <div className="flex gap-2">
          {/* <button type="button" className="grid w-full items-end">
            <Link
              to={`buy/${id}`}
              className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-1 py-[3px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
            >
              Buy
            </Link>
          </button>
          <button type="button" className="grid w-full items-end">
            <Link
              to={`buy/${id}`}
              className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-1 py-[3px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
            >
              Make offer
            </Link>
          </button>
          <button type="button" className="grid w-full items-end">
            <Link
              to={`buy/${id}`}
              className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-1 py-[3px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
            >
              contact seller
            </Link>
          </button> */}

          <div className="mt-1">
          
               <div className="flex gap-2 items-center">

              <input type="checkbox"/>
        
                <span>
                  Add to mailing list
                  </span>
               </div>
               <div className="flex gap-2 items-center">

<input type="checkbox"/>

  <span>
    Place item on sale
    </span>
 </div>

  
              
            <div className="flex justify-between gap-2 items-center">

          <input type="radio"/>New
          <input type="radio"/>Refurbished
            </div>

                <div className="flex  items-center gap-2">
                <label className="Label" htmlFor="maxWidth">
              Discount
            </label>
            <input  id="maxWidth" defaultValue="10%" className="w-10"/>

                </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
