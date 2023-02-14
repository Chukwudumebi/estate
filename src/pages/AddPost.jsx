import React, { useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import { PostContext } from "../components/PostContext";
import countries from "../data/Countries.json"


export default function AddPost(){
    const { AddPost}=useContext(PostContext)
    const navigate=useNavigate()
    const[productImg,setProductImage]=useState("");
    const [selected,setSelected]=useState("");
    const [timeLeft,setTimeleft]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("$");
    const [region,setRegion]=useState("")


    const handleProductImageUpload=(e)=>{
        
        const File=e.target.files[0]
        TransFormFile(File)
    }
    
    const TransFormFile=(File)=>{
      const reader=new FileReader()
      if(File){
        reader.readAsDataURL(File);
        reader.onloadend=()=>{
            setProductImage(reader.result)
        }
      }else{
        setProductImage("")
      }
    }
    
    return(
        <div className="flex justify-center items-center">
      <div className="w-full max-w-xs">
       <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        description
      </label>
      <textarea 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="description..."/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
        price
      </label>
      <input
      value={price}
      onChange={(e)=>setPrice(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="USD"/>
    </div>
    <div className="bg-white shadow appearance-none border text-center w-full py-2 px-3 mb-4 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
    
    <select className="bg-white border-none focus:border-none" onChange={(e)=>setRegion(e.target.value)}>
      <option value="0">Choose a region</option>
      {
        countries.map((ctr,index)=>(
          <option key={index} value={ctr.name}>{ctr.name}</option>
        ))
      }
        
    </select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Time left
      </label>
      <input 
      onChange={(e)=>setTimeleft(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter in Number of Days "/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
        Upload Product Image
      </label>
      <input type="file"  accept="image/"
            onChange={handleProductImageUpload}
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <select id="countries" className="bg-white" 
       onClick={(e)=>setSelected(e.target.value)}>
   <option value={selected}
  >Choose a Category</option>
  <option value="Goods">Goods</option>
  <option value="services">Services</option>
  <option value="construction">construction</option>
  <option value="Electronics">Electronics</option>
  <option value="Recreational">Recreational</option>
  <option value="Automotives">Automotives</option>

</select>

   
    
      <button 
      onClick={()=>{
        AddPost(price,timeLeft,productImg,selected,description,region);
        navigate("/")
        console.log("added")
      }} className="bg-blue-500 hover:bg-blue-700 m-6 w-[200px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add Post
      </button>
    

  </form>
  </div>
  
           
        </div>
    )
}