
import {useState,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
export default function Category(){
    const Navigate=useNavigate()
    const [selected,setSelected]=useState("")
    
    useEffect(()=>{
        if(selected=="services"){

            Navigate(`/Category/${selected}`)
        }else if(selected ==="goods"){
            Navigate(`/Category/${selected}`)
            
        }else if(selected==="construction"){
            Navigate(`/Category/${selected}`)
        } else if (selected==="electronics"){
            Navigate(`/Category/${selected}`)
        } else if(selected === "recreational"){
            Navigate(`/Category/${selected}`)
        } else if (selected === "automotives"){
            Navigate(`/Category/${selected}`)

        }
    },[selected])


    return(
        <div className="flex justify-center">

<div
          className="rounded-full bg-white shadow-md font-bold p-1 text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
     <link to={`/Category/${selected}`}></link>
       <select id="countries" class="bg-white border border-none rounded-lg" 
       onClick={(e)=>setSelected(e.target.value)}>
  <option selected 
  >Category</option>
  <option value="goods">Goods</option>
  <option value="services">Services</option>
  <option value="construction">construction</option>
  <option value="electronics">Electronics</option>
  <option value="recreational">Recreational</option>
  <option value="automotives">Automotives</option>

</select>
        </div>
        </div>
    )
}