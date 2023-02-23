import { PostContext } from "../components/PostContext"
import { useState } from "react";
import { useContext } from "react"
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillStar, AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";


import {HiOutlineExclamationCircle} from "react-icons/hi"

export default function Postlist() {
  const Public_ID="027E5F9358C12A83F0112513252F02344E0C7F1925613252F15F672A65F23182178 "
  const display=Public_ID.slice(0,9)
    const [visible,setVisible]=useState(false);
    const [open,setOpen]=useState(false);
    const [item,setItem]=useState(false)
    const[copy,setCopied]=useState(false)


    

    const handleModalOpen = () =>{
      setVisible(true)
    }
    const handlOpen = () =>{
        setOpen(true)
      }
    
    const { Postlist, RemovePost } = useContext(PostContext)
    console.log(Postlist)
    return (    
        <div className="flex flex-col md:ml-[80px] md:w-[1400px] md:overflow-auto h-60 mt-[60px] mb-[80px]">
            {
                Postlist.slice(0,4).map((postlist) => (
                  //image
                    <div div className="Desc border-b border-gray-200  hover:bg-gray-100 hover:text-white hover:shadow-xl" key={postlist.id}>
                        <div className="mr-6 mt-1" onClick={handlOpen}>
                            <img src={postlist.image} alt="item" className=" object-cover  w-[100px] shadow rounded mb-2" />
                        </div>
                          {/* // description */}

                        <div className="mr-4 mt-2">
                            <p>{postlist.description}</p>
                            <p className="font-bold text-xl text-gray-400 m-2"><span className="font-bold text-xl"> Category: </span>  {postlist.category}</p>
                            <p className="font-bold text-xl text-gray-400 m-2"><span className="font-bold text-xl"> Region: </span>  {postlist.region}</p>
                            <p className="font-bold text-gray-400"> Time Posted: {postlist.time}</p>
                            <p className="font-bold text-gray-400"> Date Posted: {postlist.date}</p>
                        </div>
                            
                            {/* details */}
                            <div  className="de">
                              <div className="details">
                                <h3 className="font-bold text-gray-500 ">Price:  {postlist.price}</h3>
                                <div >
                                  <input type="checkbox" onChange={(e)=>setItem(e.target.checked)}   checked={item}/>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                                  </div>
                              </div>
                               <h3 className="font-bold text-xl m-1 text-gray-500">Delivery Cost <span>$80</span></h3> 

                               <div className="">

                   <div  className="font-bold flex justify-between items-center text-blue-500 mr-4" >
                    <span>Public_ID:</span>
                     <span className={`font-bold text-sm text-gray-600 ${copy ? "text-black":""}`}>{`${Public_ID.slice(0,7)}...${Public_ID.slice(-5)}`}
                     </span> 
                     <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard></div>
                    
                  </div>
                  <div className="flex justify-center items-center gap-5">

                      <h3 className="font-bold text-xl text-gray-500">Seller's Rating 
                        </h3>
                        <AiFillStar className="text-blue-500 text-2xl"/>
                        <AiFillStar className="text-blue-500 text-2xl"/>
                        <AiFillStar className="text-blue-500 text-2xl"/>
                        <AiFillStar className="text-blue-500 text-2xl"/>
                        

                  </div>
                            </div>

                          {/* //buttons */}
                          <div className="flex flex-col">
                          <button className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded">BUY</button>
                          <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >  Make Offer</button>
                          <button
                          className="py-2 px-2 m-2 bg-blue-500 font-bold text-white shadow-md rounded"
                          >Contact Seller</button>
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
                              RemovePost(postlist.id);
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
    <Modal.Body className="p-2 mt-[200px]   flex justify-center items-center  md:mt-0" >
      <img src={postlist.image} alt="item" className=" object-cover rounded-lg mt-4 w-[600px]  " />       
    </Modal.Body>
  </Modal>
  </div>
))
}
</div>
    )
    
}