
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
        
<>

     <link to={`/Category/${selected}`}></link>
     
     <select className="bg-white  rounded-lg focus:border-none" >

<option selected 
  >Category</option>
  <option value="goods">Goods</option>
  <option value="services">Services</option>
  <option value="construction">construction</option>
  <option value="electronics">Electronics</option>
  <option value="recreational">Recreational</option>
  <option value="automotives">Automotives</option>
  
   
</select>

</>
    
    )
}

