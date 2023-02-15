import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import {HiOutlineExclamationCircle} from "react-icons/hi"

export default function Modals(){
    const [visible,setVisible]=useState(false);

const handleModalOpen = () =>{
  setVisible(true)
}

    return(
        <React.Fragment>
        <Button onClick={handleModalOpen}>
    Toggle modal
  </Button>
  <Modal
    show={visible}
    size="md"
    popup={true}
    onClose={()=>setVisible(false)}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="failure"
            onClick={handleModalOpen}
          >
            Yes, I'm sure
          </Button>
          <Button
            color="gray"
            onClick={handleModalOpen}
          >
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
        </React.Fragment>
    )
}