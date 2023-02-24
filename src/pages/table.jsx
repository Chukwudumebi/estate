import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillStar, AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {HiOutlineExclamationCircle} from "react-icons/hi"
import { CurrencyContext } from "../context/CurrencyProvider";
import axios from "axios";
import * as Dialog from '@radix-ui/react-dialog';
import { useState,useEffect,useContext } from "react";
import logo from "./logo192.png"





export default function Table(){



    const {

        fromcurrency,
        setFromCurrency,
        tocurrency,
        setToCurrency,
      }=useContext(CurrencyContext)
      const [rate,setRate]=useState(0)
      const [amount,setAmount]=useState(0)
      const convert=amount * rate;
      const [converts,setConvert]=useState(convert)
      console.log(tocurrency)
      console.log(rate)
      console.log(amount)
      console.log(convert)
    
      const Public_ID="027E5F9358C12A83F0112513252F02344E0C7F1925613252F15F672A65F23182178 "
      const display=Public_ID.slice(0,9)
        const [visible,setVisible]=useState(false);
        const [open,setOpen]=useState(false);
        const [item,setItem]=useState(false)
        const[copy,setCopied]=useState(false)
    return(
        <div className="mx-auto  grid w-full max-w-4xl self-start overflow-x-hidden rounded-md bg-white shadow-lg">


            
      <table className="w-full table-auto border-collapse font-grotesk text-sm  md:overflow-auto md:h-60">
     
        <tbody className="md:overflow-auto md:h-6" style={{height:"30px"}}>
        <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>
    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>
    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>
    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>
    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>
    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>
    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-10 py-5">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      
        <p className="font-bold  text-gray-400 ">Category: </p>
        <p className="font-bold  text-gray-400 "> Region:  </p>
        <p className="font-bold text-gray-400"> Time Posted: </p>
        <p className="font-bold text-gray-400"> Date Posted: </p>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        

      <div  className="de">
                              <div className="details">
                                <p className="font-bold text-gray-500 ">Price:
                                  {convert.toFixed(2)}-{tocurrency.split(" ")[1]}                              
                                  </p>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <p className="font-bold text-gray-500">Delivery Cost <span>$80</span></p>
                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <p>Public_ID:</p>
                     <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </p> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex  gap-5">

                      <p className="font-bold  text-gray-500">Seller's Rating 
                        </p>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                        <AiFillStar className="text-blue-500 "/>
                  </div>
                            </div>
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
      <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          {/* <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button> */}                 
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
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
          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
      
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center">contact seller</h1>
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
                send message
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>


      </td>
    </tr>

    <tr className="h-14 cursor-pointer font-grotesk text-xs hover:bg-slate-300 sm:text-sm">
        <td className="border-b border-b-slate-100 px-1">
        <div className="grid w-full grid-cols-auto-1fr gap-2">
          <img src={logo} alt="" className="aspect-square h-[30px] self-center" />
    
        </div>
        </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">descrription</td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        desc
      </td>
      <td className="border-b border-b-slate-100 px-2 md:px-8">
        buttons
      </td>
    </tr>

          
        </tbody>
      </table>
        </div>
    )
}