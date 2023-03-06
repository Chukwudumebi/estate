import { Link } from 'react-router-dom';
// import { useCurrency } from '../../contexts/CurrencyContext';
// import { useAssets } from '../../contexts/AssetsContext';
import * as Dialog from '@radix-ui/react-dialog';
// import { useItems } from "../context/ItemsContext";
import { useItems } from '../context/ItemsContext';
import ImageDialog from "../components/imageDialog";
import Actions from './Actions';
import { CurrencyContext } from "../context/CurrencyProvider";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { AiFillStar, AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";

import { useState,useEffect,useContext } from 'react';
function Display({Public_ID} ){
    const[copy,setCopied]=useState(false)

  const {items}=useItems()
  console.log(items)
  const name="images"
  const { images, description, price } = items;
  const [rate,setRate]=useState(1)
  const [amount,setAmount]=useState(0)
  const convert=amount * rate;
  const [converts,setConvert]=useState(convert)
  const[filter,setFiltered]=useState({})
  
  const {

    fromcurrency,
    setFromCurrency,
    tocurrency,
    setToCurrency,
  }=useContext(CurrencyContext)


  useEffect(()=>{
  

    axios("https://api.freecurrencyapi.com/v1/latest",{
            params: {
                apikey:"wyYOvYBYFnvzXN5vqfzlvpBOuWsTQbmCezQvqwir",
                base_currency:"USD",
                currencies:tocurrency.split(" ")[1], 
            }
        }).then((response)=>{
           
            setRate(response.data.data[tocurrency.split(" ")[1]])
        }).catch(err=>{
            console.log(err)
        })
   
   
     },[items]);

     const HandleDetails=(id)=>{
        const filtered=items.filter((item)=>item.id===id)
        console.log(filtered[0])
        
        setFiltered(filtered[0])
        
     }

  return (
    <div className="mx-auto grid max-h-full w-full max-w-3xl grid-rows-auto-2fr overflow-y-hidden rounded-lg">
    <Actions />
    <div className="inner-scroll grid max-h-full overflow-y-auto">
      <div className="relative table h-max w-full table-auto border-collapse rounded-lg bg-white font-grotesk text-sm shadow">
        <div className="sticky top-0 table-header-group  w-full border-b-2 border-slate-100 bg-white">
          <div className="table-row font-bold text-neutral-800">
            <div className="table-cell px-2 py-3 text-left " aria-label="select" />
            <div className="table-cell px-2 py-3 text-left">Image</div>
            <div className="table-cell px-2 py-3 text-left text-neutral-800">Description</div>
            <div className="table-cell px-2 py-3 text-left text-neutral-800">Price</div>
            {/* <div className="table-cell px-2 py-3 text-left text-neutral-800">Delivery Cost</div> */}

            <div className="table-cell px-2 py-3 text-left text-neutral-800" aria-label="details" />
          </div>
        </div>

        <div className="table-row-group">
     {items.map((post)=>(

         <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
          
          
        
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">


      <ImageDialog image={post.images}/>
       
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">{post.description}</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[3px] py-[3px] align-middle text-xs md:text-sm">
       <p>   {(post.price * rate ).toFixed(2)} -{tocurrency.split(" ")[1]}</p>
      </div>
      {/* <div className="table-cell border-b border-b-slate-100 px-[3px] py-[3px] align-middle text-xs md:text-sm">
       <p className='font-[10px]'> { (post.shippingCost*rate).toFixed(2)} - {tocurrency.split(" ")[1]}</p>
    

      </div> */}
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
      
        
       
        <Dialog.Root>
      <Dialog.Trigger asChild>
      <button type="button"
        onClick={()=>HandleDetails(post.id)}
         className=" mt-1 p-[2px] w-full rounded border border-transparent items-end bg-sky-600 cursor-pointer text-white font-bold ">
          {/* <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
            > */}
            details
    
        </button>
       
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className='p-0'>
            <h1 className='text-center border-b '>Product details</h1>

            <div className='text-center mt-3'>
                                           <p>
                             Delivery Cost:  {(post.shippingCost * rate ).toFixed(2)} -{tocurrency.split(" ")[1]}

                                           </p>
                                           
                                           <p>
                                            
                                          Price:  { (post.price*rate).toFixed(2)} - {tocurrency.split(" ")[1]}
                                            </p>
                                            

                <div className="flex justify-center items-center gap-5 m-1 ">
                                          <p className="font-bold  text-gray-500">Seller's Rating 
                                              </p>
                                              <AiFillStar className="text-sky-600 "/>
                                              <AiFillStar className="text-sky-600 "/>
                                               <AiFillStar className="text-sky-600 "/>
                                               <AiFillStar className="text-sky-600 "/>
                                          </div>
            <div  className="font-bold flex justify-between items-center text-sky-600 mr-4 mb-1" >
                                          <span>Public_ID:</span>
                                           <p className={`font-bold text-sm uppercase text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                                           </p> 
                                           <CopyToClipboard text={Public_ID}
                                            onCopy={()=>setCopied(true)}>                                        
                                           <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                                          
                                             </CopyToClipboard>
                                             </div>

            </div>
            <div className='flex justify-around items-center border-t p-2'>
            <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className='rounded bg-sky-600 text-white p-1 '
      
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

                <button className='rounded bg-sky-600 text-white p-1 '>buy</button>
                
                <button className='rounded bg-sky-600 text-white p-1 '>contact seller</button>

            </div>
           </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
       
      </div>
    </div>
        ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Display;
