import Actions from "./Actions"

import { Link } from "react-router-dom"


import { PostContext } from "../components/PostContext"
import { useState,useContext,useEffect } from "react";
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillStar, AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {HiOutlineExclamationCircle} from "react-icons/hi"
import { CurrencyContext } from "../context/CurrencyProvider";
import axios from "axios";
import * as Dialog from '@radix-ui/react-dialog';
import { useItems } from "../context/ItemsContext";
import ImageDialog from "../components/imageDialog";

export default function Table({Public_ID}){



  const {items}=useItems()
  // const [a] = items
  // const image=a.images
  console.log(items)
 
   
  const {

    fromcurrency,
    setFromCurrency,
    tocurrency,
    setToCurrency,
  }=useContext(CurrencyContext)
  const [rate,setRate]=useState(1)
  const [amount,setAmount]=useState(0)
  const convert=amount * rate;
  const [converts,setConvert]=useState(convert)
  

 

 
    const [visible,setVisible]=useState(false);
    const [open,setOpen]=useState(false);
    const [item,setItem]=useState(false)
    const[copy,setCopied]=useState(false)
    const[selectedImages,setSelectedImages]=useState("")
    
    
    
    const handleModalOpen = () =>{
      setVisible(true)
    }
    const handlOpen = (id)=>{
     
    
     setSelectedImages(id)
        setOpen(true)
      }
      
    const { Postlist, RemovePost } = useContext(PostContext)
    
    // useEffect(()=>{
    // if(Postlist){

    //   Postlist.map((item)=>{
    //     setAmount(item.price)
    //   }) 
    // }
    // },[Postlist]);
  
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
      
      
        },[Postlist]);
 

    const handleSelect=(id)=>{
      console.log(id)
    
      
    }


    return(
      <>
      
        <div className="mx-auto grid max-h-full w-full shadow-md rounded max-w-3xl grid-rows-auto-1fr overflow-y-hidden rounded-lg">
    
        <div className="inner-scroll grid max-h-full overflow-y-auto">
          <div className="relative table h-max w-full table-auto border-collapse rounded-lg bg-white font-grotesk text-sm shadow">
            <div className="sticky top-0 table-header-group  w-full border-b-2 border-slate-100 bg-white">
              <div className="table-row font-bold text-neutral-800">
              <div className="table-cell px-2 py-3 text-left " aria-label="select" />
              <div className="table-cell px-2 py-3 text-left">Images</div>
              <div className="table-cell px-2 py-3 text-left text-neutral-800">Description</div>
              <div className="table-cell px-2 py-3 text-left text-neutral-800"></div>
                
              </div>
            </div>
  
            <div className="table-row-group">
            <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
          images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
     
    </div>
    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
          images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
     
    </div>
    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
          images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
     
    </div>
   
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
      <div className=" grid h-40 grid-cols-2 mt-8 grid-rows-2 gap-1 sm:h-40">
                           <ImageDialog image={post.images}/>
                   </div>
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[1px] align-middle text-xs md:px-4">
      <div  className="break-words text-gray-500 font-bold text-justify w-[200px]">    
                          {post.description}                     
                    </div> 
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
        
    
      <div className="adjust">
                            <div >
                                <p className="font-bold text-gray-500 ">Price:
                                  { (post.price*rate).toFixed(2)} - {tocurrency.split(" ")[1]}
                                  </p>


                               <p className="font-bold  text-gray-500">Delivery Cost :
                               
                               {(post.shippingCost * rate ).toFixed(2)} -{tocurrency.split(" ")[1]}
                               </p>
                               <div className="">
                                          <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                                          <span>Public_ID:</span>
                                           <p className={`font-bold text-sm uppercase text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                                           </p> 
                                           <CopyToClipboard text={Public_ID}
                                            onCopy={()=>setCopied(true)}>                                        
                                           <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                                          
                                             </CopyToClipboard>
                                             </div>
                                      </div>
                                        <div className="flex justify-center items-center gap-5">
                                          <p className="font-bold  font-[10px] text-gray-500">Seller's Rating 
                                              </p>
                                              <AiFillStar className="text-blue-500 "/>
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
          className=" p-[2px] m-1 bg-blue-500 font-bold text-white shadow-lg rounded-lg"
      
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
          className="p-[2px] m-1 bg-blue-500 font-bold text-white shadow-lg rounded-lg"
          
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center">

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

           ))}
               







   





                  
            </div>
          </div>
        </div>
      </div>
          </>
    )
}