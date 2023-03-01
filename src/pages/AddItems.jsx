import React, { useState,useContext,useRef } from "react"
import { Link, useNavigate } from "react-router-dom";
import countries from "../data/Countries.json"
import {BsArrowLeftCircle} from "react-icons/bs";
import UploadImage from "./ImageUpload";
import { useItems } from "../context/ItemsContext";
export default function AddItems(){

    const navigate=useNavigate()
    // const[productImg,setProductImage]=useState("");
    const [selected,setSelected]=useState("");
    const [timeLeft,setTimeleft]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState(" ");
    const [region,setRegion]=useState("")
    const [shipping,setShipping]=useState(" ")


    const [images,setImages]=useState([]);
    const formRef=useRef(null)
    const {dispatch}=useItems()



    const handleSubmit=(e)=>{

        e.preventDefault();
        // get form Data
        console.log(formRef)
    const formData=new FormData(formRef.current)
    console.log(formData)
    const prevImages=images.map((image)=>URL.createObjectURL(image))
    console.log(prevImages)
    const data=Object.fromEntries(formData.entries())
    const item={
        id:Math.floor(Math.random()*1000),
        description:data.description,
        price:data.price,
        shippingCost:data.shipping,
        images:prevImages,
        selected:false
    }
    dispatch({type:"CREATE_ITEM",payload:item})
    navigate("/")

    }

    


    // const handleProductImageUpload=(e)=>{
        
    //     const File=e.target.files[0]
    //     TransFormFile(File)
    // }
    
    // const TransFormFile=(File)=>{
    //   const reader=new FileReader()
    //   if(File){
    //     reader.readAsDataURL(File);
    //     reader.onloadend=()=>{
    //         setProductImage(reader.result)
    //     }
    //   }else{
    //     setProductImage("")
    //   }
    // }
    
    return(
        <div className="flex justify-center items-center mt-3">
      <div className="w-full max-w-xs">
       <form  className="flex w-full flex-col gap-4 p-4 shadow" ref={formRef} onSubmit={handleSubmit}>
     <div className="grid grid-flow-row gap-2 text-sm ">
                        <label htmlFor="description">Description</label>
                        <textarea 
                        
                        name="description" id="description" rows={4} className="w-full rounded bg-slate-100 p-2"/>
                    </div>
    <div className="mb-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="price">
        Price
      </label>
      <input
      name="price"
      className="h-10 w-full rounded bg-slate-100 px-2"
       id="price" type="text" placeholder="$" required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="price">
        Shipping Cost
      </label>
      <input
      name="shipping"
      className="h-10 w-full rounded bg-slate-100 px-2"
        id="shipping" type="text" placeholder="Shipping Cost-USD" required/>
    </div>
    <div className="bg-white shadow appearance-none border text-center w-full py-2 px-3 mb-4 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
    
    <select className="bg-white border-none focus:border-none" name="region" id="category">
      <option value="0">Choose a region</option>
      {
        countries.map((ctr,index)=>(
          <option key={index} value={ctr.name}>{ctr.name}</option>
        ))
      }
        
    </select>
    </div>
   
    <div className="grid grid-flow-row gap-2 text-sm ">
                        <UploadImage name="images" onChange={setImages}/>
      </div>
    {/* <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
        Upload Product Image
      </label>
      <input type="file"  accept="image/"
            onChange={handleProductImageUpload}
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
    </div> */}

    <select id="countries" className="bg-white rounded" 
     name="category"
      >
   <option value={selected}
  >Choose a Category</option>
  <option value="Goods">Goods</option>
  <option value="services">Services</option>
  <option value="construction">construction</option>
  <option value="Electronics">Electronics</option>
  <option value="Recreational">Recreational</option>
  <option value="Automotives">Automotives</option>

</select>

   
<div className="grid grid-flow-row gap-2 text-sm text-center ">
                      
      <button 
      type="submit"
     
         className="bg-blue-500 ml-[40px] hover:bg-blue-700 m-6 w-[200px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            Add Item
    
      </button>
        </div>
  </form>
  </div>
  <div className="whatsss rounded-full bg-blue-500 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
        <Link to="/" className=" " >     
          <BsArrowLeftCircle/>
        </Link>
      </div>
           
        </div>
    )
}