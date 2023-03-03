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

export default function Postlist({Public_ID}) {
  const {items}=useItems()
  // const [a] = items
  // const image=a.images
 
   
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
    return (  
      <>
     { items.length > 0 ?<div className="flex flex-col  rounded-md bg-white shadow-lg md:mx-auto md:w-[1400px] md:overflow-auto h-full ">
            {
                items.slice(0,5).map((post) => (
                    <div key={post.id} className="Desc border-b border-gray-200  hover:bg-slate-100 hover:text-white hover:shadow-xl" >
                         <div className=" grid h-40 grid-cols-2 mt-3 grid-rows-2 gap-1 sm:h-44">
                           <ImageDialog image={post.images}/>
                {/* {post.images.slice(0,4).map((images,index)=>(
                    // <div key={preview }
                    //    onClick={()=>handlOpen(preview)}
                    
                    // className="relative h-[60px] w-[60px] overflow-hidden rounded shadow">
                    //   <img src={preview} alt="hello" className="h-full w-full overflow-hidden object-cover"/>

                    // </div>
                )
                )} */}
            </div>
                          {/* // description */}
                        <div className=" px-2 md:px-8">
                            <p className="font-bold  text-gray-500">{post.description}</p>
                            <p className="font-bold  text-gray-500">{post.category}</p>

                           
                        </div>      





                            {/* details */}
                            <div className="adjust">
                            <div >
                              {/* details */}
                              <div className="details">
                                   {/* price */}
                                <p className="font-bold text-gray-500 ">Price:
                                  { (post.price*rate).toFixed(2)} - {tocurrency.split(" ")[1]}
                                  </p>

                                  {/* input */}
                                <div >
                                  <input type="checkbox"  />
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>


                               <p className="font-bold  text-gray-500">Delivery Cost :
                               
                               {(post.shippingCost * rate ).toFixed(2)} -{tocurrency.split(" ")[1]}
                               </p>
                               <div className="">
                                          <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                                          <span>Public_ID:</span>
                                           <p className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                                           </p> 
                                           <CopyToClipboard text={Public_ID}
                                            onCopy={()=>setCopied(true)}>                                        
                                           <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                                          
                                             </CopyToClipboard>
                                             </div>
                                      </div>
                                        <div className="flex justify-center items-center gap-5">
                                          <p className="font-bold  text-gray-500">Seller's Rating 
                                              </p>
                                              <AiFillStar className="text-blue-500 "/>
                                              <AiFillStar className="text-blue-500 "/>
                                               <AiFillStar className="text-blue-500 "/>
                                               <AiFillStar className="text-blue-500 "/>
                                          </div>
                  {/* details ends */}
                  {/* buttons start */}
                  
                          {/* buttons end */}




                  </div>
                         {/* buttons */}

                                                        
                          <div className="flex flex-col">
                          <button className="p-[2px] m-2 bg-blue-500 font-bold text-white shadow-lg rounded-lg">BUY</button>
                                       
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className=" p-[2px] m-2 bg-blue-500 font-bold text-white shadow-lg rounded-lg"
      
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
          className="p-[2px] m-2 bg-blue-500 font-bold text-white shadow-lg rounded-lg"
          
        >
          Contact Seller
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="text-center p-[60px]">

              <h1 className="font-bold text-center font-[10px]">contact seller</h1>
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




                              <Modal
                             show={visible}
                              size="sm"
                             popup={true}
                            onClose={()=>setVisible(false)}
                               >
                            <Modal.Body className="mt-[200px] md:mt-0 " >
                                <div className="text-center p-3">
                                 <HiOutlineExclamationCircle className="mx-auto m-[20px] h-14 w-14 text-blue-400" />
                                 <h3 className="mb-5 text-lg  text-gray-500 font-bold">
                                   Are you sure you want to delete this item?
                                   </h3>
                                  <div className="flex justify-center gap-4">
                             <Button
                              color="failure"
                              onClick={()=>{
                              RemovePost(post.id);
                              setVisible(false)
                                  }}
                                >
                               Yes, I'm sure
                             </Button>
                             <Button
                              color="gray"
                              onClick={()=>setVisible(false)}
                                    >
                                  No, cancel
                              </Button>
                           </div>
                         </div>
                      </Modal.Body>
                   </Modal>
  <Modal
    show={open}
    size="sm"
    popup={true}
    onClick={()=>setOpen(false)}
  > 
    <Modal.Body className=" mt-[200px] flex justify-center items-center  md:mt-0" >
    <img src={selectedImages} alt="hello" className="h-60 mt-5 w-60  object-cover"/>
    </Modal.Body>
  </Modal>
  </div>
))
}
</div>:""}
          </>  
    )
    
}