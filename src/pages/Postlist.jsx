import { PostContext } from "../components/PostContext"
import { useState } from "react";
import { useContext } from "react"
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import React from "react";

import {HiOutlineExclamationCircle} from "react-icons/hi"

export default function Postlist() {
    const [visible,setVisible]=useState(false);
    const [open,setOpen]=useState(false);

    

    const handleModalOpen = () =>{
      setVisible(true)
    }
    const handlOpen = () =>{
        setOpen(true)
      }
    
    const { Postlist, RemovePost } = useContext(PostContext)
    console.log(Postlist)
    return (    
        <div className="flex flex-col md:ml-[250px] md:w-[1000px] md:overflow-auto h-60 mt-[60px]">
            {
                Postlist.map((postlist) => (
                    <div className="Desc border-b border-gray-200 mt-4" key={postlist.id}>
                        <div className="mr-6" onClick={handlOpen}>
                            <img src={postlist.image} alt="item" className=" object-cover  w-[100px] shadow rounded" />
                        </div>
                        <div className="mr-4 mt-2">
                            <p>{postlist.description}</p>
                            <p className="font-bold text-xl text-gray-400 m-2"><span className="font-bold text-xl"> Category: </span>  {postlist.category}</p>
                            <p className="font-bold text-xl text-gray-400 m-2"><span className="font-bold text-xl"> Region: </span>  {postlist.region}</p>

                            <p className="font-bold text-gray-400"> Time Posted: {postlist.time}</p>
                            <p className="font-bold text-gray-400"> Date Posted: {postlist.date}</p>

                        </div>
                        <div className="flex justify-evenly items-center">
                            <div className="price text-center">
                                <h2 className="font-bold text-xl text-gray-500 m-1">Price</h2>
                                <p className="font-bold text-gray-400 m-1">{postlist.price}</p>
                                <button className="text-xl px-6 rounded text-white bg-[dodgerblue] hover:bg-blue-300">Buy</button>
                            </div>
                            <div className="text-center">
                                <h2 className="font-bold text-xl text-gray-500 m-1">Time Left</h2>
                                <p className="font-bold text-gray-400 m-1">{postlist.timeleft > 1 ? `${postlist.timeleft} Days` : `${postlist.timeleft} Day`}</p>
                               
                                  <button
                                className="text-xl  px-6 rounded text-white bg-red-500 hover: bg-red-500"

                                  onClick={handleModalOpen}>
                                    Remove
                                    </button>
 
                        </div>

                      
                        <Modal
    show={visible}
    size="sm"
    popup={true}
    onClose={()=>setVisible(false)}
  >
    <Modal.Header className="mt-[200px] md:mt-0" />
    <Modal.Body >
      <div className="text-center ">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-blue-400" />
        <h3 className="mb-5 text-lg  text-gray-500 dark:text-gray-400 font-bold">
          Are you sure you want to delete this item?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="failure"
            onClick={()=>{
                RemovePost(postlist.id)
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
    
    <Modal.Body className="p-3 mt-[200px] md:mt-0" >
    
      <img src={postlist.image} alt="item" className="object-cover  w-full "/>       

    

       
    </Modal.Body>
  </Modal>
  </div>
  <div className="mb">
                            <h1 className="hidden">hdhdhdh</h1>
                        </div>
</div>

))}

        </div>

    )
}