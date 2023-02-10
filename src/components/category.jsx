
import {useState,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
export default function Category(){
    const Navigate=useNavigate()
    const [selected,setSelected]=useState("")
    console.log(selected)
    useEffect(()=>{
        if(selected=="services"){

            Navigate(`/Category/${selected}`)
        }
    },[selected])


    return(
        <div className="bg-white text-center w-[200px] px-4 py-4 mb-3 shadow font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
     <link to={`/Category/${selected}`}></link>
       <select id="countries" class="bg-white" 
       onClick={(e)=>setSelected(e.target.value)}>
  <option selected 
  >Choose a Category</option>
  <option value="Goods">Goods</option>
  <option value="services">Services</option>
  <option value="construction">construction</option>
  <option value="Electronics">Electronics</option>
  <option value="Recreational">Recreational</option>
  <option value="Automotives">Automotives</option>

</select>
        </div>
    )
}