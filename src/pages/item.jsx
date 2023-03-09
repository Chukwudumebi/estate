import { Link } from 'react-router-dom';
import { useCurrency } from '../context/currencyContext';
import useExchangeRate from '../hooks/useExchangeRate';

import { useItems } from '../context/ItemsContext';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillStar, AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {HiOutlineExclamationCircle} from "react-icons/hi"
import * as Dialog from '@radix-ui/react-dialog';

import ImageDialog from '../components/imageDialog';
import {useState} from "react"

function Item({ id }) {
  const user={
    "id": "496d359a829f23a67f91431d1f6b1daa19424917f8676c5e1af7e107d8bc0ec1614ba9458bb11b98d1af1a3ea02eedf2796b3073df7a0bf0aa4ea1f7f31d9c8ac5f5b9cbad0b67077bc199abf7d8fdb6de9e863d585cf76458c69ddad87c707c31f775d68418a8da79c5e80952fc439f3f345dccfec668a6e4dc5d4cdd4fb2ef",
    "name": "Kingsley Aigbojie",
    "user_name": "Kingsley"

}
  const Public_ID = `${user.id.slice(0, 6)}...${user.id.slice(-6)}`;
  const[copy,setCopied]=useState(false)

  const { currency } = useCurrency();
  const { data: exchangeRate } = useExchangeRate(currency);
  console.log(exchangeRate)
  const { items, dispatch } = useItems();
  const item = items.find((data) => data.id === id);
  if (!item) {
    throw new Error('Asset not found');
  }
  console.log(items)
  const { images, description, price,shippingCost, selected} = item;
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
        <p className="line-clamp-3">{description}</p>
      </div>
     
      
      <div className="table-cell border-b border-b-slate-100  align-middle text-xs md:text-sm">
        
    
        <div className="adjust">
                              <div >
                                  <p className="font-bold text-gray-500 text-xs">Price:
                                     {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                             currency,
                                             currencyDisplay: 'narrowSymbol',
                                           }).format(price * (exchangeRate || 0))}
                                    </p>
  
  
                                 <p className="font-bold text-xs text-gray-500">Delivery Cost :
                                 {new Intl.NumberFormat('en-US', {
                                 style: 'currency',
                                     currency,
                                     currencyDisplay: 'narrowSymbol',
                                  }).format(shippingCost * (exchangeRate || 0))}
                                 
                                 {/* {(post.shippingCost * rate ).toFixed(2)} -{tocurrency.split(" ")[1]} */}
                                 </p>
                                 <div className="">
                                            <div  className="font-bold flex text-xs justify-between items-center text-blue-500 mr-4" >
                                            <span>Public_ID:</span>
                                             <p className={`font-bold text-xs uppercase text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                                             </p> 
                                             <CopyToClipboard text={Public_ID}
                                              onCopy={()=>setCopied(true)}>                                        
                                             <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                                            
                                               </CopyToClipboard>
                                               </div>
                                        </div>
                                          <div className="flex text-xs justify-center items-center gap-5">
                                            <p className="font-bold text-xs text-gray-500">Seller's Rating 
                                                </p>
                                                <AiFillStar className="text-blue-500 text-xs "/>
                                                <AiFillStar className="text-blue-500 "/>
                                                 <AiFillStar className="text-blue-500 "/>
                                                 <AiFillStar className="text-blue-500 "/>
                                            </div>
                    </div>
                           {/* buttons */}
  
                                                          
                            <div className="flex flex-col">
                            <button className="p-[1px]  bg-blue-500 font-bold text-white shadow-lg rounded-lg">BUY</button>
                                         
               <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className=" m-1 bg-blue-500 font-bold text-white shadow-lg rounded-lg"
        
          >
            Make Offer
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <div>
              <div className="text-center p-[60px]">
  
                <h1 className="font-bold text-center">make an offer</h1>
              </div>
              {/* <div className="flex h-24 flex-col overflow-y-scroll">
               
              </div> */}
              
  
              <div className="flex items-center justify-around border-t p-2 py-8">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="rounded border-none bg-red-600 px-2 py-2 text-white shadow-md duration-300 hover:bg-red-500 hover:shadow-lg hover:transition-all"
                  >
                    cancel
                  </button>
                </Dialog.Close>
                <button
                  type="button"
                  className=" rounded border-none bg-blue-500 px-4 py-2 text-white shadow-sm duration-300 hover:bg-blue-400 hover:shadow-lg hover:transition-all"
                  >
                  send
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="bg-blue-500 font-bold text-white shadow-lg rounded-lg"
            
          >
            Contact Seller
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <div>
              <div className="text-center ">
  
                <h1 className="font-bold text-center text-sm">contact seller</h1>
              </div>
             
              <div className="flex items-center justify-around border-t p-2 py-8">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="rounded border-none bg-red-600 px-2 py-2 text-white shadow-md duration-300 hover:bg-red-500 hover:shadow-lg hover:transition-all"
                  >
                    cancel
                  </button>
                </Dialog.Close>
                <button
                  type="button"
                  className=" rounded border-none bg-blue-500 px-4 py-2 text-white shadow-sm duration-300 hover:bg-blue-400 hover:shadow-lg hover:transition-all"
                >
                  send message
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      </div>
      </div>
      </div>
     

    </div>
  );
}

export default Item;
